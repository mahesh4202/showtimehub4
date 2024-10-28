import React, { useState } from 'react';
import './CarouselEx.css'
import 'bootstrap/dist/css/bootstrap.css';
import carousel1 from '../assets/HomeCarousel1.jpg'
import carousel2 from '../assets/HomeCarousel2.jpg'
import carousel3 from '../assets/HomeCarousel3.jpg'

export default function CarouselEx() {
    const [index, setIndex] = useState(0);

    const handleSelect = (selectedIndex) => {
        setIndex(selectedIndex);
    };
    return (
        <div class="container my-5 h-50">
          <div id="carouselExampleCaptions" class="carousel slide" data-bs-ride="carousel">
      <div class="carousel-indicators">
        <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
        <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
        <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
      </div>
      <div class="carousel-inner">
        <div class="carousel-item active">
          <img src={carousel1} alt="..." class="d-block w-100"/>
          <div class="carousel-caption d-none d-md-block">
              <h1>Movies</h1>
              <p>Watch latest Movies nearby your Locatiopn</p>
                <a class="carousel-btn" href="/">Book Now</a>
          </div>
        </div>
        <div class="carousel-item">
          <img src={carousel2} alt="..." class="d-block w-100"/>
          <div class="carousel-caption d-none d-md-block">
              <h1>Events</h1>
              <p>Spiritual Events, Workshops, Meetups, Comedy shows, Exhibitions, Conferences find every type of events.</p>
                <a class="carousel-btn" href="/">Book Now</a>
          </div>
        </div>
        <div class="carousel-item">
          <img src={carousel3} alt="..." class="d-block w-100"/>
          <div class="carousel-caption d-none d-md-block">
              <h1>Sports</h1>
              <p>Watch Live Sports</p>
                <a class="carousel-btn" href="/">Book Now</a>
          </div>
        </div>
      </div>
      <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Previous</span>
      </button>
      <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
        <span class="carousel-control-next-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Next</span>
      </button>
    </div>
        </div>
    );
}