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

            <del> {props.mainPrice} </del>
        </div>
    )
}

export default Digikala_card