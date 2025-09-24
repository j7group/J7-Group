// types/property.ts
export type UnitType = 'Studio' | '1 Bedroom' | '2 Bedroom' | '3 Bedroom' | 'Hotel Suites' | 'Penthouse' | 'Commercial Shops' | 'Office' | 'STZA IT Zone';

export interface FloorOverlay {
  id: string;
  name: string;
  position: { top: string; left: string };
  floorArea: {
    top: string;
    left: string;
    width: string;
    height: string;
  };
}

export interface FloorPlan {
  id: string;
  name: string;
  totalArea: string;
  unitNumber: string;
  floors: string;
  rate: string;
  totalPrice?: string;
  downPayment?: string;
  quarterlyInstallment?: string;
  specialFeatures?: string[];
}

export interface ProjectDetails {
  stories: number;
  totalArea: string;
  developer: string;
  projectType: string;
  expectedCompletion: number;
  projectStatus: string;
  pricePerSqFt?: string;
}

export interface PropertyData {
  name: string;
  location: string;
  backgroundImage: string;
  projectDetails: ProjectDetails;
  floors: FloorOverlay[];
  floorPlans: Record<UnitType, FloorPlan>;
  availableUnits: UnitType[];
  amenities: string[];
  connectivity: Record<string, string>;
}