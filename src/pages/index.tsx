import Head from 'next/head';
import Navigation from '@/components/navigation';
import Showcase from '@/components/showcase';
import Service from '@/components/service';
import Technologies from '@/components/technologies';

export default function Home() {
  return (
    <>
      <Head>
        <title>Devlayer | Your Digital Solution</title>
        <meta name="description" content="Devlayer | Your Digital Solution" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no" />
        <link href="https://api.fontshare.com/v2/css?f[]=satoshi@900,700,500&f[]=author@500,600,700&f[]=general-sans@500,600,700&f[]=outfit@800,500,700&f[]=beVietnam-pro@600,900,700,800&f[]=excon@900,700,500&f[]=chillax@600,700&f[]=nippo@700&f[]=work-sans@800,600,700,601&f[]=red-hat-display@800,900,700&f[]=clash-display@700,600&f[]=poppins@900,500,800,700,600&display=swap" rel="stylesheet"/>
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/4.1.1/animate.min.css"/>
        <link rel="icon" href="/favicon.ico" />
      </Head>
    <Navigation/>
    <Showcase/>
    <Service/>
    <Technologies/>
    </>
  )
}
