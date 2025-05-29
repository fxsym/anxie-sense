import { Navbar } from "../components/navbar"
import CenterContainer from "../layout/CenterContainer"
import AnxietyIlus from "../assets/images/AnxietyIlus.png"
import { CardInfoAnxiety } from "../components/CardInfoAnxiety"


export const Home = () => {
    return (
        <>
            {/* <div className="flex flex-col items-center border shadow-lg fixed inset-0 -z-10"></div> */}
            <Navbar />
            <CardInfoAnxiety title={"Apa itu anxiety?"} desc={"Menurut para ahli bahwa kecemasan (anxiety) adalah salah satu gejala kejiwaan yang negatif disebabkan oleh tekanan emosional atau fisik sehingga menimbulkan perasaan atau emosi negatif pada seseorang seperti rasa gelisah dan rasa takut Rhamadian, D., & Jumrotul'Aqobah, Q. (2022)."} />
            <CardInfoAnxiety title={"Faktor Penyebab Anxiety"} desc={"Menurut para ahli bahwa kecemasan"} />

        </>
    )
}