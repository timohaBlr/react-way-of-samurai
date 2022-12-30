import React from 'react';
import Container from "./Container";
import StoreContext from "./StoreContext";
const JustContainer = () => {
    return (
        <div>
            <StoreContext.Consumer>
                {(store)=><Container store={store}/>}
        </StoreContext.Consumer>
        </div>
    );
};

export default JustContainer;