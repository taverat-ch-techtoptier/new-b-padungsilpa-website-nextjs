// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */

/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */

// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: wauR2tk1hPNKxeSBCX7ndF
// Component: y_MaGHU9V_Ue

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
import sty from "./PlasmicNaberhood.module.css"; // plasmic-import: y_MaGHU9V_Ue/css

import _14655891761535698998SvgIcon from "./icons/PlasmicIcon___14655891761535698998Svg"; // plasmic-import: YG3YAEM_AYjb/icon
import Icon8Icon from "./icons/PlasmicIcon__Icon8"; // plasmic-import: YDVzHW_YDla2/icon
import IconIcon from "./icons/PlasmicIcon__Icon"; // plasmic-import: 8DjHUJI81s9x/icon

createPlasmicElementProxy;

export type PlasmicNaberhood__VariantMembers = {};
export type PlasmicNaberhood__VariantsArgs = {};
type VariantPropType = keyof PlasmicNaberhood__VariantsArgs;
export const PlasmicNaberhood__VariantProps = new Array<VariantPropType>();

export type PlasmicNaberhood__ArgsType = {
  children?: React.ReactNode;
  slot?: React.ReactNode;
};
type ArgPropType = keyof PlasmicNaberhood__ArgsType;
export const PlasmicNaberhood__ArgProps = new Array<ArgPropType>(
  "children",
  "slot"
);

export type PlasmicNaberhood__OverridesType = {
  root?: Flex__<"div">;
  freeBox?: Flex__<"div">;
};

export interface DefaultNaberhoodProps {
  children?: React.ReactNode;
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

function PlasmicNaberhood__RenderFunc(props: {
  variants: PlasmicNaberhood__VariantsArgs;
  args: PlasmicNaberhood__ArgsType;
  overrides: PlasmicNaberhood__OverridesType;
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
    <div
      data-plasmic-name={"root"}
      data-plasmic-override={overrides.root}
      data-plasmic-root={true}
      data-plasmic-for-node={forNode}
      className={classNames(
        projectcss.all,
        projectcss.root_reset,
        projectcss.plasmic_default_styles,
        projectcss.plasmic_mixins,
        projectcss.plasmic_tokens,
        plasmic_antd_5_hostless_css.plasmic_tokens,
        sty.root
      )}
    >
      {renderPlasmicSlot({
        defaultContents: (
          <PlasmicImg__
            alt={""}
            className={classNames(sty.img__khLku)}
            displayHeight={"100%"}
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

        value: args.children
      })}
      <Stack__
        as={"div"}
        data-plasmic-name={"freeBox"}
        data-plasmic-override={overrides.freeBox}
        hasGap={true}
        className={classNames(projectcss.all, sty.freeBox)}
      >
        {renderPlasmicSlot({
          defaultContents: (
            <React.Fragment>
              <h4
                className={classNames(
                  projectcss.all,
                  projectcss.h4,
                  projectcss.__wab_text,
                  sty.h4__utyDl
                )}
              >
                {"Location that you are visted"}
              </h4>
              <Stack__
                as={"div"}
                hasGap={true}
                className={classNames(projectcss.all, sty.freeBox__qubXm)}
              >
                <div className={classNames(projectcss.all, sty.freeBox__zqhPo)}>
                  <_14655891761535698998SvgIcon
                    className={classNames(projectcss.all, sty.svg___3IJim)}
                    role={"img"}
                  />
                </div>
                <div className={classNames(projectcss.all, sty.freeBox__wTLj)}>
                  <Icon8Icon
                    className={classNames(projectcss.all, sty.svg___26AMq)}
                    role={"img"}
                  />
                </div>
                <Stack__
                  as={"div"}
                  hasGap={true}
                  className={classNames(projectcss.all, sty.freeBox___0IVc6)}
                >
                  <div
                    className={classNames(
                      projectcss.all,
                      projectcss.__wab_text,
                      sty.text__i4Xuf
                    )}
                  >
                    {"Location address  121 sqaure"}
                  </div>
                </Stack__>
              </Stack__>
              <div className={classNames(projectcss.all, sty.freeBox__hxHf)}>
                <Stack__
                  as={PlasmicLink__}
                  hasGap={true}
                  className={classNames(
                    projectcss.all,
                    projectcss.a,
                    sty.link__fKgjx
                  )}
                  component={Link}
                  platform={"nextjs"}
                >
                  <IconIcon
                    className={classNames(projectcss.all, sty.svg__celiA)}
                    role={"img"}
                  />

                  <div
                    className={classNames(
                      projectcss.all,
                      projectcss.__wab_text,
                      sty.text__mzJov
                    )}
                  >
                    {"Read More"}
                  </div>
                  <IconIcon
                    className={classNames(projectcss.all, sty.svg__qTwhx)}
                    role={"img"}
                  />
                </Stack__>
              </div>
            </React.Fragment>
          ),
          value: args.slot
        })}
      </Stack__>
    </div>
  ) as React.ReactElement | null;
}

const PlasmicDescendants = {
  root: ["root", "freeBox"],
  freeBox: ["freeBox"]
} as const;
type NodeNameType = keyof typeof PlasmicDescendants;
type DescendantsType<T extends NodeNameType> =
  (typeof PlasmicDescendants)[T][number];
type NodeDefaultElementType = {
  root: "div";
  freeBox: "div";
};

type ReservedPropsType = "variants" | "args" | "overrides";
type NodeOverridesType<T extends NodeNameType> = Pick<
  PlasmicNaberhood__OverridesType,
  DescendantsType<T>
>;
type NodeComponentProps<T extends NodeNameType> =
  // Explicitly specify variants, args, and overrides as objects
  {
    variants?: PlasmicNaberhood__VariantsArgs;
    args?: PlasmicNaberhood__ArgsType;
    overrides?: NodeOverridesType<T>;
  } & Omit<PlasmicNaberhood__VariantsArgs, ReservedPropsType> & // Specify variants directly as props
    /* Specify args directly as props*/ Omit<
      PlasmicNaberhood__ArgsType,
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
          internalArgPropNames: PlasmicNaberhood__ArgProps,
          internalVariantPropNames: PlasmicNaberhood__VariantProps
        }),
      [props, nodeName]
    );
    return PlasmicNaberhood__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicNaberhood";
  } else {
    func.displayName = `PlasmicNaberhood.${nodeName}`;
  }
  return func;
}

export const PlasmicNaberhood = Object.assign(
  // Top-level PlasmicNaberhood renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements
    freeBox: makeNodeComponent("freeBox"),

    // Metadata about props expected for PlasmicNaberhood
    internalVariantProps: PlasmicNaberhood__VariantProps,
    internalArgProps: PlasmicNaberhood__ArgProps
  }
);

export default PlasmicNaberhood;
/* prettier-ignore-end */
