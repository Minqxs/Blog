import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";

export default makeStyles((theme: Theme) =>
  createStyles({
    wrap: {
      height: "100vh",
      width: "100%",
      display: "flex",
      flexDirection: "row",
      background: "url('/images/download.jpeg')",
      paddingTop: "10%",
    },

    left: {
      width: "50%",
    },
    right: {
      width: "50%",
    },
    getStarted: {

        padding: '10px',
        textTransform:'Uppercase',
        background: '#fff',

    },
  })
);
