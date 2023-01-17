import React from 'react';
import preloader from './../../../images/Spinner-1s-200px.svg'

export const Preloader = () => {
    return (
        <div>
           <img src={preloader} alt={'preloader'}/>
        </div>
    );
};
