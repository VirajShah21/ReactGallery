import { ReactNode, useState } from 'react';
import { VStack } from 'reaction';
import './ComponentCard.css';
import ComponentDemo from './ComponentDemo';

function ComponentCard({ thumb, name, component, description, demo }: ComponentCardProps) {
    const [showingDemo, setShowingDemo] = useState(false);

    return (
        <>
            <VStack className='component-card' onClick={() => setShowingDemo(true)}>
                <img src={thumb} alt={name} className='component-thumbnail' />
                <VStack className='component-details'>
                    <h3>{name}</h3>
                    <small>{component}</small>
                    <p>{description}</p>
                </VStack>
            </VStack>
            {showingDemo && <ComponentDemo name={name} demo={demo} />}
        </>
    );
}

interface ComponentCardProps {
    thumb: string;
    name: string;
    component: string;
    description: string;
    demo: ReactNode;
}

export default ComponentCard;
