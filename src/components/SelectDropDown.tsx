import React, {useContext} from 'react';
import { MasterContext } from '../contexts/MasterContext';

export interface SelectDropDownProps {
    jsondata: {label: string, value: string}[];
    id: string;
    defaultOption: string;
}

interface RequiredFieldsJsonData {
    label: string;
    value: string;
}

 
const SelectDropDown: React.SFC<SelectDropDownProps> = ({jsondata, id, defaultOption} ) => {


    const {generateUrl} = useContext(MasterContext);

    const loopThroughJsonData = (data: RequiredFieldsJsonData[]) => {

        return data.map((item: RequiredFieldsJsonData, index: number) => (
             <option key={index} value={item.value}>{item.label}</option>
         ))
     
     };

    return ( 

    <fieldset>
        <label htmlFor={id}></label>
        <select onChange={(e) => generateUrl(e)} id={id} className="linkField">
            <option disabled selected> {defaultOption} </option>
            {loopThroughJsonData(jsondata)}
        </select>
    </fieldset>

     );
}
 
export default SelectDropDown;