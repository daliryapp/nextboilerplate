import { CssBaseline } from "@mui/material";
import Footer from 'components/Footer';
import { FC } from "react";
import useDefaultStyles from "./useDefaultStyles";
import Appbar from 'components/Appbar';
import { ReactNode } from 'react'
import SideBar from 'components/Sidebar';

export interface IDefaultProps {
  children: ReactNode
}
const Default: FC<IDefaultProps> = ({ children }) => {
  const styles = useDefaultStyles();
  return (
    <>
      <CssBaseline />
      <main className={styles.root}>
        <Appbar />
        <SideBar />
        <div>{children}</div>
        <Footer />
      </main>
    </>
  );
};
Default.displayName = "DefaultLayout";

export default Default;
