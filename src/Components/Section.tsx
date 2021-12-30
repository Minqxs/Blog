import useStyles from "../Styles/SectionStyle.tsx";
function Section() {
  const classes = useStyles();

  return (
    <div className={classes.wrap}>
      <div className={classes.left}>
        <p>SELL ANYTHING</p>
        <h1>All you need to power your online store.</h1>
        <p>Whether you’re just getting started or are an established brand, our powerful platform helps your business grow.</p>
        <button className={classes.getStarted}>Get Started</button>
      </div>
      <div className={classes.right}>
      <p>SELL ANYTHING</p>
        <h1>All you need to power your online store.</h1>
        <p>Whether you’re just getting started or are an established brand, our powerful platform helps your business grow.</p>
        <button className={classes.getStarted}>Get Started</button>
      </div>
     
    </div>
  );
}

export default Section;
