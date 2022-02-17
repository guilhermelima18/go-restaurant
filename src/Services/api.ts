import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:5000",
});

export const GET_FOODS = async () => {
  const response = await api.get("/foods");

  return response;
};

export const GET_FOOD = async (id: string) => {
  const response = await api.get(`/foods/${id}`);

  return response;
};

export const CREATE_FOOD = async (productParams: any) => {
  await api.post("/foods", productParams);
};

export const EDIT_FOOD = async (productParams: any) => {
  await api.put(`/foods/${productParams.id}`, productParams);
};

export const DELETE_FOOD = async (id: number) => {
  await api.delete(`/foods/${id}`);
};
