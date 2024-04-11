
import { Link } from "react-router-dom"
import {urlFor} from "../Sanity/Client"

export const Card = (props) => {

  const {prd} = props

  console.log(prd.price);
  return (
    <>
        <div className="h-64">
            <img   className="h-full w-full" src={urlFor(prd.image_one.asset._ref).url()} alt="card" />
        </div>
        <div className='w-full p-4 text-center space-y-10 flex items-center justify-center flex-col'>
            <div className="space-y-3">
            <h1 className="font-serif text-xl line-clamp-3 ">{prd.title}</h1>
            <h1 className="font-serif text-2xl ">{prd.price} $</h1>
            </div>
            <Link to={`/Order/${prd._id}`} className="bg-gradient-to-r from-blue-500 to-blue-700 hover:from-blue-600 hover:to-blue-800 text-white font-bold py-2 px-10 rounded-full shadow-lg transform transition-all duration-500 ease-in-out hover:scale-110 hover:brightness-110 hover:animate-pulse active:animate-bounce" >Order</Link>
        </div>
    </>
  )
}

// require("../image/phone.jpeg")