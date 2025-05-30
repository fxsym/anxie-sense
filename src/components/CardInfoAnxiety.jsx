import AnxietyIlus from "../assets/images/AnxietyIlus.png"

export const CardInfoAnxiety = ({ title, desc }) => {
    return (
        <>
            <div className="flex flex-col items-center bg-slate-100/40 backdrop-blur-sm p-6 m-4 my-8 rounded-2xl shadow-xl transition-all duration-500 lg:w-1/3 hover:shadow-black hover:shadow-2xl">
                <img src={AnxietyIlus} alt="Ilustrasi Anxiety" className="w-80" />
                <div className="flex flex-col items-center mt-4">
                    <h1 className="font-bold text-slate-800 text-xl">{title}</h1>
                    <p className="text-center text-slate-800 mt-2">{desc}</p>
                </div>
            </div>
        </>
    )
}