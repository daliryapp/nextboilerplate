import { CssBaseline } from "@mui/material";
import Footer from 'components/Footer';
import { FC } from "react";
import useDefaultStyles from "./useDefaultStyles";

export interface IDefaultProps { }
const Default: FC<IDefaultProps> = ({ children }) => {
  const styles = useDefaultStyles();
  return (
    <>
      <CssBaseline />
      <main className={styles.root}>
        {/* <Appbar /> */}
        <div>{children}</div>
        <Footer />
      </main>
    </>
  );
};
Default.displayName = "DefaultLayout";

export default Default;
