import { Endpoins } from "../components/common/constants/endpoins.constant"
import { postRequest } from "../components/common/helpers/axios";
export const login = async (data: any): Promise<any> => { 
  try {
    return await postRequest(Endpoins.LOGIN, data);
  } catch (error: any) {
    alert(error.response.data.message)
  }
}