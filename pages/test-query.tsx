import useGetQuery from "@/hooks/useGetQuery";
import { useRouter } from "next/router";
import React, { useEffect } from "react";

function TestQuery() {
  const router = useRouter();

  const queries = useGetQuery();

  useEffect(() => {
    console.log(queries);
  }, [queries]);
  return (
    <div>
      <button
        onClick={() =>
          router.push("/test-query", {
            query: {
              test: "1",
            },
          })
        }
      >
        click1
      </button>
      <button
        onClick={() =>
          router.push({
            pathname: "/test-query",
            query: {
                test: "2"
            }
          })
        }
      >
        click2
      </button>
      <button
        onClick={() =>
          router.push({
            pathname: "/test-query",
            query: {
                test: "3"
            }
          })
        }
      >
        click3
      </button>
    </div>
  );
}

export default TestQuery;
