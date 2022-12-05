import React from 'react'

export default function SearchBar() {
  return (
    <>
        <form className="d-flex w-50 m-auto mt-5 mb-5" role="search">
        <input className="form-control " type="search" placeholder="Search" aria-label="Search"/>
        <button className="btn " type="submit"><i className="fa-solid fa-magnifying-glass"></i></button>
      </form>
    </>
  )
}
