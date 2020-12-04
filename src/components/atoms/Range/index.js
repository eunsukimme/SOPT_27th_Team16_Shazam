import Grid from '@material-ui/core/Grid';
import Slider from '@material-ui/core/Slider';
import { makeStyles, withStyles } from '@material-ui/core/styles';
import React from 'react';

const useStyles = makeStyles({
  root: {
    width: 790,
    padding: '15px',
  },
});

const IOSSlider = withStyles({
  thumbColorPrimary: {
    color: '#0993FF',
  },

  thumb: {
    height: 20,
    width: 20,
    marginTop: -7,
    marginLeft: -12,
  },

  track: {
    color: '#0993FF',
    height: 6,
    borderRadius: 4,
  },
  rail: {
    height: 6,
    borderRadius: 4,
    color: '#E5E5E5',
  },
})(Slider);

export default function Range() {
  const classes = useStyles();
  const [value, setValue] = React.useState(30);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div className={classes.root}>
      <Grid container spacing={120}>
        <Grid item></Grid>
        <IOSSlider value={value} onChange={handleChange} aria-labelledby="continuous-slider" />
      </Grid>
    </div>
  );
}
