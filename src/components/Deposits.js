import React from 'react';
import Link from '@material-ui/core/Link';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Title from './Title';

function preventDefault(event) {
  event.preventDefault();
}

const useStyles = makeStyles({
  depositContext: {
    flex: 1,
  },
});

export default function Deposits() {
  const classes = useStyles();
  return (
    <React.Fragment>
      <Title>Area Updates</Title>
      <Typography component="p" variant="h4">
        753
      </Typography>
      <Typography color="textSecondary" className={classes.depositContext}>
        patients of Covid-19.
      </Typography>
      <Typography component="p" variant="h4">
        22
      </Typography>
      <Typography color="textSecondary" className={classes.depositContext}>
        patients of Dengue.
      </Typography>
      <div>
        <Link color="primary" href="#" onClick={preventDefault}>
          More updates.
        </Link>
      </div>
    </React.Fragment>
  );
}