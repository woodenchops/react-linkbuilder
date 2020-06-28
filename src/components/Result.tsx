import React, {useContext, useEffect} from 'react';
import { MasterContext } from '../contexts/MasterContext';

export interface ResultProps {
    
}
 
const Result: React.SFC<ResultProps> = () => {


    const {protocol, environment, locale, brand, book} = useContext(MasterContext);

    useEffect(() => {
        console.log('result updated')
    }, [environment, locale, brand, book ]);

    return ( 
        <section className="results-container section-container">

            <fieldset>
                 <textarea id="result" placeholder={protocol} value={`${protocol}${environment}${locale}${brand}${book}`}></textarea>
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