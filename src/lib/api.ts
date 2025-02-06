// api.ts
import { Publication, Teaching, ResearcherInfo } from '../types/types';

const API_URL = import.meta.env.VITE_API_URL;
const USER_ID = import.meta.env.VITE_API_USERID;

export async function fetchPublications(): Promise<Publication[]> {
  const response = await fetch(`${API_URL}/publications/user/${USER_ID}`);
  if (!response.ok) {
    throw new Error('Failed to fetch publications');
  }
  return response.json();
}

export async function fetchTeachings(): Promise<Teaching[]> {
  const response = await fetch(`${API_URL}/teaching/user/${USER_ID}`);
  if (!response.ok) {
    throw new Error('Failed to fetch teachings');
  }
  return response.json();
}

export async function fetchResearcherInfo(): Promise<ResearcherInfo> {
  const response = await fetch(`${API_URL}/profiles/${USER_ID}`);
  if (!response.ok) {
    throw new Error('Failed to fetch researcher info');
  }
  return response.json();
}