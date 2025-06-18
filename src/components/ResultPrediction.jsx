import { MoonLoader } from "react-spinners"

export const ResultPrediction = ({ resultPrediction, loadingStatus, firstPredict }) => {


    return (
        <div className={`${firstPredict !== false ? "" : "hidden "} bg-sky-200/80 shadow-2xl transition-all duration-200 rounded-2xl p-6 hover:shadow-black hover:shadow-2xl justify-center flex flex-col items-center  lg:gap-6 lg:p-6`}>
            <p className="text-lg font-bold">Hasil prediksi level anxiety</p>
            <p className="text-6xl">
                {resultPrediction !== null
                    ? resultPrediction.toFixed(0)
                    : loadingStatus
                        ? <MoonLoader speedMultiplier={0.5} />
                        : ">>>"}
            </p>
        </div>
    )
}