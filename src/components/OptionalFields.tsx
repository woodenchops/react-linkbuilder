import React, { Fragment } from 'react';
import OptionalParams from '../assets/data/params.json';
import ParamInput from './ParamInput';

export interface OptionalFieldsProps {
}

interface OptionalFildsData {
    paramName: string;
    checked: boolean;
    type: string;
}

const OptionalFields: React.SFC<OptionalFieldsProps> = () => {

    return ( 

        <Fragment>
        <h3 className="title section-title">Optional fields:</h3>

        <section className="params-container section-container">

            <div className="inner-param-container" id="paramContainer">
              {OptionalParams.map((param: OptionalFildsData, index) => (
                <ParamInput paramName={param.paramName} checked={param.checked} type={param.type} key={index} />
             ))}
            </div>

        </section>
        </Fragment>

     );
}
 
export default OptionalFields;