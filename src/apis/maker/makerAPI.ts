import {IPageResponse} from "../../types/ipageresponse.ts";
import  axios from "axios";
import {IMaker} from "../../types/maker/maker.ts";

const host = 'http://localhost:8080/api/maker';

// 제작자 리스트
export const getMakerList = async ( page?:number, size?:number ):Promise<IPageResponse> => {

    const pageValue:number = page || 1
    const sizeValue:number = size || 10

    const res = await axios.get(`${host}/list?page=${pageValue}&size=${sizeValue}`)

    return res.data;
}

// 제작자 상세조회
export const getMakerOne = async (makerBizNo : string): Promise<IMaker> => {

    const res = await axios.get(`${host}/read/${makerBizNo}`);

    return res.data;
}

// 제작자 상태 변경
export const updateMakerStatus = async (makerBizNo: string, makerStatus:number): Promise<void> => {
    await axios.put(`${host}/modify`, {
        makerBizNo,
        makerStatus,
    });
}