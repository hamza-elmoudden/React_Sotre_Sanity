import { Link } from 'react-router-dom'

export const Navbar = () => {



  return (
    <>
    <header className="py-5 bg-hed fixed w-full z-50 ">
        <nav className="container mx-auto flex justify-around items-center flex-col md:flex-row space-y-8 md:space-y-0">
            <div>
                <Link to="/" className="font-bold text-2xl hover:text-white">LOGO</Link>
            </div>
            <div className="flex items-center gap-8 text-xl font-serif">
                <Link to="/"   className="hover:text-white">Home</Link>
                <Link to="/Proudate"  className="hover:text-white">Proudacte</Link>
                <Link to="/"  className="hover:text-white">Aboute</Link>
            </div>
        </nav>
    </header>
    </>
  )
}
