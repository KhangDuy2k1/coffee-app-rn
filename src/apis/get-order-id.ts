import { Endpoins } from "../commons/constants/endpoins.constant";
import { getRequest } from "../commons/helpers/axios";

export const getOrderById = (id: any): Promise<any> => getRequest(`${Endpoins.GET_ORDER_BY_ID}/${id}`); 