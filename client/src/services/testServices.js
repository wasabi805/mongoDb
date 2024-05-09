import axios from 'axios'

export const fetchTodos = axios({
    method: 'GET',
    url: 'https://jsonplaceholder.typicode.com/todos/40'
}).then(res=>({...res, name : 'setupDoc'})).catch(
    err=> ({...err.response , name : 'setupDoc'})
)

export const fetchTags = async({contentId})=>{
//pretend  const url = `https://jsonplaceholder.typicode.com/comments/${contentId}`
    return await axios({
        method: 'GET',
        url: 'https://jsonplaceholder.typicode.com/comments'
    }).then(res=>({...res, name: 'setTags'})).catch(
        err=> ({...err.response, name: 'setTags'})
    )
}

export const fetchNotes = async({contentId})=>{
 //pretend  const url = `https://jsonplaceholder.typicode.com/posts/${contentId}`
    return await axios({
        method: 'GET',
        url: 'https://jsonplaceholder.typicode.com/posts'
    }).then(res=>({...res, name: 'setNotes'})).catch(
        err=> ({...err.response , name : 'setNotes'})
    )
}
//----- -----   -----   -----   -----   -----   
export const fetchAllTest = async()=>{
    //upload doc
    const uploadResponse = await fetchTodos.then( res =>({
        status: 'fulfilled',
        value :{ ...res }
    })).catch(err => ({ status : 'rejected', ...err.response }))

    if(uploadResponse.value.status > 399 )return uploadResponse
    // pretentd that fetchTags && fetchNotes needs this as url param
    const contentId = uploadResponse.value.data.id

    const tagsAndComments = await Promise.allSettled([ 
        fetchTags({contentId}), fetchNotes({contentId}) ])
    return [uploadResponse, ...tagsAndComments] 
}

