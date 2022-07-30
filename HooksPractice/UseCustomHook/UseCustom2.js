import React , {useState} from "react";
import useTitleCount from "./useTitleCount";

function UseCustom2() {
  const [count, setCount] = useState(0);
  useTitleCount(count)
  return (
    <div>
      <div style={{ backgroundColor: "#2980B9", height: "100vh" }}>
        <div
          style={{ paddingTop: "23%" }}
          className="d-flex flex-column align-items-center"
        >
          <h2 className="text-light">{count}</h2>
          <button
            onClick={() => setCount(count + 1)}
            className="btn btn-warning"
          >
            Click Me Again
          </button>
        </div>
      </div>
    </div>
  );
}

export default UseCustom2;
