export const InputFormPrediction = ({info, placeHolder}) => {
    return (
        <div className="border-2 w-100 flex flex-col items-center">
            <p className="">{info}</p>
            <input type="text" placeholder={placeHolder} className="border py-2 px-4 rounded-2xl"/>
        </div>
    )
}