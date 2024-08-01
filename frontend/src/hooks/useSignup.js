import { useState } from "react";
import toast from "react-hot-toast";
import { useAuthContext } from "../contexts/AuthContext";

const useSignup = () => {
  const [loading, setLoading] = useState(false);
  const { setAuthUser } = useAuthContext();

  const signup = async ({
    fullName,
    username,
    password,
    confirmPassword,
    gender,
  }) => {
    const success = handleInputErrors({
      fullName,
      username,
      password,
      confirmPassword,
    });
    let data;

    if (!success) return;

    if (gender === "") {
      data = {
        fullName,
        username,
        password,
        confirmPassword,
      };
    } else {
      data = {
        fullName,
        username,
        password,
        confirmPassword,
        gender,
      };
    }

    setLoading(true);
    try {
      const res = await fetch("/api/auth/signup", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      const response = await res.json();
      if (response.error) throw new Error(response.error);

      localStorage.setItem("user-info", JSON.stringify(response));
      setAuthUser(response);
    } catch (error) {
      toast.error(error.message);
    } finally {
      setLoading(false);
    }
  };

  return { loading, signup };
};

export default useSignup;

function handleInputErrors({ fullName, username, password, confirmPassword }) {
  if (!fullName || !username || !password || !confirmPassword) {
    toast.error("Missing required fields!");
    return false;
  }

  if (password !== confirmPassword) {
    toast.error("Passwords do not match!");
    return false;
  }

  if (password.length < 8) {
    toast.error("Password must be at least 8 characters!");
    return false;
  }

  return true;
}
