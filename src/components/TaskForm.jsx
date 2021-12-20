import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import { Grid, Button } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
    button: {
        height: 56,
    },
}));

const TaskForm = () => {
    const classes = useStyles();
    return (
        <div>
            <Grid container spacing={4}>
                <Grid item xs={12} sm={10}>
                    <TextField
                        id='outlined-basic'
                        label='Enter Your Task'
                        variant='outlined'
                        fullWidth
                    />
                </Grid>
                <Grid item xs={12} sm={2}>
                    <Button
                        variant='contained'
                        color='primary'
                        className={classes.button}
                        fullWidth
                    >
                        Add Task
                    </Button>
                </Grid>
            </Grid>
        </div>
    );
};

export default TaskForm;
