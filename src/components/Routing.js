import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './HomeMain';
import Movies from './Movies/MoviesMain';
import Events from './Events/EventsMain';
import Sports from './Sports/SportsMain';
import Jigra from './Movies/JigraMain';
import JigraSeatOrig from './Movies/JigraSeatOrig';
import OrderSuccessMain from './OrderSuccessMain';

const Routing = () => {
  return (
    <Routes>
        <Route path= "/" exact Component={Home} />
        <Route path="/movies" exact Component={Movies} />
        <Route path="/events" exact Component={Events} />
        <Route path="/sports" exact Component={Sports} />
        <Route path="/jigra" exact Component={Jigra} />
        <Route path="/JigraSeatOrig" exact Component={JigraSeatOrig} />
        <Route path="/OrderSuccessMain" exact Component={OrderSuccessMain} />
    </Routes>
  )
}

export default Routing
