import { api } from "./api";

export interface HospitalInfo {
  id: number;
  name: string;
  description: string;
  history: string;
  mission: string;
  values: string;
  development: string;
}

export const getHospitalInfo = async () => {
  const response = await api.get<HospitalInfo>("/hospital-info");

  return response.data;
};
