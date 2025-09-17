// types/property.ts

export type UnitType = 'Studio' | '1 Bedroom' | '2 Bedroom' | '3 Bedroom' | 'Penthouse' | 'Retail' | 'Office';

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
  internal: string;
  outdoor: string;
  view: string;
  unitNumber: string;
  floors: string;
}

export interface PropertyData {
  name: string;
  backgroundImage: string;
  floors: FloorOverlay[];
  floorPlans: Record<UnitType, FloorPlan>;
  availableUnits: UnitType[];
}