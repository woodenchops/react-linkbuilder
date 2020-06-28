  
import React, { Component, createContext } from 'react';

interface ContextProps {
    protocol: string;
    environment: string;
    locale: string;
    brand: string;
    book: string;
    fetchData: any;
    generateUrl: any;
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
        generateUrl: (e: React.ChangeEvent<HTMLInputElement>): void => {
    
            this.setState({
                [e.target.id]: e.target.value
            }, () => console.log(this.state.environment));
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