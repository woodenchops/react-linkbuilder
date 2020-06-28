import React from 'react';

export interface IntroProps {
    
}
 
const Intro: React.SFC<IntroProps> = () => {
    return ( 
        <section className="title-section">
        <h1 className="title">Deeplink form</h1>
        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Assumenda accusantium.</p>
        </section>
     );
}
 
export default Intro;