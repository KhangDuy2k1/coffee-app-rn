import { postRequest } from "../components/common/helpers/axios";
import { Endpoins } from "../components/common/constants/endpoins.constant";

export const register = (data: any) => postRequest(Endpoins.REGISTER, data); 