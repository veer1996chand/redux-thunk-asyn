import axios from 'axios'

export const anotherName=()=>{
    return async (dispatch)=>{
        const userPromise = axios.get('https://jsonplaceholder.typicode.com/users')
        const user = await userPromise;
        dispatch({type:'HandleChange',payload:user.data[0].name})

    }
}


