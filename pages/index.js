import Head from "next/head";
import { useEffect, useState } from "react";

export default function Index() {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    async function load() {
      const response = await fetch("http://localhost:4200/tasks");
      const json = await response.json();
      setTasks(json);
    }
    load();
  }, []);

  return (
    <>
      <Head>
        <title>Список задач</title>
      </Head>
      <h1>Список задач</h1>
      <ul>{JSON.stringify(tasks)}</ul>
    </>
  );
}
