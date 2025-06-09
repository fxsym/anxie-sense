export const InputFormPrediction = ({info, description, placeHolder, setAnswer, targetRef}) => {

    return (
        <div className="w-100 flex flex-col items-start" ref={targetRef}>
            <p className="text-md font-bold mb-6">{info}</p>
            <p className="text-justify mb-4">{description}</p>
            <input type="text" placeholder={placeHolder} className="w-full border py-2 px-4 rounded-2xl" onChange={(e) => setAnswer(e.target.value)}/>
        </div>
    )
}