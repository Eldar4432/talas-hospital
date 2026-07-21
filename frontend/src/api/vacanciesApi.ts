import { api } from "./api";

export interface Vacancy {
  id: number;
  title: string;
  department: string;
  employment_type: string;
  experience: string;
  education: string;
  salary: string;
  description: string;
  requirements: string;
  conditions: string;
  apply_url: string;
  is_active: boolean;
  created_at: string;
}

export async function getVacancies() {
  const response = await api.get<Vacancy[]>("/vacancies");

  return response.data;
}
