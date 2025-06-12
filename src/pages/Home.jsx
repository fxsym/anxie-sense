import { Navbar } from "../components/navbar"
import { CardInfoAnxiety } from "../components/CardInfoAnxiety"
import { FormNavigationArrow } from "../components/FormNavigationArrow"
import { FormPrediction } from "../components/FormPrediction"
import { ResultPrediction } from "../components/ResultPrediction"
import { useState } from "react"


export const Home = () => {
    const [resultPrediction, setResultPrediction] = useState(null);
    const [loadingStatus, setLoadingStatus] = useState(false);
    const [firstPredict, setFirstPredict] = useState(false);

    return (
        <>
            {/* <div className="flex flex-col items-center border shadow-lg fixed inset-0 -z-10"></div> */}
            <Navbar />
            <div className="min-h-150 flex flex-col justify-center items-center px-6">
                <div className="max-w-3xl flex flex-col justify-center items-center">
                    <div className="mb-8">
                        <p className="text-4xl font-[Nunito] font-bold text-center lg:text-6xl">Kenali Tingkat Anxietymu Sekarang!</p>
                    </div>
                    <div className="mb-10">
                        <p className="text-2xl font-[Nunito] font-bold text-center leading-7 lg:4xl">Ukur level kecemasanmu secara instan. Mulailah perjalanan menuju kesehatan mental yang lebih baik. Lorem Ipsum dolor sit amet constecteur lorem dolor sit</p>
                    </div>
                    <div>
                        <button className="bg-emerald-100 py-2 px-8 rounded-full cursor-pointer">Get Started</button>
                    </div>
                </div>
            </div>

            <div className="flex flex-col lg:flex-row gap-1 px-2 sm:px-12 md:px-14 lg:px-18 xl:px-24">
                <CardInfoAnxiety title={"Apa itu anxiety?"} desc={"Menurut para ahli bahwa kecemasan (anxiety) adalah salah satu gejala kejiwaan yang negatif disebabkan oleh tekanan emosional atau fisik sehingga menimbulkan perasaan atau emosi negatif pada seseorang seperti rasa gelisah dan rasa takut Rhamadian, D., & Jumrotul'Aqobah, Q. (2022)."} />
                <CardInfoAnxiety title={"Faktor Penyebab Anxiety"} desc={"Menurut para ahli bahwa kecemasan"} />
                <CardInfoAnxiety title={"Anxiety Level"} desc={"Menurut para ahli bahwa kecemasanMenurut para ahli bahwa kecemasanMenurut para ahli bahwa kecemasanMenurut para ahli bahwa kecemasanMenurut para ahli bahwa kecemasan"} />
            </div>
            <div className="flex flex-col gap-1 px-8 py-8 sm:px-16 md:px-20 lg:px-24 xl:px-30 items-center ">
                <div className="w-full mb-4">
                    <h1 className="text-2xl font-bold lg:text-3xl">Lakukan Prediksi</h1>
                </div>

                <div className="flex flex-col gap-8 lg:flex-row items-center justify-center">
                    <div className="bg-emerald-100 shadow-2xl transition-all duration-200 rounded-2xl hover:shadow-black hover:shadow-2xl justify-center flex flex-col items-center  lg:gap-6 lg:items-stretch lg:flex-row lg:p-6">
                        <FormNavigationArrow />
                        <FormPrediction setResultPrediction={setResultPrediction} setLoadingStatus={setLoadingStatus} setFirstPredict={setFirstPredict}/>
                    </div>
                    <div>
                        <ResultPrediction resultPrediction={resultPrediction} loadingStatus={loadingStatus} firstPredict={firstPredict}/>
                    </div>
                </div>
            </div>
        </>
    )
}