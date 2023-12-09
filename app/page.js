"use client";

import UserInfo from "@/components/UserInfo";
import UserList from "@/components/UserList";
import axios from "axios";
import Image from "next/image";
import { useEffect, useState } from "react";

export default function Home() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [current, setCurrent] = useState(null);

  useEffect(() => {
    const getData = async () => {
      setLoading(true);
      return await axios.get(
        "https://602e7c2c4410730017c50b9d.mockapi.io/users"
      );
    };

    getData()
      .then((res) => {
        console.log(loading);
        setData(res.data);
        setLoading(false);
        console.log(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <main className="flex flex-col-reverse lg:flex-row min-h-screen bg-white items-center justify-between">
      {/* users */}
      <div
        style={{ backgroundImage: 'url("https://images.unsplash.com/photo-1557672172-298e090bd0f1?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D")' }}
        className="w-full lg:w-2/5 h-3/4 lg:h-screen bg-red-300 lg:p-16"
      >
        <UserList current={current} setCurrent={(e) => setCurrent(e)} data={data} loading={loading} />
      </div>

      {/* user data */}
      <div className="w-full flex-shrink-0 lg:w-3/5">
        <UserInfo current={current} />
      </div>

      {/* <div className="relative flex place-items-center before:absolute before:h-[300px] before:w-[480px] before:-translate-x-1/2 before:rounded-full before:bg-gradient-radial before:from-white before:to-transparent before:blur-2xl before:content-[''] after:absolute after:-z-20 after:h-[180px] after:w-[240px] after:translate-x-1/3 after:bg-gradient-conic after:from-sky-200 after:via-blue-200 after:blur-2xl after:content-[''] before:dark:bg-gradient-to-br before:dark:from-transparent before:dark:to-blue-700 before:dark:opacity-10 after:dark:from-sky-900 after:dark:via-[#0141ff] after:dark:opacity-40 before:lg:h-[360px] z-[-1]">
        <Image
          className="relative dark:drop-shadow-[0_0_0.3rem_#ffffff70] dark:invert"
          src="/next.svg"
          alt="Next.js Logo"
          width={180}
          height={37}
          priority
        /> 
      </div> */}
    </main>
  );
}

