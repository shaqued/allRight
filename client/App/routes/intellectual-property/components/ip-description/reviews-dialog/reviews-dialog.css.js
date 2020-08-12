import {makeStyles} from "@material-ui/core/styles";
import {red} from '@material-ui/core/colors';

export default makeStyles((theme) => ({
  root: {
    display: 'inline-flex',
    flexDirection: 'row',
    minWidth: '96%',
    margin: '2%'
  },
  dialog: {
    margin: "2%",
  },
  avatar: {
    backgroundColor: red[500],
    marginLeft: "10px"
  },
  cardContent: {
    display: 'flex',
    flexDirection: 'column',
    width: '100%'
  }
}));
