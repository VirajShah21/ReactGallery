import { HStack, VStack } from 'reaction';
import './App.css';
import ComponentCard from './components/ComponentCard';
import Navbar from './components/Navbar';
import ComponentManifest from './utils/ComponentManifest';

function App() {
    return (
        <VStack>
            <Navbar />

            <div style={{ height: '50px' }} />

            <HStack className='component-gallery'>
                {ComponentManifest.map(definition => (
                    <ComponentCard {...definition} />
                ))}
            </HStack>
        </VStack>
    );
}

export default App;
