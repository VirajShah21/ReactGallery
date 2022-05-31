import { ReactNode } from 'react';
import { DataSheetDemo, RGBColorPickerDemo } from '../components/Demos';
import rgbColorPickerThumbnail from '../resources/images/thumbnails/rgb-color-picker.png';
import datasheetThumbnail from '../resources/images/thumbnails/datasheet.png';

const ComponentManifest: ComponentRecord[] = [
    {
        name: 'RGB Color Picker',
        component: 'RGBColorPicker',
        thumb: rgbColorPickerThumbnail,
        description: 'Use basic sliders to pick a color, any color.',
        demo: <RGBColorPickerDemo />,
        properties: {},
    },
    {
        name: 'Data Sheet',
        component: 'DataSheet',
        thumb: datasheetThumbnail,
        description: 'An editable spreadsheet-like component for viewing data.',
        demo: <DataSheetDemo />,
        properties: {},
    },
];

interface ComponentRecord {
    name: string;
    component: string;
    thumb: string;
    description: string;
    demo: ReactNode;
    properties?: Record<string, ComponentPropertyDefinition<unknown>>;
}

interface ComponentPropertyDefinition<T> {
    name: string;
    type: string;
    default: T;
    description?: string;
    options?: T[];
    validator?: (value: T) => boolean;
}

export default ComponentManifest;
export type { ComponentRecord, ComponentPropertyDefinition };
