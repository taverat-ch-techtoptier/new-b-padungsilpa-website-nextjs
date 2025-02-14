// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type MenuBurgerSvg2IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function MenuBurgerSvg2Icon(props: MenuBurgerSvg2IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      version={"1.1"}
      x={"0"}
      y={"0"}
      viewBox={"0 0 490.667 490.667"}
      xmlSpace={"preserve"}
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
          "M469.333 224h-448C9.551 224 0 233.551 0 245.333c0 11.782 9.551 21.333 21.333 21.333h448c11.782 0 21.333-9.551 21.333-21.333.001-11.782-9.551-21.333-21.333-21.333zm-448-106.667h448c11.782 0 21.333-9.551 21.333-21.333s-9.551-21.333-21.333-21.333h-448C9.551 74.667 0 84.218 0 96s9.551 21.333 21.333 21.333zm448 256h-448C9.551 373.333 0 382.885 0 394.667S9.551 416 21.333 416h448c11.782 0 21.333-9.551 21.333-21.333.001-11.782-9.551-21.334-21.333-21.334z"
        }
      ></path>
    </svg>
  );
}

export default MenuBurgerSvg2Icon;
/* prettier-ignore-end */
