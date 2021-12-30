import React from "react-dom";
import useStyles from "../Styles/MainPagestyles.tsx";
import Header from "../Components/Header.tsx";
import Section from "../Components/Section.tsx";
import { Box} from "@material-ui/core";

export default function HomePage() {
  const classes = useStyles();

  return (
    <>
        <Header />
      <Section />
      </>
    
  );
}
