import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'
import { useEffect, useState } from 'react'
import { WhatsappShareButton,WhatsappIcon } from 'react-share'

const inter = Inter({ subsets: ['latin'] })

function Home({source}) {
  console.log(source);
  return (
    <div>
      <Head>
        <title>Social Media Preview</title>
        <meta property="og:url" content="your url" />
        <meta property="og:type" content="website" />
        <meta property="fb:app_id" content="your fb id" />
        <meta property="og:title" content="hello" />
        <meta name="twitter:card" content="summary" />
        <meta
          property="og:description"
          content="Hurray!! Yes Social Media Preview is Working"
        />
        <meta property="og:image" content={source} />
      </Head>
      <img src={source} className='image'/>
      <div>
      <WhatsappShareButton url='https://assignment-drab-iota.vercel.app/'>
        <WhatsappIcon size={32} round />
      </WhatsappShareButton>
      </div>
    </div>
  )
}


export const getServerSideProps = async () => {
  let source = null;

await fetch("https://dog.ceo/api/breeds/image/random")
.then((res)=>{
  return res.json();
  console.log(res.json());
})
.then((data)=>{
  source=data.message;
  console.log(source);
})

  return{
    props:{
      source
    }
  }
}

export default Home
