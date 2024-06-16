import { Endpoins } from "../commons/constants/endpoins.constant";
import { getRequest } from "../commons/helpers/axios";

export const getListOrders = (): Promise<any> => getRequest(Endpoins.GET_LIST_ORDER)