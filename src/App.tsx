import React from "react"
import {BrowserRouter, Route, Switch} from "react-router-dom"
import "./App.css"
import Navbar from "./components/LandingPage/Navbar"
import HeroPage from "./components/LandingPage"
import Board from "./components/Board"
function App() {
  return (
    <div className="playground">
      <BrowserRouter>
        <Navbar />
        <Switch>
          <Route path="/" exact component={HeroPage} />
          <Route path="/tic-tac-toc" exact component={Board} />
        </Switch>
      </BrowserRouter>
    </div>
  )
}

export default App
