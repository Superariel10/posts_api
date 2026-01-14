import React from "react";
import { getUser } from "../services/userService";

export default function UserProfile() {
  const load = async () => {
    await getUser(1);
  };

  return (
    <><div>Cargar usuario</div></>
  );
}