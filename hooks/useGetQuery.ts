import { useRouter } from "next/router";
import { ParsedUrlQuery } from "querystring";
import React, { useEffect, useState } from "react";


function useGetQuery() {
  const router = useRouter();
  const [queries, setQueries] = useState<ParsedUrlQuery>({});

  useEffect(() => {
    if (router.query) {
      setQueries(router.query);
    //   dispatch(setQueries(router.query))
    }
  }, [router.query]);
  return queries;
}

export default useGetQuery;
