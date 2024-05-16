import { Endpoins } from "../commons/constants/endpoins.constant"
import { getRequest } from "../commons/helpers/axios"
export const getCoffeeLiked = (): Promise<any> => getRequest(Endpoins.GET_COFFEE_LIKED)