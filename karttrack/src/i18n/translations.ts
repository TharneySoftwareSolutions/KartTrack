export type Lang = 'it' | 'en' | 'es' | 'fr' | 'de' | 'pt' | 'nl' | 'pl' | 'ro' | 'cs' | 'hu' | 'sv' | 'no' | 'da' | 'fi' | 'el' | 'sk' | 'hr' | 'bg' | 'lt' | 'lv' | 'et';

export interface Translations {
  // Generali
  cancel: string;
  delete: string;
  error: string;
  success: string;
  close: string;
  // HomeScreen
  noRaces: string;
  newRaceBtn: string;
  menu: string;
  settings: string;
  about: string;
  aboutDesc: string;
  developer: string;
  deleteRaceTitle: string;
  deleteRaceMsg: (name: string) => string;
  weatherLabel: string;
  // AddRaceScreen
  newRaceScreenTitle: string;
  raceNamePlaceholder: string;
  circuitPlaceholder: string;
  datePlaceholder: string;
  weatherPlaceholder: string;
  addRaceBtn: string;
  errorFillAll: string;
  successRaceAdded: string;
  // RaceDetailScreen
  raceNotFound: string;
  circuitLabel: string;
  dateLabel: string;
  kartsInRace: string;
  performance: string;
  noLapsYet: string;
  lap: string;
  pos: string;
  addLapBtn: string;
  addKartTitle: string;
  addKartBtn: string;
  kartNumberPlaceholder: string;
  kartBrandPlaceholder: string;
  driverPlaceholder: string;
  successKartAdded: string;
  deleteKartTitle: string;
  deleteKartMsg: (num: number) => string;
  deleteLapTitle: string;
  deleteLapMsg: (lap: number, kart: number) => string;
  // KartDetailScreen
  kartNotFound: string;
  recordPerformance: string;
  noPerformanceYet: string;
  lapNumberPlaceholder: string;
  positionOptPlaceholder: string;
  notesPlaceholder: string;
  registerBtn: string;
  errorFillLap: string;
  successPerfAdded: string;
  deleteLapSimpleTitle: string;
  deleteLapSimpleMsg: (lap: number) => string;
  positionLabel: string;
  // Rankings
  bestTime: string;
  avgTime: string;
  // SettingsScreen
  settingsTitle: string;
  themeLabel: string;
  day: string;
  night: string;
  mainColorLabel: string;
  podiumLabel: string;
  languageLabel: string;
  version: string;
  // Navigator
  navHome: string;
  navNewRace: string;
  navRaceDetail: string;
  navKartDetail: string;
  navSettings: string;
}

const it: Translations = {
  cancel: 'Annulla',
  delete: 'Elimina',
  error: 'Errore',
  success: 'Successo',
  close: 'Chiudi',
  noRaces: 'Nessuna gara ancora',
  newRaceBtn: '+ Nuova Gara',
  menu: 'Menu',
  settings: 'Impostazioni',
  about: 'About',
  aboutDesc: 'App per il tracciamento delle performance dei kart durante le gare. Registra giri, tempi, posizioni e visualizza classifiche in tempo reale.',
  developer: 'Sviluppatore',
  deleteRaceTitle: 'Elimina gara',
  deleteRaceMsg: (name) => `Eliminare "${name}"?`,
  weatherLabel: 'Meteo',
  newRaceScreenTitle: 'Nuova Gara',
  raceNamePlaceholder: 'Nome gara',
  circuitPlaceholder: 'Circuito',
  datePlaceholder: 'Data (es: 14/03/2026)',
  weatherPlaceholder: 'Meteo (es: Soleggiato)',
  addRaceBtn: 'Aggiungi Gara',
  errorFillAll: 'Compila tutti i campi',
  successRaceAdded: 'Gara aggiunta!',
  raceNotFound: 'Gara non trovata',
  circuitLabel: 'Circuito',
  dateLabel: 'Data',
  kartsInRace: 'Kart in gara',
  performance: 'Performance',
  noLapsYet: 'Nessun giro ancora',
  lap: 'Giro',
  pos: 'Pos',
  addLapBtn: '+ Aggiungi Giro',
  addKartTitle: 'Aggiungi Kart',
  addKartBtn: 'Aggiungi Kart',
  kartNumberPlaceholder: 'Numero kart',
  kartBrandPlaceholder: 'Marca kart',
  driverPlaceholder: 'Pilota',
  successKartAdded: 'Kart aggiunto!',
  deleteKartTitle: 'Elimina kart',
  deleteKartMsg: (num) => `Eliminare kart #${num}?`,
  deleteLapTitle: 'Elimina giro',
  deleteLapMsg: (lap, kart) => `Eliminare Giro ${lap} \u2014 kart #${kart}?`,
  kartNotFound: 'Kart non trovato',
  recordPerformance: 'Registra Performance',
  noPerformanceYet: 'Nessuna performance ancora',
  lapNumberPlaceholder: 'Numero giro',
  positionOptPlaceholder: 'Posizione (opzionale)',
  notesPlaceholder: 'Note',
  registerBtn: 'Registra',
  errorFillLap: 'Compila almeno numero giro e tempo',
  successPerfAdded: 'Performance registrata!',
  deleteLapSimpleTitle: 'Elimina giro',
  deleteLapSimpleMsg: (lap) => `Eliminare Lap ${lap}?`,
  positionLabel: 'Posizione',
  bestTime: 'Miglior Tempo',
  avgTime: 'Tempo Medio',
  settingsTitle: 'Impostazioni',
  themeLabel: 'Tema',
  day: 'Giorno',
  night: 'Notte',
  mainColorLabel: 'Colore principale',
  podiumLabel: 'Podio da mostrare',
  languageLabel: 'Lingua',
  version: 'Versione',
  navHome: 'KartTrack',
  navNewRace: 'Nuova Gara',
  navRaceDetail: 'Dettagli Gara',
  navKartDetail: 'Dettagli Kart',
  navSettings: 'Impostazioni',
};

const en: Translations = {
  cancel: 'Cancel',
  delete: 'Delete',
  error: 'Error',
  success: 'Success',
  close: 'Close',
  noRaces: 'No races yet',
  newRaceBtn: '+ New Race',
  menu: 'Menu',
  settings: 'Settings',
  about: 'About',
  aboutDesc: 'App for tracking kart performance during races. Record laps, times, positions and view real-time rankings.',
  developer: 'Developer',
  deleteRaceTitle: 'Delete race',
  deleteRaceMsg: (name) => `Delete "${name}"?`,
  weatherLabel: 'Weather',
  newRaceScreenTitle: 'New Race',
  raceNamePlaceholder: 'Race name',
  circuitPlaceholder: 'Circuit',
  datePlaceholder: 'Date (e.g. 03/14/2026)',
  weatherPlaceholder: 'Weather (e.g. Sunny)',
  addRaceBtn: 'Add Race',
  errorFillAll: 'Please fill in all fields',
  successRaceAdded: 'Race added!',
  raceNotFound: 'Race not found',
  circuitLabel: 'Circuit',
  dateLabel: 'Date',
  kartsInRace: 'Karts in race',
  performance: 'Performance',
  noLapsYet: 'No laps yet',
  lap: 'Lap',
  pos: 'Pos',
  addLapBtn: '+ Add Lap',
  addKartTitle: 'Add Kart',
  addKartBtn: 'Add Kart',
  kartNumberPlaceholder: 'Kart number',
  kartBrandPlaceholder: 'Kart brand',
  driverPlaceholder: 'Driver',
  successKartAdded: 'Kart added!',
  deleteKartTitle: 'Delete kart',
  deleteKartMsg: (num) => `Delete kart #${num}?`,
  deleteLapTitle: 'Delete lap',
  deleteLapMsg: (lap, kart) => `Delete Lap ${lap} \u2014 kart #${kart}?`,
  kartNotFound: 'Kart not found',
  recordPerformance: 'Record Performance',
  noPerformanceYet: 'No performance yet',
  lapNumberPlaceholder: 'Lap number',
  positionOptPlaceholder: 'Position (optional)',
  notesPlaceholder: 'Notes',
  registerBtn: 'Save',
  errorFillLap: 'Please fill in at least lap number and time',
  successPerfAdded: 'Performance saved!',
  deleteLapSimpleTitle: 'Delete lap',
  deleteLapSimpleMsg: (lap) => `Delete Lap ${lap}?`,
  positionLabel: 'Position',
  bestTime: 'Best Time',
  avgTime: 'Average Time',
  settingsTitle: 'Settings',
  themeLabel: 'Theme',
  day: 'Day',
  night: 'Night',
  mainColorLabel: 'Main color',
  podiumLabel: 'Podium to show',
  languageLabel: 'Language',
  version: 'Version',
  navHome: 'KartTrack',
  navNewRace: 'New Race',
  navRaceDetail: 'Race Details',
  navKartDetail: 'Kart Details',
  navSettings: 'Settings',
};

