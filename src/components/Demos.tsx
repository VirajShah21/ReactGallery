import { useState } from 'react';
import DataSheet from './DataSheet';
import RGBColorPicker, { RGBAColor } from './RGBColorPicker';

function RGBColorPickerDemo() {
    const [color, setColor] = useState<RGBAColor>({ r: 0, g: 0, b: 0, a: 1 });

    return <RGBColorPicker {...color} onChange={color => setColor(color)} />;
}

function DataSheetDemo() {
    return <DataSheet />;
}

export { RGBColorPickerDemo, DataSheetDemo };
