import axios from "axios";
import qs from "qs";
export default{
    getCodes(){
        return axios({
            method:"get",
            url:"/app/getCode",
        })
    },
    register(data){
        return axios({
            method:"post",
            url:"/app/register",
            data:qs.stringify(data)
        })
    },
    login(data){
        return axios({
            method:"get",
            url:"/app/login",
            params:data
        })
    },
}