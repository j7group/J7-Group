import RedefiningLuxury from '@/components/features/About/components/AboutLuxury'
import Awards from '@/components/features/About/components/Awards'
import BrandCollaborations from '@/components/features/About/components/Brands'
import Owner from '@/components/features/About/components/Owner'
import Services from '@/components/features/About/components/Services'
import React from 'react'

const page = () => {
  return (
    <div>
      {/* <MissionVision /> */}
        <RedefiningLuxury />
        <Owner />
        <Services />
        
        <Awards />
        <BrandCollaborations />
    </div>
  )
}

export default page