import {IPageResponse} from "../types/IPageresponse.ts";
import  axios from "axios";


const host = 'http://localhost:8080/api/localmanager'

export const getLocalManagerList = async (page?:number, size?:number): Promise<IPageResponse> => {
    const pageValue:number = page || 1
    const sizeValue:number = size || 10

    const result = await axios.get(`${host}/list?page=${pageValue}&size=${sizeValue}`)
    return result.data
}

export const deleteLocalManager = async (managerNo: number): Promise<{result:string}> => {
    const result = await axios.delete(`${host}/${managerNo}`)

    return result.data
}