import ContactForm1 from '@/components/features/contact/components/Contact'
import GoogleMapsIframe from '@/components/features/contact/components/J7Map'
// import ContactForm from '@/components/features/home/components/ContactFormSection'
import { Hero } from '@/components/features/home/components/hero-section'
import React from 'react'

const page = () => {
  return (
    <div>
        <Hero 
        backgroundSrc='imgi_165_UJLFxuhDXlE4CSHhgho4sHURAheE2kTtmsUieBId_vy9akb'
        backgroundType='image'
        overlay='medium'
        />
        <ContactForm1 />
        <GoogleMapsIframe />
    </div>
  )
}

export default page