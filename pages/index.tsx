import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.css";
import { useEffect } from "react";
import { request } from "../util/request";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <div>
      {/* universal coockies */}
      <button
        onClick={async () => {
          const res = await request.get("/get-token");
          console.log(res.data);
          localStorage.setItem("accessToken", res.data.accessToken);
          localStorage.setItem("refreshToken", res.data.refreshToken);
        }}
      >
        get tokens
      </button>

      <button
        onClick={async () => {
          try {
            const accessToken = localStorage.getItem("accessToken");
            const res = await request.post(
              "/test-access-token",
              {},
              {
                headers: {
                  Authorization: accessToken + "1",
                },
              }
            );
            console.log(res.data);
          } catch (error) {
            console.log(error);
          }
        }}
      >
        test-access-token
      </button>

      <button
        onClick={async () => {
          try {
            const refreshToken = localStorage.getItem("refreshToken");
            const res = await request.post(
              "/get-new-token",
              {},
              {
                headers: {
                  Authorization: refreshToken,
                },
              }
            );
            console.log(res.data);
            localStorage.setItem("accessToken", res.data.accessToken);
            localStorage.setItem("refreshToken", res.data.refreshToken);
          } catch (error) {
            // localStorage.removeItem("accessToken");
            // localStorage.removeItem("refreshToken");
            // window.location.href = "/login"
          }
        }}
      >
        test refresh token
      </button>
    </div>
  );
}

// export default function Home() {
//   useEffect(() => {
//     (async () => {
//       const res = await axios.get("/api/products/2");
//       console.log(res.data);
//     })();
//   });
//   return (
//     <>
//       <h1>test</h1>
//       <button
//         onClick={async () => {
//           const res = await axios.get("/api/cart");
//           console.log(res.data);
//         }}
//       >
//         get
//       </button>
//       <button
//         onClick={async () => {
//           const res = await axios.post("/api/cart", { id: 2 });
//           console.log(res.data);
//         }}
//       >
//         post
//       </button>

//       <button
//         onClick={async () => {
//           const res = await axios.get("/api/hello");
//           console.log(res.data);
//         }}
//       >
//         getUSers
//       </button>
//       <button
//         onClick={async () => {
//           const res = await axios.put("/api/hello", {
//             id: 2,
//             name: "mamad",
//           });
//           console.log(res.data);
//         }}
//       >
//         edit user
//       </button>
//     </>
//   );
// }

// export const getServerSideProps = () => {
//   // ...
//   process.env.NODE_ENV === "developement" ?
//   "http://localhost:port/api/endpoint" :
//   "felan.vercel.com"
// }
