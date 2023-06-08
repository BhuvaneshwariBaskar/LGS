import React from 'react'
import {BiPhoneCall} from 'react-icons/bi'
import {MdEmail} from 'react-icons/md'
import {BsFacebook} from 'react-icons/bs'
import {FaTwitter} from 'react-icons/fa'
import {FaInstagramSquare} from 'react-icons/fa'
import {AiOutlineLinkedin} from 'react-icons/ai'
const Contact = () => {
  return (
    <div className="w-[100vw] grid grid-cols-2 gap-2 h-14">
    <div className="flex justify-center ">
    <div className='flex items-center'>
        <BiPhoneCall className='mr-1'/>
        <p className='text-sm mr-5'>91+9940698624</p>
        <MdEmail className='mr-1'/>
        <p className='text-sm'>info@gmail.com</p>
    </div>
    </div>
    <div className="flex justify-center items-center">
        <BsFacebook size={20} />
        <FaTwitter className='ml-2' size={20}/>
        <FaInstagramSquare className='ml-2' size={20}/>
        <AiOutlineLinkedin className='ml-2' size={20}/>
    </div>
  </div>
  )
}

export default Contact