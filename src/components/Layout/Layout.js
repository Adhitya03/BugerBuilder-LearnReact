import React from 'react';
import Aux from '../../auxiliary';

import classes from './Layout.module.css';

const layout = ( props ) => {
    return(
        <Aux>
            <header> Toolbar, SideDrawer, Backdrop </header>
            <main className={classes.mainArea}>
                {props.children}
            </main>
        </Aux>
    );
};

export default layout;