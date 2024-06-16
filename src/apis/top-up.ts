import { Endpoins } from "../commons/constants/endpoins.constant";
import { putRequest } from "../commons/helpers/axios";

export const topUp = (data: any) => putRequest(Endpoins.TOP_UP_WALLET, data);