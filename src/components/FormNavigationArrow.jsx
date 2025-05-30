import { sliderRef, inputFormPredictionRef } from "../utils/refStore"
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
        <div className="flex justify-center">
            <img src={LeftArrow} alt="" className="w-14 h-14 cursor-pointer" onClick={LeftClick}/>
            <div
                ref={sliderRef}
                className="w-65 overflow-hidden flex whitespace-nowrap items-center"
            >
                <div className="flex">
                    <TitleFormNavigationArrow title={'Sleep Hours'}/>
                    <TitleFormNavigationArrow title={'Physical Activity'}/>
                    <TitleFormNavigationArrow title={'Caffeine Intake'}/>
                    <TitleFormNavigationArrow title={'Alcohol Consumption'}/>
                    <TitleFormNavigationArrow title={'Stress Level'}/>
                    <TitleFormNavigationArrow title={'Heart Rate'}/>
                    <TitleFormNavigationArrow title={'Breathing Rate'}/>
                    <TitleFormNavigationArrow title={'Sweating Level'}/>
                    <TitleFormNavigationArrow title={'Submit Form'}/>
                </div>
            </div>
            <img src={RightArrow} alt="" className="w-14 h-14 cursor-pointer" onClick={RightClick}/>
        </div>
    )
}