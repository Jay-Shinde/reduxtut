import "./App.css";
import Counter from "./compo/counter";
import { useDispatch } from "react-redux";
function App() {
  const dispatch = useDispatch();
  const style = {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: "100vh",
  };
  return (
    <div className="App" style={style}>
      <button onClick={(e)=>{dispatch({type:'INCR'})}}>INCR</button>
      <Counter/>
      <button onClick={(e)=>{dispatch({type:'DECR'})}}>DECR</button>
    </div>
  );
}

export default App;
