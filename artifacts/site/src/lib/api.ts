const API_BASE = `https://${import.meta.env.VITE_API_DOMAIN || window.location.hostname}/api`;

export function apiUrl(path: string) {
  return `${API_BASE}${path}`;
}

export async function apiFetch(path: string, options?: RequestInit, adminPassword?: string) {
  const headers: Record<string, string> = {
    "Content-Type": "application/json",
    ...(options?.headers as Record<string, string>),
  };
  if (adminPassword) {
    headers["x-admin-password"] = adminPassword;
  }
  const res = await fetch(apiUrl(path), { ...options, headers });
  return res;
}
