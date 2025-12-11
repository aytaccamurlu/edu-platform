import axios from "axios";

const API = "https://edu-platform-backend-9j95.onrender.com/users";

export const login = async (username, password) => {
  const res = await axios.get(API);
  const users = res.data;

  const found = users.find(
    (u) => u.username === username && u.password === password
  );

  if (!found) throw new Error("Geçersiz kullanıcı");

  return found;
};
