import { Endpoins } from "../commons/constants/endpoins.constant";
import { postRequest } from "../commons/helpers/axios";

export const review = (data: any) => postRequest(`${Endpoins.REVIEW}/${data.id}`, {stars: data.stars})