import { XIcon } from '@primer/octicons-react';
import { ReactNode } from 'react';
import { HStack, VStack } from 'reaction';
import './ComponentDemo.css';

function ComponentDemo({ name, demo }: ComponentDemoProps) {
    return (
        <div className='component-demo-overlay'>
            <VStack className='component-demo' justify='start'>
                <HStack className='titlebar'>
                    <button className='close-component-demo'>
                        <XIcon />
                    </button>
                    <h3 className='title'>{name}</h3>
                </HStack>
                <HStack>
                    <VStack className='demo-container'>{demo}</VStack>
                    <VStack className='property-editor'>
                        <h4>Properties</h4>
                    </VStack>
                </HStack>
            </VStack>
        </div>
    );
}

interface ComponentDemoProps {
    name: string;
    demo: ReactNode;
}

export default ComponentDemo;
