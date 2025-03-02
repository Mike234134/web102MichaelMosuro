import './App.css';
import {useState} from "react";

const App = () => {
  const[count,Setcount]=useState(0)
  const [multiplier,Setmultiplier]=useState(1)
  const UpdateClick = () => Setcount(count+multiplier)
  const buyDoubleStuffed = () => {
    if (count >= 10) {
      Setcount(count-10)
      Setmultiplier(multiplier * 2);
    }else if(count<10){
      alert("you dont have enough points for this purchase")

    }
  }
  const buyPartyPack = () => {
    if (count >= 100) {
      Setcount(count-100)
      Setmultiplier(multiplier * 5);
    }else if(count<100){
      alert("you dont have enough points for this purchase")

    }
  }
  const buyFullFeast = () => {
    if (count >= 1000) {
      Setcount(count-1000)
      Setmultiplier(multiplier * 10);
    }else if(count<1000){
      alert("you dont have enough points for this purchase")

    }
  }

  
  return ( 
    <>
    <div className="App">
      <div className="Header">
        <h1>Samosa Clicker</h1>
        <h2>Count {count}</h2>
        
        <img className="Samosa" src="food_16267410.png" onClick={UpdateClick}/>
          <div className="Container">
            <div className="upgrade">
              <h3>Double Stuffed 👯‍♀️</h3>
              <p>2x per click</p>
              <button onClick={buyDoubleStuffed}> 10 Samosas</button>
            </div>
            <div className="upgrade">
              <h3>Party Pack 🎉</h3>
              <p>5x per click</p>
              <button onClick={buyPartyPack}> 100 Samosas</button>
            </div>
            <div className="upgrade">
              <h3>Full Feast 👩🏽‍🍳</h3>
              <p>10x per click</p>
              <button onClick={buyFullFeast}> 1k Samosas</button>
            </div>
           
          </div>
        </div>
      </div>
      
    
      
    
    </>
  )
}
export default App
