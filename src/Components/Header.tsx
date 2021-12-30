import { Typography, Box,Button} from "@material-ui/core";
import useStyles from "../Styles/MainPagestyles.tsx";
import ApiIcon from '@mui/icons-material/Api';

const Header = () => {
  const classes = useStyles();
  return ( <Box className={classes.headerLabel}>
    <div className={classes.header}>
    <Box style={{display:"flex" ,flexDirection:'row' , alignItems:'center'}}>
       
    <Box  color='white' >
        <ApiIcon/>
        </Box>
        <Box color="white" ml={1} style={{display:"flex" ,flexDirection:'row' }}>
          <Typography variant="h6">HEAD SPACE</Typography>
        </Box>
        </Box>
        <Box style={{display:"flex" ,flexDirection:'row'}}>
        <Box color="white" ml={3}>
        <Button>
        <Box color='white'>
          <Typography >Log in</Typography>
          </Box>
          </Button>
        </Box>
        <Box ml={3} >
            <Button variant = 'contained' style={{borderRadius:'0px'}}>
                <Typography>Sign Up?</Typography>
            </Button>
      
        </Box>
        </Box>
     
    </div> </Box>
  );
};

export default Header;
