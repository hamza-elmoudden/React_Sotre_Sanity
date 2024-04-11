import { useSelector } from "react-redux"
import { Card } from "../component/Card"
import { Footer } from "../component/Footer"
import { Navbar } from "../component/Navbar"



export const Proudate = () => {
  const data = useSelector((state)=>state.counter[0])
  return (
    <>
    <Navbar/>
    <section className="p">
        <div className="container mx-auto py-8">
            <div className="py-20 flex justify-center">
            <form class="form relative">
  <button class="absolute left-2 -translate-y-1/2 top-1/2 p-1">
    <svg
      class="w-5 h-5 text-gray-700"
      aria-labelledby="search"
      role="img"
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      height="16"
      width="17"
    >
      <path
        stroke-linejoin="round"
        stroke-linecap="round"
        stroke-width="1.333"
        stroke="currentColor"
        d="M7.667 12.667A5.333 5.333 0 107.667 2a5.333 5.333 0 000 10.667zM14.334 14l-2.9-2.9"
      ></path>
    </svg>
  </button>
  <input
    type="text"
    required=""
    placeholder="Search..."
    class="input rounded-full px-8 py-3 border-2 border-transparent focus:outline-none focus:border-blue-500 placeholder-gray-400"
  />
  <button class="absolute right-3 -translate-y-1/2 top-1/2 p-1" type="reset">
    <svg
      stroke="currentColor"
      viewBox="0 0 24 24"
      fill="none"
      class="w-5 h-5 text-gray-700"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M6 18L18 6M6 6l12 12"
        stroke-linejoin="round"
        stroke-linecap="round"
      ></path>
    </svg>
  </button>
            </form>
            </div>
            <div className="py-10 flex row  flex-wrap gap-8 justify-center">
              {data && data.map((prd)=>{
                return(
                  <div className="w-full md:w-1/4 border border-spacing-3 shadow-lg">
                  <Card prd={prd}/>
                  </div>
                )
              })}
            </div>
        </div>
        <Footer/>
    </section>
    </>
  )
}


