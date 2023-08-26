import React from 'react'
import { ToggleButtonGroup } from '@mui/material';
import MuiToggleButton from '@mui/material/ToggleButton';
import { styled } from '@mui/material/styles';
import Admin from './Admin'; 


const Header = () => {
    const [alignment, setalignment] = React.useState('User')
    const handelEvent = (event, Newalignment) => {
        setalignment(Newalignment);
    }
    const ToggleButton = styled(MuiToggleButton)(({ selectedColor }) => ({
        '&.Mui-selected, &.Mui-selected:hover': {
            color: 'white',
            backgroundColor: selectedColor,
        }
    }))

    return (
        <>
            <div className='App-header'>
                <ToggleButtonGroup
                    value={alignment}
                    exclusive
                    color='primary'
                    onChange={handelEvent}
                    style={{ backgroundColor: 'white', alignItems: 'center', margin: '10px' }}
                >
                    <ToggleButton value='Admin' selectedColor="#00abc0">Admin</ToggleButton>
                    <ToggleButton value='User' selectedColor="#00abc0">User</ToggleButton>
                </ToggleButtonGroup>
            </div>
            {alignment === 'User' && 'User side '} 
            {alignment === 'Admin' && <Admin />}
        </>
    )
}

export default Header