import {createStyles, makeStyles, Theme} from '@material-ui/core/styles';

export default makeStyles((theme: Theme) =>
  createStyles({
      header:{
        minHeight: '60px',
        position: 'fixed',
        left: 0,
        top: 0,
        right: 0,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: '0 15px',
    
        background:'black',
      },
      headerLabel:{
        display: "flex",
        flexDirection:'row',
        justifyContent: "space-between",
        alignContent: "center",
        position:'sticky',
      }
  }));