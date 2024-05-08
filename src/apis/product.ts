import { getRequest } from "../components/common/helpers/axios";
import { Endpoins } from "../components/common/constants/endpoins.constant";

export const getAllProducts = (): Promise<any> => getRequest(Endpoins.GET_ALL_PRODUCT)