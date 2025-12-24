import "./style.css"

export const Button = ({
    as: Component = "button", //button,submit,a
    variant = "primary",
    className = "" ,
    size = "medium",
    children,
    ...props
})=>{

    const variantMap = {
        primary: "btn-primary",
        secondary: "btn-secondary",
        danger: "btn-danger",
        ghost: "btn-ghost",
    }

    const sizeMap = {
        large: "btn-large",
        medium: "btn-medium",
        small: "btn-small"
    }

    const classes = [
        "btn-base",
        variantMap[variant] || variantMap.primary,
        sizeMap[size] || sizeMap.medium,
        className,
    ].filter(Boolean).join(' ').trim()

    return (
        <Component className={classes} {...props}>
            {children}
        </Component>
    )
}