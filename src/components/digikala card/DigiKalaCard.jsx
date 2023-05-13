import { useEffect, useState } from 'react'
import './index.css'
import Digikala_card from './Digicard'
import { fakeData } from './fakeData'
import axios from 'axios'
import Button from '../button/Button'

function Digicard(props) {
    const [state , setstate] = useState('')
    const [productList , setproductlist] = useState([])
    
    useEffect(()=> {
      axios.get('https://fakestoreap.com/products')
      .then(data => setproductlist(data.data.filter(item => item.id <=3)))
      .catch((err) => console.log(err))
    }, productList)
    
    let id = "kjhk"
    function Click() {
   alert(`clicked ${state}`)
    }

    function Click2(id) {
      setstate(id)  
    }
    
    return(
  
    <div className='containor'>
      <div>
        Lorem ipsum dolor sit amet.
      </div>
      <div className='cards_explaination'>
        <img className='first_pic' src="https://www.digikala.com/statics/img/svg/specialCarousel/Amazings.svg" />
        <img className='sec_pic' src="https://www.digikala.com/statics/img/png/specialCarousel/box.png" alt="" />
        <button onClick={()=> Click2(fakeData[0].id)} >مشاهده همه </button>
        <button onClick={()=> Click(5)} >مشاهده همه </button>
        <Button txt = {props.propDrill}> {props.propDrill}</Button>
      </div>

      <div className='card'>
        <Digikala_card id='first_card' discount='21' currentPrice='102000' mainPrice='129000' src='https://dkstatics-public.digikala.com/digikala-products/112962241.jpg?x-oss-process=image/resize,m_lfit,h_300,w_300/quality,q_80' />
        {productList.map( item => {
          return (
            <Digikala_card key={item.id} discount={item.count} currentPrice= {item.price} mainPrice= {item.id} src={item.image} />
          )
        })}
        </div>
    </div>
    )
}
export default Digicard