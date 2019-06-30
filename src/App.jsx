import React, { memo, useState } from 'react';
import './App.css';
import { debounce } from 'lodash';

const App = () => {
  const [value, setValue] = useState(``);

  const [gift, setGift] = useState(false);
  
  const [cake, setCake] = useState(false);

  const processInput = debounce(text => {
    switch (text) {
      case "20.07.98": {
        setValue(`あなたが生まれた日`);
        setGift(false);
        setCake(false);
        break;
      }
      case "20.07.19": {
        setValue(`あなたが21歳になる日`);
        setGift(false);
        setCake(false);
        break;
      }
      case "03.07.19": {
        setValue(`今日は君の誕生日ではないが、こんな適切な時もナイン恐れがるから、言いたいことがるんです。
        “あなたは才能があって、素敵な人だ。僕が信じる”。
        週末の試験、頑張ろう`);
        setGift(true);
        setCake(false);
        break;
      }
      default: {
        setValue(``);
        setGift(false);
        setCake(false);
        break;
      }
    }
  }, 250);

  const theCake = cake && 
    <div>
      <img src="https://media.static-adayroi.com/sys_master/hcd/hf8/15973474795550.jpg" alt="cake" width="100%" />
      <h5>Happy Birthday</h5>
    </div>

  const showCake = () => setCake(true);

  const giftBtn = gift && <button className="btn btn-primary btn-lg mb-3" onClick={showCake}>Gift</button>

  return (
    <div className="App">
      <div className="row">
        <div className="col-1"></div>
        <div className="col-10 text-center">
          <div className="input-group my-3">
            <div className="input-group-prepend">
              <span className="input-group-text" id="basic-addon1">Input</span>
            </div>
            <input type="text" className="form-control" onChange={event => processInput(event.target.value)} />
          </div>
          <div className="text-left mb-3">
            <h4>{value}</h4>
          </div>
          {giftBtn}
          {theCake}
        </div>
        <div className="col-1"></div>
      </div>
    </div>
  );
}

export default memo(App);
