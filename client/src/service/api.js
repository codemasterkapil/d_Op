
import axios from 'axios';
import { getAccessToken ,getType} from '../utils/common-utils';
import { API_NOTIFICATION_MESSAGES ,service_URLS} from '../constants/config';

// backend url 
const API_URL='http://localhost:8000';

const axiosInstance=axios.create({
    baseURL:API_URL,
    timeout:10000,
    headers:{
        'content-type': 'application/json',
    }
})



axiosInstance.interceptors.request.use(function (config) {
   

      if(config.TYPE.params){
         config.params = config.TYPE.params;
      }else if(config.TYPE.query){
        config.url=config.url+'/'+config.TYPE.query;
      }

    // Do something before request is sent
    return config;
  }, function (error) {
    // Do something with request error
    return Promise.reject(error);
  });

// Add a response interceptor
axiosInstance.interceptors.response.use(function (response) {
    // Any status code that lie within the range of 2xx cause this function to trigger
    // Do something with response data
    return processResponse(response);
  }, function (error) {
    // Any status codes that falls outside the range of 2xx cause this function to trigger
    // Do something with response error
    return Promise.reject(processError(error));
  });


  const processResponse=(response)=>{
      if(response?.status===200){
        return {isSuccess:true,data:response.data};
      }else{
        return {isFailure:true,
               status:response?.status,
               msg:response?.msg,
               code:response?.code
        }
      }
  }

  const processError=(error)=>{
    if(error?.response){
        //request sent sucessfully but the status code that server sent is out of range of 2.x.x
       console.log('error in response ',error);
        return{
            isError:true,
            msg:API_NOTIFICATION_MESSAGES.responseFailure,
            code:error.response.status
        }
    }else if(error?.request){
          // request sent successfully but no response is sent by the server
          console.log('error in request ',error);
           return{
            isError:true,
            msg:API_NOTIFICATION_MESSAGES.requestFailure,
            code:""
        }
    }else{
       // there some mistake happening in frontend
       console.log('error in network ',error);
       return{
         isError:true,
         msg:API_NOTIFICATION_MESSAGES.networkError,
         code:""
       }
    }
  }

  const API={} 


  // body in line 82 contains the form data and showuploadprogress is a boolean
  for(const[key, value] of Object.entries(service_URLS)){
    API[key]=(body,showUploadProgress,showDownloadProgress)=>
        axiosInstance({
            method:value.method,
            url:value.url,
            data:value.method==='DELETE'? {} :body,
            responseType:value.responseType,
            headers:{
              authorization:getAccessToken(),
            },
            TYPE:getType(value,body),
            onUploadProgress:function(progressEvent){
                if(showUploadProgress){
                    let percentageCompleted=Math.round((progressEvent.loaded*100) / progressEvent.total)
                    showUploadProgress(percentageCompleted);
                }
            },
            onDownloadProgress:function(progressEvent){
                if(showDownloadProgress){
                    let percentageCompleted=Math.round((progressEvent.loaded*100) / progressEvent.total)
                    showDownloadProgress(percentageCompleted);
                }
            }
        })
  }

export {API};
































