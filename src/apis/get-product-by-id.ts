import { Endpoins } from "../commons/constants/endpoins.constant";
import { getRequest } from "../commons/helpers/axios";

export const getProductById = (id: any): Promise<any> => getRequest(`${Endpoins.GET_COFFEE_BY_ID}/${id}`)