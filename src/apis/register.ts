import { postRequest } from "../commons/helpers/axios";
import { Endpoins } from "../commons/constants/endpoins.constant";

export const register = (data: any) => postRequest(Endpoins.REGISTER, data); 