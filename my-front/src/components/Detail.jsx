import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
const Detail = () => {
  const [details, setDetail] = useState(null)
  
  const [watch, setWatch] = useState([])
  
  useEffect(() =>{
    fetch("src/components/data/Card.json")
    .then(res => res.json())
    .then(data => setWatch(data))
    .catch(err => console.log(err))
  },[])
  const { slug} = useParams()
console.log(watch);

 useEffect(() => {
  // if(watch.at.length  === 0) return
const findDetail = watch.find(wat => wat.slug === slug )
if(findDetail){
    setDetail(findDetail)
}else{
    window.location.href= '/';
}
 },[slug])

    return (
  <>
{details.name}
 

  
  </>

  )
}

export default Detail