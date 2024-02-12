import { Paper } from '@mui/material'

export default function Item({item}:any)
{
    return (
        <Paper>
            <img style={{width:'1520px', height:'710px'}} src={item} alt="img"/>
        </Paper>
    )
}