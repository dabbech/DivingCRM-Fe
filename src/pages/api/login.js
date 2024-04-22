// pages/api/login.js

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ message: "Method Not Allowed" });
  }

  const { email, password } = req.body;

  try {
    // Send login credentials to Spring Boot backend for authentication
    const response = await fetch(
      "http://localhost:8082/api/v1/auth/authenticate",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }),
      }
    );

    if (!response.ok) {
      throw new Error("Invalid credentials");
    }

    const data = await response.json();
    // Return authentication response to the client
    res.status(200).json(data);
  } catch (error) {
    console.error("Login error:", error.message);
    res.status(500).json({ message: "Internal Server Error" });
  }
}
