import {IPageResponse} from "../../types/ipageresponse.ts";
import axios from "axios";
import {IProduct} from "../../types/product/product.ts";

const host = 'http://localhost:8080/api/product';

export const getProductList = async (page?:number, size?:number): Promise<IPageResponse> => {

    const pageValue:number = page || 1
    const sizeValue:number = size || 10

    const res = await axios.get(`${host}/list?page=${pageValue}&size=${sizeValue}`)

    return res.data;
}

export const getProductOne = async (productNo:number): Promise<IProduct> => {

    const res = await axios.get(`${host}/read/${productNo}`);

    return res.data;
}