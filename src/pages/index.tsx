import React, { useState, useEffect } from "react";
import axios from "axios";

export default function Home() {
  const [data, setData] = useState();

  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get("/api/v1/test");
      setData(response.data);
      return response;
    };

    fetchData();
  }, []);

  console.log(data);

  return <div>data:{data}</div>;
}
