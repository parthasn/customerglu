import React, {useState, useEffect} from 'react';
import BottomSheet from './components/BottomSheet';
import styles from "./styles";

function App() {
  const [ opacity, setOpacity ] = useState(0);
  const [ translate, setTranslate ] = useState(100);
  const [ displaySheet, setDisplaySheet ] = useState("hidden");

  const displayData = [
      {
          heading: "Google Keep",
          instruction: "Add to a note"
      },
      {
        heading: "Google Docs",
        instruction: "Embed in a document"
    },
    {
        heading: "Google plus",
        instruction: "Share with your friends"
    },
    {
        heading: "Google Hangouts",
        instruction: "Show to your coworkers"
    },
  ]

  useEffect(() => {
    if(opacity === 0){
        setTimeout(() => {
            setDisplaySheet("hidden")
        }, 300)
    }
    else {
        setDisplaySheet("visible")
    }
}, [opacity])

  const handleAnimate = () => {
        
    setOpacity(opacity === 1.0 ? 0 : 1.0);
    setTranslate(opacity === 0 ? 0 : 100);

}
  return (
    <div style={styles.app_maindiv}>
        <button
            style={styles.button}
            onClick={handleAnimate}
        >
            Click Me!
        </button>
        <BottomSheet
            handleAnimate={handleAnimate}
            opacity = {opacity}
            translate={translate}
            displaySheet= {displaySheet}
            displayData={displayData}
        />
    </div>
  );
}

export default App;
