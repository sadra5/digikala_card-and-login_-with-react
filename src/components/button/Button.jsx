

const Button = (props) => {
    
    return(
        <>
            <button {...props} className={`MyBtn ${props.dlj}`}>
            {props.children}  
            </button>
            <p>{props.txt}</p>
        </>
    )
}
export default Button