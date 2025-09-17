// data/propertyData.ts

import { PropertyData } from "../apartments/types";


export const propertyConfigurations: Record<string, PropertyData> = {
  'j7-emporium': {
    name: 'J7 Emporium',
    backgroundImage: 'Cam_04_final_night_light_fs8sja',
    availableUnits: ['Studio', '1 Bedroom', '2 Bedroom'],
    floors: [
      {
        id: 'ground',
        name: 'Ground Floor',
        position: { top: '85%', left: '55%' },
        floorArea: { top: '80%', left: '25%', width: '30%', height: '50%' }
      },
      {
        id: 'first',
        name: 'First Floor',
        position: { top: '72%', left: '55%' },
        floorArea: { top: '68%', left: '25%', width: '35%', height: '8%' }
      },
      {
        id: 'typical',
        name: 'Typical Floor',
        position: { top: '35%', left: '55%' },
        floorArea: { top: '20%', left: '25%', width: '25%', height: '45%' }
      }
    ],
    floorPlans: {
      'Studio': {
        id: 'studio',
        name: 'Studio',
        totalArea: '479 - 533 sq.ft.',
        internal: '363.17 sq.ft.',
        outdoor: '116 - 171 sq.ft.',
        view: 'Island View',
        unitNumber: 'XX - XX',
        floors: 'Typical Floor'
      },
      '1 Bedroom': {
        id: '1bed',
        name: '1 Bedroom',
        totalArea: '680 - 750 sq.ft.',
        internal: '520.25 sq.ft.',
        outdoor: '160 - 230 sq.ft.',
        view: 'Ocean View',
        unitNumber: 'XX - XX',
        floors: 'Typical Floor'
      },
      '2 Bedroom': {
        id: '2bed',
        name: '2 Bedroom',
        totalArea: '950 - 1100 sq.ft.',
        internal: '750.40 sq.ft.',
        outdoor: '200 - 350 sq.ft.',
        view: 'Panoramic View',
        unitNumber: 'XX - XX',
        floors: 'Typical Floor'
      },
      '3 Bedroom': {
        id: '3bed',
        name: '3 Bedroom',
        totalArea: '0 sq.ft.',
        internal: '0 sq.ft.',
        outdoor: '0 sq.ft.',
        view: 'N/A',
        unitNumber: 'N/A',
        floors: 'N/A'
      },
      'Penthouse': {
        id: 'penthouse',
        name: 'Penthouse',
        totalArea: '0 sq.ft.',
        internal: '0 sq.ft.',
        outdoor: '0 sq.ft.',
        view: 'N/A',
        unitNumber: 'N/A',
        floors: 'N/A'
      },
      'Retail': {
        id: 'retail',
        name: 'Retail',
        totalArea: '0 sq.ft.',
        internal: '0 sq.ft.',
        outdoor: '0 sq.ft.',
        view: 'N/A',
        unitNumber: 'N/A',
        floors: 'N/A'
      },
      'Office': {
        id: 'office',
        name: 'Office',
        totalArea: '0 sq.ft.',
        internal: '0 sq.ft.',
        outdoor: '0 sq.ft.',
        view: 'N/A',
        unitNumber: 'N/A',
        floors: 'N/A'
      }
    }
  },
  
  'radisson': {
    name: 'Radisson Blu Hotel',
    backgroundImage: 'Render_J7Global_1_t3a3ad',
    availableUnits: ['Studio', '1 Bedroom', '2 Bedroom', 'Penthouse'],
    floors: [
      {
        id: 'ground',
        name: 'Ground Floor',
        position: { top: '88%', left: '50%' },
        floorArea: { top: '85%', left: '20%', width: '35%', height: '45%' }
      },
      {
        id: 'mezzanine',
        name: 'Mezzanine',
        position: { top: '75%', left: '50%' },
        floorArea: { top: '72%', left: '20%', width: '40%', height: '10%' }
      },
      {
        id: 'typical',
        name: 'Typical Floor',
        position: { top: '40%', left: '50%' },
        floorArea: { top: '25%', left: '20%', width: '30%', height: '40%' }
      },
      {
        id: 'penthouse',
        name: 'Penthouse Level',
        position: { top: '15%', left: '50%' },
        floorArea: { top: '10%', left: '25%', width: '25%', height: '12%' }
      }
    ],
    floorPlans: {
      'Studio': {
        id: 'studio',
        name: 'Hotel Studio',
        totalArea: '400 - 450 sq.ft.',
        internal: '320.50 sq.ft.',
        outdoor: '80 - 130 sq.ft.',
        view: 'City View',
        unitNumber: 'HS - XX',
        floors: 'Typical Floor'
      },
      '1 Bedroom': {
        id: '1bed',
        name: 'Hotel Suite',
        totalArea: '600 - 700 sq.ft.',
        internal: '480.75 sq.ft.',
        outdoor: '120 - 220 sq.ft.',
        view: 'Sea View',
        unitNumber: 'HSU - XX',
        floors: 'Typical Floor'
      },
      '2 Bedroom': {
        id: '2bed',
        name: 'Executive Suite',
        totalArea: '900 - 1000 sq.ft.',
        internal: '720.90 sq.ft.',
        outdoor: '180 - 280 sq.ft.',
        view: 'Premium Sea View',
        unitNumber: 'EXE - XX',
        floors: 'Typical Floor'
      },
      '3 Bedroom': {
        id: '3bed',
        name: '3 Bedroom',
        totalArea: '0 sq.ft.',
        internal: '0 sq.ft.',
        outdoor: '0 sq.ft.',
        view: 'N/A',
        unitNumber: 'N/A',
        floors: 'N/A'
      },
      'Penthouse': {
        id: 'penthouse',
        name: 'Presidential Suite',
        totalArea: '1500 - 1800 sq.ft.',
        internal: '1200.00 sq.ft.',
        outdoor: '300 - 600 sq.ft.',
        view: '360° Panoramic',
        unitNumber: 'PRS - 01',
        floors: 'Penthouse Level'
      },
      'Retail': {
        id: 'retail',
        name: 'Retail',
        totalArea: '0 sq.ft.',
        internal: '0 sq.ft.',
        outdoor: '0 sq.ft.',
        view: 'N/A',
        unitNumber: 'N/A',
        floors: 'N/A'
      },
      'Office': {
        id: 'office',
        name: 'Office',
        totalArea: '0 sq.ft.',
        internal: '0 sq.ft.',
        outdoor: '0 sq.ft.',
        view: 'N/A',
        unitNumber: 'N/A',
        floors: 'N/A'
      }
    }
  },

  'mall': {
    name: 'J7 Shopping Mall',
    backgroundImage: 'icon3_wzqaqu',
    availableUnits: ['Retail', 'Office'],
    floors: [
      {
        id: 'ground',
        name: 'Ground Floor',
        position: { top: '90%', left: '45%' },
        floorArea: { top: '87%', left: '15%', width: '40%', height: '40%' }
      },
      {
        id: 'first',
        name: 'First Floor',
        position: { top: '75%', left: '45%' },
        floorArea: { top: '72%', left: '15%', width: '45%', height: '12%' }
      },
      {
        id: 'second',
        name: 'Second Floor',
        position: { top: '60%', left: '45%' },
        floorArea: { top: '57%', left: '15%', width: '45%', height: '12%' }
      },
      {
        id: 'office',
        name: 'Office Floors',
        position: { top: '35%', left: '45%' },
        floorArea: { top: '20%', left: '20%', width: '35%', height: '35%' }
      }
    ],
    floorPlans: {
      'Studio': {
        id: 'studio',
        name: 'Studio',
        totalArea: '0 sq.ft.',
        internal: '0 sq.ft.',
        outdoor: '0 sq.ft.',
        view: 'N/A',
        unitNumber: 'N/A',
        floors: 'N/A'
      },
      '1 Bedroom': {
        id: '1bed',
        name: '1 Bedroom',
        totalArea: '0 sq.ft.',
        internal: '0 sq.ft.',
        outdoor: '0 sq.ft.',
        view: 'N/A',
        unitNumber: 'N/A',
        floors: 'N/A'
      },
      '2 Bedroom': {
        id: '2bed',
        name: '2 Bedroom',
        totalArea: '0 sq.ft.',
        internal: '0 sq.ft.',
        outdoor: '0 sq.ft.',
        view: 'N/A',
        unitNumber: 'N/A',
        floors: 'N/A'
      },
      '3 Bedroom': {
        id: '3bed',
        name: '3 Bedroom',
        totalArea: '0 sq.ft.',
        internal: '0 sq.ft.',
        outdoor: '0 sq.ft.',
        view: 'N/A',
        unitNumber: 'N/A',
        floors: 'N/A'
      },
      'Penthouse': {
        id: 'penthouse',
        name: 'Penthouse',
        totalArea: '0 sq.ft.',
        internal: '0 sq.ft.',
        outdoor: '0 sq.ft.',
        view: 'N/A',
        unitNumber: 'N/A',
        floors: 'N/A'
      },
      'Retail': {
        id: 'retail',
        name: 'Retail Space',
        totalArea: '500 - 2000 sq.ft.',
        internal: '450 - 1800 sq.ft.',
        outdoor: '50 - 200 sq.ft.',
        view: 'Street View',
        unitNumber: 'R - XX',
        floors: 'Ground & First Floor'
      },
      'Office': {
        id: 'office',
        name: 'Office Space',
        totalArea: '300 - 1500 sq.ft.',
        internal: '280 - 1400 sq.ft.',
        outdoor: '20 - 100 sq.ft.',
        view: 'City View',
        unitNumber: 'O - XX',
        floors: 'Office Floors'
      }
    }
  },

  'rotana': {
    name: 'Rotana Hotel & Residences',
    backgroundImage: 'imgi_66_1-5.jpg-1_s17rfp',
    availableUnits: ['Studio', '1 Bedroom', '2 Bedroom', '3 Bedroom', 'Penthouse'],
    floors: [
      {
        id: 'ground',
        name: 'Ground Floor',
        position: { top: '87%', left: '48%' },
        floorArea: { top: '84%', left: '18%', width: '38%', height: '48%' }
      },
      {
        id: 'podium',
        name: 'Podium Level',
        position: { top: '70%', left: '48%' },
        floorArea: { top: '67%', left: '18%', width: '42%', height: '15%' }
      },
      {
        id: 'low-rise',
        name: 'Low Rise',
        position: { top: '45%', left: '48%' },
        floorArea: { top: '30%', left: '22%', width: '28%', height: '30%' }
      },
      {
        id: 'high-rise',
        name: 'High Rise',
        position: { top: '25%', left: '48%' },
        floorArea: { top: '10%', left: '25%', width: '22%', height: '18%' }
      }
    ],
    floorPlans: {
      'Studio': {
        id: 'studio',
        name: 'Studio Apartment',
        totalArea: '450 - 520 sq.ft.',
        internal: '350.25 sq.ft.',
        outdoor: '100 - 170 sq.ft.',
        view: 'Garden View',
        unitNumber: 'SA - XX',
        floors: 'Low Rise'
      },
      '1 Bedroom': {
        id: '1bed',
        name: '1BR Apartment',
        totalArea: '700 - 800 sq.ft.',
        internal: '560.60 sq.ft.',
        outdoor: '140 - 240 sq.ft.',
        view: 'Pool View',
        unitNumber: '1BR - XX',
        floors: 'Low & High Rise'
      },
      '2 Bedroom': {
        id: '2bed',
        name: '2BR Apartment',
        totalArea: '1000 - 1200 sq.ft.',
        internal: '800.80 sq.ft.',
        outdoor: '200 - 400 sq.ft.',
        view: 'Marina View',
        unitNumber: '2BR - XX',
        floors: 'High Rise'
      },
      '3 Bedroom': {
        id: '3bed',
        name: '3BR Apartment',
        totalArea: '1400 - 1600 sq.ft.',
        internal: '1120.00 sq.ft.',
        outdoor: '280 - 480 sq.ft.',
        view: 'Premium Marina View',
        unitNumber: '3BR - XX',
        floors: 'High Rise'
      },
      'Penthouse': {
        id: 'penthouse',
        name: 'Duplex Penthouse',
        totalArea: '2000 - 2500 sq.ft.',
        internal: '1600.00 sq.ft.',
        outdoor: '400 - 900 sq.ft.',
        view: '360° Premium View',
        unitNumber: 'PH - XX',
        floors: 'High Rise'
      },
      'Retail': {
        id: 'retail',
        name: 'Retail',
        totalArea: '0 sq.ft.',
        internal: '0 sq.ft.',
        outdoor: '0 sq.ft.',
        view: 'N/A',
        unitNumber: 'N/A',
        floors: 'N/A'
      },
      'Office': {
        id: 'office',
        name: 'Office',
        totalArea: '0 sq.ft.',
        internal: '0 sq.ft.',
        outdoor: '0 sq.ft.',
        view: 'N/A',
        unitNumber: 'N/A',
        floors: 'N/A'
      }
    }
  }
};