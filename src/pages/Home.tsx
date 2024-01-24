import React, { useState } from "react";
import Hi from "./Hi";

interface Props {}

const Home: React.FC<Props> = () => {
  const [counter, setCounter] = useState(0);
  return (
    <div
      style={{
        width: "100vw",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      {counter}
      <button
        style={{ width: "100px" }}
        onClick={() => {
          setCounter(counter + 1);
        }}
      >
        +1
      </button>
      변경됨
      <Hi />
    </div>
  );
};

export default Home;
