import { expressAPI } from "../libs/axios";
import { Entry } from "../types/entry.types";

export async function getEntries(userId: string) {
  const response = await expressAPI.get<Entry[]>("/entries", {
    params: { userId },
  });
  return response.data;
}
export async function getEntry(id: string) {
  const response = await expressAPI.get<Entry>(`/entries/${id}`);
  return response.data;
}

export async function getEntryByUsername(profileUsername: string) {
  const response = await expressAPI.get<Entry>("/entries/user", {
    params: { profileUsername },
  });
  return response.data;
}

export async function addEntry(data: Partial<Entry>) {
  const response = await expressAPI.post<Entry>("/entries", data);
  return response.data;
}

export async function deleteEntry(id: string) {
  return await expressAPI.delete<Entry>(`/entries/${id}`);
}
