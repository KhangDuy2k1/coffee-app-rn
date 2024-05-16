import { Endpoins } from "../commons/constants/endpoins.constant";
import { postRequest } from "../commons/helpers/axios";

export const addAddress = (data: any): Promise<any> => postRequest(Endpoins.ADD_ADDRESS, data)