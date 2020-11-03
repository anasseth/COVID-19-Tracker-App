import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {Link} from 'react-router-dom';

const useStyles = makeStyles({
    root: {
        position: 'fixed',
        bottom: 0,
        right: 0,
        left: 0,
        backgroundColor: 'purple',
        borderTop: '2px solid purple',
        height: '50px',
    },
    bottomBarButton: {
        marginTop: '7px',
        height: '15%',
        width: '25%',
        padding: '10px',
        backgroundColor: 'purple',
        color: 'white',
        border: '2px solid transparent',
        outline: 'none',
        fontWeight:'900',
    },
});

function NavigationBottomBar() {
    const classes = useStyles();
    return (
        <div className={classes.root}>
            <button className={classes.bottomBarButton}><Link to='/' className='LinkClass'>Global Statistics</Link></button>
            <button className={classes.bottomBarButton}><Link to='/CountryStats' className='LinkClass'>Country Wise Statistics</Link></button>
            <button className={classes.bottomBarButton}><Link className='LinkClass'>Graph</Link></button>
            <button className={classes.bottomBarButton}><Link className='LinkClass'>Symptoms & Precautions</Link></button>
        </div>
    )
}

export default NavigationBottomBar;