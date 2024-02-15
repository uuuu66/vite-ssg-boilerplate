import { useState } from "react";
import { useNavigate } from "react-router-dom";

interface Props {}

const Home: React.FC<Props> = () => {
  const [counter, setCounter] = useState(0);
  const navigate = useNavigate();
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
      <button
        onClick={() => {
          navigate("hi");
        }}
      >
        to hi
      </button>
    </div>
  );
};

export default Home;
