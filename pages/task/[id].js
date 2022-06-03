import Router from "next/router";

export default function Task({ task }) {
  const clickHandler = () => {
    Router.push("/");
  };

  return (
    <>
      <h1>{task.title}</h1>
      <hr />
      <p>{task.body}</p>
      <p>{task.date}</p>
      <button onClick={clickHandler}>Назад к списку</button>
    </>
  );
}

Task.getInitialProps = async (ctx) => {
  const response = await fetch(`http://localhost:4200/tasks/${ctx.query.id}`);
  const task = await response.json();
  return {
    task,
  };
};
