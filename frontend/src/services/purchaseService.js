import axios from "axios";

const USERS = "https://edu-platform-backend-9j95.onrender.com/users";
const PURCHASES = "https://edu-platform-backend-9j95.onrender.com/purchases";

export const purchaseCourse = async (userId, courseId) => {
  // 1) satın alma kaydı oluştur
  await axios.post(PURCHASES, {
    userId,
    courseId,
    date: new Date().toISOString(),
  });

  // 2) kullanıcıya kursu ekle
  const user = await axios.get(`${USERS}/${userId}`);
  const updated = {
    ...user.data,
    purchasedCourses: [...(user.data.purchasedCourses || []), courseId],
  };

  await axios.put(`${USERS}/${userId}`, updated);

  return true;
};

export const getMyCourses = async (userId) => {
  const user = await axios.get(`${USERS}/${userId}`);
  const courseIds = user.data.purchasedCourses || [];

  const allCourses = await axios.get("https://edu-platform-backend-9j95.onrender.com/courses");

  return allCourses.data.filter((c) => courseIds.includes(c.id));
};
