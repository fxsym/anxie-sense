export const TitleFormNavigationArrow = ({title, targetRef}) => {

    const handleClick = () => {
        targetRef.current?.scrollIntoView({ behavior: "smooth" });
        console.log({targetRef})
    }

    return (
        <div className="w-50 lg:w-65 flex justify-center lg:justify-start lg:cursor-pointer lg:border-2 lg:px-2 lg:rounded-lg " onClick={handleClick}>
            <p className="text-sm font-semibold lg:text-lg">{title.toUpperCase()}</p>
        </div>
    )
}