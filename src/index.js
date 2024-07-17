import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Navigation from './Task1/Navigation';
import 'bootstrap/dist/css/bootstrap.min.css';
import PopularMovies from './Task1/PopularMovies';
import LatestMovies from './Task1/LatestMovies';
import ComedyMovies from './Task1/ComedyMovies';
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Navigation1 from './Task2/Navigation1';
import Movies from './Task2/Movies';
import { comedyMovies, latestMovies, popularMovies } from './Task1/url';
import Banner from './Task2/Banner';
import BannerNew from './Task2/BannerNew';
import Detail from './Task2/Detail';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
    {/* <BrowserRouter>
    <Navigation/>
    <Routes>
    <Route path="/PopularMovies" element={<PopularMovies/>}/>
    <Route path="/LatestMovies" element={<LatestMovies/>}/>
    <Route path="/ComedyMovies" element={<ComedyMovies/>}/> 
    </Routes>
    </BrowserRouter>  */}
    {/* <BrowserRouter>
    <Navigation1/> */}
    {/* <Banner/> */}
    
    {/* <BannerNew/>
    <Routes>
      <Route path='/Movieslatest' element={<Movies movie={latestMovies} />}/>
      <Route path='/Moviescomedy' element={<Movies movie={comedyMovies}/>}/>
      <Route path='/Moviespopular' element={<Movies  movie={popularMovies}/>}/>
      <Route path='/Detail' element={<Detail/>}/>

    </Routes>
    </BrowserRouter> */}
    
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
