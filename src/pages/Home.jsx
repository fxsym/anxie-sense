import { Navbar } from "../components/navbar"
import { CardInfoAnxiety } from "../components/CardInfoAnxiety"
import { FormNavigationArrow } from "../components/FormNavigationArrow"
import { FormPrediction } from "../components/FormPrediction"


export const Home = () => {
    return (
        <>
            {/* <div className="flex flex-col items-center border shadow-lg fixed inset-0 -z-10"></div> */}
            <Navbar />
            <div className="bg-sky-200 min-h-150 flex flex-col justify-center items-center p-4">
                <div className="mb-8">
                    <p className="text-4xl font-[Nunito] font-bold text-center">Kenali Tingkat Anxietymu Sekarang!</p>
                </div>
                <div className="mb-10">
                    <p className="text-2xl font-[Nunito] font-bold text-center leading-7">Ukur level kecemasanmu secara instan dan rahasia. Mulailah perjalanan menuju kesehatan mental yang lebih baik.</p>
                </div>
                <div>
                    <button className="bg-emerald-100 py-2 px-8 rounded-full cursor-pointer">Get Started</button>
                </div>
            </div>

            <div className="flex flex-col lg:flex-row gap-1 px-2 sm:px-12 md:px-14 lg:px-18 xl:px-24">
                <CardInfoAnxiety title={"Apa itu anxiety?"} desc={"Menurut para ahli bahwa kecemasan (anxiety) adalah salah satu gejala kejiwaan yang negatif disebabkan oleh tekanan emosional atau fisik sehingga menimbulkan perasaan atau emosi negatif pada seseorang seperti rasa gelisah dan rasa takut Rhamadian, D., & Jumrotul'Aqobah, Q. (2022)."} />
                <CardInfoAnxiety title={"Faktor Penyebab Anxiety"} desc={"Menurut para ahli bahwa kecemasan"} />
                <CardInfoAnxiety title={"Anxiety Level"} desc={"Menurut para ahli bahwa kecemasanMenurut para ahli bahwa kecemasanMenurut para ahli bahwa kecemasanMenurut para ahli bahwa kecemasanMenurut para ahli bahwa kecemasan"} />
            </div>
            <div className="flex flex-col gap-1 px-8 py-8 sm:px-16 md:px-20 lg:px-24 xl:px-30">
                <div className="w-full">
                    <h1 className="text-2xl font-bold lg:text-3xl">Lakukan prediksi level anxiety</h1>
                </div>

                <div className="bg-white border-3 justify-center h-105 flex flex-col items-center rounded-2xl lg:flex-row">
                    {/* <div className="w-1/5 bg-slate-50">
                        <ul className="flex flex-row items-center h-full lg:flex-col">
                            <FormNavigation title={'Sleep Hours'}/>
                            <FormNavigation title={'Physical Activity (hrs/week)'}/>
                            <FormNavigation title={'Caffeine Intake (mg/day)'}/>
                            <FormNavigation title={'Alcohol Consumption (drinks/week)'}/>
                            <FormNavigation title={'Stress Level (1-10)'}/>
                            <FormNavigation title={'Heart Rate (bpm)'}/>
                            <FormNavigation title={'Breathing Rate (breaths/min)'}/>
                            <FormNavigation title={'Sweating Level (1-5)'}/>
                        </ul>
                    </div> */}
                    <FormNavigationArrow />
                    <FormPrediction />
                </div>
            </div>
        </>
    )
}