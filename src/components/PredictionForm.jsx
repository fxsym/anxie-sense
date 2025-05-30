import { inputFormPredictionRef } from "../utils/refStore"
import { InputFormPrediction } from "./InputFormPrediction"

export const PredictionForm = () => {
    return (
        <form action="" 
        ref={inputFormPredictionRef}
        className="bg-slate-200 flex w-100 overflow-hidden whitespace-nowrap items-center"
        >
            <div className="flex">
                <InputFormPrediction info={"In Sleephours"} placeHolder={"Sleep Hours"} />
                <InputFormPrediction info={"In Physical Activity (hrs/week)"} placeHolder={"Physical Activity (hrs/week)"} />
                <InputFormPrediction info={"In Caffeine Intake (mg/day)"} placeHolder={"Caffeine Intake (mg/day)"} />
                <InputFormPrediction info={"In Alcohol Consumption (drinks/week)"} placeHolder={"Alcohol Consumption (drinks/week)"} />
                <InputFormPrediction info={"In Stress Level (1-10)"} placeHolder={"Stress Level (1-10)"} />
                <InputFormPrediction info={"In Heart Rate (bpm)"} placeHolder={"Heart Rate (bpm)"} />
                <InputFormPrediction info={"In Breathing Rate (breaths/min)"} placeHolder={"Breathing Rate (breaths/min)"} />
                <InputFormPrediction info={"In Sweating Level (1-5)"} placeHolder={"Sweating Level (1-5)"} />
            </div>
        </form>
    )
}