import React from 'react'
import newsLetterImg from '../../assets/news.png'
import Reveal from '../../animation/Reveal'

const NewsLetter = () => {
  return (
    <Reveal>
      <div 
    className='my-16 bg-no-repeat bg-cover bg-center rounded-md'
    style={{backgroundImage: `url{${newsLetterImg}}`}}
    >
        <div className='py-12 bg-black/40 rounded-md h-full flex items-center justify-center text-center'>
            <div className='space-y-3 p-4'>
                <h2 className=' text-2xl font-bold text-white'>
                    Subscribe Our Newsletter
                </h2>
                <p className='large text-white'>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                <button className='bg-white rounded-md hover:bg-secondary hover:text-white text-primary font-bold px-8 py2
                '>Sign Up</button>
            </div>
        </div>
        
    </div>
    </Reveal>
  )
}

export default NewsLetter