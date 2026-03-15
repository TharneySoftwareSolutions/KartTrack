# KartTrack Architecture & Implementation Guide

## 🏗️ System Architecture

```
┌─────────────────────────────────────────────────────────────┐
│                     React Native (Expo)                     │
│                    Frontend Application                     │
│                                                             │
│  ┌──────────────┐  ┌──────────────┐  ┌────────────────┐     │
│  │ Login Screen │  │ Tracks List  │  │ Session Detail │     │
│  └──────────────┘  └──────────────┘  └────────────────┘     │
│         │                 │                    │            │
│         └─────────────────┴────────────────────┘            │
│                           │                                 │
│           ┌───────────────┴──────────────┐                  │
│           │                              │                  │
│      ┌────▼─────┐                 ┌──────▼──────┐           │
│      │  Zustand │                 │  API Client │           │
│      │  Store   │                 │  (Axios)    │           │
│      └──────────┘                 └──────┬──────┘           │
│         │                                │                  │
└─────────┼────────────────────────────────┼──────────────────┘
          │                                │
          │     HTTP/REST + JWT Auth       │
          │                                │
┌─────────┼────────────────────────────────┼─────────────────┐
│         │                                │                 │
│    ┌────▼─────────────┐            ┌─────▼──────┐          │
│    │ Zustand Persist  │            │ Controllers│          │
│    │ (SecureStore)    │            │ (4 routes) │          │
│    └──────────────────┘            └─────┬──────┘          │
│                                          │                 │
│         ASP.NET Core 8 Backend API       │                 │
│                                     ┌────▼──────────┐      │
│                                     │ Service Layer │      │
│                                     │  (KartScore)  │      │
│                                     └────┬──────────┘      │
│                                          │                 │
│                                     ┌────▼──────────┐      │
│                                     │    EF Core    │      │
│                                     │    DbContext  │      │
│                                     └────┬──────────┘      │
│                                          │                 │
└──────────────────────────────────────────┼─────────────────┘
                                           │
                           ┌───────────────┴────────────────┐
                           │                                │
                     ┌─────▼───────┐             ┌──────────▼──┐
                     │ PostgreSQL  │             │   Models    │
                     │  Database   │             │   & Schema  │
                     └─────────────┘             └─────────────┘
```

---

## 📦 Project Files & Structure

### Backend Files Created
```
KartTrack.Api/
├── Program.cs                          # Main entry point, DI setup
├── KartTrack.Api.csproj               # Project file with dependencies
├── appsettings.json                   # Configuration, DB connection
├── appsettings.Development.json       # Dev-specific settings
│
├── Controllers/
│   ├── AuthController.cs              # Register/Login
│   ├── TracksController.cs            # Tracks & Karts CRUD
│   ├── SessionsController.cs          # Sessions & Lap Times CRUD
│   └── KartsController.cs             # Kart scoring
│
├── Models/
│   ├── User.cs                        # User entity
│   ├── Track.cs                       # Track entity
│   ├── Kart.cs                        # Kart entity
│   ├── Session.cs                     # Session entity
│   └── LapTime.cs                     # Lap time entity
│
├── DTOs/
│   ├── AuthDto.cs                     # Auth request/response
│   ├── TrackDto.cs                    # Track DTOs
│   ├── KartDto.cs                     # Kart DTOs
│   ├── SessionDto.cs                  # Session DTOs
│   └── LapTimeDto.cs                  # Lap time DTOs
│
├── Services/
│   └── KartScoreService.cs            # Core business logic
│
└── Data/
    └── AppDbContext.cs                # EF Core context
```

