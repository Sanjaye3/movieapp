 
import { useState } from "react";
import Button from '@mui/material/Button';
 
import "C:\\Users\\sanja\\Desktop\\movie\\my-app\\src\\ColorBox.css";
export function ColorBox() {

const [color,setColor] = useState("green");

const [colorList,setColorList] = useState(["pink","orange"])

    let styles={
        background: color,
        fontSize:"24px",
        marginLeft:"50px",
        height:"50px",
        width:"300px",
    }


    return(
        <div>

         <h1>ColorBox</h1>   

            <input placeholder="Enter a color " style={styles} onChange={(event) => setColor(event.target.value)}/>

            {/* <button onClick={()=>  setColorList([...colorList,color]) } >Add color</button> */}
            <Button variant="contained" onClick= {()=>  setColorList([...colorList,color]) } 
             
             

       >Add Color</Button>

             {colorList.map((item)=> (
                <Addcolor clr={item} />
             ))}
        </div>
    )
}

function Addcolor({clr}){
    const styles ={
        background: clr,
        height:"50px",
        width:"300px",
        marginTop:"20px"

    }

    return(
        <div style={styles} className="list">


        </div>
    )
}