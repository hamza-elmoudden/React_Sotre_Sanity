import { useParams } from "react-router-dom"
import { Footer } from "../component/Footer"
import { Navbar } from "../component/Navbar"
import { client, urlFor } from "../Sanity/Client"
import { useEffect, useState } from "react"
import Swal from "sweetalert2"


export  const Order =  () => {
    const { idprd } = useParams()
    const [data, setData] = useState(null)
    const [form,setForm] = useState({
        first_name:"",
        last_name:"",
        email:"",
        phone:"",
        address:"",
        country:""
    })

    function handelform(e){
        setForm({...form,[e.target.name]:e.target.value})
      }



    const handelsubmit = async (e)=>{
        e.preventDefault()
        try {

            const response = await client.create({
                _type: 'order',
                first_name: form.first_name,
                last_name: form.last_name,
                email: form.email,
                phone: form.phone,
                address: form.address,
                country: form.country,

                prodacte_order: {
                    _ref: data._id,
                    _type: "reference",
                },

            });

            Swal.fire({
                title: 'Order',
                text: `Oerder Prodate ${data.title}`,
                icon: 'success',
                confirmButtonText: 'OK'
              })

            setForm({
                first_name:"",
                last_name:"",
                email:"",
                phone:"",
                address:"",
                country:""
            })

            console.log(response)
            
        } catch (error) {
            console.error(error)
        }
        
    }

    useEffect(() => {
        const fetchData = async () => {
            try {
                const result = await client.fetch(`
                    *[_type == 'prodacte' && _id == '${idprd}']{
                        _id,
                        title,
                        price,
                        description,
                        image_one{asset{_ref,_type}},
                        image_three{asset{_ref,_type}},
                        image_tow{asset{_ref,_type}},
                    }
                `);
                setData(result[0]);
            } catch (error) {
                console.error("Error fetching data:", error);
            }
        };
    
        fetchData();
    }, [idprd]);


  return (
    <>
    <Navbar/>
    <section className="p">
        <div className="container mx-auto pt-28 md:py-8 flex gap-12 items-center h-full flex-col md:flex-row">
           <div className="w-1/3">
                <div className="shadow-xl">
                        <img className="rounded-xl" src={data ? urlFor(data.image_one.asset._ref) : ""} alt="Order" />
                        
                </div>
           </div>
            <div className="w-1/2 flex  flex-col  gap-10 items-center capitalize" >
                <h1 className=" text-xl font-serif md:text-3xl justify-center line-clamp-2">{data ? data.title : "title one"}</h1>
                <hr className="w-full bg-black h-1"/>
                <p className="opacity-80 line-clamp-6">{data ? data.description : "description"}</p>
            </div>
            <div className="py-4 px-2 flex w-1/4 flex-col gap-24 md:items-center">
                <div className="text-center space-y-10 ">
                    <h1 className="text-xl font-serif md:text-2xl text-blue-600 line-clamp-1">
                        Price :  <span className="text-black">{data ? data.price : "Price "} $</span>
                    </h1>
                    <p className="capitalize opacity-90">
                        Livraison à 3.5 $
                    </p>
                </div>
                <div>
                    <a href="#order" className="bg-gradient-to-r from-blue-500 to-blue-700 hover:from-blue-600 hover:to-blue-800 text-white font-bold py-2 px-10 rounded-full shadow-lg transform transition-all duration-500 ease-in-out hover:scale-110 hover:brightness-110 hover:animate-pulse active:animate-bounce">Order</a>
                </div>
            </div>
        </div>
    </section>
    <section>
        <div className="py-16 flex justify-center w-full" id="order">
                    <form onSubmit={handelsubmit} className="w-1/2 text-center space-y-12 border border-spacing-4 p-8 rounded-lg shadow-lg">
                        <div className="text-2xl font-serif capitalize"> Order Pordace  { data ? data.title : ""} || Price {data ? data.price : "55 "} $</div>
                        <div className="grid md:grid-cols-2 gap-3">
                            <input type="text" onChange={handelform} name="first_name" value={form.first_name} placeholder="First Name"  className="outline-none border border-gray-200 py-4 px-2 rounded-lg"/>
                            <input type="text" onChange={handelform} name="last_name" value={form.last_name} placeholder="Last Name" className="outline-none border border-gray-200 py-4 px-2 rounded-lg" />
                        </div>
                        <div className="grid md:grid-cols-2 gap-3">
                            <input type="text" onChange={handelform} name="email" value={form.email} placeholder="Email" className="outline-none border border-gray-200 py-4 px-2 rounded-lg" />
                            <input type="text" onChange={handelform} name="phone" value={form.phone} placeholder="Phone" className="outline-none border border-gray-200 py-4 px-2 rounded-lg" />
                        </div>
                           <div className="grid md:grid-cols-2 gap-3">
                            <input type="text" onChange={handelform} name="address" value={form.address} placeholder="Address" className="outline-none border border-gray-200 py-4 px-2 rounded-lg" />
                            <input type="text" onChange={handelform} name="country" value={form.country} placeholder="Country" className="outline-none border border-gray-200 py-4 px-2 rounded-lg" />
                        </div>
                        <div className="grid md:px-32">
                            <button type="submit" className="py-5 px-3 border border-gray-600 rounded-full text-white bg-blue-500 text-xl font-bold uppercase hover:bg-emerald-600">Order Now</button>
                        </div>
                    </form>
         </div>
    </section>
    <Footer/>
    </>
  )
}

