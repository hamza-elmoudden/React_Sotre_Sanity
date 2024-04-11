import React from 'react'
import { Card } from './Card';
import "react-multi-carousel/lib/styles.css";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { useSelector } from 'react-redux'


export const Showprodatce = () => {

  const data = useSelector((sata)=> sata.counter[0])


  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 4
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };

  return (
    <>
      <section className="py-10 overflow-hidden container mx-auto">
        <Carousel 
        responsive={responsive}
        autoPlay={true} 
        autoPlaySpeed={3000}  
        >
          {data && data.map((prd, index)=>{
              console.log("Card home:",prd);
              return (
                <div key={index} className="md:w-full p-2">
                  <div className="border border-spacing-3 shadow-lg rounded-lg overflow-hidden">
                    <Card prd={prd} />
                  </div>
                </div>
              );
          })}
        </Carousel>
      </section>
    </>
  )
}
