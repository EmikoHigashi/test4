import React, { useEffect, useState } from "react";

const App = () => {
  const [num, setNum] = useState(0);
  const [faceShowFlag, setFaceShowFlag] = useState(true);

  const onClickCountUp = () => {
    setNum(num + 1);
  };

  const onClickSwitchShowFlag = () => {
    setFaceShowFlag(!faceShowFlag);
  };

  useEffect(() => {
    if (num > 0) {
      if (num % 3 === 0) {
        faceShowFlag || setFaceShowFlag(true);
      } else {
        faceShowFlag && setFaceShowFlag(false);
      }
    }
    console.log("useEffect!!");
  }, [num]);

  return (
    <>
      <h1> hello </h1>
      <button onClick={onClickCountUp}> count up</button>
      <br />
      <button onClick={onClickSwitchShowFlag}> on/off </button>
      <p>{num}</p>
      {faceShowFlag && <p> wow </p>}
    </>
  );
};

export default App;
