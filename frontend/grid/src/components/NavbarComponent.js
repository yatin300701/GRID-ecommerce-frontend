import React from 'react'

export default function NavbarComponent() {
  return (
    <>
      <nav className="navbar navbar-expand-lg bg-light">
                <div className="container-fluid">
                  <a className="navbar-brand" href="#">GRID</a>
                  <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                  </button>

                  
                  <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0  m-auto ">
                      <li className="nav-item">
                        <a className="nav-link " aria-current="page" href="#">MEN</a>
                      </li>
                      <li className="nav-item ">
                        <a className="nav-link " href="#">WOMEN</a>
                      </li>
                      <li className="nav-item">
                        <a className="nav-link" href="#">KIDS</a>
                      </li>
                    </ul>
                  </div>

                  <a className="navbar-brand" href="#"><i class="fa-solid fa-cart-shopping"></i></a>
                  <a className="navbar-brand" href="#"><i class="fa-solid fa-user"></i> </a>                  
                   
                </div>
      </nav>
    </>
  )
}
