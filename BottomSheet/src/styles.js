const styles = {
    container: {
      position: "fixed",
      display: "flex",
      flexDirection: "column",
      justifyContent: "flex-end",
      zIndex: 21,
      top: 0,
      right: 0,
      bottom: 0,
      left: 0,
      width: "100%",
      overflow: "hidden"
    },
    backgroundContainer: {
      position: "absolute",
      zIndex: 1,
      top: 0,
      right: 0,
      bottom: 0,
      left: 0,
      backgroundColor: "rgba(0,0,0,.5)"
    },
    list: {
      position: "relative",
      zIndex: 2,
      listStyle: "none",
      margin: 0,
      padding: 10,
      backgroundColor: "#fff",
      boxShadow: "0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24)",
      left: "25%",
      display: "flex",
      flexDirection: "column",
      textAlign: "left",
      width: "50%",
    },
    button: {
        padding: 20,
        margin: 20,
        backgroundColor: "#348feb",
        color: "white",
        fontWeight: 600,
        border: "none",
        borderRadius: 5,
    },
    app_maindiv: {
        textAlign: "center",
        
    }
    
  };
  
  export default styles;
  