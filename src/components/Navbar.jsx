import Logo from "../assets/images/Logo.png"

export const Navbar = () =>{
    return (
        <>
            <div className="flex items-center justify-center bg-slate-800 w-full p-2">
                <img src={Logo} alt="" className="w-[10%]"/>
                <p className="text-[#A3CFFB]">AnxieSense</p>
            </div>
        </>
    )
}