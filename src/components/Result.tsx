import React, {useContext, useEffect} from 'react';
import { MasterContext } from '../contexts/MasterContext';

export interface ResultProps {
    
}
 
const Result: React.SFC<ResultProps> = () => {


    const {protocol, environment} = useContext(MasterContext);

    useEffect(() => {
        console.log('result updated')
    }, [protocol, environment]);

    return ( 
        <section className="results-container section-container">

            <fieldset>
                 <textarea id="result" placeholder="https://">{`${protocol}${environment}`}</textarea>
            </fieldset>

            <section className="result-cta-section section-container">
                    <button id="copyText" className="btn">Copy Link</button>
                    <button id="testLink" className="btn">Test Link</button>
                    <button id="clearInput" className="btn">Clear</button>
            </section>
         
        </section>
     );
}
 
export default Result;