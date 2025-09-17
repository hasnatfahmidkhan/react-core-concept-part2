import { Suspense, useState } from "react";
import "./App.css";
import Counter from "./components/Counter";
import Users from "./components/Users";
function App() {
  const fetchUsers = fetch("https://jsonplaceholder.typicode.com/users").then(
    (res) => res.json()
  );
  return (
    <>
      <Suspense
        fallback={<span className="loading loading-dots loading-xl"></span>}
      >
        <Users fetchUsers={fetchUsers}></Users>
      </Suspense>
      <Counter></Counter>
      {/* <Batsman /> */}
    </>
  );
}

export default App;
