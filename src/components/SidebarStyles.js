import { makeStyles } from '@mui/styles';

const useStyles = makeStyles((theme) => ({
  drawer: {
    width: 240,
    flexShrink: 0,
    [theme.breakpoints.down('sm')]: {
      width: 200,
    },
  },
  drawerPaper: {
    width: 240,
    [theme.breakpoints.down('sm')]: {
      width: 200,
    },
  },
  toolbar: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    padding: theme.spacing(2),
  },
  logo: {
    width: '100%',
    height: 'auto',
    marginBottom: theme.spacing(1),
  },
  listItem: {
    padding: theme.spacing(1),
  },
  listItemText: {
    fontSize: '0.8rem', // Font boyutunu küçültüyoruz
    color: 'black',
  },
  nested: {
    paddingLeft: theme.spacing(4),
  },
  sectionTitle: {
    marginTop: theme.spacing(2),
    marginLeft: theme.spacing(2),
    fontWeight: 'bold',
    color: theme.palette.primary.main,
    fontSize: '0.7rem', // Font boyutunu küçültüyoruz
  },
  active: {
    backgroundColor: theme.palette.primary.light,
    '& .MuiListItemIcon-root': {
      color: theme.palette.primary.main,
    },
    '& .MuiListItemText-primary': {
      color: theme.palette.secondary.main, // Yazı rengi sarı
    },
  },
  primaryItem: {
    fontSize: '0.8rem', // Ana menülerin font boyutunu küçültüyoruz
  }
}));

export default useStyles;