### Frontend Files Created
```
karttrack-app/
├── package.json                       # npm dependencies
├── tsconfig.json                      # TypeScript configuration
├── app.json                           # Expo configuration
├── .env.example                       # Environment variables template
│
├── app/
│   ├── (auth)/
│   │   ├── login.tsx                  # Login screen
│   │   └── register.tsx               # Registration screen
│   │
│   ├── (tabs)/
│   │   ├── index.tsx                  # Home/Dashboard screen
│   │   ├── tracks.tsx                 # Tracks list screen
│   │   └── history.tsx                # Session history screen
│   │
│   └── session/
│       └── [id].tsx                   # Session detail screen
│
├── components/                        # (For future UI components)
├── hooks/                             # (For future custom hooks)
│
├── services/
│   └── api.ts                         # Axios HTTP client
│
├── stores/
│   ├── authStore.ts                   # Zustand auth state
│   └── sessionStore.ts                # Zustand session state
│
└── types/
    └── index.ts                       # TypeScript interfaces
```

### Root Level Files
```
KartTrack/
├── README.md                          # Main project documentation
├── SETUP_SUMMARY.md                   # Quick start guide
├── DEVELOPMENT.md                     # Development workflow guide
├── setup.sh                           # Bash setup script
├── setup.bat                          # Windows setup script
├── docker-compose.yml                 # PostgreSQL Docker config
├── .gitignore                         # Git ignore rules
└── .github/
    └── copilot-instructions.md        # Copilot context
```

---

## 🔑 Key Implementation Details

### 1. Authentication System

**Flow:**
1. User registers with email/password
2. Backend hashes password with BCrypt
3. User logs in with credentials
4. Backend generates JWT token (valid 7 days)
5. Token returned to client
6. Client stores token in `expo-secure-store`
7. All subsequent requests include `Authorization: Bearer <token>` header

**Files Involved:**
- `AuthController.cs` - Login/Register endpoints
- `authStore.ts` - Frontend auth state
- `api.ts` - JWT interceptor setup

### 2. Data Models & Relationships

```
User (1) ──────→ (N) Session
         (1) ──────→ (N) Session

Track (1) ──────→ (N) Kart
      (1) ──────→ (N) Session

Kart (1) ──────→ (N) Session

Session (1) ──────→ (N) LapTime
```

**Key Files:**
- `Models/User.cs` - User with hashed passwords
- `Models/Track.cs` - Racing track information
- `Models/Kart.cs` - Individual kart on a track
- `Models/Session.cs` - User's racing session
- `Models/LapTime.cs` - Individual lap in a session

### 3. Kart Score Calculation

**Algorithm (in `KartScoreService.cs`):**

```csharp
public async Task<KartScoreDto> GetKartScoreAsync(string kartId, string trackId)
{
    // 1. Get all lap times for this kart on this track (last 30 days)
    var allLapTimes = await _context.LapTimes
        .Where(lt => lt.Session.KartId == kartId &&
                     lt.Session.TrackId == trackId &&
                     lt.CreatedAt >= thirtyDaysAgo)
        .OrderByDescending(lt => lt.CreatedAt)
        .ToListAsync();

    // 2. Calculate historical average
    var averageLapTime = allLapTimes.Average(lt => lt.TimeMs);

    // 3. Get last 3 laps
    var lastThreeLaps = allLapTimes.Take(3).ToList();
    var lastThreeAverage = lastThreeLaps.Average(lt => lt.TimeMs);

    // 4. Calculate performance ratio
    var performanceRatio = lastThreeAverage / averageLapTime;

    // 5. Calculate score (0-100)
    var score = Math.Max(0, 100 - ((performanceRatio - 1) * 100));

    // 6. Check if should change kart (>2% slower)
    var shouldChangeKart = performanceRatio > 1.02m;

    return new KartScoreDto { Score = score, ShouldChangeKart = shouldChangeKart };
}
```

### 4. State Management (Zustand)

**Auth Store (`authStore.ts`):**
```typescript
- user: User | null
- isAuthenticated: boolean
- login(email, password): Promise
- register(email, password): Promise
- logout(): Promise
- Persisted in expo-secure-store
```

**Session Store (`sessionStore.ts`):**
```typescript
- sessions: Session[]
- currentSession: Session | null
- currentSessionLapTimes: LapTime[]
- fetchSessions(): Promise
- createSession(kartId, trackId): Promise
- addLapTime(sessionId, lapNumber, timeMs): Promise
```

