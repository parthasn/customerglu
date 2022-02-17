import React, {useState} from 'react'
import './App.css';
import Timer from "./components/Timer"

function App() {
    const [ status, setStatus ] = useState(false);
    const [ timeLimit, setTimelimit ] = useState(0);
    
    const handleStatus = () => {
        setStatus(!status)
    }    
    const handleChange = (e) => {
        setTimelimit(Number(e.target.value))
    }

    const handleReset = () => {
        setStatus(false)
        setTimelimit(0)
        document.getElementById('input').value = ''
    }
    
    return (
        <div className="App">
            <div>
                <input placeholder="Enter Time Limit" id="input" onChange={handleChange}/>
            </div>
            <Timer
                status={status}
                timeLimit={timeLimit}
                setTimelimit={setTimelimit}
            />
            <div>
                <button style={{margin: 10}} onClick={handleStatus}>{status? "PAUSE" : "PLAY"}</button>
                <button style={{margin: 10}} onClick={handleReset}>RESET</button>
            </div>
        </div>
    );
}

export default App;
