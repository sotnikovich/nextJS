import Router from "next/router";

export default function Model() {
  const clickHandler = () => {
    Router.push("/");
  };

  return (
    <>
      <h1>Model page</h1>
      <button onClick={clickHandler}>Назад к списку</button>
    </>
  );
}
