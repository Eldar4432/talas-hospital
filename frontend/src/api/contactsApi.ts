import { api } from "./api";

export interface Contact {
  id: number;
  title: string;
  value: string;
}

export const getContacts = async () => {
  const response = await api.get<Contact[]>("/contacts");

  return response.data;
};
