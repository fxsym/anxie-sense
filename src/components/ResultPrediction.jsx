import { useEffect } from "react"

export const ResultPrediction = ({resultPrediction}) => {
    return (
        <div className="bg-emerald-100 shadow-2xl transition-all duration-200 rounded-2xl p-6 hover:shadow-black hover:shadow-2xl justify-center flex flex-col items-center  lg:gap-6 lg:p-6">
            <p className="text-lg font-bold">Hasil prediksi level anxiety</p>
            <p className="text-6xl">{resultPrediction !== null ? resultPrediction.toFixed(0) : "..."}</p>
        </div>
    )
}