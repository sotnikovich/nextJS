import Router from "next/router";

export default function Task() {
  const clickHandler = () => {
    Router.push("/");
  };

  return (
    <>
      <h1>Task page</h1>
      <button onClick={clickHandler}>Назад к списку</button>
    </>
  );
}
