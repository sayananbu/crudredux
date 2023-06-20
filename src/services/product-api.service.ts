import axios, { AxiosResponse } from 'axios'
import { ProductModel } from '../models/product.model'
import { PRODUCTS_URL } from '../constants/api.constant'

export function fetchProductApi():Promise<AxiosResponse<ProductModel[]>>{
	return axios.get(PRODUCTS_URL)
}