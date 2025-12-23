import "./style.css"

export const Image = ({
    variant = "display",
    className="",
    src="",
    alt="",
    ...props
}) => {

    const variantMap = {
        logo: "img-logo",
        display: "img-display",
        card: "img-card",
    }

    const classes = [
        "img-base",
        variantMap[variant] || variantMap.display,
        className
    ].filter(Boolean).join(' ').trim()

    return (
        <img className={classes} src={src} alt={alt} {...props} />
    )
}