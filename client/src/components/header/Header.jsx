
import { AppBar,Toolbar, Typography,styled} from '@mui/material'
import { ImHome } from 'react-icons/im';
import { FcCellPhone,FcAbout } from "react-icons/fc";
import {Link} from 'react-router-dom'
import { FiUserX} from 'react-icons/fi';
import './Header.css'

const Component=styled(AppBar)`
   background:#000000;
   color:#000
`
const Container=styled(Toolbar)`
  justify-content: center;
  & > a {
    padding:20px;
    color:#000
    text-decoration: none;
  }
`

const Header=()=>{
    return (
        <div class='container'>
            <Component>
                <Container>
                   <Link to={'/'}><ImHome></ImHome></Link>
                    <Link to={'/about'}><FcAbout></FcAbout></Link>
                    <Link to={'/contact'}><FcCellPhone></FcCellPhone></Link>
                    <Link to={'/login'}><FiUserX></FiUserX></Link>
                </Container>
            </Component>
        </div>
    )
}

export default Header;