import React from 'react'

export default function Slider() {
  return (
    <>
        <div id="carouselExampleInterval" class="carousel slide" data-bs-ride="carousel">
                    <div class="carousel-inner m-auto mb-5 w-75  " >
                        <div class="carousel-item active" data-bs-interval="3000">
                        <img src="https://c4.wallpaperflare.com/wallpaper/193/556/883/car-neon-chevrolet-corvette-race-cars-hd-wallpaper-preview.jpg" class="d-block w-100" alt="..."/>
                        </div>
                        <div class="carousel-item" data-bs-interval="3000">
                        <img src="https://c4.wallpaperflare.com/wallpaper/193/556/883/car-neon-chevrolet-corvette-race-cars-hd-wallpaper-preview.jpg" class="d-block w-100" alt="..."/>
                        </div>
                        <div class="carousel-item" data-bs-interval="3000">
                        <img src="https://c4.wallpaperflare.com/wallpaper/193/556/883/car-neon-chevrolet-corvette-race-cars-hd-wallpaper-preview.jpg" class="d-block w-100" alt="..."/>
                        </div>
                    </div>
                    <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="prev">
                        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span class="visually-hidden">Previous</span>
                    </button>
                    <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="next">
                        <span class="carousel-control-next-icon" aria-hidden="true"></span>
                        <span class="visually-hidden">Next</span>
                    </button>
            </div>
    </>
  )
}
