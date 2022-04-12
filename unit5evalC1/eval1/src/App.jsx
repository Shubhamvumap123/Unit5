import {useState} from "react"
// export const App()

function App() {

const[counter,setcounter] = useState(0)
const[counter1,setcounter1] = useState(0)
const[counter2,setcounter2] = useState(0)

  return (
    <div className="App">
      <h3>India:</h3>
      <div className="banner">
        <div>
          Score:{counter}
          <h1 className="scoreCount">
            {
myscore(value)
              // show "score" here
            }
          </h1>
        </div>
        <div>
          Wicket:{mywicket(value)}
          <h1 className="wicketCount">
            {
mywicket(value)
              // show wicket here
            }
          </h1>
        </div>

        <div>
          Over:{myball (value)}
          <h1 className="overCount">
            {

              // Show Over here in the format: "over.ball" eg: 4.5 means 4th over and 5th ball
              // if 1 more ball is thrown then over is now 5.0
              // you have to write logic to form this string from current ball number.
            }
          </h1>
        </div>
      </div>

      <div className="addScore">
        Add Score
        {/* these buttons should add the respective amount in the score */}
        <button onClick={()=>{myscore(1)}} className="addScore1">Add 1</button>
        <button onClick={()=>{myscore(4)}} className="addScore4">Add 4</button>
        <button onClick={()=>{myscore(6)}}  className="addScore6">Add 6</button>
      </div>

      <div className="addWicket">
        Add Wicket
        {/* Increase the count of wicket */}
        <button>Add 1 wicket</button>
      </div>

      <div className="addBall">
        Add ball
        
        {/* Increase the total number of balls thrown here. */}
        <button onClick={()=>setCounter2(counter2+0.1)}>Add 1</button>
      </div>

      {/* If score reaches greater than 100, show text "India Won" without quotes in h1 tag with class name 'status' */}
    </div>
  );
}

export default App;
