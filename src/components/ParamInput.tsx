import React, { Fragment } from 'react';

export interface ParamInputProps {
    checked: boolean;
    paramName: string;
    type: string;    
}
 
const ParamInput: React.SFC<ParamInputProps> = ({paramName, checked, type}) => {
    return ( 

        <Fragment>
            <fieldset className="param-fieldset">
            <div className={`param-tooltip param-${paramName}`} data-title={paramName}></div>
            <label htmlFor={`${paramName}-checkbox`}>{paramName}</label>
            <input type="checkbox" name={paramName} id={`${paramName}-checkbox`} value="" className="deeplinkParamCheckBox"/>
            <input type={type} id={`${paramName}-inputField`} placeholder={paramName} data-param={paramName} className="deeplinkParamValue"/>
            </fieldset>
        </Fragment>

     );
}
 
export default ParamInput;