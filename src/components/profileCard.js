import React from 'react'

function profileCard({image, firstName, lastName, gender, phone}) {
  return (
    <div>
      <div className='container flex-col h-80 w-60 bg-[#222] border-2 border-solid border-l-[#EA8D8D] border-r-[#EA8D8D] border-t-[#A890FE] border-b-[#A890FE] flex justify-center items-center rounded-lg relative'>
        <div className='image-section translate-center bg-gradient-to-t from-[#EA8D8D] to-[#A890FE] flex justify-center items-center overflow-hidden mt-4'>
            <img src={image} alt="" className='rounded-full h-32 '/>
        </div>
        <div className='text-content text-center text-white font-semibold flex flex-col my-10 opacity-0'>
            <span className='text-2xl my-2 name'>{firstName} {lastName}</span>
            <div className='text-xl my-2 gender'>{gender}</div>
            <div className='text-xl my-2 phone'>{phone}</div>
        </div>
      </div>
      <div className='text-white flex justify-center items-center mt-4'><h2>Please hover on the profile card</h2></div>

    </div>
  )
}

export default profileCard
