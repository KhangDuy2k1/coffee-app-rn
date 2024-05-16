import { getRequest } from "../commons/helpers/axios";
import { Endpoins } from "../commons/constants/endpoins.constant";

export const getAllProducts = (): Promise<any> => getRequest(Endpoins.GET_ALL_PRODUCT)