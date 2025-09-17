import RedefiningLuxury from '@/components/features/About/components/AboutLuxury'
import Awards from '@/components/features/About/components/Awards'
import BrandCollaborations from '@/components/features/About/components/Brands'
import Owner from '@/components/features/About/components/Owner'
import Services from '@/components/features/About/components/Services'
import WhyChooseJ7Group from '@/components/features/About/components/WhyChooseJ7'
import { Hero } from '@/components/features/home/components/hero-section'
import React from 'react'

const page = () => {
  return (
    <div>
      {/* <MissionVision /> */}
      <Hero 
      backgroundType='image'
      backgroundSrc='imgi_45_1729244624-1-travis-mark-12-3-2222x1100-copy_zbi1vb'
      overlay='medium'
      ariaLabel='About Hero section'
    
      />
        <Owner />
        <RedefiningLuxury />
        <Services />
        <Awards />
        <BrandCollaborations />
        <WhyChooseJ7Group />
    </div>
  )
}

export default page