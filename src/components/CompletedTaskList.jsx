import {
    Checkbox,
    List,
    ListItem,
    ListItemSecondaryAction,
    ListItemText,
    makeStyles,
    Typography,
} from '@material-ui/core';
import React from 'react';
import HighlightOffIcon from '@material-ui/icons/HighlightOff';

const useStyles = makeStyles((theme) => ({
    list: {
        padding: '30px 0',
    },
}));

const isChecked = () => {};

const TaskList = () => {
    const classes = useStyles();
    return (
        <div className={classes.list}>
            <Typography variant='h5' gutterBottom>
                Completed Tasks (num)
            </Typography>
            <List component='nav' aria-label='main mailbox folders'>
                <ListItem divider>
                    <ListItemText primary='test task' />
                    <ListItemSecondaryAction>
                        <HighlightOffIcon />
                    </ListItemSecondaryAction>
                </ListItem>
            </List>
        </div>
    );
};

export default TaskList;
