import React from 'react';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    wrapper: {
      color: theme.palette.background.default,
      backgroundColor: theme.palette.text.primary,
      width: 'fit-content',
      padding: '1rem 3rem',
      margin: '2rem auto',
      textAlign: 'center',
      boxShadow: theme.shadows[15]
    },
    heading: {
      margin: 0
    },
    highlight: {
      margin: 0,
      padding: 0
    }
  })
);

interface HeaderProps {
  heading: string;
  highlight: string;
}

const Header: React.FC<HeaderProps> = ({
  heading = 'Star Wars',
  highlight = 'The never-ending battle'
}) => {
  const classes = useStyles();

  return (
    <header className={classes.wrapper}>
      <h1 className={classes.heading}>{heading}</h1>
      <h4 className={classes.highlight}>{highlight}</h4>
    </header>
  );
};

export default Header;
