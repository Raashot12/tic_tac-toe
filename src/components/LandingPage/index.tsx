/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'
import { Link } from 'react-router-dom'

// Importing Assest
import Hero from "../../assests/hero.svg"
const Index = () => {
  return (
    <section className="MuiContainer-root MuiContainer-maxWidthLg">
      <main className="hero-section hero-items-container">
        <div className="hero-text-container">
          <h1 className="text-title-hero">Tic-Tac-Toe</h1>
          <p className="text-content-hero">
            A game in which two players seek in alternate turns to complete a
            row, a column, or a diagonal with either three O's or three X's
            drawn in the spaces of a grid of nine squares; noughts and crosses.
          </p>
          <Link to="/tic-tac-toc">
            <a href="#" className="btn-fun btn-blue">
              Have Some Fun 😇{" "}
            </a>
          </Link>
        </div>
        <div className="hero-img-container">
          <img src={Hero} alt="" height="auto" width="100%" />
        </div>
      </main>
    </section>
  )
}

export default Index