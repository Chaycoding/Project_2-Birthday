import React from 'react'
import Scrollani from './scrollAni.tsx';


interface SampleComponentProps {
  children: React.ReactNode
}


const SampleComponent = ({ children }: SampleComponentProps) => {
  return (
    <div className=' text-white mt-40 sm:pt-30 text-center h-[25rem] px-7 sm:px-0'>
                <h1 className='sm:text-5xl text-4xl'>Hope you have an amazing and wonderful year!</h1>
                <h1 className='sm:text-3xl text-3xl mt-14 sm:leading-[3rem] leading-10'>All these years you have been nothing but an amazing and wonderful person to us.<br/> I only know bits and pieces of your story but so far all of it's pretty cool.<br/>Sometime please do fill in the gaps. This is one story I would like to know.</h1>
                <h1 className='text-3xl mt-7 sm:leading-[3rem] leading-10'>Thank you. Thank you for everything you have done for us, uncle. <br/> I hope you have an awesome year filled with joy and happiness. </h1>
              </div>
  )
}


const HomePage = () => {
  return (
    <>
      <Scrollani reappear>
        <SampleComponent/>
      </Scrollani>
    </>
  )
}


export default HomePage