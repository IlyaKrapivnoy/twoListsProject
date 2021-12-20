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
                Tasks for Today (num)
            </Typography>
            <List component='nav' aria-label='main mailbox folders'>
                <ListItem divider>
                    <ListItemText primary='test task' />
                    <ListItemSecondaryAction>
                        <Checkbox onChange={isChecked} />
                    </ListItemSecondaryAction>
                </ListItem>
            </List>
        </div>
    );
};

export default TaskList;
