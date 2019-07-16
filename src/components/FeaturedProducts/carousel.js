import React from 'react';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

const CarouselComponent = ({nodes})=> {
  const node = nodes.map((node)=>(node))
  return(
    <Carousel
      additionalTransfrom={0}
      arrows={false}
      autoPlaySpeed={3000}
      centerMode={false}
      containerClass="container"
      dotListClass=""
      draggable
      focusOnSelect={false}
      infinite
      itemClass=""
      keyBoardControl
      minimumTouchDrag={80}
      partialVisbile="right"
      responsive={{
        desktop: {
          breakpoint: {
            max: 3000,
            min: 1024
          },
          items: 4,
          paritialVisibilityGutter: 40
        },
        mobile: {
          breakpoint: {
            max: 580,
            min: 0
          },
          items: 1.5,
          paritialVisibilityGutter: 10
        },
        tablet: {
          breakpoint: {
            max: 1024,
            min:580
          },
          items: 2,
          paritialVisibilityGutter: 30
        }
      }}
      showDots={false}
      sliderClass=""
      slidesToSlide={1}
      swipeable
      >
      {node}
      </Carousel>
  )
}

export default CarouselComponent;
