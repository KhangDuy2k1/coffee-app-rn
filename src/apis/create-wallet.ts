import { Endpoins } from "../commons/constants/endpoins.constant";
import { postRequest } from "../commons/helpers/axios";

export const createWallet  = () => postRequest(Endpoins.CREATE_WALLET)