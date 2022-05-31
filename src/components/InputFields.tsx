import { ReactNode } from 'react';
import { HStack } from 'reaction';
import './InputFields.css';

function InputField({
    icon,
    value,
    placeholder,
    onChange,
    type,
    fix,
    size = 'medium',
    className = '',
}: InputFieldProps) {
    return (
        <HStack className={`input-field input-field-${size} ${className}`.trim()}>
            {icon}
            <input
                type={type}
                value={value}
                placeholder={placeholder}
                onChange={e => onChange?.(fix ? fix(e.target.value) : e.target.value)}
                className='input-field-input'
            />
        </HStack>
    );
}

function TextField({ icon, value, placeholder, onChange, size, className = '' }: TextFieldProps) {
    return (
        <InputField
            icon={icon}
            value={value}
            placeholder={placeholder}
            onChange={onChange}
            size={size}
            type='text'
            className={`text-field ${className}`.trim()}
        />
    );
}

function NumberField({
    icon,
    value,
    placeholder,
    onChange,
    size,
    className = '',
}: NumberFieldProps) {
    function fix(s: string) {
        return s.replace(/[^0-9]/g, '');
    }

    return (
        <InputField
            icon={icon}
            value={Number.isNaN(value) ? '' : `${value}`}
            placeholder={placeholder}
            onChange={val => {
                if (!Number.isNaN(val)) {
                    onChange?.(val);
                } else {
                    onChange?.('0');
                }
            }}
            size={size}
            type='text'
            fix={fix}
            className={`number-field ${className}`.trim()}
        />
    );
}

interface InputFieldProps {
    icon?: ReactNode;
    value?: string;
    placeholder?: string;
    size?: 'small' | 'medium' | 'large';
    onChange?: (value: string) => void;
    type: 'text' | 'number';
    fix?: (value: string) => string;
    className?: string;
}

interface TextFieldProps {
    icon?: ReactNode;
    value?: string;
    placeholder?: string;
    size?: 'small' | 'medium' | 'large';
    onChange?: (value: string) => void;
    className?: string;
}

interface NumberFieldProps {
    icon?: ReactNode;
    value?: string | number;
    placeholder?: string;
    size?: 'small' | 'medium' | 'large';
    onChange?: (value: string) => void;
    className?: string;
}

export { TextField, NumberField };
export type { InputFieldProps, TextFieldProps, NumberFieldProps };
