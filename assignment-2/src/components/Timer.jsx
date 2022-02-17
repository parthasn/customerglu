import React, {useEffect} from 'react'

function Timer({status, timeLimit, setTimelimit}) {
    console.log(status, timeLimit)
    
   useEffect(() => {
        
        let interval
        if (status && timeLimit !== 0) {
          interval = setInterval(() => {
            setTimelimit(timeLimit => timeLimit - 1);
          }, 1000);
        } else if (!status && timeLimit === 0) {
          clearInterval(interval);
        }
        return () => clearInterval(interval);
    }, [status, timeLimit])
    
    return (
        <div>
            <h1>{timeLimit}<span style={{fontSize: 16}}>S</span></h1>
        </div>
    )
}

export default Timer
