import { Endpoins } from "../commons/constants/endpoins.constant";
import { postRequest } from "../commons/helpers/axios";

export const orderApi = (data: any, method: number): Promise<any> => 
   postRequest(`${Endpoins.ORDER}/${method ? 1 : 0}`, data) 