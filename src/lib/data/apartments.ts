// data/propertyData.ts
import { PropertyData } from "../apartments/types";

export const propertyConfigurations: Record<string, PropertyData> = {
  'j7-emporium': {
    name: 'J7 Emporium',
    location: 'Multi Garden, Sector B-17, Islamabad, Pakistan',
    backgroundImage: 'Cam_04_final_night_light_kazjdn',
    projectDetails: {
      stories: 30,
      totalArea: '46 kanal',
      developer: 'J7 Group',
      projectType: 'Mixed-use development',
      expectedCompletion: 2025,
      projectStatus: 'Under Construction',
      pricePerSqFt: 'PKR 18,500'
    },
    availableUnits: ['Studio', '1 Bedroom', '2 Bedroom', '3 Bedroom', 'Hotel Suites', 'Commercial Shops', 'Office', 'STZA IT Zone'],
    floors: [
      {
        id: 'commercial',
        name: 'Commercial Shops',
        position: { top: '85%', left: '55%' },
        floorArea: { top: '80%', left: '25%', width: '35%', height: '15%' }
      },
      {
        id: 'office',
        name: 'Office Floors',
        position: { top: '75%', left: '55%' },
        floorArea: { top: '70%', left: '25%', width: '35%', height: '10%' }
      },
      {
        id: 'stza',
        name: 'STZA IT Zone',
        position: { top: '65%', left: '55%' },
        floorArea: { top: '60%', left: '25%', width: '35%', height: '10%' }
      },
      {
        id: 'residential',
        name: 'Residential Floors',
        position: { top: '45%', left: '55%' },
        floorArea: { top: '30%', left: '25%', width: '30%', height: '25%' }
      },
      {
        id: 'penthouse',
        name: 'Penthouse Level',
        position: { top: '8%', left: '55%' },
        floorArea: { top: '5%', left: '27%', width: '24%', height: '8%' }
      }
    ],
    floorPlans: {
      'Studio': {
        id: 'studio',
        name: 'Studio Apartment',
        totalArea: '705 - 741 sq.ft.',
        unitNumber: 'Multiple Units Available',
        floors: '15-22',
        rate: 'PKR 18,500',
        totalPrice: 'PKR 13,042,500 - 13,708,500',
        downPayment: 'PKR 3,260,625 - 3,427,125 (25%)',
        quarterlyInstallment: 'PKR 978,187 - 1,028,137 (10 installments)',
        specialFeatures: ['Margalla View (5% extra)', 'Corner Units (10% extra)', 'Building facing & Sun facing options']
      },
      '1 Bedroom': {
        id: '1bed',
        name: '1 Bedroom Apartment',
        totalArea: '1124 sq.ft.',
        unitNumber: 'Multiple Units Available',
        floors: '10-22',
        rate: 'PKR 18,500'
      },
      '2 Bedroom': {
        id: '2bed',
        name: '2 Bedroom Apartment',
        totalArea: '1890 - 2189 sq.ft.',
        unitNumber: 'Multiple Units Available',
        floors: '6-10',
        rate: 'PKR 18,500',
        totalPrice: 'PKR 39,109,000 - 40,496,500',
        downPayment: 'PKR 9,777,250 - 10,124,125 (25%)',
        quarterlyInstallment: 'PKR 2,933,175 - 3,037,237 (10 installments)',
        specialFeatures: ['Ready units available', 'Premium floor plans']
      },
      '3 Bedroom': {
        id: '3bed',
        name: '3 Bedroom Apartment - Duplex',
        totalArea: '2607 - 2837 sq.ft.',
        unitNumber: 'Limited Units Available',
        floors: '11&12 - 13&14',
        rate: 'PKR 18,500',
        totalPrice: 'PKR 48,229,500 - 52,484,500',
        downPayment: 'PKR 12,057,375 - 13,121,125 (25%)',
        quarterlyInstallment: 'PKR 3,617,212 - 3,936,337 (10 installments)',
        specialFeatures: ['3-bedroom duplex options available', '3D visualization available']
      },
      'Hotel Suites': {
        id: 'hotel-suites',
        name: 'Hotel Suites',
        totalArea: '400 - 800 sq.ft.',
        unitNumber: 'Multiple Units Available',
        floors: 'Hotel Floors (19-28)',
        rate: 'PKR 18,500'
      },
      'Penthouse': {
        id: 'penthouse',
        name: 'Penthouse',
        totalArea: '2000 - 3000+ sq.ft.',
        unitNumber: 'Limited Exclusive Units',
        floors: 'Penthouse Floors (29-30)',
        rate: 'PKR 25,000'
      },
      'Commercial Shops': {
        id: 'commercial',
        name: 'Commercial Shops',
        totalArea: '229 - 512+ Sq.ft.',
        unitNumber: 'Multiple Units Available',
        floors: 'Ground Floor1 & Ground Floor 2',
        rate: 'PKR 58,000'
      },
      'Office': {
        id: 'office',
        name: 'Office Spaces',
        totalArea: '490 - 520+ sq.ft.',
        unitNumber: 'Multiple Units Available',
        floors: 'Office Floors 5th A',
        rate: 'PKR 30,000'
      },
      'STZA IT Zone': {
        id: 'stza',
        name: 'STZA IT Zone',
        totalArea: '50 - 300+ sq.ft.',
        unitNumber: 'Multiple Units Available',
        floors: '1st, 2nd, 3rd, 4th Floor',
        rate: 'PKR 60,000',
        totalPrice: 'PKR 3,000,000 - 18,000,000',
        specialFeatures: [
          'STZA Certified - Tax-free benefits',
          '35-40% annual ROI',
          '0.5% guaranteed monthly rental returns for 18 months',
          'Dollar-based rental income after 18 months',
          'Over 800 AI cameras for security',
          '7-day uninterrupted electricity backup',
          'Flexible investment from 50 sq.ft.',
          'Easy installment plans available'
        ]
      }
    },
    amenities: [
      'State-of-the-art shopping mall',
      'Food court and restaurants',
      'Gym and fitness center',
      'Swimming pool',
      'Business center',
      'Conference rooms',
      'STZA certified IT zone',
      'Over 800 AI security cameras',
      '7-day electricity backup',
      'Parking facilities',
      'High-speed elevators',
      'Smart building technology',
      '24/7 security system'
    ],
    connectivity: {
      'Motorway M1/M2': '5 minutes drive',
      'G.T Road': '2 minutes drive',
      'Rawalpindi': '15 minutes',
      'Islamabad F-10': '15 minutes',
      'New Islamabad Airport': '20 minutes'
    }
  },

  'radisson': {
    name: 'Radisson Blu Hotel & Residences',
    location: 'Mumtaz City, Srinagar Highway, Islamabad, Pakistan',
    backgroundImage: 'unrdxwszgeenqwunfr6t_tjgaqi',
    projectDetails: {
      stories: 15,
      totalArea: 'Not specified',
      developer: 'J7 Group (Radisson Brand Partner)',
      projectType: '5-Star Hotel & Residences',
      expectedCompletion: 2026,
      projectStatus: 'Under Construction',
      pricePerSqFt: 'PKR 45,000 - 50,000'
    },
    availableUnits: ['Hotel Suites', 'Commercial Shops', 'Office'],
    floors: [
      {
        id: 'commercial',
        name: 'Commercial Shops',
        position: { top: '88%', left: '50%' },
        floorArea: { top: '85%', left: '20%', width: '35%', height: '10%' }
      },
      {
        id: 'coworking',
        name: 'Co-working Spaces',
        position: { top: '78%', left: '50%' },
        floorArea: { top: '75%', left: '20%', width: '35%', height: '8%' }
      },
      {
        id: 'office',
        name: 'Corporate Offices',
        position: { top: '68%', left: '50%' },
        floorArea: { top: '65%', left: '20%', width: '35%', height: '8%' }
      },
      {
        id: 'hotel',
        name: 'Hotel Apartments',
        position: { top: '40%', left: '50%' },
        floorArea: { top: '25%', left: '20%', width: '30%', height: '35%' }
      },
      {
        id: 'amenities',
        name: 'Amenities & Restaurant',
        position: { top: '15%', left: '50%' },
        floorArea: { top: '10%', left: '22%', width: '28%', height: '12%' }
      }
    ],
    floorPlans: {
      'Studio': {
        id: 'studio',
        name: 'Studio',
        totalArea: 'N/A',
        unitNumber: 'N/A',
        floors: 'N/A',
        rate: 'N/A'
      },
      '1 Bedroom': {
        id: '1bed',
        name: '1 Bedroom',
        totalArea: 'N/A',
        unitNumber: 'N/A',
        floors: 'N/A',
        rate: 'N/A'
      },
      '2 Bedroom': {
        id: '2bed',
        name: '2 Bedroom',
        totalArea: 'N/A',
        unitNumber: 'N/A',
        floors: 'N/A',
        rate: 'N/A'
      },
      '3 Bedroom': {
        id: '3bed',
        name: '3 Bedroom',
        totalArea: 'N/A',
        unitNumber: 'N/A',
        floors: 'N/A',
        rate: 'N/A'
      },
      'Hotel Suites': {
        id: 'hotel-suites',
        name: '5-Star Hotel Suites',
        totalArea: '400 - 800 sq.ft.',
        unitNumber: '400+ Units Available',
        floors: 'Hotel Floors (4-13)',
        rate: 'PKR 45,000'
      },
      'Penthouse': {
        id: 'penthouse',
        name: 'Penthouse',
        totalArea: 'N/A',
        unitNumber: 'N/A',
        floors: 'N/A',
        rate: 'N/A'
      },
      'Commercial Shops': {
        id: 'commercial',
        name: 'Commercial Shops',
        totalArea: '200 - 1500 sq.ft.',
        unitNumber: 'Multiple Units Available',
        floors: 'Ground & First Floor',
        rate: 'PKR 60,000'
      },
      'Office': {
        id: 'office',
        name: 'Corporate Offices',
        totalArea: '300 - 2000 sq.ft.',
        unitNumber: 'Multiple Units Available',
        floors: 'Second & Third Floor',
        rate: 'PKR 50,000'
      },
      'STZA IT Zone': {
        id: 'stza',
        name: 'STZA IT Zone',
        totalArea: 'N/A',
        unitNumber: 'N/A',
        floors: 'N/A',
        rate: 'N/A'
      }
    },
    amenities: [
      'Radisson Brand Standards',
      '5-Star Hotel Services',
      'International Cuisine Restaurants',
      'Executive Club Lounge',
      'Airline Crew Lounge',
      'Business Center',
      'Conference Facilities',
      'Indoor Swimming Pool',
      'Gym & Yoga Center',
      'Sauna & Spa',
      'Sky Lobby',
      'Banquet Hall',
      'Rooftop Restaurant',
      '24/7 Concierge Service'
    ],
    connectivity: {
      'New Islamabad Airport': '5 minutes drive',
      'Srinagar Highway': 'Direct access',
      'CPEC Route': 'Strategic location',
      'Islamabad City Center': '25 minutes',
      'Rawalpindi': '20 minutes'
    }
  },

  'j7-icon': {
    name: 'J7 Icon (Royal Swiss Hotel)',
    location: 'Mumtaz City, Srinagar Highway, Islamabad, Pakistan',
    backgroundImage: 'icon3_wzqaqu',
    projectDetails: {
      stories: 14,
      totalArea: 'Not specified',
      developer: 'J7 Group (Royal Swiss Brand)',
      projectType: '5-Star Hotel & Commercial',
      expectedCompletion: 2026,
      projectStatus: 'Under Construction',
      pricePerSqFt: 'PKR 40,000 - 48,000'
    },
    availableUnits: ['Hotel Suites', 'Commercial Shops', 'Office'],
    floors: [
      {
        id: 'retail',
        name: 'Retail Mall',
        position: { top: '90%', left: '45%' },
        floorArea: { top: '87%', left: '15%', width: '40%', height: '12%' }
      },
      {
        id: 'commercial',
        name: 'Commercial Floors',
        position: { top: '75%', left: '45%' },
        floorArea: { top: '70%', left: '15%', width: '40%', height: '15%' }
      },
      {
        id: 'hotel',
        name: 'Hotel Suites',
        position: { top: '45%', left: '45%' },
        floorArea: { top: '30%', left: '20%', width: '30%', height: '35%' }
      },
      {
        id: 'amenities',
        name: 'Hotel Amenities',
        position: { top: '15%', left: '45%' },
        floorArea: { top: '10%', left: '22%', width: '28%', height: '12%' }
      }
    ],
    floorPlans: {
      'Studio': {
        id: 'studio',
        name: 'Studio',
        totalArea: 'N/A',
        unitNumber: 'N/A',
        floors: 'N/A',
        rate: 'N/A'
      },
      '1 Bedroom': {
        id: '1bed',
        name: '1 Bedroom',
        totalArea: 'N/A',
        unitNumber: 'N/A',
        floors: 'N/A',
        rate: 'N/A'
      },
      '2 Bedroom': {
        id: '2bed',
        name: '2 Bedroom',
        totalArea: 'N/A',
        unitNumber: 'N/A',
        floors: 'N/A',
        rate: 'N/A'
      },
      '3 Bedroom': {
        id: '3bed',
        name: '3 Bedroom',
        totalArea: 'N/A',
        unitNumber: 'N/A',
        floors: 'N/A',
        rate: 'N/A'
      },
      'Hotel Suites': {
        id: 'hotel-suites',
        name: 'Royal Swiss Hotel Suites',
        totalArea: '350 - 700 sq.ft.',
        unitNumber: 'Multiple Units Available',
        floors: 'Hotel Floors (5-12)',
        rate: 'PKR 40,000'
      },
      'Penthouse': {
        id: 'penthouse',
        name: 'Penthouse',
        totalArea: 'N/A',
        unitNumber: 'N/A',
        floors: 'N/A',
        rate: 'N/A'
      },
      'Commercial Shops': {
        id: 'retail',
        name: 'Mall Shops',
        totalArea: '120 - 1500 sq.ft.',
        unitNumber: 'Multiple Units Available',
        floors: 'Ground Floor Mall',
        rate: 'PKR 55,000'
      },
      'Office': {
        id: 'office',
        name: 'Commercial Offices',
        totalArea: '200 - 1200 sq.ft.',
        unitNumber: 'Multiple Units Available',
        floors: 'Commercial Floors (2-4)',
        rate: 'PKR 44,000'
      },
      'STZA IT Zone': {
        id: 'stza',
        name: 'STZA IT Zone',
        totalArea: 'N/A',
        unitNumber: 'N/A',
        floors: 'N/A',
        rate: 'N/A'
      }
    },
    amenities: [
      'Royal Swiss Brand Standards',
      '5-Star Hotel Services',
      'Shopping Mall',
      'Food Court',
      'Business Center',
      'Conference Rooms',
      'Gym & Fitness Center',
      'Swimming Pool',
      'Restaurant & Cafes',
      '24/7 Security',
      'Valet Parking',
      'Concierge Services'
    ],
    connectivity: {
      'New Islamabad Airport': '5 minutes drive',
      'Srinagar Highway': 'Direct highway access',
      'Mumtaz City': 'Central location',
      'Islamabad City': '25 minutes',
      'Rawalpindi': '20 minutes'
    }
  },

  'rotana': {
    name: 'Signature Rotana Hotel & Residences',
    location: 'Top City-1, Srinagar Highway, Islamabad, Pakistan',
    backgroundImage: 'imgi_66_1-5.jpg-1_p1zir0',
    projectDetails: {
      stories: 26,
      totalArea: 'Not specified',
      developer: 'J7 Group & Rotana Hospitality Group',
      projectType: 'International 5-Star Hotel & Branded Residences',
      expectedCompletion: 2027,
      projectStatus: 'Under Construction',
      pricePerSqFt: 'PKR 35,000'
    },
    availableUnits: ['Studio', '1 Bedroom', '2 Bedroom', '3 Bedroom', 'Hotel Suites', 'Commercial Shops', 'Office'],
    floors: [
      {
        id: 'retail',
        name: 'Commercial & Retail',
        position: { top: '87%', left: '48%' },
        floorArea: { top: '84%', left: '18%', width: '38%', height: '8%' }
      },
      {
        id: 'podium',
        name: 'Podium Amenities',
        position: { top: '78%', left: '48%' },
        floorArea: { top: '75%', left: '18%', width: '40%', height: '8%' }
      },
      {
        id: 'hotel',
        name: 'Hotel Floors',
        position: { top: '50%', left: '48%' },
        floorArea: { top: '35%', left: '22%', width: '28%', height: '35%' }
      },
      {
        id: 'residences',
        name: 'Branded Residences',
        position: { top: '25%', left: '48%' },
        floorArea: { top: '15%', left: '24%', width: '26%', height: '15%' }
      },
      {
        id: 'premium',
        name: 'Premium Suites',
        position: { top: '8%', left: '48%' },
        floorArea: { top: '5%', left: '26%', width: '22%', height: '8%' }
      }
    ],
    floorPlans: {
      'Studio': {
        id: 'studio',
        name: 'Studio Branded Residence',
        totalArea: '652 sq.ft.',
        unitNumber: 'Multiple Units Available',
        floors: 'Residence Floors (15-22)',
        rate: 'PKR 35,000'
      },
      '1 Bedroom': {
        id: '1bed',
        name: '1BR Branded Residence',
        totalArea: '716 - 861 sq.ft.',
        unitNumber: 'Multiple Units Available',
        floors: 'Residence Floors (15-22)',
        rate: 'PKR 35,000'
      },
      '2 Bedroom': {
        id: '2bed',
        name: '2BR Branded Residence',
        totalArea: '906 - 1149 sq.ft.',
        unitNumber: 'Multiple Units Available',
        floors: 'Premium Floors (18-22)',
        rate: 'PKR 35,000'
      },
      '3 Bedroom': {
        id: '3bed',
        name: '3BR Premium Residence',
        totalArea: '1330 - 1352 sq.ft.',
        unitNumber: 'Limited Units Available',
        floors: 'Premium Floors (20-22)',
        rate: 'PKR 35,000'
      },
      'Hotel Suites': {
        id: 'hotel-suites',
        name: 'Rotana Hotel Suites',
        totalArea: '400 - 900 sq.ft.',
        unitNumber: 'Multiple Units Available',
        floors: 'Hotel Floors (5-14)',
        rate: 'PKR 38,000'
      },
      'Penthouse': {
        id: 'penthouse',
        name: 'Presidential Penthouse',
        totalArea: '2000+ sq.ft.',
        unitNumber: 'Limited Exclusive Units',
        floors: 'Top Floors (24-26)',
        rate: 'PKR 45,000'
      },
      'Commercial Shops': {
        id: 'commercial',
        name: 'Commercial Shops',
        totalArea: '300 - 2000 sq.ft.',
        unitNumber: 'Multiple Units Available',
        floors: 'Ground & Mezzanine',
        rate: 'PKR 50,000'
      },
      'Office': {
        id: 'office',
        name: 'Office',
        totalArea: 'N/A',
        unitNumber: 'N/A',
        floors: 'N/A',
        rate: 'N/A'
      },
      'STZA IT Zone': {
        id: 'stza',
        name: 'STZA IT Zone',
        totalArea: 'N/A',
        unitNumber: 'N/A',
        floors: 'N/A',
        rate: 'N/A'
      }
    },
    amenities: [
      'Rotana International Brand',
      'World-class Hotel Services',
      'Multiple Restaurants & Bars',
      'Executive Lounge',
      'Business Center',
      'Meeting & Conference Facilities',
      'Luxury Spa & Wellness Center',
      'Fitness Center',
      'Swimming Pool',
      'Kids Club',
      '24/7 Room Service',
      'Concierge Services',
      'Valet Parking',
      'Airport Shuttle Service'
    ],
    connectivity: {
      'New Islamabad Airport': '10 minutes drive',
      'Top City-1': 'Prime location',
      'Srinagar Highway': 'Direct access',
      'Islamabad City Center': '20 minutes',
      'Rawalpindi': '25 minutes',
      'Kashmir Highway': '5 minutes'
    }
  }
};