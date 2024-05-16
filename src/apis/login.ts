import { Endpoins } from "../commons/constants/endpoins.constant"
import { postRequest } from "../commons/helpers/axios";
export const login = async (data: any): Promise<any> => { 
  try {
    return await postRequest(Endpoins.LOGIN, data);
  } catch (error: any) {
    alert(error.response.data.message)
  }
}