// Simple in-memory visit counter
// Note: This will reset when the server restarts

let visits = 0;

export function incrementVisits(): number {
  visits++;
  return visits;
}

export function getVisits(): number {
  return visits;
}
