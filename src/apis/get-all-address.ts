import { Endpoins } from "../commons/constants/endpoins.constant";
import { getRequest } from "../commons/helpers/axios";

export const getAllAddress = (): Promise<any> =>  getRequest(Endpoins.GET_ALL_ADDRESS);