

const Button = (props) => {
    
    return(
        <>
            <button {...props} className="MyBtn" {...props}>
            {props.children}  
            </button>
        </>
    )
}
export default Button