import "./style.css"

export const Text = (
    {
    as: Component = "p",
    variant,
    className,
    children,
    }) => {

    const variantMap ={
        h1: "title",
        h2: "subtitle",
        body: "simple_text",
        caption: "caption"
    }

    const classes =`${variantMap[variant]} ${className}`
    return(
        <Component className ={classes}> {children} </Component>
    )
}