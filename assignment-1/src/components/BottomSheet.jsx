import React from 'react'
import { Motion, spring } from "react-motion"
import styles from "../styles";


function BottomSheet(props) {
    const {handleAnimate, opacity, translate, displaySheet, displayData} = props
    return (
        <div>
            <Motion
                style={{
                    opacity: spring(opacity),
                    translate: spring(translate)
                }}
            >
                {
                    ({opacity, translate}) => {
                        return (
                            (
                                <div
                                    style={Object.assign({}, styles.container, {
                                        visibility: displaySheet
                                    })}
                                    onClick={handleAnimate}
                                >
                                    <div
                                        style={Object.assign({}, styles.backgroundContainer, {
                                            opacity: opacity
                                        })}
                                    />
                                    <div
                                    style={Object.assign({}, styles.list, {
                                        transform: `translateY(${translate}%)`
                                    })}
                                    >
                                
                                        {
                                            displayData && displayData.map((item, id) => {
                                                return (
                                                    <div key={id}>
                                                        <p style={{marginBottom: 0,fontSize: 20, fontWeight: 600}}>{item.heading}</p>
                                                        <p style={{marginTop: 5}}>{item.instruction}</p>
                                                    </div>
                                                )
                                            })
                                        } 
        
                                    </div>
                            
                                </div>
                            )
                        )
                    }
                        
                    
                }

            </Motion>
            
        </div>
    )
}

export default BottomSheet
