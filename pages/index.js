import Head from "next/head";
import Link from "next/link";

export default function Index({ tasks }) {
  return (
    <>
      <Head>
        <title>Список задач</title>
      </Head>
      <h1>Список задач</h1>
      <ul>
        {tasks.map((task) => (
          <li key={task.id}>
            <Link href={`/task/${task.id}`}>
              <a>{task.title}</a>
            </Link>
          </li>
        ))}
      </ul>
    </>
  );
}

Index.getInitialProps = async () => {
  const response = await fetch("http://localhost:4200/tasks");
  const tasks = await response.json();
  return {
    tasks,
  };
};
