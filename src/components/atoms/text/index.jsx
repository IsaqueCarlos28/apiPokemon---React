import "./style.css"

export const Text = (
    {
    as: Component = "p",
    variant = "body",
    className = "",
    children,
    ...props
    }) => {

    const variantMap ={
        h1: "title",
        h2: "subtitle",
        body: "simple_text",
        caption: "caption"
    }

    const classes = [
        variantMap[variant] || variantMap.body,
        className
    ].filter(Boolean).join(' ').trim()
    
    return(
        <Component className ={classes} {...props}> 
            {children} 
        </Component>
    )
}