### 5. API Client Setup

**Key Features:**
- Base URL from environment variables
- JWT token in Authorization header
- Automatic token refresh on login
- Secure token storage
- Error handling
- Type-safe responses

---

## 🔄 Request/Response Examples

### Register Request
```bash
POST /api/auth/register
Content-Type: application/json

{
  "email": "user@example.com",
  "password": "SecurePassword123!"
}
```

**Response:**
```json
{
  "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...",
  "user": {
    "id": "550e8400-e29b-41d4-a716-446655440000",
    "email": "user@example.com",
    "createdAt": "2024-03-13T10:30:00Z"
  }
}
```

### Create Session Request
```bash
POST /api/sessions
Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...
Content-Type: application/json

{
  "kartId": "670e8400-e29b-41d4-a716-446655440001",
  "trackId": "780e8400-e29b-41d4-a716-446655440002",
  "notes": "Morning practice"
}
```

**Response:**
```json
{
  "id": "890e8400-e29b-41d4-a716-446655440003",
  "userId": "550e8400-e29b-41d4-a716-446655440000",
  "kartId": "670e8400-e29b-41d4-a716-446655440001",
  "trackId": "780e8400-e29b-41d4-a716-446655440002",
  "date": "2024-03-13T10:35:00Z",
  "notes": "Morning practice",
  "createdAt": "2024-03-13T10:35:00Z"
}
```

### Kart Score Request
```bash
GET /api/karts/670e8400-e29b-41d4-a716-446655440001/score?trackId=780e8400-e29b-41d4-a716-446655440002
Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...
```

**Response:**
```json
{
  "kartId": "670e8400-e29b-41d4-a716-446655440001",
  "score": 92.5,
  "averageLapTime": 65000,
  "lastThreeLapAverage": 66300,
  "shouldChangeKart": true,
  "recommendation": "Kart performance is degrading. Consider switching to a fresh kart."
}
```

---

## 🧪 Testing Strategy

### Backend Testing
1. **Unit Tests** - Services and business logic
2. **Integration Tests** - API endpoints with database
3. **Swagger Testing** - Interactive API documentation

### Frontend Testing
1. **Component Tests** - Individual screen rendering
2. **Integration Tests** - Navigation and state management
3. **E2E Tests** - Full user workflows

### Manual Testing
1. Register new user
2. Login with credentials
3. Create track and karts
4. Create session and add lap times
5. Check kart score calculation
6. View session history

---

## 🔒 Security Considerations

### Implemented
- ✅ Password hashing with BCrypt
- ✅ JWT token authentication
- ✅ Secure token storage (expo-secure-store)
- ✅ Authorization on protected endpoints
- ✅ CORS configuration
- ✅ HTTPS enforcement (production)

### To Implement
- ⏳ Rate limiting
- ⏳ Input validation middleware
- ⏳ CSRF protection
- ⏳ API key rotation
- ⏳ Audit logging
- ⏳ Data encryption at rest

---

## 🚀 Deployment Path

### Local Development
1. Clone repository
2. Run `setup.bat` (Windows) or `setup.sh` (macOS/Linux)
3. Start backend: `dotnet run`
4. Start frontend: `npm start`

### Staging
1. Deploy backend to Railway
2. Configure environment variables
3. Run migrations
4. Test all endpoints
5. Build frontend APK/AAB

### Production
1. Update API URLs
2. Update JWT secrets
3. Enable HTTPS
4. Configure database backups
5. Setup monitoring
6. Deploy to app stores

---

## 📊 Database Schema

