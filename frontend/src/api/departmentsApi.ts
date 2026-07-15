import { api } from "./api";

export interface Department {
  id: number;
  name: string;
  description: string;
  services: string[];
  schedule: string;
}

export const getDepartments = async () => {
  const response = await api.get<Department[]>("/departments");

  return response.data;
};
