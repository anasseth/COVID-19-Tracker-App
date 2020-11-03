import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import FolderIcon from '@material-ui/icons/Folder';
import RestoreIcon from '@material-ui/icons/Restore';
import FavoriteIcon from '@material-ui/icons/Favorite';
import LocationOnIcon from '@material-ui/icons/LocationOn';

const useStyles = makeStyles({
    root: {
        position: 'fixed',
        bottom: 0,
        right:0,
        left:0,
        backgroundColor:'#f7f7f7',
        borderTop:'2px solid purple'
    },
});

export default function LabelBottomNavigation() {
    const classes = useStyles();
    const [value, setValue] = React.useState('recents');

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    return (
        <BottomNavigation value={value} onChange={handleChange} className={classes.root}>
            <BottomNavigationAction label="Home" value="recents" icon={<RestoreIcon />} />
            <BottomNavigationAction label="Global" value="favorites" icon={<FavoriteIcon />} />
            <BottomNavigationAction label="Statictics" value="nearby" icon={<LocationOnIcon />} />
            <BottomNavigationAction label="Country" value="folder" icon={<FolderIcon />} />
        </BottomNavigation>
    );
}
