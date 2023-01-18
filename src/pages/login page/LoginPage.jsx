import { useEffect, useState } from "react"
import Button from "../../components/button/Button"


const LoginPage = () => {
    const emailRegex = /(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])/
    const mobieRegex = /09[0-3][0-9]-?[0-9]{3}-?[0-9]{4}/

    const [error , setError] = useState(true)
    const [inputVal, setInputVal] = useState("")

    useEffect (()=>{
        console.log("error checked")
    },[error])

    function type(e) {
        setInputVal(e)
    }
     function click() {
         if (emailRegex.test(inputVal) || mobieRegex.test(inputVal)) {
            setError(true)
         } else {
            setError(false)
         }
    }
    return(
        <>
        <div  className="dir-rtl w-full h-screen flex flex-row items-center justify-center">
            <div className="w-[400px] border-[1.6px] rounded-md flex flex-col items-center justify-center py-9 px-7 ">
                <img className="w-[150px] h-10" src="https://www.digikala.com/statics/img/svg/logo.svg"/>

                <div className="w-full py-4">
                    <h5 className="text-xl">ورود | ثبت نام</h5>
                    <p className="text-sm mt-5">سلام !</p>
                    <p className="text-sm my-2">لطفا شماره موبایل یا ایمیل خود را وارد کنید</p>
                </div>

                <div className="flex flex-col w-full">
                    <input value={inputVal} onChange={(event) => type(event.target.value) } className="h-[49px] rounded-lg border-[1px] border-[#67e8f9] outline-0 p-2" type="text" />
                    <small className={`text-[red] my-2 ${error ? 'hidden' : 'block'}`}>لطفا این قسمت را خالی نگذارید</small>
                    <Button onClick={click}>ورود</Button>
                    
                </div>

                <p className="text-xs w-[380px] pr-4 mt-2.5">
                     ورود شما به معنای پذیرش
                    <a className="text-[#0891b2]" href="#"> شرایط دیجی کالا </a>
                    و
                    <a className="text-[#0891b2]" href="#"> قوانین حریم شخصی </a>
                    است
                </p>
            </div>
        </div>
    
    </>
    )
}

export default LoginPage