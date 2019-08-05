import React from 'react';
import Ingridient from './Ingridient';

import classes from './Burger.module.css';

const burger = ( props ) => {
    return (
        <div className={classes.Burger}>
            <Ingridient type={'bread-top'} />
            <Ingridient type={'cheese'} />
            <Ingridient type={'bacon'} />
            <Ingridient type={'meat'} />
            <Ingridient type={'bread-bottom'} />
        </div>
    );
};

export default burger;