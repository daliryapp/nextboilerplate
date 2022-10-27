import { ThemeProvider } from "@mui/material";
import React, { FC, ReactNode } from "react";
import theme from "./theme";
import createCache from '@emotion/cache';
// import { prefixer } from 'stylis';
import rtlPlugin from 'stylis-plugin-rtl';
import { CacheProvider } from '@emotion/react';

interface Props {
  children: ReactNode
}
const Provider: FC = ({ children }: Props) => {
  const cacheRtl = createCache({
    key: 'muirtl',
    stylisPlugins: [rtlPlugin],
  });
  return <CacheProvider value={cacheRtl}><ThemeProvider theme={theme}>{children}</ThemeProvider></CacheProvider>;
};

export default Provider;
