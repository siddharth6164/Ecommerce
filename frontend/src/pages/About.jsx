import React from 'react'
import Title from '../components/Title';
import {assets} from '../assets/frontend_assets/assets'
import NewsletterBox from '../components/NewsletterBox'

const About = () => {
  return (
    <div>

      <div className='text-2xl text-center pt-8 border-t'>
        <Title text1={'ABOUT'} text2={'US'}/>
      </div>

      <div className='my-10 flex flex-col md:flex-row gap-16'>
        <img src={assets.about_img} alt="" className='w-full md:max-w-[450px]'/>
          <div className='flex flex-col justify-center gap-6 md:w-2/4 text-gray-600'>
            <p>Welcome to ExploreAttire, where adventure meets style! We’re passionate about providing high-quality, travel-inspired apparel and accessories for explorers, wanderers, and adventurers. Whether you're gearing up for your next big trip or looking for everyday pieces that reflect your love for adventure, we've got you covered.</p>

            <p>At ExploreAttire, we curate products that blend durability with fashion, ensuring that you look great while conquering the outdoors or traveling the globe. From rugged backpacks to versatile clothing, each item is thoughtfully designed with the modern explorer in mind.</p>

            <b className='text-gray-800'>Our Mission</b>
            <p>Our mission is to make your journey comfortable, stylish, and unforgettable. So, wherever your next adventure takes you, make sure you’re equipped with the best from ExploreAttire!</p>

            <b className='text-gray-700'>Explore. Wander. Wear.</b>

          </div>
      </div>

        <div className='text-xl py-4 '>
          <Title text1={'WHY'} text2={'CHOOSE US'}/>
        </div>

        <div className='flex flex-col md:flex-row text-sm mb-10'>

          <div className='border px-5 md:px-16 py-8 sm:py-20 flex flex-col gap-2'>
            <b>Quality Assurance:</b>
            <p className='text-gray-600 '>At ExploreAttire, we handpick and test every product for durability, comfort, and performance—so you get reliable gear and travel wear built to last through every adventure.</p>
            
          </div>
          
          <div className='border px-5 md:px-16 py-8 sm:py-20 flex flex-col gap-2'>
            <b>Convenience:</b>
            <p className='text-gray-600 '>We value your time, so we’ve made shopping easy and hassle-free. With a user-friendly site, fast checkout, and reliable shipping, ExploreAttire helps you gear up quickly for any journey.
</p>
          </div>
          
          <div className='border px-5 md:px-16 py-8 sm:py-20 flex flex-col gap-2'>
            <b>Exceptional Customer Service:</b>
            <p className='text-gray-600 '>Your satisfaction comes first. Our friendly support team is here to help with sizing, shipping, or product questions—ensuring a smooth, stress-free shopping experience from start to finish.</p>
          </div>

        </div>

        <div className='border px-5 md:px-16 py-8 sm:py-20 flex flex-col gap-2'>
            <b>Delivery:</b>
            <p className='text-gray-600 '>We offer fast, reliable delivery to get your gear to you when you need it. With tracking on every order and secure packaging, you can shop with confidence knowing your items will arrive safely and on time—ready for your next adventure.</p>
          </div>

          <div className='border px-5 md:px-16 py-8 sm:py-20 flex flex-col gap-2'>
            <b>Privacy Ploicy:</b>
            <p className='text-gray-600 '>At ExploreAttire, your privacy is important to us. We’re committed to protecting your personal information and only use it to process orders, improve your shopping experience, and keep you informed—with your consent. We never sell or share your data with third parties. Your trust means everything.
</p>
          </div>

       

        

        <NewsletterBox />

    </div>
  )
}

export default About