  
import React, { Component, createContext } from 'react';

interface ContextProps {
    protocol: string;
    environment: string;
    locale: string;
    brand: string;
    book: string;
    fetchData: Function;
    generateUrl: (e: React.ChangeEvent<HTMLSelectElement>) => void;
}

export const MasterContext = createContext({} as ContextProps);

export class MasterProvider extends Component {
    state = {
        fetchData: async (url: string) => {
            let res = await fetch(url);
            let data = await res.json();
            return data;
        },
        protocol: 'https://',
        environment: '',
        locale: '',
        brand: '',
        book: '',
        generateUrl: (e: React.ChangeEvent<HTMLSelectElement>): void => {
    
            this.setState({
                [e.target.id]: e.target.value
            });
        }
    }

    render() { 
        
        return ( 
            <MasterContext.Provider value={{...this.state}}>
                {this.props.children}
            </MasterContext.Provider>
         );
    }
}