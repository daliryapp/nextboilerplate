import { TypographyProps, Typography as MUITypography } from "@mui/material";
import classNames from "classnames";
import React, { ElementType, FC } from "react";
import useTypographyStyle from "./Typography.styles";

type CustomVariant =
  | "h2Bold"
  | "h3Bold"
  | "h4Bold"
  | "h5Bold"
  | "h6Bold"
  | "subtitle1Bold"
  | "subtitle2Bold"
  | "body1Bold"
  | "body2Bold"
  | "captionBold"
  | "buttonBold"
  | "overlineBold"
  | "tiny"

interface ITypography extends Omit<TypographyProps, "variant"> {
  variant: CustomVariant | TypographyProps["variant"];
  component?: ElementType;
}
const Typography: FC<ITypography> = (props) => {
  const classes = useTypographyStyle();
  const isCustom = Object.keys(classes).indexOf(props.variant as string) > -1;
  return (
    <MUITypography
      {...props}
      variant={isCustom ? undefined : (props.variant as any)}
      className={
        isCustom
          ? classNames(props.className, classes[props.variant as CustomVariant])
          : props.className
      }
    >
      {props.children}
    </MUITypography>
  );
};

export default Typography;
