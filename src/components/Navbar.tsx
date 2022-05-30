import { SearchIcon } from '@primer/octicons-react';
import { HStack, VStack } from 'reaction';
import './Navbar.css';
import TextField from './TextField';

function Navbar() {
    return (
        <VStack className='navbar' width='100%'>
            <HStack className='navbar-main' justify='between'>
                <h1 className='navbar-brand'>React Gallery</h1>
                <TextField icon={<SearchIcon />} placeholder='Search' />
                <div>
                    Theme:
                    <select>
                        <option value='white'>White</option>
                        <option value='black'>Black</option>
                    </select>
                </div>
            </HStack>
            <HStack className='navbar-submenu'></HStack>
        </VStack>
    );
}

export default Navbar;
