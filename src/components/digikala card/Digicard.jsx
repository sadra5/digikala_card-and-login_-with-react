import Button from '../button/Button'
import './Dificard.css'

const Digikala_card = (props)=> {
    return (
        <div className='contaionor' key={`productList ${props.key}`} id={props.id}>
            <div className='logo'>
                <img src={props.src}/>
            </div>

            <div className='showPrice'>
                <div className='discount'>{props.discount}%</div>
                <div>
                    {props.currentPrice}
                    <span>تومان</span>
                </div>
            </div>

            <del className='flex justify-between'> <p className='ml-[12px]'>{props.mainPrice}</p> <button onClick={() => props.setshopinglist([...props.shopinglist , { title : props.title, src : props.img, price : props.currentPrice, shopId: props.shopId } ])} className='bg-[red] text-[white] -[5px]'>+</button> </del>
        </div>
    )
}

export default Digikala_card