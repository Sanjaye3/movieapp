import logo from './logo.svg';
import './App.css';
import { Counter } from './Counter';
import { useState } from 'react';
import {ColorBox} from "C:\\Users\\sanja\\Desktop\\movie\\my-app\\src\\ColorBox.js";
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import ExpandLessIcon from '@mui/icons-material/ExpandLess';
import IconButton from '@mui/material/IconButton';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { Route,Routes, Link, BrowserRouter as Router, NavLink, useNavigate} from 'react-router-dom';
import InfoIcon from '@mui/icons-material/Info';
import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
 
 
import MenuIcon from '@mui/icons-material/Menu';
 

 
const Initial_Movie_List = [{

  name: "Vikram",
  poster:
  "https://m.media-amazon.com/images/M/MV5BMmJhYTYxMGEtNjQ5NS00MWZiLWEwN2ItYjJmMWE2YTU1YWYxXkEyXkFqcGdeQXVyMTEzNzg0Mjkx._V1_.jpg",
  rating: 8.4,
  summary:
  "Members of a black ops team must track and eliminate a gang of masked murderers.",
  
  },
  {
  name: "RRR",
  poster:
  "https://englishtribuneimages.blob.core.windows.net/gallary-content/2021/6/Desk/2021_6$largeimg_977224513.JPG",
  rating: 8.8,
  summary:
  "RRR is an upcoming Indian Telugu-language period action drama film directed by S. S. Rajamouli, and produced by D. V. V. Danayya of DVV Entertainments.",
  
  },
  {
  name: "Iron man 2",
  poster:
  "https://m.media-amazon.com/images/M/MV5BMTM0MDgwNjMyMl5BMl5BanBnXkFtZTcwNTg3NzAzMw@@._V1_FMjpg_UX1000_.jpg",
  rating: 7,
  summary:
  "With the world now aware that he is Iron Man, billionaire inventor Tony Stark (Robert Downey Jr.) faces pressure from all sides to share his technology with the military. He is reluctant to divulge the secrets of his armored suit, fearing the information will fall into the wrong hands. With Pepper Potts (Gwyneth Paltrow) and Rhodes (Don Cheadle) by his side, Tony must forge new alliances and confront a powerful new enemy.",
  
  },
  {
  name: "No Country for Old Men",
  poster:
  "https://upload.wikimedia.org/wikipedia/en/8/8b/No_Country_for_Old_Men_poster.jpg",
  rating: 8.1,
  summary:
  "A hunter's life takes a drastic turn when he discovers two million dollars while strolling through the aftermath of a drug deal. He is then pursued by a psychopathic killer who wants the money.",
  
  },
  {
  name: "Jai Bhim",
  poster:
  "https://m.media-amazon.com/images/M/MV5BY2Y5ZWMwZDgtZDQxYy00Mjk0LThhY2YtMmU1MTRmMjVhMjRiXkEyXkFqcGdeQXVyMTI1NDEyNTM5._V1_FMjpg_UX1000_.jpg",
  summary:
  "A tribal woman and a righteous lawyer battle in court to unravel the mystery around the disappearance of her husband, who was picked up the police on a false case",
  rating: 8.8,
  
  },
  {
  name: "The Avengers",
  rating: 8,
  summary:
  "Marvel's The Avengers (classified under the name Marvel Avengers\n Assemble in the United Kingdom and Ireland), or simply The Avengers, is\n a 2012 American superhero film based on the Marvel Comics superhero team\n of the same name.",
  poster:
  "https://terrigen-cdn-dev.marvel.com/content/prod/1x/avengersendgame_lob_crd_05.jpg",
  
  },
  {
  name: "Interstellar",
  poster: "https://m.media-amazon.com/images/I/A1JVqNMI7UL._SL1500_.jpg",
  rating: 8.6,
  summary:
  "When Earth becomes uninhabitable in the future, a farmer and ex-NASA\n pilot, Joseph Cooper, is tasked to pilot a spacecraft, along with a team\n of researchers, to find a new planet for humans.",
  
  },
  {
  name: "Baahubali",
  poster: "https://flxt.tmsimg.com/assets/p11546593_p_v10_af.jpg",
  rating: 8,
  summary:
  "In the kingdom of Mahishmati, Shivudu falls in love with a young warrior woman. While trying to woo her, he learns about the conflict-ridden past of his family and his true legacy.",
  
  },
  {
  name: "Ratatouille",
  poster:
  "https://resizing.flixster.com/gL_JpWcD7sNHNYSwI1ff069Yyug=/ems.ZW1zLXByZC1hc3NldHMvbW92aWVzLzc4ZmJhZjZiLTEzNWMtNDIwOC1hYzU1LTgwZjE3ZjQzNTdiNy5qcGc=",
  rating: 8,
  summary:
  "Remy, a rat, aspires to become a renowned French chef. However, he fails to realise that people despise rodents and will never enjoy a meal cooked by him.",
  
  }
  ];

  function App(){
    const Navigate = useNavigate();
    return(
      <div>
          <Routes>
            <Route path ="/" element={<Welcome/>} />
            <Route path ="/movie" element={<AddMovie/>} />
            <Route path="/colorbox" element={<ColorBox/>} />
            <Route path="*" element={<Notfound/>} />
            <Route path="/colorgame" element={<Navigate replace to = "/colorbox" />} />
          </Routes>
          <li> 
        <NavLink to="/"> Home </NavLink>
          </li>
            <li> 
        <NavLink to="/colorbox"> colorbox app </NavLink>
          </li>
            <li>
        <NavLink to="/movie"> Movie App </NavLink>


        <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            
          </IconButton>
          
          <li>
          <NavLink to="/"> Home </NavLink><br/></li>
          <li>
          <NavLink to="/colorbox"> colorbox app </NavLink><br/> </li>
          <li>
          <NavLink to="/movie"> Movie App </NavLink></li>
        </Toolbar>
      </AppBar>
    </Box>
      </li>
         
        
      </div>
    )
  }


