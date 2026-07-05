import React from 'react'

const Card = ({img, changeWatch, bigWatch}) => {

   const handleClick =() => {
  if(bigWatch !== img.bigWatch ){

    changeWatch(img.bigWatch)
  }
 }
  return (
    <div className={`border-2  rounded-xl
        ${bigWatch === img.bigWatch
          ? 'border-red-500'
          : 'border-transparent'
        }  cusror-pointer max-sm:flex-1
        `}
        onClick={handleClick}

        
        >
          <div className='flex justify-center items-center bg-center bg-cover rounded-xl overflow-hidden'>
            <img src={img.watch} alt="" width={127} height={103} className='object-contain'/>
          </div>
        </div>
  )
}

export default Card