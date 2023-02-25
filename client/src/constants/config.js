// API_NOTIFICATION_MESSAGES

export const API_NOTIFICATION_MESSAGES ={
    loading:{
        title:'Loading...',
        message:'data is being loaded , please wait',
    },
    success:{
        title:'success',
        message:'data successfully loaded',
    },
    responseFailure:{
        title:'Error',
        message:'An error occured while fertching from the server. please try again',
    },
    requestFailure:{
        title:'Error',
        message:'An error occured while parsing the data',
    },
    networkError:{
        title:'Error',
        message:'unable to connect with server please check your internet connectivity and try again later',
    },

    
}

// api service call
export const service_URLS={
    userSignup:{url:'/signup',method:'POST'},
    userLogin:{url:'/login',method:'POST'},
    uploadFile:{url:'/file/upload',method:'POST'},
    createPost:{url:'create',method:'POST'},
    getAllPosts:{url:'/Posts',method:'GET',params:true},
    getPostbyId:{url:'/post',method:'GET',query:true},
    updatePost:{url:'update',method:'PUT',query:true},
    deletePost:{url:'delete',method:'DELETE',query:true},
}