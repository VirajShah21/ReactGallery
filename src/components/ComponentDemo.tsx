import { XIcon } from '@primer/octicons-react';
import { ReactNode } from 'react';
import { HStack, VStack } from 'reaction';
import './ComponentDemo.css';

function ComponentDemo({ name, demo, onClose }: ComponentDemoProps) {
    return (
        <div className='component-demo-overlay'>
            <VStack className='component-demo' justify='start'>
                <HStack className='titlebar'>
                    <button className='close-component-demo' onClick={onClose}>
                        <XIcon />
                    </button>
                    <h3 className='title'>{name}</h3>
                </HStack>
                <HStack className='component-demo-window' height='100%'>
                    <VStack className='demo-container' height='100%' grow={1}>
                        {demo}
                    </VStack>
                    <VStack className='property-editor' align='start' justify='start' grow={1}>
                        <h4 className='title'>Properties</h4>
                    </VStack>
                </HStack>
            </VStack>
        </div>
    );
}

interface ComponentDemoProps {
    name: string;
    demo: ReactNode;
    onClose: () => void;
}

export default ComponentDemo;
