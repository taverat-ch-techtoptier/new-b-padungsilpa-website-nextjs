// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type _12454851961582823590SvgIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function _12454851961582823590SvgIcon(
  props: _12454851961582823590SvgIconProps
) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      data-name={"Layer 1"}
      viewBox={"0 0 128 128"}
      height={"1em"}
      width={"1em"}
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
          "M106.582 18.677A62.188 62.188 0 001.935 60.04a61.707 61.707 0 0016.742 46.543A62.434 62.434 0 0064 126.19a3.336 3.336 0 000-6.672A55.518 55.518 0 0160.452 8.594 55.522 55.522 0 01119.517 64a54.927 54.927 0 01-6.02 25.172 11.993 11.993 0 01-15.775 5.102l-1.769-.838a122.289 122.289 0 002.613-2.7 2.173 2.173 0 00-.31-3.232L81.663 76.848a2.47 2.47 0 00-3.516.6c-1.33 1.965-4.367 6.268-4.367 6.268s-7.104 3.825-19.671-8.742c-.19-.19-.343-.367-.525-.555-.188-.183-.365-.335-.555-.526-12.568-12.567-8.743-19.67-8.743-19.67s4.303-3.037 6.268-4.368a2.47 2.47 0 00.6-3.516L40.498 29.745a2.173 2.173 0 00-3.233-.31c-2.468 2.301-7.561 7.373-8.34 9a17.318 17.318 0 00-.721 12.805 73.992 73.992 0 0017.994 29.21c.23.231.464.432.696.658.225.231.426.465.657.696a73.995 73.995 0 0029.21 17.994 17.319 17.319 0 0012.805-.72 7.31 7.31 0 001.108-.76l4.192 1.985a18.703 18.703 0 0024.576-8.1A61.535 61.535 0 00126.19 64a62.434 62.434 0 00-19.607-45.323z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default _12454851961582823590SvgIcon;
/* prettier-ignore-end */
