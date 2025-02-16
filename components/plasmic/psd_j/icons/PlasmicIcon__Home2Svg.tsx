// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Home2SvgIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Home2SvgIcon(props: Home2SvgIconProps) {
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
          "M13.338.833a2 2 0 00-2.676 0L0 10.429v10.4a3.2 3.2 0 003.2 3.2h17.6a3.2 3.2 0 003.2-3.2v-10.4zM15 22.026H9V17a3 3 0 016 0zm7-1.2a1.2 1.2 0 01-1.2 1.2H17V17a5 5 0 00-10 0v5.026H3.2a1.2 1.2 0 01-1.2-1.2v-9.507l10-9 10 9z"
        }
        data-name={"01 align center"}
      ></path>
    </svg>
  );
}

export default Home2SvgIcon;
/* prettier-ignore-end */
