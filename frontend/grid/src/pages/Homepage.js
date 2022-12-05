import React, { Component } from 'react'
import NavbarComponent from '../components/NavbarComponent'
import SearchBar from '../components/SearchBar'
import Slider from '../components/Slider'

export default class Homepage extends Component {
  render() {
    return (
      <>
        <NavbarComponent/>
        <SearchBar/>
        <Slider/>
        <h2 className="d-flex justify-content-center mb-5 ">Popular Categories</h2>

      </>
    )
  }
}
