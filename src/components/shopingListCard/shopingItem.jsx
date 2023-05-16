import Button from '../button/Button'
import './index.css'

const ShopingItem = (props)=> {
    return(

        <div className=" dr pl-[25px] flex-col justify-start items-center	">
            <div>

            {props.shopinglist.map( item => {
                return(
                    <div key={`shopinglist-item-${item.id}`}>

                        <p className='mt-[2rem]'>{item.title}</p>
                        <button onClick={() => { props.setshopinglist(props.shopinglist.filter(product => product.shopId !== item.shopId))}}>__</button>
                        <div className="h-[120px] w-[120px]">
                        <img className="w-full h-full mt-[1rem]" src={item.src} />
                        </div>
            
                        <div className='flex justify-between	mt-[1rem]	bg-[]'>
                        <p className='pr-[19px]'>{item.price}</p>
                        </div>
                    </div>
                    )})}
            </div>
            <div>
                <span>{props.shopinglist.reduce((sum , current) => sum + current.price, 0)}$</span>
                <Button dlj='m-0	'>خرید </Button>
            </div>

        </div>
            
        
    )
}
export default ShopingItem