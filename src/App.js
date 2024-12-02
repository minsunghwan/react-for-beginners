import Button from "./Button";
import styles from "./App.module.css";
import { useState, useEffect } from "react";

function App() {
  //useEeffect study
  const [counter, setCounter] = useState(0);
  const [keyword, setKeyword] = useState("");

  const onChange = (event) => {
    setKeyword(event.target.value);
  };

  const onClick = () => {
    setCounter((prev) => prev + 1);
  };

  console.log("I run all the time");
  // console.log("SEARCH FOR  ", keyword);//useEffect를 사용하지 않아 클릭 버튼 클릭해도 input박스가 리랜더링 된다.

  useEffect(() => {
    if (keyword !== "" && keyword.length >= 5)
      console.log("SEARCH FOR  ", keyword);
  }, [keyword]);
  //useEffect로 콘솔로그가 처음에 한번찍히 겠지만 keyword가 바뀔때는 다시 리랜더링 해줘.

  const iRunOnlyOne = () => {
    console.log("i run only once.");
  };

  useEffect(iRunOnlyOne, []);
  useEffect(() => {
    console.log("CALL THE API....");
  }, []);

  //cleanup study
  const [showing, setShowing] = useState(false);

  const onClickShow = () => {
    setShowing((prev) => !prev);
  };

  function Hello() {
    useEffect(() => {
      console.log("created :) ");
      return () => console.log("bye :( ");
    }, []);
    return <h1>Hello</h1>;
  }

  return (
    <div>
      <h1 className={styles.title}>Welcom back!!!</h1>
      <Button text={"Continue"} />
      <hr />

      <input
        value={keyword}
        onChange={onChange}
        type="text"
        placeholder="Search here...."
      ></input>
      <h1>{counter}</h1>
      <button onClick={onClick}>Click me</button>
      <hr />

      {showing ? <Hello /> : null}
      <button onClick={onClickShow}>{showing ? "Hide" : "Show"}</button>
    </div>
  );
}

export default App;
