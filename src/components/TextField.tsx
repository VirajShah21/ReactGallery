import { ReactNode } from 'react';
import { HStack } from 'reaction';
import './TextField.css';

interface TextFieldProps {
    icon?: ReactNode;
    value?: string;
    placeholder?: string;
    onChange?: (value: string) => void;
}

function TextField({ icon, value, placeholder, onChange }: TextFieldProps) {
    return (
        <HStack className='textfield' width='auto'>
            {icon}
            <input
                value={value}
                placeholder={placeholder}
                onChange={e => onChange?.(e.target.value)}
                className='textfield-input'
            />
        </HStack>
    );
}

export default TextField;
