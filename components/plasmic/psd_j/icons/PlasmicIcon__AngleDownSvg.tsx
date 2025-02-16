// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type AngleDownSvgIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function AngleDownSvgIcon(props: AngleDownSvgIconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      viewBox={"0 0 24 24"}
      height={"1em"}
      style={{
        fill: "currentcolor",

        ...(style || {}),
      }}
      className={classNames("plasmic-default__svg", className)}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path
        d={
          "M22.586 5.929l-9.879 9.879a1.021 1.021 0 01-1.414 0L1.42 5.934.006 7.348l9.873 9.874a3.075 3.075 0 004.243 0L24 7.343z"
        }
        data-name={"01 align center"}
      ></path>
    </svg>
  );
}

export default AngleDownSvgIcon;
/* prettier-ignore-end */
