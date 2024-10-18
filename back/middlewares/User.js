import jwt from "jsonwebtoken";
export default async function isAuth(req, res, next) {
  const token = req.headers.authorization;
  if (!token) {
    return res.send({ error: "Token is missing" });
  }
  try {
    const data = jwt.verify(token, "securise");
    req.userId = data.userId;
    next();
  } catch (error) {
    res.send({ error: "Token invalid" });
  }
}
