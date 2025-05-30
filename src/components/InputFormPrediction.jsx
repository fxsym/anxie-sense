export const InputFormPrediction = ({info, description, placeHolder}) => {
    return (
        <div className="w-100 flex flex-col items-start">
            <p className="text-md font-bold mb-6">{info}</p>
            <p className="text-justify mb-4">{description}</p>
            <input type="text" placeholder={placeHolder} className="w-full border py-2 px-4 rounded-2xl"/>
        </div>
    )
}