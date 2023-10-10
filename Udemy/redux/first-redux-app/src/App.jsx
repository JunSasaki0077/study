import { useDispatch, useSelector } from "react-redux";
import "./App.css";
import { decrement, increment, login } from "./actions";

function App() {
  const counter = useSelector((state) => state.counter);
  const isLogin = useSelector((state) => state.isLogin);
  const dispatch = useDispatch();

  return (
    <div className="App">
      <h1>Hello redux</h1>
      <h3>カウント:{counter}</h3>
      <button onClick={() => dispatch(increment(7))}>+</button>
      <button onClick={() => dispatch(decrement())}>-</button>
      {isLogin ? <h3>ログイン成功</h3> : <h3>ログインしてください</h3>}
      <button onClick={() => dispatch(login())}> ログインor ログアウト</button>
    </div>
  );
}

export default App;
