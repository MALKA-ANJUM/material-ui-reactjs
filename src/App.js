import { useState } from "react";
import "./App.css";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import Button from "@mui/material/Button";
import Tooltip from "@mui/material/Tooltip";
import Clock from "react-digital-clock";

function App() {
  const [count, setCount] = useState(0);

  const handleChange = (e) => {
    setCount(e.target.value);
  };
  const incre = () => {
    setCount(count + 1);
  };

  const decre = () => {
    if (count > 0) {
      setCount(count - 1);
    } else {
      alert("You reach the limit!");
    }
  };
  return (
    <div className="main_div">
      <div className="center_div">
        <Button variant="contained" color="primary">
          <Clock />
        </Button>
        <br />
        <h1 onChange={handleChange}>{count}</h1>
        <div className="btn_div">
          <Tooltip title="Increment">
            <Button variant="contained" color="success" onClick={incre}>
              <AddIcon></AddIcon>
            </Button>
          </Tooltip>

          <Tooltip title="Decrement">
            <Button variant="contained" color="error" onClick={decre}>
              <RemoveIcon></RemoveIcon>
            </Button>
          </Tooltip>
        </div>
      </div>
    </div>
  );
}

export default App;
