export interface center {
    lat: number;
    lng: number;
}
interface driver {
    driver_id: string;
    location: {
      latitude: number;
      longitude: number;
      bearing: number;
    };
  }
  
export interface driverDataInterface {
    pickup_eta: number;
    drivers: driver[];
}

export interface locationInterface {
    lat: number;
    lng: number;
}