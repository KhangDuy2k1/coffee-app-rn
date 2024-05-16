import { Endpoins } from "../commons/constants/endpoins.constant";
import { postRequest } from "../commons/helpers/axios";

export const orderCoffee = (data: any, params: boolean): Promise<any> => postRequest(`${Endpoins.ORDER}/${params}`, data);