const langs: Record<Lang, Translations> = { it, en,
  es: {
    cancel: 'Cancelar', delete: 'Eliminar', error: 'Error', success: 'Éxito', close: 'Cerrar',
    noRaces: 'Ninguna carrera todavía', newRaceBtn: '+ Nueva Carrera', menu: 'Menú', settings: 'Ajustes', about: 'Acerca de',
    aboutDesc: 'App para el seguimiento del rendimiento de karts durante las carreras. Registra vueltas, tiempos, posiciones y visualiza clasificaciones en tiempo real.',
    developer: 'Desarrollador', deleteRaceTitle: 'Eliminar carrera', deleteRaceMsg: (n) => `¿Eliminar "${n}"?`, weatherLabel: 'Tiempo',
    newRaceScreenTitle: 'Nueva Carrera', raceNamePlaceholder: 'Nombre de carrera', circuitPlaceholder: 'Circuito', datePlaceholder: 'Fecha (ej: 14/03/2026)', weatherPlaceholder: 'Tiempo (ej: Soleado)',
    addRaceBtn: 'Añadir Carrera', errorFillAll: 'Rellena todos los campos', successRaceAdded: '¡Carrera añadida!',
    raceNotFound: 'Carrera no encontrada', circuitLabel: 'Circuito', dateLabel: 'Fecha', kartsInRace: 'Karts en carrera', performance: 'Rendimiento', noLapsYet: 'Sin vueltas aún',
    lap: 'Vuelta', pos: 'Pos', addLapBtn: '+ Añadir Vuelta', addKartTitle: 'Añadir Kart', addKartBtn: 'Añadir Kart', kartNumberPlaceholder: 'Número kart', kartBrandPlaceholder: 'Marca kart', driverPlaceholder: 'Piloto',
    successKartAdded: '¡Kart añadido!', deleteKartTitle: 'Eliminar kart', deleteKartMsg: (n) => `¿Eliminar kart #${n}?`, deleteLapTitle: 'Eliminar vuelta', deleteLapMsg: (l, k) => `¿Eliminar Vuelta ${l} — kart #${k}?`,
    kartNotFound: 'Kart no encontrado', recordPerformance: 'Registrar Rendimiento', noPerformanceYet: 'Sin rendimiento aún', lapNumberPlaceholder: 'Número de vuelta', positionOptPlaceholder: 'Posición (opcional)',
    notesPlaceholder: 'Notas', registerBtn: 'Guardar', errorFillLap: 'Introduce al menos el número de vuelta y el tiempo', successPerfAdded: '¡Rendimiento guardado!',
    deleteLapSimpleTitle: 'Eliminar vuelta', deleteLapSimpleMsg: (l) => `¿Eliminar Vuelta ${l}?`, positionLabel: 'Posición',
    bestTime: 'Mejor Tiempo', avgTime: 'Tiempo Medio', settingsTitle: 'Ajustes', themeLabel: 'Tema', day: 'Día', night: 'Noche', mainColorLabel: 'Color principal', podiumLabel: 'Podio a mostrar', languageLabel: 'Idioma', version: 'Versión',
    navHome: 'KartTrack', navNewRace: 'Nueva Carrera', navRaceDetail: 'Detalles Carrera', navKartDetail: 'Detalles Kart', navSettings: 'Ajustes',
  },
  fr: {
    cancel: 'Annuler', delete: 'Supprimer', error: 'Erreur', success: 'Succès', close: 'Fermer',
    noRaces: 'Aucune course encore', newRaceBtn: '+ Nouvelle Course', menu: 'Menu', settings: 'Paramètres', about: 'À propos',
    aboutDesc: 'Application de suivi des performances de karts pendant les courses. Enregistrez les tours, temps, positions et consultez les classements en temps réel.',
    developer: 'Développeur', deleteRaceTitle: 'Supprimer course', deleteRaceMsg: (n) => `Supprimer "${n}" ?`, weatherLabel: 'Météo',
    newRaceScreenTitle: 'Nouvelle Course', raceNamePlaceholder: 'Nom de la course', circuitPlaceholder: 'Circuit', datePlaceholder: 'Date (ex : 14/03/2026)', weatherPlaceholder: 'Météo (ex : Ensoleillé)',
    addRaceBtn: 'Ajouter Course', errorFillAll: 'Remplissez tous les champs', successRaceAdded: 'Course ajoutée !',
    raceNotFound: 'Course introuvable', circuitLabel: 'Circuit', dateLabel: 'Date', kartsInRace: 'Karts en course', performance: 'Performance', noLapsYet: 'Aucun tour encore',
    lap: 'Tour', pos: 'Pos', addLapBtn: '+ Ajouter Tour', addKartTitle: 'Ajouter Kart', addKartBtn: 'Ajouter Kart', kartNumberPlaceholder: 'Numéro kart', kartBrandPlaceholder: 'Marque kart', driverPlaceholder: 'Pilote',
    successKartAdded: 'Kart ajouté !', deleteKartTitle: 'Supprimer kart', deleteKartMsg: (n) => `Supprimer kart #${n} ?`, deleteLapTitle: 'Supprimer tour', deleteLapMsg: (l, k) => `Supprimer Tour ${l} — kart #${k} ?`,
    kartNotFound: 'Kart introuvable', recordPerformance: 'Enregistrer Performance', noPerformanceYet: 'Aucune performance encore', lapNumberPlaceholder: 'Numéro de tour', positionOptPlaceholder: 'Position (optionnel)',
    notesPlaceholder: 'Notes', registerBtn: 'Enregistrer', errorFillLap: 'Remplissez au moins le numéro de tour et le temps', successPerfAdded: 'Performance enregistrée !',
    deleteLapSimpleTitle: 'Supprimer tour', deleteLapSimpleMsg: (l) => `Supprimer Tour ${l} ?`, positionLabel: 'Position',
    bestTime: 'Meilleur Temps', avgTime: 'Temps Moyen', settingsTitle: 'Paramètres', themeLabel: 'Thème', day: 'Jour', night: 'Nuit', mainColorLabel: 'Couleur principale', podiumLabel: 'Podium à afficher', languageLabel: 'Langue', version: 'Version',
    navHome: 'KartTrack', navNewRace: 'Nouvelle Course', navRaceDetail: 'Détails Course', navKartDetail: 'Détails Kart', navSettings: 'Paramètres',
  },
  de: {
    cancel: 'Abbrechen', delete: 'Löschen', error: 'Fehler', success: 'Erfolg', close: 'Schließen',
    noRaces: 'Noch kein Rennen', newRaceBtn: '+ Neues Rennen', menu: 'Menü', settings: 'Einstellungen', about: 'Über',
    aboutDesc: 'App zur Verfolgung der Kart-Leistung während der Rennen. Runden, Zeiten und Positionen aufzeichnen und Ranglisten in Echtzeit anzeigen.',
    developer: 'Entwickler', deleteRaceTitle: 'Rennen löschen', deleteRaceMsg: (n) => `"${n}" löschen?`, weatherLabel: 'Wetter',
    newRaceScreenTitle: 'Neues Rennen', raceNamePlaceholder: 'Rennenname', circuitPlaceholder: 'Strecke', datePlaceholder: 'Datum (z.B. 14.03.2026)', weatherPlaceholder: 'Wetter (z.B. Sonnig)',
    addRaceBtn: 'Rennen hinzufügen', errorFillAll: 'Alle Felder ausfüllen', successRaceAdded: 'Rennen hinzugefügt!',
    raceNotFound: 'Rennen nicht gefunden', circuitLabel: 'Strecke', dateLabel: 'Datum', kartsInRace: 'Karts im Rennen', performance: 'Leistung', noLapsYet: 'Noch keine Runden',
    lap: 'Runde', pos: 'Pos', addLapBtn: '+ Runde hinzufügen', addKartTitle: 'Kart hinzufügen', addKartBtn: 'Kart hinzufügen', kartNumberPlaceholder: 'Kartnummer', kartBrandPlaceholder: 'Kartmarke', driverPlaceholder: 'Fahrer',
    successKartAdded: 'Kart hinzugefügt!', deleteKartTitle: 'Kart löschen', deleteKartMsg: (n) => `Kart #${n} löschen?`, deleteLapTitle: 'Runde löschen', deleteLapMsg: (l, k) => `Runde ${l} — Kart #${k} löschen?`,
    kartNotFound: 'Kart nicht gefunden', recordPerformance: 'Leistung aufzeichnen', noPerformanceYet: 'Noch keine Leistung', lapNumberPlaceholder: 'Rundennummer', positionOptPlaceholder: 'Position (optional)',
    notesPlaceholder: 'Notizen', registerBtn: 'Speichern', errorFillLap: 'Bitte mindestens Rundennummer und Zeit eingeben', successPerfAdded: 'Leistung gespeichert!',
    deleteLapSimpleTitle: 'Runde löschen', deleteLapSimpleMsg: (l) => `Runde ${l} löschen?`, positionLabel: 'Position',
    bestTime: 'Beste Zeit', avgTime: 'Durchschnittszeit', settingsTitle: 'Einstellungen', themeLabel: 'Design', day: 'Tag', night: 'Nacht', mainColorLabel: 'Hauptfarbe', podiumLabel: 'Podium anzeigen', languageLabel: 'Sprache', version: 'Version',
    navHome: 'KartTrack', navNewRace: 'Neues Rennen', navRaceDetail: 'Renndetails', navKartDetail: 'Kartdetails', navSettings: 'Einstellungen',
  },
  pt: {
    cancel: 'Cancelar', delete: 'Eliminar', error: 'Erro', success: 'Sucesso', close: 'Fechar',
    noRaces: 'Nenhuma corrida ainda', newRaceBtn: '+ Nova Corrida', menu: 'Menu', settings: 'Definições', about: 'Sobre',
    aboutDesc: 'App para acompanhar o desempenho dos karts durante as corridas. Registe voltas, tempos, posições e veja classificações em tempo real.',
    developer: 'Desenvolvedor', deleteRaceTitle: 'Eliminar corrida', deleteRaceMsg: (n) => `Eliminar "${n}"?`, weatherLabel: 'Tempo',
    newRaceScreenTitle: 'Nova Corrida', raceNamePlaceholder: 'Nome da corrida', circuitPlaceholder: 'Circuito', datePlaceholder: 'Data (ex: 14/03/2026)', weatherPlaceholder: 'Tempo (ex: Ensolarado)',
    addRaceBtn: 'Adicionar Corrida', errorFillAll: 'Preencha todos os campos', successRaceAdded: 'Corrida adicionada!',
    raceNotFound: 'Corrida não encontrada', circuitLabel: 'Circuito', dateLabel: 'Data', kartsInRace: 'Karts na corrida', performance: 'Desempenho', noLapsYet: 'Sem voltas ainda',
    lap: 'Volta', pos: 'Pos', addLapBtn: '+ Adicionar Volta', addKartTitle: 'Adicionar Kart', addKartBtn: 'Adicionar Kart', kartNumberPlaceholder: 'Número do kart', kartBrandPlaceholder: 'Marca do kart', driverPlaceholder: 'Piloto',
    successKartAdded: 'Kart adicionado!', deleteKartTitle: 'Eliminar kart', deleteKartMsg: (n) => `Eliminar kart #${n}?`, deleteLapTitle: 'Eliminar volta', deleteLapMsg: (l, k) => `Eliminar Volta ${l} — kart #${k}?`,
    kartNotFound: 'Kart não encontrado', recordPerformance: 'Registar Desempenho', noPerformanceYet: 'Sem desempenho ainda', lapNumberPlaceholder: 'Número da volta', positionOptPlaceholder: 'Posição (opcional)',
    notesPlaceholder: 'Notas', registerBtn: 'Guardar', errorFillLap: 'Preencha pelo menos o número da volta e o tempo', successPerfAdded: 'Desempenho guardado!',
    deleteLapSimpleTitle: 'Eliminar volta', deleteLapSimpleMsg: (l) => `Eliminar Volta ${l}?`, positionLabel: 'Posição',
    bestTime: 'Melhor Tempo', avgTime: 'Tempo Médio', settingsTitle: 'Definições', themeLabel: 'Tema', day: 'Dia', night: 'Noite', mainColorLabel: 'Cor principal', podiumLabel: 'Pódio a mostrar', languageLabel: 'Idioma', version: 'Versão',
    navHome: 'KartTrack', navNewRace: 'Nova Corrida', navRaceDetail: 'Detalhes Corrida', navKartDetail: 'Detalhes Kart', navSettings: 'Definições',
  },
  nl: {
    cancel: 'Annuleren', delete: 'Verwijderen', error: 'Fout', success: 'Succes', close: 'Sluiten',
    noRaces: 'Nog geen races', newRaceBtn: '+ Nieuwe Race', menu: 'Menu', settings: 'Instellingen', about: 'Over',
    aboutDesc: 'App voor het volgen van kartprestaties tijdens races. Registreer rondes, tijden, posities en bekijk live klassementen.',
    developer: 'Ontwikkelaar', deleteRaceTitle: 'Race verwijderen', deleteRaceMsg: (n) => `"${n}" verwijderen?`, weatherLabel: 'Weer',
    newRaceScreenTitle: 'Nieuwe Race', raceNamePlaceholder: 'Racenaam', circuitPlaceholder: 'Circuit', datePlaceholder: 'Datum (bijv. 14/03/2026)', weatherPlaceholder: 'Weer (bijv. Zonnig)',
    addRaceBtn: 'Race toevoegen', errorFillAll: 'Vul alle velden in', successRaceAdded: 'Race toegevoegd!',
    raceNotFound: 'Race niet gevonden', circuitLabel: 'Circuit', dateLabel: 'Datum', kartsInRace: 'Karts in race', performance: 'Prestatie', noLapsYet: 'Nog geen rondes',
    lap: 'Ronde', pos: 'Pos', addLapBtn: '+ Ronde toevoegen', addKartTitle: 'Kart toevoegen', addKartBtn: 'Kart toevoegen', kartNumberPlaceholder: 'Kartnummer', kartBrandPlaceholder: 'Kartmerk', driverPlaceholder: 'Coureur',
    successKartAdded: 'Kart toegevoegd!', deleteKartTitle: 'Kart verwijderen', deleteKartMsg: (n) => `Kart #${n} verwijderen?`, deleteLapTitle: 'Ronde verwijderen', deleteLapMsg: (l, k) => `Ronde ${l} — kart #${k} verwijderen?`,
    kartNotFound: 'Kart niet gevonden', recordPerformance: 'Prestatie registreren', noPerformanceYet: 'Nog geen prestaties', lapNumberPlaceholder: 'Rondenummer', positionOptPlaceholder: 'Positie (optioneel)',
    notesPlaceholder: 'Notities', registerBtn: 'Opslaan', errorFillLap: 'Vul minimaal rondenummer en tijd in', successPerfAdded: 'Prestatie opgeslagen!',
    deleteLapSimpleTitle: 'Ronde verwijderen', deleteLapSimpleMsg: (l) => `Ronde ${l} verwijderen?`, positionLabel: 'Positie',
    bestTime: 'Beste Tijd', avgTime: 'Gemiddelde Tijd', settingsTitle: 'Instellingen', themeLabel: 'Thema', day: 'Dag', night: 'Nacht', mainColorLabel: 'Hoofdkleur', podiumLabel: 'Podium weergeven', languageLabel: 'Taal', version: 'Versie',
    navHome: 'KartTrack', navNewRace: 'Nieuwe Race', navRaceDetail: 'Race Details', navKartDetail: 'Kart Details', navSettings: 'Instellingen',
  },
  pl: {
    cancel: 'Anuluj', delete: 'Usuń', error: 'Błąd', success: 'Sukces', close: 'Zamknij',
    noRaces: 'Brak wyścigów', newRaceBtn: '+ Nowy Wyścig', menu: 'Menu', settings: 'Ustawienia', about: 'O aplikacji',
    aboutDesc: 'Aplikacja do śledzenia wyników kartów podczas wyścigów. Rejestruj okrążenia, czasy, pozycje i przeglądaj klasyfikacje na żywo.',
    developer: 'Deweloper', deleteRaceTitle: 'Usuń wyścig', deleteRaceMsg: (n) => `Usunąć "${n}"?`, weatherLabel: 'Pogoda',
    newRaceScreenTitle: 'Nowy Wyścig', raceNamePlaceholder: 'Nazwa wyścigu', circuitPlaceholder: 'Tor', datePlaceholder: 'Data (np. 14/03/2026)', weatherPlaceholder: 'Pogoda (np. Słonecznie)',
    addRaceBtn: 'Dodaj Wyścig', errorFillAll: 'Wypełnij wszystkie pola', successRaceAdded: 'Wyścig dodany!',
    raceNotFound: 'Wyścig nie znaleziony', circuitLabel: 'Tor', dateLabel: 'Data', kartsInRace: 'Karty na torze', performance: 'Wyniki', noLapsYet: 'Brak okrążeń',
    lap: 'Okrążenie', pos: 'Poz', addLapBtn: '+ Dodaj Okrążenie', addKartTitle: 'Dodaj Kart', addKartBtn: 'Dodaj Kart', kartNumberPlaceholder: 'Numer kartu', kartBrandPlaceholder: 'Marka kartu', driverPlaceholder: 'Kierowca',
    successKartAdded: 'Kart dodany!', deleteKartTitle: 'Usuń kart', deleteKartMsg: (n) => `Usunąć kart #${n}?`, deleteLapTitle: 'Usuń okrążenie', deleteLapMsg: (l, k) => `Usunąć okrążenie ${l} — kart #${k}?`,
    kartNotFound: 'Kart nie znaleziony', recordPerformance: 'Zapisz Wynik', noPerformanceYet: 'Brak wyników', lapNumberPlaceholder: 'Numer okrążenia', positionOptPlaceholder: 'Pozycja (opcjonalnie)',
    notesPlaceholder: 'Notatki', registerBtn: 'Zapisz', errorFillLap: 'Podaj przynajmniej numer okrążenia i czas', successPerfAdded: 'Wynik zapisany!',
    deleteLapSimpleTitle: 'Usuń okrążenie', deleteLapSimpleMsg: (l) => `Usunąć okrążenie ${l}?`, positionLabel: 'Pozycja',
    bestTime: 'Najlepszy Czas', avgTime: 'Średni Czas', settingsTitle: 'Ustawienia', themeLabel: 'Motyw', day: 'Dzień', night: 'Noc', mainColorLabel: 'Kolor główny', podiumLabel: 'Podium do wyświetlenia', languageLabel: 'Język', version: 'Wersja',
    navHome: 'KartTrack', navNewRace: 'Nowy Wyścig', navRaceDetail: 'Szczegóły Wyścigu', navKartDetail: 'Szczegóły Kartu', navSettings: 'Ustawienia',
  },
  ro: {
    cancel: 'Anulare', delete: 'Șterge', error: 'Eroare', success: 'Succes', close: 'Închide',
    noRaces: 'Nicio cursă încă', newRaceBtn: '+ Cursă Nouă', menu: 'Meniu', settings: 'Setări', about: 'Despre',
    aboutDesc: 'Aplicație pentru urmărirea performanțelor kart-urilor în timpul curselor. Înregistrați tururi, timpi, poziții și vizualizați clasamente în timp real.',
    developer: 'Dezvoltator', deleteRaceTitle: 'Șterge cursă', deleteRaceMsg: (n) => `Ștergeți "${n}"?`, weatherLabel: 'Vreme',
    newRaceScreenTitle: 'Cursă Nouă', raceNamePlaceholder: 'Numele cursei', circuitPlaceholder: 'Circuit', datePlaceholder: 'Dată (ex: 14/03/2026)', weatherPlaceholder: 'Vreme (ex: Însorit)',
    addRaceBtn: 'Adaugă Cursă', errorFillAll: 'Completați toate câmpurile', successRaceAdded: 'Cursă adăugată!',
    raceNotFound: 'Cursa nu a fost găsită', circuitLabel: 'Circuit', dateLabel: 'Dată', kartsInRace: 'Kart-uri în cursă', performance: 'Performanță', noLapsYet: 'Niciun tur încă',
    lap: 'Tur', pos: 'Poz', addLapBtn: '+ Adaugă Tur', addKartTitle: 'Adaugă Kart', addKartBtn: 'Adaugă Kart', kartNumberPlaceholder: 'Număr kart', kartBrandPlaceholder: 'Marcă kart', driverPlaceholder: 'Pilot',
    successKartAdded: 'Kart adăugat!', deleteKartTitle: 'Șterge kart', deleteKartMsg: (n) => `Ștergeți kart #${n}?`, deleteLapTitle: 'Șterge tur', deleteLapMsg: (l, k) => `Ștergeți Turul ${l} — kart #${k}?`,
    kartNotFound: 'Kart-ul nu a fost găsit', recordPerformance: 'Înregistrează Performanță', noPerformanceYet: 'Nicio performanță încă', lapNumberPlaceholder: 'Număr tur', positionOptPlaceholder: 'Poziție (opțional)',
    notesPlaceholder: 'Note', registerBtn: 'Salvare', errorFillLap: 'Completați cel puțin numărul turului și timpul', successPerfAdded: 'Performanță salvată!',
    deleteLapSimpleTitle: 'Șterge tur', deleteLapSimpleMsg: (l) => `Ștergeți Turul ${l}?`, positionLabel: 'Poziție',
    bestTime: 'Cel Mai Bun Timp', avgTime: 'Timp Mediu', settingsTitle: 'Setări', themeLabel: 'Temă', day: 'Zi', night: 'Noapte', mainColorLabel: 'Culoare principală', podiumLabel: 'Podium de afișat', languageLabel: 'Limbă', version: 'Versiunea',
    navHome: 'KartTrack', navNewRace: 'Cursă Nouă', navRaceDetail: 'Detalii Cursă', navKartDetail: 'Detalii Kart', navSettings: 'Setări',
  },
  cs: {
    cancel: 'Zrušit', delete: 'Smazat', error: 'Chyba', success: 'Úspěch', close: 'Zavřít',
    noRaces: 'Žádný závod zatím', newRaceBtn: '+ Nový Závod', menu: 'Nabídka', settings: 'Nastavení', about: 'O aplikaci',
    aboutDesc: 'Aplikace pro sledování výkonu kart během závodů. Zaznamenávejte kola, časy, pozice a zobrazujte žebříčky v reálném čase.',
    developer: 'Vývojář', deleteRaceTitle: 'Smazat závod', deleteRaceMsg: (n) => `Smazat "${n}"?`, weatherLabel: 'Počasí',
    newRaceScreenTitle: 'Nový Závod', raceNamePlaceholder: 'Název závodu', circuitPlaceholder: 'Okruh', datePlaceholder: 'Datum (např. 14.03.2026)', weatherPlaceholder: 'Počasí (např. Slunečno)',
    addRaceBtn: 'Přidat Závod', errorFillAll: 'Vyplňte všechna pole', successRaceAdded: 'Závod přidán!',
    raceNotFound: 'Závod nenalezen', circuitLabel: 'Okruh', dateLabel: 'Datum', kartsInRace: 'Karty v závodě', performance: 'Výkon', noLapsYet: 'Žádná kola zatím',
    lap: 'Kolo', pos: 'Poz', addLapBtn: '+ Přidat Kolo', addKartTitle: 'Přidat Kart', addKartBtn: 'Přidat Kart', kartNumberPlaceholder: 'Číslo kartu', kartBrandPlaceholder: 'Značka kartu', driverPlaceholder: 'Jezdec',
    successKartAdded: 'Kart přidán!', deleteKartTitle: 'Smazat kart', deleteKartMsg: (n) => `Smazat kart #${n}?`, deleteLapTitle: 'Smazat kolo', deleteLapMsg: (l, k) => `Smazat Kolo ${l} — kart #${k}?`,
    kartNotFound: 'Kart nenalezen', recordPerformance: 'Zaznamenat Výkon', noPerformanceYet: 'Žádný výkon zatím', lapNumberPlaceholder: 'Číslo kola', positionOptPlaceholder: 'Pozice (volitelné)',
    notesPlaceholder: 'Poznámky', registerBtn: 'Uložit', errorFillLap: 'Zadejte alespoň číslo kola a čas', successPerfAdded: 'Výkon uložen!',
    deleteLapSimpleTitle: 'Smazat kolo', deleteLapSimpleMsg: (l) => `Smazat Kolo ${l}?`, positionLabel: 'Pozice',
    bestTime: 'Nejlepší Čas', avgTime: 'Průměrný Čas', settingsTitle: 'Nastavení', themeLabel: 'Motiv', day: 'Den', night: 'Noc', mainColorLabel: 'Hlavní barva', podiumLabel: 'Zobrazit podium', languageLabel: 'Jazyk', version: 'Verze',
    navHome: 'KartTrack', navNewRace: 'Nový Závod', navRaceDetail: 'Detail Závodu', navKartDetail: 'Detail Kartu', navSettings: 'Nastavení',
  },
  hu: {
    cancel: 'Mégse', delete: 'Törlés', error: 'Hiba', success: 'Siker', close: 'Bezárás',
    noRaces: 'Még nincs verseny', newRaceBtn: '+ Új Verseny', menu: 'Menü', settings: 'Beállítások', about: 'Névjegy',
    aboutDesc: 'Kart teljesítménykövetési alkalmazás versenyeken. Rögzítsen köröket, időket, pozíciókat és tekintse meg az élő rangsorokat.',
    developer: 'Fejlesztő', deleteRaceTitle: 'Verseny törlése', deleteRaceMsg: (n) => `Törli: "${n}"?`, weatherLabel: 'Időjárás',
    newRaceScreenTitle: 'Új Verseny', raceNamePlaceholder: 'Verseny neve', circuitPlaceholder: 'Pálya', datePlaceholder: 'Dátum (pl. 2026.03.14.)', weatherPlaceholder: 'Időjárás (pl. Napos)',
    addRaceBtn: 'Verseny hozzáadása', errorFillAll: 'Töltse ki az összes mezőt', successRaceAdded: 'Verseny hozzáadva!',
    raceNotFound: 'A verseny nem található', circuitLabel: 'Pálya', dateLabel: 'Dátum', kartsInRace: 'Kartok a versenyen', performance: 'Teljesítmény', noLapsYet: 'Még nincs kör',
    lap: 'Kör', pos: 'Poz', addLapBtn: '+ Kör hozzáadása', addKartTitle: 'Kart hozzáadása', addKartBtn: 'Kart hozzáadása', kartNumberPlaceholder: 'Kart száma', kartBrandPlaceholder: 'Kart márkája', driverPlaceholder: 'Versenyző',
    successKartAdded: 'Kart hozzáadva!', deleteKartTitle: 'Kart törlése', deleteKartMsg: (n) => `Kart #${n} törlése?`, deleteLapTitle: 'Kör törlése', deleteLapMsg: (l, k) => `${l}. kör törlése — kart #${k}?`,
    kartNotFound: 'A kart nem található', recordPerformance: 'Teljesítmény rögzítése', noPerformanceYet: 'Még nincs teljesítmény', lapNumberPlaceholder: 'Kör száma', positionOptPlaceholder: 'Pozíció (opcionális)',
    notesPlaceholder: 'Megjegyzések', registerBtn: 'Mentés', errorFillLap: 'Adja meg legalább a kör számát és az időt', successPerfAdded: 'Teljesítmény mentve!',
    deleteLapSimpleTitle: 'Kör törlése', deleteLapSimpleMsg: (l) => `${l}. kör törlése?`, positionLabel: 'Pozíció',
    bestTime: 'Legjobb Idő', avgTime: 'Átlagidő', settingsTitle: 'Beállítások', themeLabel: 'Téma', day: 'Nappal', night: 'Éjszaka', mainColorLabel: 'Fő szín', podiumLabel: 'Megjelenítendő dobogó', languageLabel: 'Nyelv', version: 'Verzió',
    navHome: 'KartTrack', navNewRace: 'Új Verseny', navRaceDetail: 'Verseny Részletei', navKartDetail: 'Kart Részletei', navSettings: 'Beállítások',
  },
  sv: {
    cancel: 'Avbryt', delete: 'Ta bort', error: 'Fel', success: 'Framgång', close: 'Stäng',
    noRaces: 'Inga lopp ännu', newRaceBtn: '+ Nytt Lopp', menu: 'Meny', settings: 'Inställningar', about: 'Om',
    aboutDesc: 'App för att spåra kartprestanda under lopp. Registrera varv, tider, positioner och se live-rankningar.',
    developer: 'Utvecklare', deleteRaceTitle: 'Ta bort lopp', deleteRaceMsg: (n) => `Ta bort "${n}"?`, weatherLabel: 'Väder',
    newRaceScreenTitle: 'Nytt Lopp', raceNamePlaceholder: 'Loppnamn', circuitPlaceholder: 'Bana', datePlaceholder: 'Datum (t.ex. 14/03/2026)', weatherPlaceholder: 'Väder (t.ex. Soligt)',
    addRaceBtn: 'Lägg till Lopp', errorFillAll: 'Fyll i alla fält', successRaceAdded: 'Lopp tillagt!',
    raceNotFound: 'Loppet hittades inte', circuitLabel: 'Bana', dateLabel: 'Datum', kartsInRace: 'Kartar i loppet', performance: 'Prestanda', noLapsYet: 'Inga varv ännu',
    lap: 'Varv', pos: 'Pos', addLapBtn: '+ Lägg till Varv', addKartTitle: 'Lägg till Kart', addKartBtn: 'Lägg till Kart', kartNumberPlaceholder: 'Kartnummer', kartBrandPlaceholder: 'Kartmärke', driverPlaceholder: 'Förare',
    successKartAdded: 'Kart tillagd!', deleteKartTitle: 'Ta bort kart', deleteKartMsg: (n) => `Ta bort kart #${n}?`, deleteLapTitle: 'Ta bort varv', deleteLapMsg: (l, k) => `Ta bort Varv ${l} — kart #${k}?`,
    kartNotFound: 'Karten hittades inte', recordPerformance: 'Registrera Prestanda', noPerformanceYet: 'Ingen prestanda ännu', lapNumberPlaceholder: 'Varvnummer', positionOptPlaceholder: 'Position (valfritt)',
    notesPlaceholder: 'Anteckningar', registerBtn: 'Spara', errorFillLap: 'Fyll i minst varvnummer och tid', successPerfAdded: 'Prestanda sparad!',
    deleteLapSimpleTitle: 'Ta bort varv', deleteLapSimpleMsg: (l) => `Ta bort Varv ${l}?`, positionLabel: 'Position',
    bestTime: 'Bästa Tid', avgTime: 'Genomsnittstid', settingsTitle: 'Inställningar', themeLabel: 'Tema', day: 'Dag', night: 'Natt', mainColorLabel: 'Huvudfärg', podiumLabel: 'Podium att visa', languageLabel: 'Språk', version: 'Version',
    navHome: 'KartTrack', navNewRace: 'Nytt Lopp', navRaceDetail: 'Loppdetaljer', navKartDetail: 'Kartdetaljer', navSettings: 'Inställningar',
  },
  no: {
    cancel: 'Avbryt', delete: 'Slett', error: 'Feil', success: 'Suksess', close: 'Lukk',
    noRaces: 'Ingen løp ennå', newRaceBtn: '+ Nytt Løp', menu: 'Meny', settings: 'Innstillinger', about: 'Om',
    aboutDesc: 'App for sporing av kartprestasjon under løp. Registrer runder, tider, posisjoner og se live-rangeringer.',
    developer: 'Utvikler', deleteRaceTitle: 'Slett løp', deleteRaceMsg: (n) => `Slette "${n}"?`, weatherLabel: 'Vær',
    newRaceScreenTitle: 'Nytt Løp', raceNamePlaceholder: 'Løpsnavn', circuitPlaceholder: 'Bane', datePlaceholder: 'Dato (f.eks. 14/03/2026)', weatherPlaceholder: 'Vær (f.eks. Solskinn)',
    addRaceBtn: 'Legg til Løp', errorFillAll: 'Fyll ut alle felt', successRaceAdded: 'Løp lagt til!',
    raceNotFound: 'Løpet ble ikke funnet', circuitLabel: 'Bane', dateLabel: 'Dato', kartsInRace: 'Kart i løpet', performance: 'Prestasjon', noLapsYet: 'Ingen runder ennå',
    lap: 'Runde', pos: 'Pos', addLapBtn: '+ Legg til Runde', addKartTitle: 'Legg til Kart', addKartBtn: 'Legg til Kart', kartNumberPlaceholder: 'Kartnummer', kartBrandPlaceholder: 'Kartmerke', driverPlaceholder: 'Sjåfør',
    successKartAdded: 'Kart lagt til!', deleteKartTitle: 'Slett kart', deleteKartMsg: (n) => `Slette kart #${n}?`, deleteLapTitle: 'Slett runde', deleteLapMsg: (l, k) => `Slette Runde ${l} — kart #${k}?`,
    kartNotFound: 'Kart ikke funnet', recordPerformance: 'Registrer Prestasjon', noPerformanceYet: 'Ingen prestasjoner ennå', lapNumberPlaceholder: 'Rundenummer', positionOptPlaceholder: 'Posisjon (valgfritt)',
    notesPlaceholder: 'Notater', registerBtn: 'Lagre', errorFillLap: 'Fyll inn minst rundenummer og tid', successPerfAdded: 'Prestasjon lagret!',
    deleteLapSimpleTitle: 'Slett runde', deleteLapSimpleMsg: (l) => `Slette Runde ${l}?`, positionLabel: 'Posisjon',
    bestTime: 'Beste Tid', avgTime: 'Gjennomsnittlig Tid', settingsTitle: 'Innstillinger', themeLabel: 'Tema', day: 'Dag', night: 'Natt', mainColorLabel: 'Hovedfarge', podiumLabel: 'Podium å vise', languageLabel: 'Språk', version: 'Versjon',
    navHome: 'KartTrack', navNewRace: 'Nytt Løp', navRaceDetail: 'Løpsdetaljer', navKartDetail: 'Kartdetaljer', navSettings: 'Innstillinger',
  },
  da: {
    cancel: 'Annuller', delete: 'Slet', error: 'Fejl', success: 'Succes', close: 'Luk',
    noRaces: 'Ingen løb endnu', newRaceBtn: '+ Nyt Løb', menu: 'Menu', settings: 'Indstillinger', about: 'Om',
    aboutDesc: 'App til sporing af kartydeevne under løb. Registrer omgange, tider, positioner og se live-rangeringer.',
    developer: 'Udvikler', deleteRaceTitle: 'Slet løb', deleteRaceMsg: (n) => `Slette "${n}"?`, weatherLabel: 'Vejr',
    newRaceScreenTitle: 'Nyt Løb', raceNamePlaceholder: 'Løbsnavn', circuitPlaceholder: 'Bane', datePlaceholder: 'Dato (f.eks. 14/03/2026)', weatherPlaceholder: 'Vejr (f.eks. Solskin)',
    addRaceBtn: 'Tilføj Løb', errorFillAll: 'Udfyld alle felter', successRaceAdded: 'Løb tilføjet!',
    raceNotFound: 'Løbet blev ikke fundet', circuitLabel: 'Bane', dateLabel: 'Dato', kartsInRace: 'Karts i løbet', performance: 'Præstation', noLapsYet: 'Ingen omgange endnu',
    lap: 'Omgang', pos: 'Pos', addLapBtn: '+ Tilføj Omgang', addKartTitle: 'Tilføj Kart', addKartBtn: 'Tilføj Kart', kartNumberPlaceholder: 'Kartnummer', kartBrandPlaceholder: 'Kartmærke', driverPlaceholder: 'Kører',
    successKartAdded: 'Kart tilføjet!', deleteKartTitle: 'Slet kart', deleteKartMsg: (n) => `Slette kart #${n}?`, deleteLapTitle: 'Slet omgang', deleteLapMsg: (l, k) => `Slette Omgang ${l} — kart #${k}?`,
    kartNotFound: 'Kart ikke fundet', recordPerformance: 'Registrer Præstation', noPerformanceYet: 'Ingen præstationer endnu', lapNumberPlaceholder: 'Omgangnummer', positionOptPlaceholder: 'Position (valgfrit)',
    notesPlaceholder: 'Noter', registerBtn: 'Gem', errorFillLap: 'Udfyld mindst omgangnummer og tid', successPerfAdded: 'Præstation gemt!',
    deleteLapSimpleTitle: 'Slet omgang', deleteLapSimpleMsg: (l) => `Slette Omgang ${l}?`, positionLabel: 'Position',
    bestTime: 'Bedste Tid', avgTime: 'Gennemsnitstid', settingsTitle: 'Indstillinger', themeLabel: 'Tema', day: 'Dag', night: 'Nat', mainColorLabel: 'Hovedfarve', podiumLabel: 'Podium at vise', languageLabel: 'Sprog', version: 'Version',
    navHome: 'KartTrack', navNewRace: 'Nyt Løb', navRaceDetail: 'Løbdetaljer', navKartDetail: 'Kartdetaljer', navSettings: 'Indstillinger',
  },
  fi: {
    cancel: 'Peruuta', delete: 'Poista', error: 'Virhe', success: 'Onnistui', close: 'Sulje',
    noRaces: 'Ei kilpailuja vielä', newRaceBtn: '+ Uusi Kilpailu', menu: 'Valikko', settings: 'Asetukset', about: 'Tietoja',
    aboutDesc: 'Sovellus karting-suoritusten seuraamiseen kilpailuissa. Kirjaa kierrokset, ajat, sijoitukset ja katso live-tulokset.',
    developer: 'Kehittäjä', deleteRaceTitle: 'Poista kilpailu', deleteRaceMsg: (n) => `Poista "${n}"?`, weatherLabel: 'Sää',
    newRaceScreenTitle: 'Uusi Kilpailu', raceNamePlaceholder: 'Kilpailun nimi', circuitPlaceholder: 'Rata', datePlaceholder: 'Päivämäärä (esim. 14.03.2026)', weatherPlaceholder: 'Sää (esim. Aurinkoinen)',
    addRaceBtn: 'Lisää Kilpailu', errorFillAll: 'Täytä kaikki kentät', successRaceAdded: 'Kilpailu lisätty!',
    raceNotFound: 'Kilpailua ei löydy', circuitLabel: 'Rata', dateLabel: 'Päivämäärä', kartsInRace: 'Kartit kilpailussa', performance: 'Suoritus', noLapsYet: 'Ei kierroksia vielä',
    lap: 'Kierros', pos: 'Sij', addLapBtn: '+ Lisää Kierros', addKartTitle: 'Lisää Kart', addKartBtn: 'Lisää Kart', kartNumberPlaceholder: 'Kartin numero', kartBrandPlaceholder: 'Kartin merkki', driverPlaceholder: 'Kuljettaja',
    successKartAdded: 'Kart lisätty!', deleteKartTitle: 'Poista kart', deleteKartMsg: (n) => `Poista kart #${n}?`, deleteLapTitle: 'Poista kierros', deleteLapMsg: (l, k) => `Poista Kierros ${l} — kart #${k}?`,
    kartNotFound: 'Kartia ei löydy', recordPerformance: 'Kirjaa Suoritus', noPerformanceYet: 'Ei suorituksia vielä', lapNumberPlaceholder: 'Kierroksen numero', positionOptPlaceholder: 'Sijoitus (valinnainen)',
    notesPlaceholder: 'Muistiinpanot', registerBtn: 'Tallenna', errorFillLap: 'Syötä vähintään kierroksen numero ja aika', successPerfAdded: 'Suoritus tallennettu!',
    deleteLapSimpleTitle: 'Poista kierros', deleteLapSimpleMsg: (l) => `Poista Kierros ${l}?`, positionLabel: 'Sijoitus',
    bestTime: 'Paras Aika', avgTime: 'Keskiaika', settingsTitle: 'Asetukset', themeLabel: 'Teema', day: 'Päivä', night: 'Yö', mainColorLabel: 'Pääväri', podiumLabel: 'Näytettävä podium', languageLabel: 'Kieli', version: 'Versio',
    navHome: 'KartTrack', navNewRace: 'Uusi Kilpailu', navRaceDetail: 'Kilpailun tiedot', navKartDetail: 'Kartin tiedot', navSettings: 'Asetukset',
  },
  el: {
    cancel: 'Ακύρωση', delete: 'Διαγραφή', error: 'Σφάλμα', success: 'Επιτυχία', close: 'Κλείσιμο',
    noRaces: 'Δεν υπάρχουν αγώνες ακόμα', newRaceBtn: '+ Νέος Αγώνας', menu: 'Μενού', settings: 'Ρυθμίσεις', about: 'Σχετικά',
    aboutDesc: 'Εφαρμογή παρακολούθησης επιδόσεων kart κατά τη διάρκεια αγώνων. Καταγράψτε γύρους, χρόνους, θέσεις και δείτε αποτελέσματα σε πραγματικό χρόνο.',
    developer: 'Προγραμματιστής', deleteRaceTitle: 'Διαγραφή αγώνα', deleteRaceMsg: (n) => `Διαγραφή "${n}";`, weatherLabel: 'Καιρός',
    newRaceScreenTitle: 'Νέος Αγώνας', raceNamePlaceholder: 'Όνομα αγώνα', circuitPlaceholder: 'Πίστα', datePlaceholder: 'Ημερομηνία (π.χ. 14/03/2026)', weatherPlaceholder: 'Καιρός (π.χ. Ηλιόλουστο)',
    addRaceBtn: 'Προσθήκη Αγώνα', errorFillAll: 'Συμπληρώστε όλα τα πεδία', successRaceAdded: 'Ο αγώνας προστέθηκε!',
    raceNotFound: 'Ο αγώνας δεν βρέθηκε', circuitLabel: 'Πίστα', dateLabel: 'Ημερομηνία', kartsInRace: 'Kart στον αγώνα', performance: 'Επίδοση', noLapsYet: 'Δεν υπάρχουν γύροι ακόμα',
    lap: 'Γύρος', pos: 'Θέσ', addLapBtn: '+ Προσθήκη Γύρου', addKartTitle: 'Προσθήκη Kart', addKartBtn: 'Προσθήκη Kart', kartNumberPlaceholder: 'Αριθμός kart', kartBrandPlaceholder: 'Μάρκα kart', driverPlaceholder: 'Οδηγός',
    successKartAdded: 'Το kart προστέθηκε!', deleteKartTitle: 'Διαγραφή kart', deleteKartMsg: (n) => `Διαγραφή kart #${n};`, deleteLapTitle: 'Διαγραφή γύρου', deleteLapMsg: (l, k) => `Διαγραφή Γύρου ${l} — kart #${k};`,
    kartNotFound: 'Το kart δεν βρέθηκε', recordPerformance: 'Καταγραφή Επίδοσης', noPerformanceYet: 'Δεν υπάρχουν επιδόσεις ακόμα', lapNumberPlaceholder: 'Αριθμός γύρου', positionOptPlaceholder: 'Θέση (προαιρετικό)',
    notesPlaceholder: 'Σημειώσεις', registerBtn: 'Αποθήκευση', errorFillLap: 'Εισάγετε τουλάχιστον αριθμό γύρου και χρόνο', successPerfAdded: 'Η επίδοση αποθηκεύτηκε!',
    deleteLapSimpleTitle: 'Διαγραφή γύρου', deleteLapSimpleMsg: (l) => `Διαγραφή Γύρου ${l};`, positionLabel: 'Θέση',
    bestTime: 'Καλύτερος Χρόνος', avgTime: 'Μέσος Χρόνος', settingsTitle: 'Ρυθμίσεις', themeLabel: 'Θέμα', day: 'Ημέρα', night: 'Νύχτα', mainColorLabel: 'Κύριο χρώμα', podiumLabel: 'Βάθρο προς εμφάνιση', languageLabel: 'Γλώσσα', version: 'Έκδοση',
    navHome: 'KartTrack', navNewRace: 'Νέος Αγώνας', navRaceDetail: 'Λεπτομέρειες Αγώνα', navKartDetail: 'Λεπτομέρειες Kart', navSettings: 'Ρυθμίσεις',
  },
  sk: {
    cancel: 'Zrušiť', delete: 'Vymazať', error: 'Chyba', success: 'Úspech', close: 'Zavrieť',
    noRaces: 'Žiadne preteky ešte', newRaceBtn: '+ Nové Preteky', menu: 'Ponuka', settings: 'Nastavenia', about: 'O aplikácii',
    aboutDesc: 'Aplikácia na sledovanie výkonu kart počas pretekov. Zaznamenávajte kolá, časy, pozície a zobrazujte rebríčky v reálnom čase.',
    developer: 'Vývojár', deleteRaceTitle: 'Vymazať preteky', deleteRaceMsg: (n) => `Vymazať "${n}"?`, weatherLabel: 'Počasie',
    newRaceScreenTitle: 'Nové Preteky', raceNamePlaceholder: 'Názov pretekov', circuitPlaceholder: 'Okruh', datePlaceholder: 'Dátum (napr. 14.03.2026)', weatherPlaceholder: 'Počasie (napr. Slnečno)',
    addRaceBtn: 'Pridať Preteky', errorFillAll: 'Vyplňte všetky polia', successRaceAdded: 'Preteky pridané!',
    raceNotFound: 'Preteky nenájdené', circuitLabel: 'Okruh', dateLabel: 'Dátum', kartsInRace: 'Karty v pretekoch', performance: 'Výkon', noLapsYet: 'Žiadne kolá ešte',
    lap: 'Kolo', pos: 'Poz', addLapBtn: '+ Pridať Kolo', addKartTitle: 'Pridať Kart', addKartBtn: 'Pridať Kart', kartNumberPlaceholder: 'Číslo kartu', kartBrandPlaceholder: 'Značka kartu', driverPlaceholder: 'Jazdec',
    successKartAdded: 'Kart pridaný!', deleteKartTitle: 'Vymazať kart', deleteKartMsg: (n) => `Vymazať kart #${n}?`, deleteLapTitle: 'Vymazať kolo', deleteLapMsg: (l, k) => `Vymazať Kolo ${l} — kart #${k}?`,
    kartNotFound: 'Kart nenájdený', recordPerformance: 'Zaznamenať Výkon', noPerformanceYet: 'Žiadny výkon ešte', lapNumberPlaceholder: 'Číslo kola', positionOptPlaceholder: 'Pozícia (voliteľné)',
    notesPlaceholder: 'Poznámky', registerBtn: 'Uložiť', errorFillLap: 'Zadajte aspoň číslo kola a čas', successPerfAdded: 'Výkon uložený!',
    deleteLapSimpleTitle: 'Vymazať kolo', deleteLapSimpleMsg: (l) => `Vymazať Kolo ${l}?`, positionLabel: 'Pozícia',
    bestTime: 'Najlepší Čas', avgTime: 'Priemerný Čas', settingsTitle: 'Nastavenia', themeLabel: 'Motív', day: 'Deň', night: 'Noc', mainColorLabel: 'Hlavná farba', podiumLabel: 'Zobraziť podium', languageLabel: 'Jazyk', version: 'Verzia',
    navHome: 'KartTrack', navNewRace: 'Nové Preteky', navRaceDetail: 'Detail Pretekov', navKartDetail: 'Detail Kartu', navSettings: 'Nastavenia',
  },
  hr: {
    cancel: 'Odustani', delete: 'Obriši', error: 'Greška', success: 'Uspjeh', close: 'Zatvori',
    noRaces: 'Nema utrka još', newRaceBtn: '+ Nova Utrka', menu: 'Izbornik', settings: 'Postavke', about: 'O aplikaciji',
    aboutDesc: 'Aplikacija za praćenje performansi kart-ova tijekom utrka. Bilježite krugove, vremena, pozicije i pregledavajte ljestvice u stvarnom vremenu.',
    developer: 'Programer', deleteRaceTitle: 'Obriši utrku', deleteRaceMsg: (n) => `Obrisati "${n}"?`, weatherLabel: 'Vrijeme',
    newRaceScreenTitle: 'Nova Utrka', raceNamePlaceholder: 'Naziv utrke', circuitPlaceholder: 'Staza', datePlaceholder: 'Datum (npr. 14/03/2026)', weatherPlaceholder: 'Vrijeme (npr. Sunčano)',
    addRaceBtn: 'Dodaj Utrku', errorFillAll: 'Ispunite sva polja', successRaceAdded: 'Utrka dodana!',
    raceNotFound: 'Utrka nije pronađena', circuitLabel: 'Staza', dateLabel: 'Datum', kartsInRace: 'Kartovi u utrci', performance: 'Performanse', noLapsYet: 'Nema krugova još',
    lap: 'Krug', pos: 'Poz', addLapBtn: '+ Dodaj Krug', addKartTitle: 'Dodaj Kart', addKartBtn: 'Dodaj Kart', kartNumberPlaceholder: 'Broj karta', kartBrandPlaceholder: 'Marka karta', driverPlaceholder: 'Vozač',
    successKartAdded: 'Kart dodan!', deleteKartTitle: 'Obriši kart', deleteKartMsg: (n) => `Obrisati kart #${n}?`, deleteLapTitle: 'Obriši krug', deleteLapMsg: (l, k) => `Obrisati Krug ${l} — kart #${k}?`,
    kartNotFound: 'Kart nije pronađen', recordPerformance: 'Zabilježi Performansu', noPerformanceYet: 'Nema performansi još', lapNumberPlaceholder: 'Broj kruga', positionOptPlaceholder: 'Pozicija (neobavezno)',
    notesPlaceholder: 'Bilješke', registerBtn: 'Spremi', errorFillLap: 'Unesite barem broj kruga i vrijeme', successPerfAdded: 'Performansa spremljena!',
    deleteLapSimpleTitle: 'Obriši krug', deleteLapSimpleMsg: (l) => `Obrisati Krug ${l}?`, positionLabel: 'Pozicija',
    bestTime: 'Najbolje Vrijeme', avgTime: 'Prosječno Vrijeme', settingsTitle: 'Postavke', themeLabel: 'Tema', day: 'Dan', night: 'Noć', mainColorLabel: 'Glavna boja', podiumLabel: 'Podij za prikaz', languageLabel: 'Jezik', version: 'Verzija',
    navHome: 'KartTrack', navNewRace: 'Nova Utrka', navRaceDetail: 'Detalji Utrke', navKartDetail: 'Detalji Karta', navSettings: 'Postavke',
  },
  bg: {
    cancel: 'Отказ', delete: 'Изтриване', error: 'Грешка', success: 'Успех', close: 'Затвори',
    noRaces: 'Няма състезания все още', newRaceBtn: '+ Ново Състезание', menu: 'Меню', settings: 'Настройки', about: 'За приложението',
    aboutDesc: 'Приложение за проследяване на представянето на картинги по време на състезания. Записвайте обиколки, времена, позиции и преглеждайте класации в реално време.',
    developer: 'Разработчик', deleteRaceTitle: 'Изтриване на състезание', deleteRaceMsg: (n) => `Изтриване на "${n}"?`, weatherLabel: 'Времето',
    newRaceScreenTitle: 'Ново Състезание', raceNamePlaceholder: 'Наименование', circuitPlaceholder: 'Писта', datePlaceholder: 'Дата (напр. 14/03/2026)', weatherPlaceholder: 'Времето (напр. Слънчево)',
    addRaceBtn: 'Добави Състезание', errorFillAll: 'Попълнете всички полета', successRaceAdded: 'Състезанието е добавено!',
    raceNotFound: 'Състезанието не е намерено', circuitLabel: 'Писта', dateLabel: 'Дата', kartsInRace: 'Картинги в състезанието', performance: 'Представяне', noLapsYet: 'Няма обиколки',
    lap: 'Обиколка', pos: 'Поз', addLapBtn: '+ Добави Обиколка', addKartTitle: 'Добави Картинг', addKartBtn: 'Добави Картинг', kartNumberPlaceholder: 'Номер на картинг', kartBrandPlaceholder: 'Марка на картинг', driverPlaceholder: 'Пилот',
    successKartAdded: 'Картингът е добавен!', deleteKartTitle: 'Изтриване на картинг', deleteKartMsg: (n) => `Изтриване на картинг #${n}?`, deleteLapTitle: 'Изтриване на обиколка', deleteLapMsg: (l, k) => `Изтриване на Обиколка ${l} — картинг #${k}?`,
    kartNotFound: 'Картингът не е намерен', recordPerformance: 'Запис на Представяне', noPerformanceYet: 'Няма представяния', lapNumberPlaceholder: 'Номер на обиколка', positionOptPlaceholder: 'Позиция (по избор)',
    notesPlaceholder: 'Бележки', registerBtn: 'Запази', errorFillLap: 'Въведете поне номер на обиколка и време', successPerfAdded: 'Представянето е записано!',
    deleteLapSimpleTitle: 'Изтриване на обиколка', deleteLapSimpleMsg: (l) => `Изтриване на Обиколка ${l}?`, positionLabel: 'Позиция',
    bestTime: 'Най-добро Време', avgTime: 'Средно Време', settingsTitle: 'Настройки', themeLabel: 'Тема', day: 'Ден', night: 'Нощ', mainColorLabel: 'Основен цвят', podiumLabel: 'Подиум за показване', languageLabel: 'Език', version: 'Версия',
    navHome: 'KartTrack', navNewRace: 'Ново Състезание', navRaceDetail: 'Детайли Състезание', navKartDetail: 'Детайли Картинг', navSettings: 'Настройки',
  },
  lt: {
    cancel: 'Atšaukti', delete: 'Ištrinti', error: 'Klaida', success: 'Sėkmė', close: 'Uždaryti',
    noRaces: 'Dar nėra lenktynių', newRaceBtn: '+ Naujos Lenktynės', menu: 'Meniu', settings: 'Nustatymai', about: 'Apie',
    aboutDesc: 'Programėlė kartingo našumo stebėjimui lenktynių metu. Įrašykite ratus, laikus, pozicijas ir peržiūrėkite rezultatus realiuoju laiku.',
    developer: 'Kūrėjas', deleteRaceTitle: 'Ištrinti lenktynes', deleteRaceMsg: (n) => `Ištrinti "${n}"?`, weatherLabel: 'Orai',
    newRaceScreenTitle: 'Naujos Lenktynės', raceNamePlaceholder: 'Lenktynių pavadinimas', circuitPlaceholder: 'Trasa', datePlaceholder: 'Data (pvz. 2026-03-14)', weatherPlaceholder: 'Orai (pvz. Saulėta)',
    addRaceBtn: 'Pridėti Lenktynes', errorFillAll: 'Užpildykite visus laukus', successRaceAdded: 'Lenktynės pridėtos!',
    raceNotFound: 'Lenktynės nerastos', circuitLabel: 'Trasa', dateLabel: 'Data', kartsInRace: 'Kartai lenktynėse', performance: 'Rezultatai', noLapsYet: 'Dar nėra ratų',
    lap: 'Ratas', pos: 'Poz', addLapBtn: '+ Pridėti Ratą', addKartTitle: 'Pridėti Kartą', addKartBtn: 'Pridėti Kartą', kartNumberPlaceholder: 'Karto numeris', kartBrandPlaceholder: 'Karto markė', driverPlaceholder: 'Vairuotojas',
    successKartAdded: 'Kartas pridėtas!', deleteKartTitle: 'Ištrinti kartą', deleteKartMsg: (n) => `Ištrinti kartą #${n}?`, deleteLapTitle: 'Ištrinti ratą', deleteLapMsg: (l, k) => `Ištrinti Ratą ${l} — kartas #${k}?`,
    kartNotFound: 'Kartas nerastas', recordPerformance: 'Įrašyti Rezultatą', noPerformanceYet: 'Dar nėra rezultatų', lapNumberPlaceholder: 'Rato numeris', positionOptPlaceholder: 'Pozicija (neprivaloma)',
    notesPlaceholder: 'Pastabos', registerBtn: 'Išsaugoti', errorFillLap: 'Įveskite bent rato numerį ir laiką', successPerfAdded: 'Rezultatas išsaugotas!',
    deleteLapSimpleTitle: 'Ištrinti ratą', deleteLapSimpleMsg: (l) => `Ištrinti Ratą ${l}?`, positionLabel: 'Pozicija',
    bestTime: 'Geriausias Laikas', avgTime: 'Vidutinis Laikas', settingsTitle: 'Nustatymai', themeLabel: 'Tema', day: 'Diena', night: 'Naktis', mainColorLabel: 'Pagrindinė spalva', podiumLabel: 'Rodinys podiumui', languageLabel: 'Kalba', version: 'Versija',
    navHome: 'KartTrack', navNewRace: 'Naujos Lenktynės', navRaceDetail: 'Lenktynių Detalės', navKartDetail: 'Karto Detalės', navSettings: 'Nustatymai',
  },
  lv: {
    cancel: 'Atcelt', delete: 'Dzēst', error: 'Kļūda', success: 'Veiksme', close: 'Aizvērt',
    noRaces: 'Vēl nav sacīkšu', newRaceBtn: '+ Jaunas Sacīkstes', menu: 'Izvēlne', settings: 'Iestatījumi', about: 'Par',
    aboutDesc: 'Lietotne karting veiktspējas izsekošanai sacīkšu laikā. Reģistrējiet apļus, laikus, pozīcijas un skatiet ranžējumus reāllaikā.',
    developer: 'Izstrādātājs', deleteRaceTitle: 'Dzēst sacīkstes', deleteRaceMsg: (n) => `Dzēst "${n}"?`, weatherLabel: 'Laikapstākļi',
    newRaceScreenTitle: 'Jaunas Sacīkstes', raceNamePlaceholder: 'Sacīkšu nosaukums', circuitPlaceholder: 'Trase', datePlaceholder: 'Datums (piem. 14/03/2026)', weatherPlaceholder: 'Laikapstākļi (piem. Saulains)',
    addRaceBtn: 'Pievienot Sacīkstes', errorFillAll: 'Aizpildiet visus laukus', successRaceAdded: 'Sacīkstes pievienotas!',
    raceNotFound: 'Sacīkstes nav atrastas', circuitLabel: 'Trase', dateLabel: 'Datums', kartsInRace: 'Karti sacīkstēs', performance: 'Sniegums', noLapsYet: 'Vēl nav apļu',
    lap: 'Aplis', pos: 'Poz', addLapBtn: '+ Pievienot Apli', addKartTitle: 'Pievienot Kartu', addKartBtn: 'Pievienot Kartu', kartNumberPlaceholder: 'Karta numurs', kartBrandPlaceholder: 'Karta zīmols', driverPlaceholder: 'Vadītājs',
    successKartAdded: 'Karts pievienots!', deleteKartTitle: 'Dzēst kartu', deleteKartMsg: (n) => `Dzēst kartu #${n}?`, deleteLapTitle: 'Dzēst apli', deleteLapMsg: (l, k) => `Dzēst Apli ${l} — karts #${k}?`,
    kartNotFound: 'Karts nav atrasts', recordPerformance: 'Reģistrēt Sniegumu', noPerformanceYet: 'Vēl nav snieguma', lapNumberPlaceholder: 'Apļa numurs', positionOptPlaceholder: 'Pozīcija (neobligāti)',
    notesPlaceholder: 'Piezīmes', registerBtn: 'Saglabāt', errorFillLap: 'Ievadiet vismaz apļa numuru un laiku', successPerfAdded: 'Sniegums saglabāts!',
    deleteLapSimpleTitle: 'Dzēst apli', deleteLapSimpleMsg: (l) => `Dzēst Apli ${l}?`, positionLabel: 'Pozīcija',
    bestTime: 'Labākais Laiks', avgTime: 'Vidējais Laiks', settingsTitle: 'Iestatījumi', themeLabel: 'Motīvs', day: 'Diena', night: 'Nakts', mainColorLabel: 'Galvenā krāsa', podiumLabel: 'Rādāmais pjedestāls', languageLabel: 'Valoda', version: 'Versija',
    navHome: 'KartTrack', navNewRace: 'Jaunas Sacīkstes', navRaceDetail: 'Sacīkšu Detaļas', navKartDetail: 'Karta Detaļas', navSettings: 'Iestatījumi',
  },
  et: {
    cancel: 'Tühista', delete: 'Kustuta', error: 'Viga', success: 'Edu', close: 'Sulge',
    noRaces: 'Veel pole võistlusi', newRaceBtn: '+ Uus Võistlus', menu: 'Menüü', settings: 'Seaded', about: 'Teave',
    aboutDesc: 'Rakendus kartingi jõudluse jälgimiseks võistluste ajal. Salvestage ringid, ajad, positsioonid ja vaadake edetabeleid reaalajas.',
    developer: 'Arendaja', deleteRaceTitle: 'Kustuta võistlus', deleteRaceMsg: (n) => `Kustutada "${n}"?`, weatherLabel: 'Ilm',
    newRaceScreenTitle: 'Uus Võistlus', raceNamePlaceholder: 'Võistluse nimi', circuitPlaceholder: 'Ring', datePlaceholder: 'Kuupäev (nt 14.03.2026)', weatherPlaceholder: 'Ilm (nt Päikseline)',
    addRaceBtn: 'Lisa Võistlus', errorFillAll: 'Täitke kõik väljad', successRaceAdded: 'Võistlus lisatud!',
    raceNotFound: 'Võistlust ei leitud', circuitLabel: 'Ring', dateLabel: 'Kuupäev', kartsInRace: 'Kartid võistlusel', performance: 'Tulemus', noLapsYet: 'Veel pole ringe',
    lap: 'Ring', pos: 'Pos', addLapBtn: '+ Lisa Ring', addKartTitle: 'Lisa Kart', addKartBtn: 'Lisa Kart', kartNumberPlaceholder: 'Kardi number', kartBrandPlaceholder: 'Kardi mark', driverPlaceholder: 'Sõitja',
    successKartAdded: 'Kart lisatud!', deleteKartTitle: 'Kustuta kart', deleteKartMsg: (n) => `Kustutada kart #${n}?`, deleteLapTitle: 'Kustuta ring', deleteLapMsg: (l, k) => `Kustutada Ring ${l} — kart #${k}?`,
    kartNotFound: 'Karti ei leitud', recordPerformance: 'Salvesta Tulemus', noPerformanceYet: 'Veel pole tulemusi', lapNumberPlaceholder: 'Ringi number', positionOptPlaceholder: 'Positsioon (valikuline)',
    notesPlaceholder: 'Märkused', registerBtn: 'Salvesta', errorFillLap: 'Sisestage vähemalt ringi number ja aeg', successPerfAdded: 'Tulemus salvestatud!',
    deleteLapSimpleTitle: 'Kustuta ring', deleteLapSimpleMsg: (l) => `Kustutada Ring ${l}?`, positionLabel: 'Positsioon',
    bestTime: 'Parim Aeg', avgTime: 'Keskmine Aeg', settingsTitle: 'Seaded', themeLabel: 'Teema', day: 'Päev', night: 'Öö', mainColorLabel: 'Põhivärv', podiumLabel: 'Näidatav poodium', languageLabel: 'Keel', version: 'Versioon',
    navHome: 'KartTrack', navNewRace: 'Uus Võistlus', navRaceDetail: 'Võistluse Üksikasjad', navKartDetail: 'Kardi Üksikasjad', navSettings: 'Seaded',
  },
};

export function getTranslations(lang: Lang): Translations {
  return langs[lang] ?? langs.it;
}
