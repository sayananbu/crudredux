import axios, { AxiosResponse } from 'axios'
import { ProductModel } from '../models/product.model'
import { PRODUCTS_URL } from '../constants/api.constant'
import { createAsyncThunk } from '@reduxjs/toolkit'

export function fetchProductApi():Promise<AxiosResponse<ProductModel[]>>{
	return axios.get(PRODUCTS_URL)
}

export const createProductApi = createAsyncThunk('products/createProductApi',async ({title,description}: Partial<ProductModel>)=>{
	const res = await axios.post('https://fakestoreapi.com/products',JSON.stringify({
		title:title,
		description:description,
		price:100,
		image:'https://www.meme-arsenal.com/memes/b3a7f0c13db46ac5d55fce832a19b64e.jpg',
	}))
	return res.data
})