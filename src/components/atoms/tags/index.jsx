import "./style.css"

export const Tags = ({
    variant = "stats",
    className= "",
    children,
    ...props
}) => {
         
    const variantMap = {
        filter: "tag-filter",
        stats: "tag-stats",
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