import "./style.css"

export const Tag = ({
    variant = "stats",
    className= "",
    children,
    ...props
}) => {
         
    const variantMap = {
        filter: "tag-filter",
        stat: "tag-stats",
        type: "tag-types",
    }

    let typeColor
    if (variant == "type") {
        typeColor = {backgroundColor: `var(--type-color-${children})` }
    }

    const classes = [
        "base-card",
        variantMap[variant] || variantMap.filter,
        className,
    ].filter(Boolean).join(' ').trim()

    return(
        <div className={classes} style={typeColor} {...props}>
            {children}
        </div>
    )

}