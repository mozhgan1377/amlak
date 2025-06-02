

import {
  generateAccessToken,
  verifyToken,
  hashPassword,
  comparePassword,
} from "./src/services/authService.js";

const fakeUser = {
  id: "123",
  role: "admin",
};

async function runTests() {
  // 🔐 تست JWT Access Token
  const accessToken = generateAccessToken(fakeUser);
  console.log("✅ Access Token:", accessToken);

  const verified = verifyToken(accessToken);
  if (verified && verified.id === fakeUser.id) {
    console.log("✅ Token verified:", verified);
  } else {
    console.error("❌ Token verification failed!");
  }

  // 🔐 تست Hash و Compare پسورد
  const password = "mySecret123";
  const hashed = await hashPassword(password);
  console.log("✅ Hashed Password:", hashed);

  const isMatch = await comparePassword(password, hashed);
  if (isMatch) {
    console.log("✅ Password match!");
  } else {
    console.error("❌ Password mismatch!");
  }
}

runTests();
