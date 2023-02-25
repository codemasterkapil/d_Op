import Box from '@mui/material/Box';
import styled from '@emotion/styled';
import Typography from '@mui/material/Typography';

const Image=styled(Box)`
  width:100%;
  height: 70vh;
  display:flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

`

const SubHeading=styled(Typography)`
  font-family: 'Trebuchet MS', sans-serif;
  font-style: bold;
  font-size:20px;
  margin:15px;
  color:#000000;
  align-items: center;
  justify-content: center;
  padding:10px;
  margin: 10px, 10px, 10px, 10px;
`

export const About=()=>{
    return (
        <Image> 
            <SubHeading>d-Op  is an opinion platform built and run by undergraduate students, for the world. d implies Distributed. d implies Democracy. d means diversity. d means discipline, d conveys dedication. d stands for dynamism, d stands for details. With d in mind, the platform aims to present distributed and diverse opinions to readers to broaden their horizon. 

d-Op brings opinions in a crisp and clear format that is easy to understand for everyone. In times of polarization, it strives to bring back a discussion environment to society, cutting out noise while looking out for details that make the story relevant. We all know that cheap content being sold these days for gaining impressions, and in turn for money for ad, d-Op platform doesn’t run on ads, and instead, runs on donation of its readers ensuring quality of content.

Made by ambitious students of the Republic of India, d-Op wishes to set the gold standard of content in India. We promote differences of opinion to bring the best from our product. We let you discover the truth. We look forward to engaging you in a meaningful conversation. Any feedback, please d-drop a mail to rohitsinghsays21@gmail.com. We are all ears!</SubHeading>
        </Image>
    )
}

