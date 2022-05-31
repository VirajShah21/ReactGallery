import { PlusCircleIcon } from '@primer/octicons-react';
import { useState } from 'react';
import { VStack } from 'reaction';
import './DataSheet.css';

function DataSheet() {
    const [data, setData] = useState([['']]);

    function addRow() {
        setData([...data, data[0].map(() => '')]);
    }

    function addColumn() {
        data.forEach(row => row.push(''));
        setData([...data]);
    }

    return (
        <VStack className='datasheet'>
            <table className='datasheet-table'>
                <tbody>
                    <tr>
                        <td></td>
                        {data[0].map((_, i) => (
                            <td className='col-number'>{i + 1}</td>
                        ))}
                        <td rowSpan={data.length + 1} onClick={addColumn}>
                            <PlusCircleIcon />
                        </td>
                    </tr>
                    {data.map((row, rowIndex) => (
                        <tr key={rowIndex}>
                            <td className='row-number'>{rowIndex + 1}</td>
                            {row.map((cell, cellIndex) => (
                                <DataCell
                                    value={cell}
                                    key={`${rowIndex}-${cellIndex}`}
                                    onChange={value => {
                                        data[rowIndex][cellIndex] = value;
                                        setData([...data]);
                                    }}
                                />
                            ))}
                        </tr>
                    ))}
                    <tr>
                        <td
                            colSpan={data[0].length + 1}
                            style={{ textAlign: 'center' }}
                            onClick={addRow}>
                            <PlusCircleIcon />
                        </td>
                    </tr>
                </tbody>
            </table>
        </VStack>
    );
}

function DataCell({ value, onChange }: DataCellProps) {
    const [isEditing, setIsEditing] = useState(false);

    return (
        <td onClick={() => setIsEditing(true)} className={isEditing ? 'editing' : ''}>
            {!isEditing && value}
            {isEditing && (
                <input
                    className='cell-edit-input'
                    value={value}
                    onBlur={() => setIsEditing(false)}
                    onChange={e => onChange(e.target.value)}
                    onKeyUp={e => {
                        if (e.key === 'Enter') {
                            setIsEditing(false);
                            e.preventDefault();
                        }
                    }}
                    width='auto'
                />
            )}
        </td>
    );
}

interface DataCellProps {
    value: string;
    onChange: (value: string) => void;
}

export default DataSheet;
export { DataCell };
export type { DataCellProps };
