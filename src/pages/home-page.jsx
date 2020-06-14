import React, { useEffect, useState } from 'react';
import ForceCredentials from '../containers/force-credentails/force-credentails';

/**
 * The main page of the application which handles internal route logics
 */
const HomePage = props => {
    const [ currentView, updateCurrentView ] = useState({
        modeName: "forceCredentials"
    })

    switch(currentView.modeName) {
        case "forceCredentials": {
            return <ForceCredentials />;
        }
        default: {
            return <div />;
        }
    }
}
 
export default HomePage;