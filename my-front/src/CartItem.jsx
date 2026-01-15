// import React, { useEffect, useState } from 'react'

// const CartItem = (props) => {
//     const{productID, quantity} = props.data
//   const [detail, setDetail] = useState([])
//   const [search, setSearch] = useState([])
//    useEffect(()=> {
//     fetch("src/components/Card.json")
//     .then(res => res.json())
//     .then(data => setSearch(data))
//    }, [])
  
//  console.log(search);
 
//   useEffect(() => {
//     const findDetail = search.filter(prod => prod.id === productID)[0]
//     console.log({dii: findDetail});
    
// setDetail(productID)  
// }, [productID])
//     return (
//     <div className='flex justify-between items-center bg-slate-600 text-white p-2 border-b-2 border-sl] gap-5'>
//         {/* <img src={detail.watch} alt=""  className='w-12'/> */}
//         <h2>{detail.name}</h2>
//         <h2>{detail.price }</h2>
//     </div>
//   )
// }

// export default CartItem