import { useState } from "react";

export function Counter() {
  const [like, setLike] = useState(0);
  // const[state,setState] = useState(initialvalue);
  const [dislike, setDisLike] = useState(0);
  return (
    <div>
      <button className='btn' onClick={() => setLike(like + 1)}> 👍{like} </button>

      <button className='btn' onClick={() => setDisLike(dislike + 1)}>👎{dislike} </button>
    </div>
  );
}
