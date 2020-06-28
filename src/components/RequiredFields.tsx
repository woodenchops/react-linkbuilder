import React, { Fragment} from 'react'
import EnvJSON from '../assets/data/env.json';
import LocaleJSON from '../assets/data/locale.json';
import BrandJSON from '../assets/data/brand.json';
import SearchJSON from '../assets/data/searchBook.json';
import SelectDropDown from './SelectDropDown';

const RequiredFields: React.SFC = () => {
    
    return ( 
        <Fragment>
            <h3 className="title section-title">Required fields:</h3>

            <section className="button-container section-container">


                <button id="ohw-generator" className="btn link-generator btn--first">Create OHW Link</button>

                <button id="standard-generator" className="btn link-generator">Create Standard Deep Link</button>

            </section>

            <section className="select-dropdown-container section-container">

                <SelectDropDown jsondata={EnvJSON} id="environment" defaultOption="-- select an environment -- "/>
                <SelectDropDown jsondata={LocaleJSON} id="locale" defaultOption="-- select locale -- "/>
                <SelectDropDown jsondata={BrandJSON} id="brand" defaultOption="-- select brand -- "/>
                <SelectDropDown jsondata={SearchJSON} id="search" defaultOption="-- book or search -- "/>

            </section>
        </Fragment>

     );
}
 
export default RequiredFields;