import React from 'react';
import PropTypes from 'prop-types';

import classes from './Ingridient.module.css';

const ingridient = ( props ) => {

    let ingridientItem = null;

    switch ( props.type ) {
        case 'bread-bottom' :
            ingridientItem = <div className={classes.BreadBottom}></div>;
            break;
        case 'bread-top' :
            ingridientItem = (
                <div className={classes.BreadTop}>
                    <div className={classes.Seeds1}></div>
                    <div className={classes.Seeds2}></div>
                </div>
            );
            break;
        case 'meat' :
            ingridientItem = <div className={classes.Meat}></div>;
            break;
        case 'salad' :
            ingridientItem = <div className={classes.Salad}></div>;
            break;
        case 'bacon' :
            ingridientItem = <div className={classes.Bacon}></div>;
            break;
        case 'cheese' :
            ingridientItem = <div className={classes.Cheese}></div>;
            break;
        default :
            ingridientItem = null;
    }

    ingridient.propTypes = {
        type: PropTypes.string.isRequired
    };

    return ingridientItem;

};

export default ingridient;