function AddMovie() {
  
  
    //  add movie form
    const[poster,setPoster] = useState("");
    const[name,setName] = useState("");
    const[rating,setRating] = useState("");
    const[summary,setSummary] = useState("");
    const [movieList,setMovieList] = useState(Initial_Movie_List)
  return (
    <div className="App">
      <div className='add-movie'>
      {/* <input className='add-movie-name' placeholder='Enter the movie name' onChange={(event) => setName(event.target.value)} /> */}
      <TextField id="outlined-basic" label="Enter the movie name" variant="outlined" className='add-movie-name'  onChange={(event) => setName(event.target.value)}  />


      <TextField id="outlined-basic" label="Enter the poster url" variant="outlined"   className='add-movie-name'   onChange={(event) => setPoster(event.target.value)} />
         
       
        {/* <input className='add-movie-name' placeholder='Enter the  rating'onChange={(event) => setRating(event.target.value)}/> */}
        <TextField id="outlined-basic" label="Enter the  rating" variant="outlined" className='add-movie-name'  onChange={(event) => setRating(event.target.value)} />

        {/* <input className='add-movie-name' placeholder='Enter the summary' onChange={(event) => setSummary(event.target.value)}/> */}

        <TextField id="outlined-basic" label="Enter the summary" variant="outlined"  className='add-movie-name'  onChange={(event) => setSummary(event.target.value)} />
        {/* <button className='add-movie-name' onClick={() =>{
          const newMovie = {
            name:  name,
            poster:  poster,
            rating:  rating,
            summary: summary
            }
            setMovieList([...movieList,newMovie])

        }}>Submit</button> */}
         
        <Button variant="contained" onClick={() =>{
          const newMovie = {
            name:  name,
            poster:  poster,
            rating:  rating,
            summary: summary
            }
            setMovieList([...movieList,newMovie]);
             

        }}>Submit</Button>
        


        </div>
      <div className="movie-list">
      {movieList.map(item=> <Movie movie={item}/> )}
      {/* <ColorBox /> */}
      
      </div>
 
    </div>
  );
}

function Welcome(){
  return(
    <div>
      <h1>Welcome,Click any one of the below</h1>
    </div>
  )
}


// movie ui
function Movie({movie}){
  // const movie=  
  // {
  // name: "The Avengers",
  // rating: 8,
  // summary:
  // "Marvel's The Avengers (classified under the name Marvel Avengers\n Assemble in the United Kingdom and Ireland), or simply The Avengers, is\n a 2012 American superhero film based on the Marvel Comics superhero team\n of the same name.",
  // poster:
  // "https://terrigen-cdn-dev.marvel.com/content/prod/1x/avengersendgame_lob_crd_05.jpg",
  
  // };
  // ternary operator
  // conditional styling
  const[show,setShow] = useState(true);

  let summaryStyles={
    display: show ? "block" : "none",
  } 
  let styles={color: movie.rating >8 ?"green" : "red"};
  const navigate = useNavigate();
  return(
    <div className="movie-container">
      <img className="movie-poster"src={movie.poster} alt= {movie.name}/>
      <div className="movie-specs">
      <h2 className="movie-name">{movie.name}</h2>
      <p className="movie-rating" style={styles}>{movie.rating}⭐</p>
     
      </div>
      <hr></hr>
      {/* <p>{"the value of show is" + show }</p>  */}
      {/* <button onClick={() => setShow(!show)}  >  <ExpandLessIcon/> </button> */}
      <IconButton aria-label="expandless" color="primary" onClick={() => setShow(!show)} >
      {/* <ExpandLessIcon/>  */}
      {show ? <ExpandLessIcon/> : <ExpandMoreIcon/>}
      </IconButton>


      <IconButton aria-label="delete" color="primary" onClick={() => navigate("/colorbox") }>
      < InfoIcon />  
</IconButton>


      {/* conditional styling */}
      {/* <p className="movie-summary" style={summaryStyles}>{movie.summary}</p> */}
      

      {/* conditional rendering  where the content itself is removed from dom*/ } 
      {show ? <p  className="movie-summary">{movie.summary}</p> : ""}


      <Counter />
   
    </div>
  )
}

// difference between visibility:hidden and display:none

 
function Notfound(){
  return(
    <div>
     
      <img src='https://freefrontend.com/assets/img/tailwind-404-page-templates/404-page-not-found.png' width="100%"></img>
    </div>
  )
}
 

 
export default App;
