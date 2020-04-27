import React from 'react';

import { AssistantServiceConsumer } from '../assistant-service-context';

const withAssistantService = () => (Wrapped) => {

    return (props) => {

        return (
            <AssistantServiceConsumer>
                {
                     (assistantService) => {
                         return (<Wrapped {...props} 
                             assistantService={assistantService} />);
                        
                     }
                }
            </AssistantServiceConsumer>
        );

    };
};

export default withAssistantService;