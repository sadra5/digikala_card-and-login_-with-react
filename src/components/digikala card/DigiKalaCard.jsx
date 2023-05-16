import { useEffect, useState } from 'react'
import './index.css'
import Digikala_card from './Digicard'
import { fakeData } from './fakeData'
import ShopingItem from '../shopingListCard/shopingItem'
import axios from 'axios'
import Button from '../button/Button'

function Digicard(props) {
    const [state , setstate] = useState('')
    const [productList , setproductlist] = useState([])
    const [shopItem , setshopItem] = useState([])
    const [shopinglist , setshopinglist] = useState([])

    function addShopingItem(id) {
      setshopinglist([...props.shopinglist , productList.filter(item => item.id == id)])
      shopinglist.push(shopItem)
      console.log(shopinglist)
    }

    useEffect(()=> {
      setproductlist(fakeData.filter(item => item.id <=3))
    }, productList)
    
    let id = "kjhk"
    function Click() {
   alert(`clicked ${state}`)
    }

    function Click2(id) {
      setstate(id)  
    }
    
    return(
    <div className="flex items-center	h-screen">
      <div className='bg-white w-1/4 h-full'>
        <ShopingItem shopinglist={shopinglist} setshopinglist={setshopinglist}/>
      </div>

        <div className='containor'>
        <a href="loginPage.html" className=" text-lg">login page</a>
          <div className='cards_explaination'>
            <img className='first_pic' src="https://www.digikala.com/statics/img/svg/specialCarousel/Amazings.svg" />
            <img className='sec_pic' src="https://www.digikala.com/statics/img/png/specialCarousel/box.png" alt="" />
            <button onClick={()=> Click2(fakeData[0].id)} >مشاهده همه </button>
          </div>

          <div className='card'>
            <Digikala_card id='first_card' discount='21' currentPrice='102000' mainPrice='129000' src='https://dkstatics-public.digikala.com/digikala-products/112962241.jpg?x-oss-process=image/resize,m_lfit,h_300,w_300/quality,q_80' />
            {productList.map( item => {
              return (
              <Digikala_card key={item.id} shopId={item.id} discount={item.count} title={item.title} currentPrice= {item.price} mainPrice= {item.id} src={item.image} img={item.image} shopinglist={shopinglist} setshopinglist={setshopinglist} />
              )
            })}
            </div>
        </div>
    </div>
    )
}
export default Digicard