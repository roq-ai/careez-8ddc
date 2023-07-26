import { VehicleInterface } from 'interfaces/vehicle';
import { UserInterface } from 'interfaces/user';
import { GetQueryInterface } from 'interfaces';

export interface BookingInterface {
  id?: string;
  vehicle_id: string;
  user_id: string;
  start_time: any;
  end_time: any;
  created_at?: any;
  updated_at?: any;

  vehicle?: VehicleInterface;
  user?: UserInterface;
  _count?: {};
}

export interface BookingGetQueryInterface extends GetQueryInterface {
  id?: string;
  vehicle_id?: string;
  user_id?: string;
}
