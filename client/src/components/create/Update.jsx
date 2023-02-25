import { useState ,useEffect,useContext} from 'react';
import { Box, FormControl, styled,TextField,Button,TextareaAutosize} from '@mui/material';
import {AddCircle as Add} from '@mui/icons-material'
import {useLocation,useNavigate,useParams} from 'react-router-dom';
import {DataContext} from '../../context/DataProvider';
import {API} from '../../service/api'

const Container=styled(Box)`
  margin:50px 100px;
`
const Image=styled('img')(
 {
       width:'100%',
       height:'50vh',
       objectFit:'contain'
 }
)
const Formcontrolstyle=styled(FormControl)`
 margin-top:10px;
 display:flex;
 flex-direction:row;
`
const Textfieldstyle=styled(TextField)`
  flex:1;
  margin:0 30px;
`
const Textsizi=styled(TextareaAutosize)`
  width:100%;
  margin:40px 40px;
  
  
`
const initialPost={
  title:'',
  description:'',
  picture:'',
  username:'',
  categories:'',
  createddate: new Date()
}

const Update=()=>{

    const [post,setPost]=useState(initialPost);
    const [file,setFile]=useState(''); // files uploads in the form of a string
   
    const {account}=useContext(DataContext);

    const location=useLocation(); // for geting query parameters

    const navigate=useNavigate();
    const {id}=useParams();


 
 //unary operator for url and default is set by me 
   const url=post.picture? post.picture:'https://images.unsplash.com/photo-1543128639-4cb7e6eeef1b?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8bGFwdG9wJTIwc2V0dXB8ZW58MHx8MHx8&ixlib=rb-1.2.1&w=1000&q=80'

   useEffect(()=>{
     const fetchData=async ()=>{
        let response=await API.getPostbyId(id);
        if(response.isSuccess){
            setPost(response.data);
        }
     }
     fetchData();
   },[]);

    useEffect(()=>{
        const getImage=async ()=>{
            if(file){
                const data=new FormData();
                data.append('name',file.name);
                data.append('file',file);
                
                //API Call
                const response=await API.uploadFile(data);
                post.picture=response.data;
            }
        }
        
        getImage();
        post.categories=location.search?.split('=')[1] || 'All';
        console.log(account);
        post.username=account.username;


    },[file])


    const handleChange=(e)=>{
        setPost({...post,[e.target.name]:e.target.value});
    }
 
    const updateBlogPost=async()=>{
       let response=await API.updatePost(post);
       if(response.isSuccess){
          navigate(`/details/${id}`);
       }
    }

    return (
        <Container>
            <Image src={url} alt="my images"/>

            <Formcontrolstyle>
                
                <label htmlFor='fileInput'>
                   <Add fontSize='large' color='action'/>
                </label>
                <input type="file" id="fileInput" style={{display:'none'}}
                onChange={(e)=>setFile(e.target.files[0])} // we can also upload multiple files but here i have upload only one and it is stored in the form of an array
                
                />
                {/* <input type="file" ></input> */}
                <Textfieldstyle
                    id="outlined-textarea"
                    label="Tilte"
                    placeholder="Tilte"
                    multiline
                    name='title'
                    value={post.title}
                    onChange={(e)=>handleChange(e)}
                    />
                    <Button variant="contained" color="success" onClick={()=>updateBlogPost()}>
                      Update
                    </Button>
            </Formcontrolstyle>
             <Textsizi
                aria-label="empty textarea"
                placeholder="write your story..."
                minRows={5}
                name='description'
                value={post.description}
                onChange={(e)=>handleChange(e)}
                 />
        </Container>
    )
}

export default Update;










