import { Endpoins } from "../commons/constants/endpoins.constant"
import { postRequest } from "../commons/helpers/axios";
export const login = async (data: any): Promise<any> =>  postRequest(Endpoins.LOGIN, data);