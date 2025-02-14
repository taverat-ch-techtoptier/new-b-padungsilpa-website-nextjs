// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */

/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */

// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: wauR2tk1hPNKxeSBCX7ndF
// Component: OMiOI2JD1Yvn

import * as React from "react";

import Head from "next/head";
import Link, { LinkProps } from "next/link";
import { useRouter } from "next/router";

import {
  Flex as Flex__,
  MultiChoiceArg,
  PlasmicDataSourceContextProvider as PlasmicDataSourceContextProvider__,
  PlasmicIcon as PlasmicIcon__,
  PlasmicImg as PlasmicImg__,
  PlasmicLink as PlasmicLink__,
  PlasmicPageGuard as PlasmicPageGuard__,
  SingleBooleanChoiceArg,
  SingleChoiceArg,
  Stack as Stack__,
  StrictProps,
  Trans as Trans__,
  classNames,
  createPlasmicElementProxy,
  deriveRenderOpts,
  ensureGlobalVariants,
  generateOnMutateForSpec,
  generateStateOnChangeProp,
  generateStateOnChangePropForCodeComponents,
  generateStateValueProp,
  get as $stateGet,
  hasVariant,
  initializeCodeComponentStates,
  initializePlasmicStates,
  makeFragment,
  omit,
  pick,
  renderPlasmicSlot,
  set as $stateSet,
  useCurrentUser,
  useDollarState,
  usePlasmicTranslator,
  useTrigger,
  wrapWithClassName
} from "@plasmicapp/react-web";
import {
  DataCtxReader as DataCtxReader__,
  useDataEnv,
  useGlobalActions
} from "@plasmicapp/react-web/lib/host";

import "@plasmicapp/react-web/lib/plasmic.css";

import plasmic_antd_5_hostless_css from "../antd_5_hostless/plasmic.module.css"; // plasmic-import: ohDidvG9XsCeFumugENU3J/projectcss
import projectcss from "./plasmic.module.css"; // plasmic-import: wauR2tk1hPNKxeSBCX7ndF/projectcss
import sty from "./PlasmicListingListBox.module.css"; // plasmic-import: OMiOI2JD1Yvn/css

import _14655891761535698998SvgIcon from "./icons/PlasmicIcon___14655891761535698998Svg"; // plasmic-import: YG3YAEM_AYjb/icon

createPlasmicElementProxy;

export type PlasmicListingListBox__VariantMembers = {};
export type PlasmicListingListBox__VariantsArgs = {};
type VariantPropType = keyof PlasmicListingListBox__VariantsArgs;
export const PlasmicListingListBox__VariantProps = new Array<VariantPropType>();

export type PlasmicListingListBox__ArgsType = {
  pic?: React.ReactNode;
  slot?: React.ReactNode;
};
type ArgPropType = keyof PlasmicListingListBox__ArgsType;
export const PlasmicListingListBox__ArgProps = new Array<ArgPropType>(
  "pic",
  "slot"
);

export type PlasmicListingListBox__OverridesType = {
  root?: Flex__<"a"> & Partial<LinkProps>;
};

export interface DefaultListingListBoxProps {
  pic?: React.ReactNode;
  slot?: React.ReactNode;
  className?: string;
}

const $$ = {};

function useNextRouter() {
  try {
    return useRouter();
  } catch {}
  return undefined;
}

