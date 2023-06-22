import { useState } from "react";
import './Counter.css';

import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import IconButton from '@mui/material/IconButton';
import Badge from '@mui/material/Badge';
import MailIcon from '@mui/icons-material/Mail';  
 

 

export function Counter() {
  const [like, setLike] = useState(0);
  // const[state,setState] = useState(initialvalue);
  const [dislike, setDisLike] = useState(0);
  return (
    <div>
      {/* 👍 */}
      <IconButton aria-label="like" className='btn'color="primary" onClick={() => setLike(like + 1)}>
      👍  
      <Badge badgeContent={like} color="primary">
       
      </Badge>

      </IconButton>

      



      <IconButton aria-label="dislike" className='btn' color="error" onClick={() => setDisLike(dislike + 1)}>
      👎 
      <Badge badgeContent={dislike} color="error">
       
      </Badge>


      </IconButton>

        {/* <button className='btn' onClick={() => setLike(like + 1)}>  <ThumbUpIcon fontSize="small"/> <span>{like}</span> </button>

      <button className='btn' onClick={() => setDisLike(dislike + 1)}>👎{dislike} </button> */}
    </div>
  );
}
