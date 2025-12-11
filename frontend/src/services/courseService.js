import axios from "axios";

const API = "https://edu-platform-backend-9j95.onrender.com/courses";

export const getCourses = async () => {
  const res = await axios.get(API);
  return res.data;
};

export const getCourseById = async (id) => {
  const res = await axios.get(`${API}/${id}`);
  return res.data;
};
