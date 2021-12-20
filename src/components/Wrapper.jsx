import { makeStyles } from '@material-ui/core';
import React from 'react';

const useStyles = makeStyles((theme) => ({
    root: {
        padding: '20px 30px',
    },
}));

const Wrapper = ({ children }) => {
    const classes = useStyles();
    return <div className={classes.root}>{children}</div>;
};

export default Wrapper;
