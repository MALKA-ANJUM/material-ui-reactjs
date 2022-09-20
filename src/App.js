import { useState } from "react";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  const handleChange = (e) => {
    setCount(e.target.value);
  };
  const incre = () => {
    setCount(count + 1);
  };

  const decre = () => {
    if(count > 0){
      setCount(count - 1);
    }else{
      alert("You reach the limit!")
    }
   
  };
  return (
    <div className="main_div">
      <div className="center_div">
        <h1 onChange={handleChange}>{count}</h1>
        <div className="btn_div">
          <button className="increment" onClick={incre}>
            Increment
          </button>
          <button className="decrement" onClick={decre}>
            Decrement
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
