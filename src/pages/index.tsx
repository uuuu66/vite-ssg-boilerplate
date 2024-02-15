import { useState } from "react";

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
      <input value={counter} />
      <button
        style={{ width: "100px" }}
        onClick={() => {
          setCounter(counter + 1);
        }}
      >
        +1
      </button>
      변경됨
    </div>
  );
};

export default Home;
