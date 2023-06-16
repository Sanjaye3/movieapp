import { useState } from "react";
import './Counter.css';

import ThumbUpIcon from '@mui/icons-material/ThumbUp';

 

export function Counter() {
  const [like, setLike] = useState(0);
  // const[state,setState] = useState(initialvalue);
  const [dislike, setDisLike] = useState(0);
  return (
    <div>
      {/* 👍 */}
      <button className='btn' onClick={() => setLike(like + 1)}>  <ThumbUpIcon fontSize="small"/> <span>{like}</span> </button>

      <button className='btn' onClick={() => setDisLike(dislike + 1)}>👎{dislike} </button>
    </div>
  );
}
