import { Card } from './Card';
import "react-multi-carousel/lib/styles.css";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";



export const Test = () => {
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
          <div className="md:w-full p-2">
            <div className="border border-spacing-3 shadow-lg rounded-lg overflow-hidden">
              <Card />
            </div>
          </div>
          <div className="md:w-full p-2">
            <div className="border border-spacing-3 shadow-lg rounded-lg overflow-hidden">
              <Card />
            </div>
          </div>
          <div className="md:w-full p-2">
            <div className="border border-spacing-3 shadow-lg rounded-lg overflow-hidden">
              <Card />
            </div>
          </div>
          <div className="md:w-full p-2">
            <div className="border border-spacing-3 shadow-lg rounded-lg overflow-hidden">
              <Card />
            </div>
          </div>
        </Carousel>
      </section>
      </>
    )
}


