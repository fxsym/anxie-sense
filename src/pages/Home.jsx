import { Navbar } from "../components/navbar"
import CenterContainer from "../layout/CenterContainer"
import AnxietyIlus from "../assets/images/AnxietyIlus.png"


export const Home = () => {
    return (
        <>
            <div className="flex flex-col items-center bg-slate-800/20 backdrop-brightness-80 border shadow-lg fixed inset-0 -z-10"></div>
            <Navbar />
            <div className="flex flex-col items-center bg-slate-800/40 backdrop-blur-sm border border-white/10 p-6 m-4 my-8 rounded-2xl shadow-lg">
                <img src={AnxietyIlus} alt="Ilustrasi Anxiety" className="w-80" />
                <div className="flex flex-col items-center mt-4">
                    <h1 className="font-bold text-white text-xl">Apa itu anxiety?</h1>
                    <p className="text-center text-white/80 mt-2">Menurut para ahli bahwa kecemasan (anxiety) adalah salah satu gejala kejiwaan yang negatif disebabkan oleh tekanan emosional atau fisik sehingga menimbulkan perasaan atau emosi negatif pada seseorang seperti rasa gelisah dan rasa takut Rhamadian, D., & Jumrotul'Aqobah, Q. (2022).</p>
                </div>
                <div>
                    <button className="text-center text-white/80 mt-2 bg-slate-900 py-2 px-8 rounded-full">Next</button>
                </div>
            </div>

        </>
    )
}