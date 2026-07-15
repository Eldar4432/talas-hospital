import { api } from "./api";

export interface Doctor {
  id: number;
  name: string;
  position: string;
  experience: string;
  education: string;
  image: string;
}

export const getDoctors = async () => {
  const response = await api.get<Doctor[]>("/doctors");

  return response.data;
};
