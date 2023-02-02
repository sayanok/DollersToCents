import React, { useState } from "react";

const App: React.FC = () => {
  const [inputValue, setInputValue] = useState(0);
  const [quarter, setQuarter] = useState(0);
  const [dime, setDime] = useState(0);
  const [nickel, setNickel] = useState(0);
  const [penny, setPenny] = useState(0);
  const [cent, setCent] = useState(0);

  function conversion() {
    let tempQuarter: number = Math.floor(Math.round(inputValue * 100) / 25);
    let tempDime: number;
    let tempNickel: number;
    let tempPenny: number;
    setQuarter(tempQuarter);

    Math.round(inputValue * 100) - tempQuarter * 25 > 10
      ? (tempDime = Math.floor((Math.round(inputValue * 100) - tempQuarter * 25) / 10))
      : (tempDime = 0);
    setDime(tempDime);

    Math.round(inputValue * 100) - (tempQuarter * 25 + tempDime * 10) > 5
      ? (tempNickel = Math.floor((Math.round(inputValue * 100) - (tempQuarter * 25 + tempDime * 10)) / 5))
      : (tempNickel = 0);
    setNickel(tempNickel);

    Math.round(inputValue * 100) - (tempQuarter * 25 + tempDime * 10 + tempNickel * 5) > 0
      ? (tempPenny = Math.round(inputValue * 100) - (tempQuarter * 25 + tempDime * 10 + tempNickel * 5))
      : (tempPenny = 0);
    setPenny(tempPenny);

    setCent(Math.round(inputValue * 100));
  }

  return (
    <>
      <input type={"number"} onChange={(e) => setInputValue(Number(e.target.value))} />
      ドル
      <button onClick={() => conversion()}>変換</button>
      <div>{quarter}クオーター</div>
      <div>{dime}ダイム</div>
      <div>{nickel}ニッケル</div>
      <div>{penny}ペニー</div>
      <div>合計{cent}セント</div>
    </>
  );
};

export default App;
