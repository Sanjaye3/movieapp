 
import { useState } from "react";

 

export function ColorBox() {

const [color,setColor] = useState("green");

const [colorList,setColorList] = useState(["pink","orange"])

    let styles={
        background: color,
        fontSize:"24px"
    }


    return(
        <div>

            colorbox

            <input placeholder="Enter a color " style={styles} onChange={(event) => setColor(event.target.value)}/>

            <button onClick={()=>  setColorList([...colorList,color]) }>Add color</button>

             {colorList.map((item)=> (
                <Addcolor clr={item} />
             ))}
        </div>
    )
}

function Addcolor({clr}){
    const styles ={
        background: clr,
        height:"40px",
        width:"100px",
        marginTop:"20px"

    }

    return(
        <div style={styles}>


        </div>
    )
}