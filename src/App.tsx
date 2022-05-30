import { VStack } from 'reaction';
import './App.css';
import ComponentCard from './components/ComponentCard';
import Navbar from './components/Navbar';
import rgbColorPickerThumbnail from './resources/images/thumbnails/rgb-color-picker.png';

function App() {
    return (
        <VStack>
            <Navbar />

            <div style={{ height: '50px' }} />

            <ComponentCard
                thumb={rgbColorPickerThumbnail}
                name='RGB Color Picker'
                component='RGBColorPicker'
                description='Use basic sliders to pick a color, any color.'
                demo={<div>Hi</div>}
            />
        </VStack>
    );
}

export default App;
