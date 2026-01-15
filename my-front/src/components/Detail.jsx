import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
const Detail = () => {
 const {slug} = useParams()
 const [details, setDetail] = useState([])
 const [watch, setWatch] = useState([])
useEffect(() =>{
    fetch("src/components/Card.json")
    .then(res => res.json())
    .then(data => setWatch(data))
},[])
 useEffect(() => {
const findDetail = watch.filter(wat => wat.slug === slug )
if(findDetail.length > 0){
    setDetail(findDetail[0])
}else{
    window.location.href= '/';
}
 },[slug])
    return (
  <>
  {/* {setDetail.map((war) => (
    <img src={war.watch} alt="" /> */}
  {/* ))} */}
  
  </>

  )
}

export default Detail