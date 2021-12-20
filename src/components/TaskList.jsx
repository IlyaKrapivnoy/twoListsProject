import {
    Checkbox,
    List,
    ListItem,
    ListItemSecondaryAction,
    ListItemText,
} from '@material-ui/core';
import React from 'react';

const isChecked = () => {};

const TaskList = () => {
    return (
        <div>
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
