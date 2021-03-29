const Button = ({onClick, color, text}) => {
    return(
        <button
            style={{backgroundColor: color}}
            onClick={onClick}
        >
            {text}
        </button>
    )
}

export default Button;