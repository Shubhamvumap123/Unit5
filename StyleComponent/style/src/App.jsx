import logo from './logo.svg';
import './App.css';
import styled from "styled-components";
import {Button} from "./component/Button";

function App() {
  
  return (
    <div className="App">
      <h3>Count:0</h3>
   <Button onClick={()=>{
     alert("click on primary");
   }}>𝔓𝔯𝔦𝔪𝔞𝔯𝔶 𝔅𝔲𝔱𝔱𝔬𝔫</Button>
    <Button onClick={()=>{
     alert("click on Default");
   }}>𝔇𝔢𝔣𝔞𝔲𝔩𝔱 𝔅𝔲𝔱𝔱𝔬𝔫</Button>
    <Button onClick={()=>{
     alert("click on Dashed");
   }}>𝔇𝔞𝔰𝔥𝔢𝔡 𝔅𝔲𝔱𝔱𝔬𝔫</Button>
   <Button onClick={()=>{
     alert("click on text");
   }}>text 𝔅𝔲𝔱𝔱𝔬𝔫</Button>
   <Button onClick={()=>{
     alert("click on link");
   }}>link 𝔅𝔲𝔱𝔱𝔬𝔫</Button>
    </div>
  );
}

export default App;
