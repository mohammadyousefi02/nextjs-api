import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";

function Admin() {
  interface User {
    username: string;
    password: string;
  }
  const router = useRouter();
  const [user, setUser] = useState<User>();
  useEffect(() => {
    if (window) {
      //   const token = localStorage.getItem("token");

      //   if (!token) router.push("/");

      // const user = {
      //     username: "test",
      //     password: "test1234"
      // }

      // localStorage.setItem("user", JSON.stringify(user))
      const user = (JSON.parse(localStorage.getItem("user") as string) ||
        {}) as User;

      setUser(user);
    }
  }, []);

  return (
    <>
      {user ? (
        <div>
          <p>{user?.username}</p>
          <p>{user?.password}</p>
        </div>
      ) : (
        <h1>loading</h1>
      )}
    </>
  );
}

export default Admin;
