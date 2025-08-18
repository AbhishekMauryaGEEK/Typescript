import axios,{AxiosResponse} from "axios";

interface Todo{
        userId:number;
        id:number;
        title:string;
        completed:boolean;
}
const fetchdata =async () => {
    try{
        const response :AxiosResponse <Todo> =await axios.get("https://jsonplaceholder.typicode.com/todos/1")
        console.log("todo:",response.data)
    } catch(error:any){
        if(axios.isAxiosError(error)){
            console.log("axios error",error.message)
        if(error.response){
            console.log("status:",error.response.status)
            console.log("data:",error.response.data)
        }
    }else{
        console.log("Error:",error.message)
    }
    }
}
fetchdata()