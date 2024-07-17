import logo from './logo.svg';
import './App.css';
import Navigation1 from './Task2/Navigation1';
import BannerNew from './Task2/BannerNew';
import Movies from './Task2/Movies';
import Detail from './Task2/Detail';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { comedyMovies, latestMovies, popularMovies } from './Task1/url';
import { createContext,  useState } from 'react';
const egContext=createContext();
function App() {

  const [show, setshow] = useState(true)
  const [details, setdetails] = useState([])
  const [search, setSearch] = useState("");
    const [movies, setmovies] = useState([])
    const [filtermov, setfiltermov] = useState([])

  
    const searchFun = () => {
      const filteredata = movies.filter((obj =>
        (obj.original_title||obj.original_name && (obj.original_title || obj.original_name).toLowerCase().includes(search.toLowerCase())) ||
        (obj.original_language && obj.original_language.toString().includes(search)) ||
        (obj.release_date && obj.release_date.toString().includes(search)) 
              ));
      console.log(filteredata);
      console.log(movies);
      setfiltermov(filteredata);
       };
  

  
  return (
    <div className="App">
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}
<egContext.Provider value={{show,setshow,details,setdetails,search,setSearch,searchFun,filtermov,setfiltermov,setmovies,movies}}>
<BrowserRouter>
    <Navigation1/>
    {/* <Banner/> */}
    {show === true ? <BannerNew/> : ""}
    
     
   
    
    <Routes>
      <Route path='/Movieslatest' element={<Movies movie={latestMovies} />}/>
      <Route path='/Moviescomedy' element={<Movies movie={comedyMovies}/>}/>
      <Route path='/Moviespopular' element={<Movies  movie={popularMovies}/>}/>
      <Route path='/Detail' element={<Detail/>}/>

    </Routes>
    </BrowserRouter>
    
    </egContext.Provider>
       
    </div>
    
    
  );
}

export default App
export  {egContext}
