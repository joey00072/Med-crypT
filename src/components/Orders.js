import React from 'react';
import Link from '@material-ui/core/Link';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Title from './Title';

// Generate Order Data
function createData(id, date, name, shipTo, paymentMethod, amount) {
  return { id, date, name, shipTo, paymentMethod, amount };
}

const rows = [
  createData(0, '16 Aug, 2020', 'Sahyadri Hospital', 'Fever', 'VISA ⠀•••• 3719', 300.00),
  createData(1, '25 Jul, 2020', 'Sasoon Hospital', 'Check-up', 'VISA ⠀•••• 2574', 100.00),
  createData(2, '24 Jul, 2020', 'Sasoon Hospital', 'Check-up', 'MC ⠀•••• 1253', 100.00),
  createData(3, '3 Jun, 2020', 'Saideep Hospital', 'Chicken-pox', 'AMEX ⠀•••• 2000', 5000.00),
  createData(4, '21 May, 2020', 'AIIMS', 'Heart-surgery', 'VISA ⠀•••• 5919', 150000.00),
];

function preventDefault(event) {
  event.preventDefault();
}

const useStyles = makeStyles((theme) => ({
  seeMore: {
    marginTop: theme.spacing(3),
  },
}));

export default function Orders() {
  const classes = useStyles();
  return (
    <React.Fragment>
      <Title>Your Records</Title>
      <Table size="small">
        <TableHead>
          <TableRow>
            <TableCell>Date</TableCell>
            <TableCell>Hospital</TableCell>
            <TableCell>Disease</TableCell>
            <TableCell>Payment Method</TableCell>
            <TableCell align="right">Amount Paid</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow key={row.id}>
              <TableCell>{row.date}</TableCell>
              <TableCell>{row.name}</TableCell>
              <TableCell>{row.shipTo}</TableCell>
              <TableCell>{row.paymentMethod}</TableCell>
              <TableCell align="right">{row.amount}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
      <div className={classes.seeMore}>
        <Link color="primary" href="#" onClick={preventDefault}>
          See more records
        </Link>
      </div>
    </React.Fragment>
  );
}