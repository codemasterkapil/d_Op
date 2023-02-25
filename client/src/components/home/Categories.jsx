import {Button,Table,TableBody,TableCell,TableRow,TableHead,styled} from '@mui/material'

import {categories} from '../../constants/data.js'

import {Link, useSearchParams} from 'react-router-dom';

const StyledTable=styled(Table)`
 border:1px solid rgba(224,224,224,1);
`
const StyledButton=styled(Button)`
 margin:20px;
 width:85%;
 background:#6495ED;
 color:#fff;
`
const Styledlink=styled(Link)`
  text-decoration:none;
  color:inherit;
`

const Categories=()=>{

    const [searchParams]=useSearchParams();
    const category=searchParams.get('category')

    return (
      <>
       <Styledlink to={`/create/?category=${category || ''}`} style={{textDecoration:'none'}}>
        <StyledButton variant='contained'>create Blog</StyledButton>
       </Styledlink>
         
        
        <StyledTable>
            <TableHead>
                <TableRow>
                    <TableCell>
                        <Styledlink to={`/`}>All categories</Styledlink>
                    </TableCell>
                </TableRow>
            </TableHead>
            <TableBody>
                {
                    categories.map((category)=>{
                        return(
                           <TableRow key={category.id}>
                            <TableCell>
                                <Styledlink to={`/?category=${category.type}`}> {category.type}</Styledlink>
                            </TableCell>
                           </TableRow>
                        )
                    })
                }
                
                
            </TableBody>
        </StyledTable>
      </>

    )
}

export default Categories;