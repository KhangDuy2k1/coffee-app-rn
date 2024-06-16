import { Endpoins } from "../commons/constants/endpoins.constant";
import { pathRequest } from "../commons/helpers/axios";

export const recieved = (id: any) => pathRequest(`${Endpoins.RECEIVED_ORDER}/${id}`)