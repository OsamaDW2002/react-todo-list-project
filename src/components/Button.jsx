export function Button({children, ...props}) {
    const stylingButton = "px-4 py-2 text-sx md:text-base rounded-md bg-stone-700 text-stone-400 hover:bg-stone-600 hover:text-stone-100";

    return (
        <button className= {stylingButton} {...props}>{children}</button>
    )
}