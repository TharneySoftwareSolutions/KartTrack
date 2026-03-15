export interface Race {
  id: string;
  name: string;
  date: string;
  circuit: string;
  weather: string;
  createdAt: string;
}

export interface Kart {
  id: string;
  raceId: string;
  number: number;
  brand: string;
  driver: string;
}

export interface Performance {
  id: string;
  kartId: string;
  lapNumber: number;
  lapTime: number; // in milliseconds
  position: number;
  notes: string;
  timestamp: string;
}
