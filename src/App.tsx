import { VStack } from 'reaction';
import './App.css';
import ComponentCard from './components/ComponentCard';
import Navbar from './components/Navbar';
import ComponentManifest from './utils/ComponentManifest';

function App() {
    return (
        <VStack>
            <Navbar />

            <div style={{ height: '50px' }} />

            {ComponentManifest.map(definition => (
                <ComponentCard {...definition} />
            ))}
        </VStack>
    );
}

export default App;
