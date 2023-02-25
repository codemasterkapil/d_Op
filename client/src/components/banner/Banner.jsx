
import {Box,Typography,styled} from '@mui/material'

const Image=styled(Box)`
  width:100%;
  height: 30vh;
  display:flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

`
const Heading=styled(Typography)`
  font-family: 'Comic Sans MS', cursive, sans-serif;
  font-size:70px;
  color:#FF0000;
  align-items: center;
  justify-content: center;
  line-height:1

`
const SubHeading=styled(Typography)`
  font-family: 'Trebuchet MS', sans-serif;
  font-style: bold;
  font-size:20px;
  margin:15px;
  color:#0000FF;
  align-items: center;
  justify-content: center;
  background:#EEEEEE;
`

const Banner=()=>{
    return (
        <Image> 
            <Heading>d-Op</Heading>
            <SubHeading>distributed Opinion</SubHeading>
        </Image>
    )
}

export default Banner;