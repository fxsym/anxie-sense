import Logo from "../assets/images/Logo.png"

export const Navbar = () =>{
    return (
        <>
            <div className="flex items-center  bg-slate-800 w-full px-4 h-20 sm:px-12 md:px-14 lg:px-18 xl:px-24">
                <img src={Logo} alt="" className="max-h-16"/>
                <p className="text-[#A3CFFB]">AnxieSense</p>
            </div>
        </>
    )
}