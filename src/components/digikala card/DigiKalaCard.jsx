import { useState } from 'react'
import './index.css'
import Digikala_card from './Digicard'

function Digicard() {
    const [state , setstate] = useState('')

    function Click(id) {
   alert(`clicked ${id}`)
    }

    function Click2(id) {
      setstate(id)  
    }
    
    return(
    <div className='containor'>
        <div className='cards_explaination'>
        <img className='first_pic' src="https://www.digikala.com/statics/img/svg/specialCarousel/Amazings.svg" />
        <img className='sec_pic' src="https://www.digikala.com/statics/img/png/specialCarousel/box.png" alt="" />
        <button onClick={()=> Click(state)} >مشاهده همه </button>
      </div>

      <div className='card'>
        <Digikala_card id='first_card' discount='21' currentPrice='102000' mainPrice='129000' src='https://dkstatics-public.digikala.com/digikala-products/112962241.jpg?x-oss-process=image/resize,m_lfit,h_300,w_300/quality,q_80' />
        <Digikala_card discount='57' currentPrice='390000' mainPrice='903000' src='https://dkstatics-public.digikala.com/digikala-products/e6c6370235a56f433163e125a6d1bf51a352c192_1669133462.jpg?x-oss-process=image/resize,m_lfit,h_300,w_300/quality,q_80' />
        <Digikala_card discount='77' currentPrice='410000' mainPrice='1103000' src='https://dkstatics-public.digikala.com/digikala-products/03aacafeeb0524110af675e1f67da75a7406541a_1669103297.jpg?x-oss-process=image/resize,m_lfit,h_300,w_300/quality,q_80' />
        <Digikala_card discount='57' currentPrice='39000' mainPrice='93000' src='https://dkstatics-public.digikala.com/digikala-products/a512fa110d52351a2e25dd48c6ce7c47cec4e221_1644351274.jpg?x-oss-process=image/resize,m_lfit,h_300,w_300/quality,q_80' />
        <Digikala_card discount='67' currentPrice='150000' mainPrice='153000' src='https://dkstatics-public.digikala.com/digikala-products/2900ce866d6048795291dbb34710421449158b46_1671449013.jpg?x-oss-process=image/resize,m_lfit,h_300,w_300/quality,q_80' />
        <Digikala_card discount='27' currentPrice='390000' mainPrice='903000' src='https://dkstatics-public.digikala.com/digikala-products/faeecea2ea5c1b9b6f7e7059281892cba84961bd_1594545361.jpg?x-oss-process=image/resize,m_lfit,h_300,w_300/quality,q_80' />
      </div>
    </div>
    )
}
export default Digicard