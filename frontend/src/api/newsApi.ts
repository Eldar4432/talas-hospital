import { api } from "./api";

export interface News {
  id: number;
  title: string;
  date: string;
  text: string;
  image: string;
}

export const getNews = async () => {
  const response = await api.get<News[]>("/news");

  return response.data;
};
