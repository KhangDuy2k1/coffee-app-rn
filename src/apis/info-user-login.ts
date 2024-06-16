import { Endpoins } from "../commons/constants/endpoins.constant";
import { getRequest } from "../commons/helpers/axios";

export const getInfoUserLogin = (): Promise<any> => getRequest(Endpoins.GET_USER_LOGIN)