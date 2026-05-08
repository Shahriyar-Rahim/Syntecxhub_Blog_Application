import React from 'react'
import { Link } from 'react-router'
import Reveal from '../animation/Reveal'

const Footer = () => {
  return (
    <Reveal>
      <footer className='bg-accent text-primary py-8'>
      <div className='container max-w-7xl mx-auto px-4'>
        <div className='grid grid-cols-2 lg:grid-cols-4 justify-center gap-8 '>
          {/* about */}
        <div>
          <h3 className=' text-lg font-semibold mb-4'>About Us</h3>
          <p className='text-gray-400'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore, magni. Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore, magni.
          </p>

          <div className='mt-5'>
            <p className='text-base'>
              <strong>Email: <a href="mailto:1B5f1@example.com">1B5f1@example.com</a></strong>
            </p>
            <p className='text-base'>
              <strong>Phone: <a href="tel:1234567890">123-456-7890</a></strong>
            </p>
          </div>
        </div>
        {/* Quick Links */}
        <div className='md:pl-16'>
          <h3 className='text-lg font-semibold mb-4'>Quick Links</h3>
        <ul className=' space-y-2'>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
          <li>
            <Link to="/blogs">Blogs</Link>
          </li>
          <li>
            <Link to="/author">Author</Link>
          </li>
        </ul>
        </div>
        {/* category */}
        <div className='md:pl-16'>
          <h3 className='text-lg font-semibold mb-4'>Category</h3>
        <ul className=' space-y-2'>
          <li>
            <Link to="/">Lifestyle</Link>
          </li>
          <li>
            <Link to="/about">Technology</Link>
          </li>
          <li>
            <Link to="/contact">Travel</Link>
          </li>
          <li>
            <Link to="/blogs">World</Link>
          </li>
          <li>
            <Link to="/author">Author</Link>
          </li>
        </ul>
        </div>

        {/* newsletter */}
        <div className='bg-white hidden sm:block'>
          <div className='px-6 py-6 text-center'>
            <h3 className='text-lg font-semibold mb-4'>Weekly Newsletter</h3>
            <p className='text-gray-600 text-sm mb-2'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fuga delectus maxime</p>
            <form className='space-y-2'>
              <input type="email" placeholder='Your Email'
              className='bg-gray-600 text-white rounded-lg py-2 px-4 w-full focus:outline-none' />
              <button type='submit'
              className='bg-secondary text-white rounded-lg py-2 px-4 w-full'
              >Subscribe</button>
            </form>
          </div>
        </div>
        </div>
      </div>
    </footer>
    </Reveal>
  )
}

export default Footer