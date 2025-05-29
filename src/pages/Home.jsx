import { Navbar } from "../components/navbar"
import { CardInfoAnxiety } from "../components/CardInfoAnxiety"


export const Home = () => {
    return (
        <>
            {/* <div className="flex flex-col items-center border shadow-lg fixed inset-0 -z-10"></div> */}
            <Navbar />
            <div className="flex flex-col lg:flex-row gap-1 px-2 sm:px-12 md:px-14 lg:px-18 xl:px-24">
                <CardInfoAnxiety title={"Apa itu anxiety?"} desc={"Menurut para ahli bahwa kecemasan (anxiety) adalah salah satu gejala kejiwaan yang negatif disebabkan oleh tekanan emosional atau fisik sehingga menimbulkan perasaan atau emosi negatif pada seseorang seperti rasa gelisah dan rasa takut Rhamadian, D., & Jumrotul'Aqobah, Q. (2022)."} />
                <CardInfoAnxiety title={"Faktor Penyebab Anxiety"} desc={"Menurut para ahli bahwa kecemasan"} />
                <CardInfoAnxiety title={"Anxiety Level"} desc={"Menurut para ahli bahwa kecemasanMenurut para ahli bahwa kecemasanMenurut para ahli bahwa kecemasanMenurut para ahli bahwa kecemasanMenurut para ahli bahwa kecemasan"} />
            </div>
            
        </>
    )
}