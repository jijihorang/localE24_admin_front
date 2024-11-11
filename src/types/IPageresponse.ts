import {ILocalManager} from "./ILocalManager.ts";

export interface IPageResponse {
    dtoList: ILocalManager[];
    pageNumList: number[];
    pageRequestDTO: {
        page: number;
        size: number;
    };
    prev: boolean;
    next: boolean;
    totalCount: number;
    prevPage: number;
    nextPage: number;
    current: number;
    totalPage: number;
}