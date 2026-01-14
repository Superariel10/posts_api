import axios from "axios";

export type User = {
  id: number;
  name: string;
};

export async function getUser(id: number): Promise {
  const res = await axios.get(`/api/users/${id}`);
  return res.data;
}