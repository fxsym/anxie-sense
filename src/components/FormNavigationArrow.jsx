import { sliderRef, inputFormPredictionRef, sleepHoursRef, physicalActivityRef, caffeineRef, alcoholRef, stressRef, heartRateRef, breathingRateRef, sweatingLevelRef, submitFormRef } from "../utils/refStore"
import LeftArrow from "../assets/images/left.png"
import RightArrow from "../assets/images/right.png"
import { TitleFormNavigationArrow } from "./TitleFormNavigationArrow"

export const FormNavigationArrow = () => {

    const LeftClick = () =>{
        sliderRef.current.scrollBy({ left: -260, behavior: 'smooth' });
        inputFormPredictionRef.current.scrollBy({ left: -400, behavior: 'smooth' });
    }

    const RightClick = () =>{
        inputFormPredictionRef.current.scrollBy({ left: 400, behavior: 'smooth' });
        sliderRef.current.scrollBy({ left: 260, behavior: 'smooth' });
    }

    return (
        <div className="flex justify-center bg-emerald-200">
            <img src={LeftArrow} alt="" className="w-14 h-14 cursor-pointer lg:hidden" onClick={LeftClick}/>
            <div
                ref={sliderRef}
                className="w-65 overflow-hidden flex whitespace-nowrap items-center lg:overflow-visible"
            >
                <div className="flex lg:flex-col lg:gap-0.5">
                    <TitleFormNavigationArrow title={'Sleep Hours'} targetRef={sleepHoursRef}/>
                    <TitleFormNavigationArrow title={'Physical Activity'} targetRef={physicalActivityRef}/>
                    <TitleFormNavigationArrow title={'Caffeine Intake'} targetRef={caffeineRef}/>
                    <TitleFormNavigationArrow title={'Alcohol Consumption'} targetRef={alcoholRef}/>
                    <TitleFormNavigationArrow title={'Stress Level'} targetRef={stressRef}/>
                    <TitleFormNavigationArrow title={'Heart Rate'} targetRef={heartRateRef}/>
                    <TitleFormNavigationArrow title={'Breathing Rate'} targetRef={breathingRateRef}/>
                    <TitleFormNavigationArrow title={'Sweating Level'} targetRef={sweatingLevelRef}/>
                    <TitleFormNavigationArrow title={'Submit Form'} targetRef={submitFormRef}/>
                </div>
            </div>
            <img src={RightArrow} alt="" className="w-14 h-14 cursor-pointer lg:hidden" onClick={RightClick}/>
        </div>
    )
}