function PlasmicListingListBox__RenderFunc(props: {
  variants: PlasmicListingListBox__VariantsArgs;
  args: PlasmicListingListBox__ArgsType;
  overrides: PlasmicListingListBox__OverridesType;
  forNode?: string;
}) {
  const { variants, overrides, forNode } = props;

  const args = React.useMemo(
    () =>
      Object.assign(
        {},
        Object.fromEntries(
          Object.entries(props.args).filter(([_, v]) => v !== undefined)
        )
      ),
    [props.args]
  );

  const $props = {
    ...args,
    ...variants
  };

  const __nextRouter = useNextRouter();
  const $ctx = useDataEnv?.() || {};
  const refsRef = React.useRef({});
  const $refs = refsRef.current;

  return (
    <Stack__
      as={PlasmicLink__}
      data-plasmic-name={"root"}
      data-plasmic-override={overrides.root}
      data-plasmic-root={true}
      data-plasmic-for-node={forNode}
      hasGap={true}
      className={classNames(
        projectcss.all,
        projectcss.a,
        projectcss.root_reset,
        projectcss.plasmic_default_styles,
        projectcss.plasmic_mixins,
        projectcss.plasmic_tokens,
        plasmic_antd_5_hostless_css.plasmic_tokens,
        sty.root
      )}
      component={Link}
      href={`/PERMATANK และถังน้ำมันแบบต่างๆ`}
      platform={"nextjs"}
    >
      <div className={classNames(projectcss.all, sty.freeBox___0HoHe)}>
        {renderPlasmicSlot({
          defaultContents: (
            <PlasmicImg__
              alt={""}
              className={classNames(sty.img__lmLkS)}
              displayHeight={"250px"}
              displayMaxHeight={"none"}
              displayMaxWidth={"100%"}
              displayMinHeight={"0"}
              displayMinWidth={"0"}
              displayWidth={"100%"}
              loading={"lazy"}
              src={{
                src: "/plasmic/psd_j/images/house13533891280Jpg.jpg",
                fullWidth: 1280,
                fullHeight: 853,
                aspectRatio: undefined
              }}
            />
          ),

          value: args.pic
        })}
      </div>
      <Stack__
        as={"div"}
        hasGap={true}
        className={classNames(projectcss.all, sty.freeBox__ogM3I)}
      >
        {renderPlasmicSlot({
          defaultContents: (
            <React.Fragment>
              <div
                className={classNames(
                  projectcss.all,
                  projectcss.__wab_text,
                  sty.text__qFv
                )}
              >
                {"A Grand Modern Home"}
              </div>
              <Stack__
                as={"div"}
                hasGap={true}
                className={classNames(projectcss.all, sty.freeBox___5Xct)}
              >
                <div className={classNames(projectcss.all, sty.freeBox__uUZuc)}>
                  <_14655891761535698998SvgIcon
                    className={classNames(projectcss.all, sty.svg__sUlHt)}
                    role={"img"}
                  />
                </div>
                <Stack__
                  as={"div"}
                  hasGap={true}
                  className={classNames(projectcss.all, sty.freeBox__oc6Vt)}
                >
                  <div
                    className={classNames(
                      projectcss.all,
                      projectcss.__wab_text,
                      sty.text__dJvwd
                    )}
                  >
                    {"Location address  121 sqaure"}
                  </div>
                </Stack__>
              </Stack__>
            </React.Fragment>
          ),
          value: args.slot
        })}
      </Stack__>
    </Stack__>
  ) as React.ReactElement | null;
}

const PlasmicDescendants = {
  root: ["root"]
} as const;
type NodeNameType = keyof typeof PlasmicDescendants;
type DescendantsType<T extends NodeNameType> =
  (typeof PlasmicDescendants)[T][number];
type NodeDefaultElementType = {
  root: "a";
};

type ReservedPropsType = "variants" | "args" | "overrides";
type NodeOverridesType<T extends NodeNameType> = Pick<
  PlasmicListingListBox__OverridesType,
  DescendantsType<T>
>;
type NodeComponentProps<T extends NodeNameType> =
  // Explicitly specify variants, args, and overrides as objects
  {
    variants?: PlasmicListingListBox__VariantsArgs;
    args?: PlasmicListingListBox__ArgsType;
    overrides?: NodeOverridesType<T>;
  } & Omit<PlasmicListingListBox__VariantsArgs, ReservedPropsType> & // Specify variants directly as props
    /* Specify args directly as props*/ Omit<
      PlasmicListingListBox__ArgsType,
      ReservedPropsType
    > &
    /* Specify overrides for each element directly as props*/ Omit<
      NodeOverridesType<T>,
      ReservedPropsType | VariantPropType | ArgPropType
    > &
    /* Specify props for the root element*/ Omit<
      Partial<React.ComponentProps<NodeDefaultElementType[T]>>,
      ReservedPropsType | VariantPropType | ArgPropType | DescendantsType<T>
    >;

function makeNodeComponent<NodeName extends NodeNameType>(nodeName: NodeName) {
  type PropsType = NodeComponentProps<NodeName> & { key?: React.Key };
  const func = function <T extends PropsType>(
    props: T & StrictProps<T, PropsType>
  ) {
    const { variants, args, overrides } = React.useMemo(
      () =>
        deriveRenderOpts(props, {
          name: nodeName,
          descendantNames: PlasmicDescendants[nodeName],
          internalArgPropNames: PlasmicListingListBox__ArgProps,
          internalVariantPropNames: PlasmicListingListBox__VariantProps
        }),
      [props, nodeName]
    );
    return PlasmicListingListBox__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicListingListBox";
  } else {
    func.displayName = `PlasmicListingListBox.${nodeName}`;
  }
  return func;
}

export const PlasmicListingListBox = Object.assign(
  // Top-level PlasmicListingListBox renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements

    // Metadata about props expected for PlasmicListingListBox
    internalVariantProps: PlasmicListingListBox__VariantProps,
    internalArgProps: PlasmicListingListBox__ArgProps
  }
);

export default PlasmicListingListBox;
/* prettier-ignore-end */
