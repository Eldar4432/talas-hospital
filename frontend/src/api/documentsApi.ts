import { api } from "./api";

export interface Document {
  id: number;
  title: string;
  description: string;
  file: string;
  created_at: string;
}

export const getDocuments = async () => {
  const response = await api.get<Document[]>("/documents");

  return response.data;
};
