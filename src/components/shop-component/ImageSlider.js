import { useState } from 'react';
import './ImageSlider.scss'

const ImageSlider = ({ slides }) => {

  const [currentIndex, SetCurrentIndex] = useState(0)

  const slideStyles = {
    backgroundImage: `url(${slides[currentIndex].url})`,
    transition: '.3s',
  }

  const goToSlide = slideIndex => {
    SetCurrentIndex(slideIndex)
  }
  return (
    <div className="sliderStyles">
      <div >
        {slides.map((slide, slideIndex) => (
          <div className="sliderImages" key={slideIndex} onClick={() => goToSlide(slideIndex)} ><img src={slide.url} alt="" /></div>
        ))}
      </div>
      <div className="slider" style={slideStyles}></div>

    </div>
  )
}

export default ImageSlider;