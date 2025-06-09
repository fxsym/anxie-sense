export const TitleFormNavigationArrow = ({title, targetRef}) => {

    const handleClick = () => {
        targetRef.current?.scrollIntoView({ behavior: "smooth" });
        console.log({targetRef})
    }

    return (
        <div className="w-65 flex justify-center lg:justify-start lg:cursor-pointer" onClick={handleClick}>
            <p className="text-lg font-bold">{title.toUpperCase()}</p>
        </div>
    )
}