```sql
-- Users table
CREATE TABLE users (
  id UUID PRIMARY KEY,
  email VARCHAR(255) UNIQUE NOT NULL,
  password_hash VARCHAR(255) NOT NULL,
  created_at TIMESTAMP DEFAULT NOW()
);

-- Tracks table
CREATE TABLE tracks (
  id UUID PRIMARY KEY,
  name VARCHAR(255) NOT NULL,
  city VARCHAR(255) NOT NULL,
  country VARCHAR(255) NOT NULL,
  created_at TIMESTAMP DEFAULT NOW()
);

-- Karts table
CREATE TABLE karts (
  id UUID PRIMARY KEY,
  track_id UUID NOT NULL REFERENCES tracks(id) ON DELETE CASCADE,
  number INTEGER NOT NULL,
  created_at TIMESTAMP DEFAULT NOW(),
  UNIQUE(track_id, number)
);

-- Sessions table
CREATE TABLE sessions (
  id UUID PRIMARY KEY,
  user_id UUID NOT NULL REFERENCES users(id) ON DELETE CASCADE,
  kart_id UUID NOT NULL REFERENCES karts(id) ON DELETE CASCADE,
  track_id UUID NOT NULL REFERENCES tracks(id) ON DELETE CASCADE,
  date TIMESTAMP DEFAULT NOW(),
  notes TEXT,
  created_at TIMESTAMP DEFAULT NOW()
);

-- Lap times table
CREATE TABLE lap_times (
  id UUID PRIMARY KEY,
  session_id UUID NOT NULL REFERENCES sessions(id) ON DELETE CASCADE,
  lap_number INTEGER NOT NULL,
  time_ms BIGINT NOT NULL,
  created_at TIMESTAMP DEFAULT NOW()
);

-- Indexes for performance
CREATE INDEX idx_sessions_user_id ON sessions(user_id);
CREATE INDEX idx_sessions_kart_id ON sessions(kart_id);
CREATE INDEX idx_sessions_track_id ON sessions(track_id);
CREATE INDEX idx_lap_times_session_id ON lap_times(session_id);
CREATE INDEX idx_lap_times_created_at ON lap_times(created_at);
```

---

## 💡 Design Decisions

### Why JWT?
- Stateless authentication
- Works well with mobile apps
- No session storage on backend
- Self-contained token with user info

### Why Zustand?
- Lightweight state management
- TypeScript support
- Persistence middleware
- No boilerplate like Redux

### Why Expo Router?
- File-based routing (like Next.js)
- Native platform support
- Simple to understand
- Great developer experience

### Why PostgreSQL?
- Reliable and stable
- Great support for JSON
- Excellent performance
- Easy to scale

---

## 📝 Code Standards

### Backend (C#)
```csharp
// Controllers - Thin, no business logic
[ApiController]
[Route("api/[controller]")]
public class ExampleController : ControllerBase
{
    private readonly IExampleService _service;
    
    [HttpGet("{id}")]
    public async Task<ActionResult<ExampleDto>> Get(string id)
    {
        var result = await _service.GetAsync(id);
        return Ok(result);
    }
}

// Services - All business logic here
public class ExampleService : IExampleService
{
    public async Task<ExampleDto> GetAsync(string id)
    {
        // Logic here
    }
}

// DTOs - Define contract
public class ExampleDto
{
    public string Id { get; set; } = null!;
    public string Name { get; set; } = null!;
}
```

### Frontend (TypeScript)
```typescript
// Components - UI only
interface MyComponentProps {
  title: string;
  onPress: () => void;
}

export function MyComponent({ title, onPress }: MyComponentProps) {
  return <View><Text>{title}</Text></View>;
}

// Hooks - Business logic
export function useMyFeature() {
  const [data, setData] = useState<MyData | null>(null);
  
  useEffect(() => {
    fetchData();
  }, []);
  
  return { data };
}

// Types - Contracts
export interface MyData {
  id: string;
  value: number;
}
```

---

## ✨ Next Steps

1. **Install dependencies**
2. **Setup PostgreSQL**
3. **Run migrations**
4. **Test API endpoints**
5. **Build UI components**
6. **Implement features**
7. **Test thoroughly**
8. **Deploy to production**

---

**The foundation is ready. Time to build! 🚀**
