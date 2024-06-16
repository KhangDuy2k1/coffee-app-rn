import { Endpoins } from "../commons/constants/endpoins.constant";
import { getRequest } from "../commons/helpers/axios";

export const getWallet = () => getRequest(Endpoins.GET_WALLET);