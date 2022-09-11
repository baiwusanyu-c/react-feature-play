import request from "../fetch";
export const useFetch = async (url:string,cb:Function) =>{
    const res = await request(url)
    cb(res)
}