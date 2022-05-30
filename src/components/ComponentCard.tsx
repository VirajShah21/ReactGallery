import { VStack } from 'reaction';
import './ComponentCard.css';

function ComponentCard({ thumb, name, component, description }: ComponentCardProps) {
    return (
        <VStack className='component-card'>
            <img src={thumb} alt={name} className='component-thumbnail' />
            <VStack className='component-details'>
                <h3>{name}</h3>
                <small>{component}</small>
                <p>{description}</p>
            </VStack>
        </VStack>
    );
}

interface ComponentCardProps {
    thumb: string;
    name: string;
    component: string;
    description: string;
}

export default ComponentCard;
