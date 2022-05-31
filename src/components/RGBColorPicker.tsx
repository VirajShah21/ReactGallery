import { HStack, VStack } from 'reaction';
import { NumberField } from './InputFields';
import './RGBColorPicker.css';

function RGBColorPicker({ r = 255, g = 255, b = 255, a = 255, onChange }: RGBColorPickerProps) {
    return (
        <VStack className='rgb-color-picker' height='auto' width='auto'>
            <RGBSlider
                value={r}
                when0={{ r: 0, g, b, a }}
                when255={{ r: 255, g, b, a }}
                onChange={r => onChange?.({ r, g, b, a })}
            />

            <RGBSlider
                value={g}
                when0={{ r, g: 0, b, a }}
                when255={{ r, g: 255, b, a }}
                onChange={g => onChange?.({ r, g, b, a })}
            />

            <RGBSlider
                value={b}
                when0={{ r, g, b: 0, a }}
                when255={{ r, g, b: 255, a }}
                onChange={b => onChange?.({ r, g, b, a })}
            />

            <OpacitySlider
                value={a}
                color={{ r, g, b, a }}
                onChange={a => onChange?.({ r, g, b, a })}
            />

            <HStack
                className='rgb-color-preview'
                style={{ backgroundColor: RGBAColorToString({ r, g, b, a }) }}>
                {a === 1 ? `rgb(${r}, ${g}, ${b})` : `rgba(${r}, ${g}, ${b}, ${a})`}
            </HStack>
        </VStack>
    );
}

function RGBSlider({ value, when0, when255, onChange }: RGBSliderProps) {
    return (
        <HStack className='rgb-slider'>
            <input
                type='range'
                value={value}
                min='0'
                max='255'
                step='1'
                style={{
                    backgroundImage: `linear-gradient(to right, ${RGBAColorToString(
                        when0,
                    )}, ${RGBAColorToString(when255)})`,
                }}
                onChange={e => onChange(parseInt(e.target.value, 10))}
            />
            <NumberField size='small' value={value} onChange={val => onChange(parseInt(val, 10))} />
        </HStack>
    );
}

function OpacitySlider({ value, color, onChange }: OpacitySliderProps) {
    return (
        <HStack className='opacity-slider'>
            <input
                type='range'
                value={value * 100}
                min='0'
                max='100'
                step='1'
                style={{
                    backgroundImage: `linear-gradient(to right, ${RGBAColorToString({
                        ...color,
                        a: 0,
                    })}, ${RGBAColorToString({ ...color, a: 1 })})`,
                }}
                onChange={e => onChange(parseInt(e.target.value, 10) / 100)}
            />
            <NumberField size='small' value={value} onChange={val => onChange(parseInt(val, 10))} />
        </HStack>
    );
}

function RGBAColorToString({ r, g, b, a }: RGBAColor) {
    return `rgba(${r}, ${g}, ${b}, ${a})`;
}

interface RGBAColor {
    r: number;
    g: number;
    b: number;
    a: number;
}

interface RGBColorPickerProps extends Partial<RGBAColor> {
    onChange?: (color: RGBAColor) => void;
}

interface RGBSliderProps {
    value: number;
    when0: RGBAColor;
    when255: RGBAColor;
    onChange: (value: number) => void;
}

interface OpacitySliderProps {
    value: number;
    color: RGBAColor;
    onChange: (value: number) => void;
}

export default RGBColorPicker;
export { RGBSlider };
export type { RGBAColor, RGBColorPickerProps, RGBSliderProps };
