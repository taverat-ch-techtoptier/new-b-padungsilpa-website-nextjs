// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */

/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */

// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: wauR2tk1hPNKxeSBCX7ndF
// Component: 7Vap5ZiLJu7a

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

import Header from "../../Header"; // plasmic-import: fMrxAl7coXSG/component
import TeamWraper from "../../TeamWraper"; // plasmic-import: 2WwdCIPes9G8/component
import Footer2 from "../../Footer2"; // plasmic-import: 9pDOvBRTOpt9/component

import { useScreenVariants as useScreenVariants_2YPqM3KDWg } from "./PlasmicGlobalVariant__Screen"; // plasmic-import: 2yPqM3-kD-WG/globalVariant

import "@plasmicapp/react-web/lib/plasmic.css";

import plasmic_antd_5_hostless_css from "../antd_5_hostless/plasmic.module.css"; // plasmic-import: ohDidvG9XsCeFumugENU3J/projectcss
import projectcss from "./plasmic.module.css"; // plasmic-import: wauR2tk1hPNKxeSBCX7ndF/projectcss
import sty from "./PlasmicAgents.module.css"; // plasmic-import: 7Vap5ZiLJu7a/css

import ChevronDownIcon from "./icons/PlasmicIcon__ChevronDown"; // plasmic-import: BJ5XRvZXvxF3/icon

createPlasmicElementProxy;

export type PlasmicAgents__VariantMembers = {};
export type PlasmicAgents__VariantsArgs = {};
type VariantPropType = keyof PlasmicAgents__VariantsArgs;
export const PlasmicAgents__VariantProps = new Array<VariantPropType>();

export type PlasmicAgents__ArgsType = {};
type ArgPropType = keyof PlasmicAgents__ArgsType;
export const PlasmicAgents__ArgProps = new Array<ArgPropType>();

export type PlasmicAgents__OverridesType = {
  root?: Flex__<"div">;
  header?: Flex__<typeof Header>;
  bannerHeader?: Flex__<"div">;
  h1?: Flex__<"h1">;
  svg?: Flex__<"svg">;
  foreground?: Flex__<"div">;
  h2?: Flex__<"h2">;
  columns?: Flex__<"div">;
  h4?: Flex__<"h4">;
  footer2?: Flex__<typeof Footer2>;
};

export interface DefaultAgentsProps {}

const $$ = {};

function useNextRouter() {
  try {
    return useRouter();
  } catch {}
  return undefined;
}

function PlasmicAgents__RenderFunc(props: {
  variants: PlasmicAgents__VariantsArgs;
  args: PlasmicAgents__ArgsType;
  overrides: PlasmicAgents__OverridesType;
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

  const globalVariants = ensureGlobalVariants({
    screen: useScreenVariants_2YPqM3KDWg()
  });

  return (
    <React.Fragment>
      <Head></Head>

      <style>{`
        body {
          margin: 0;
        }
      `}</style>

      <div className={projectcss.plasmic_page_wrapper}>
        <Stack__
          as={"div"}
          data-plasmic-name={"root"}
          data-plasmic-override={overrides.root}
          data-plasmic-root={true}
          data-plasmic-for-node={forNode}
          hasGap={true}
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
          <Header
            data-plasmic-name={"header"}
            data-plasmic-override={overrides.header}
            className={classNames("__wab_instance", sty.header)}
          />

          <div
            data-plasmic-name={"bannerHeader"}
            data-plasmic-override={overrides.bannerHeader}
            className={classNames(projectcss.all, sty.bannerHeader)}
          >
            <div className={classNames(projectcss.all, sty.freeBox__pynTi)}>
              <div className={classNames(projectcss.all, sty.freeBox__goGx)}>
                <Stack__
                  as={"div"}
                  hasGap={true}
                  className={classNames(projectcss.all, sty.freeBox__uBIvN)}
                >
                  <h1
                    data-plasmic-name={"h1"}
                    data-plasmic-override={overrides.h1}
                    className={classNames(
                      projectcss.all,
                      projectcss.h1,
                      projectcss.__wab_text,
                      sty.h1
                    )}
                  >
                    {hasVariant(globalVariants, "screen", "mobileOnly")
                      ? "Agents"
                      : "Agents"}
                  </h1>
                </Stack__>
              </div>
              <div className={classNames(projectcss.all, sty.freeBox___7Qshf)}>
                <div className={classNames(projectcss.all, sty.freeBox__bfxTz)}>
                  <ChevronDownIcon
                    data-plasmic-name={"svg"}
                    data-plasmic-override={overrides.svg}
                    className={classNames(projectcss.all, sty.svg)}
                    role={"img"}
                  />
                </div>
              </div>
            </div>
          </div>
          <Stack__
            as={"div"}
            hasGap={true}
            className={classNames(projectcss.all, sty.freeBox__eynv3)}
          >
            <Stack__
              as={"div"}
              hasGap={true}
              className={classNames(projectcss.all, sty.freeBox__dNe8L)}
            >
              <Stack__
                as={"div"}
                data-plasmic-name={"foreground"}
                data-plasmic-override={overrides.foreground}
                hasGap={true}
                className={classNames(projectcss.all, sty.foreground)}
              >
                <div
                  className={classNames(
                    projectcss.all,
                    projectcss.__wab_text,
                    sty.text__e430J
                  )}
                >
                  {"Directory"}
                </div>
                <h2
                  data-plasmic-name={"h2"}
                  data-plasmic-override={overrides.h2}
                  className={classNames(
                    projectcss.all,
                    projectcss.h2,
                    projectcss.__wab_text,
                    sty.h2
                  )}
                >
                  {hasVariant(globalVariants, "screen", "mobileOnly")
                    ? "Check your listing"
                    : "Meet our agents."}
                </h2>
                <div
                  className={classNames(
                    projectcss.all,
                    projectcss.__wab_text,
                    sty.text__lCiso
                  )}
                >
                  {
                    "A euismod eros a hendrerit tristique suscipit sit aptent dolor adipiscing inceptos cras ullamcorper a vivamus parturient. A euismod eros a hendrerit tristique suscipit."
                  }
                </div>
              </Stack__>
            </Stack__>
          </Stack__>
          <Stack__
            as={"div"}
            hasGap={true}
            className={classNames(projectcss.all, sty.freeBox__atF3W)}
          >
            <Stack__
              as={"div"}
              hasGap={true}
              className={classNames(projectcss.all, sty.freeBox__w1QSz)}
            >
              <Stack__
                as={"div"}
                data-plasmic-name={"columns"}
                data-plasmic-override={overrides.columns}
                hasGap={true}
                className={classNames(projectcss.all, sty.columns)}
              >
                <div className={classNames(projectcss.all, sty.column__qqsHh)}>
                  <TeamWraper
                    className={classNames(
                      "__wab_instance",
                      sty.teamWraper___8S2An
                    )}
                  >
                    <PlasmicImg__
                      alt={""}
                      className={classNames(sty.img__q33Sp)}
                      displayHeight={"auto"}
                      displayMaxHeight={"none"}
                      displayMaxWidth={"none"}
                      displayMinHeight={"0"}
                      displayMinWidth={"0"}
                      displayWidth={"auto"}
                      link={"/Agents-single"}
                      loading={"lazy"}
                      src={{
                        src: "/plasmic/psd_j/images/image5.png",
                        fullWidth: 1287,
                        fullHeight: 1931,
                        aspectRatio: undefined
                      }}
                    />
                  </TeamWraper>
                </div>
                <div className={classNames(projectcss.all, sty.column__w0EEd)}>
                  <TeamWraper
                    className={classNames(
                      "__wab_instance",
                      sty.teamWraper__dfGs8
                    )}
                    slot={
                      <React.Fragment>
                        <h4
                          data-plasmic-name={"h4"}
                          data-plasmic-override={overrides.h4}
                          className={classNames(
                            projectcss.all,
                            projectcss.h4,
                            projectcss.__wab_text,
                            sty.h4
                          )}
                        >
                          {"Lorem Name"}
                        </h4>
                        <div
                          className={classNames(
                            projectcss.all,
                            sty.freeBox__nKhVo
                          )}
                        >
                          <div
                            className={classNames(
                              projectcss.all,
                              projectcss.__wab_text,
                              sty.text__mEwoa
                            )}
                          >
                            {"Company  Name"}
                          </div>
                        </div>
                      </React.Fragment>
                    }
                  >
                    <PlasmicImg__
                      alt={""}
                      className={classNames(sty.img__b2ZWo)}
                      displayHeight={"auto"}
                      displayMaxHeight={"none"}
                      displayMaxWidth={"none"}
                      displayMinHeight={"0"}
                      displayMinWidth={"0"}
                      displayWidth={"auto"}
                      loading={"lazy"}
                      src={{
                        src: "/plasmic/psd_j/images/smile5047506640Jpg.jpg",
                        fullWidth: 640,
                        fullHeight: 427,
                        aspectRatio: undefined
                      }}
                    />
                  </TeamWraper>
                </div>
                <div className={classNames(projectcss.all, sty.column__mWm4R)}>
                  <TeamWraper
                    className={classNames(
                      "__wab_instance",
                      sty.teamWraper__oEXe
                    )}
                  >
                    <PlasmicImg__
                      alt={""}
                      className={classNames(sty.img__dKzbU)}
                      displayHeight={"auto"}
                      displayMaxHeight={"none"}
                      displayMaxWidth={"none"}
                      displayMinHeight={"0"}
                      displayMinWidth={"0"}
                      displayWidth={"auto"}
                      loading={"lazy"}
                      src={{
                        src: "/plasmic/psd_j/images/outdoors3067868640Jpg.jpg",
                        fullWidth: 640,
                        fullHeight: 427,
                        aspectRatio: undefined
                      }}
                    />
                  </TeamWraper>
                </div>
                <div className={classNames(projectcss.all, sty.column__w1Pzf)}>
                  <TeamWraper
                    className={classNames(
                      "__wab_instance",
                      sty.teamWraper__vvH2
                    )}
                  >
                    <PlasmicImg__
                      alt={""}
                      className={classNames(sty.img__cyTmS)}
                      displayHeight={"auto"}
                      displayMaxHeight={"none"}
                      displayMaxWidth={"none"}
                      displayMinHeight={"0"}
                      displayMinWidth={"0"}
                      displayWidth={"auto"}
                      loading={"lazy"}
                      src={{
                        src: "/plasmic/psd_j/images/image2.png",
                        fullWidth: 774,
                        fullHeight: 1161,
                        aspectRatio: undefined
                      }}
                    />
                  </TeamWraper>
                </div>
                <div className={classNames(projectcss.all, sty.column__dHxmN)}>
                  <TeamWraper
                    className={classNames(
                      "__wab_instance",
                      sty.teamWraper__uwGwm
                    )}
                  >
                    <PlasmicImg__
                      alt={""}
                      className={classNames(sty.img__lIRq)}
                      displayHeight={"auto"}
                      displayMaxHeight={"none"}
                      displayMaxWidth={"none"}
                      displayMinHeight={"0"}
                      displayMinWidth={"0"}
                      displayWidth={"auto"}
                      loading={"lazy"}
                      src={{
                        src: "/plasmic/psd_j/images/model3306311640Jpg.jpg",
                        fullWidth: 640,
                        fullHeight: 426,
                        aspectRatio: undefined
                      }}
                    />
                  </TeamWraper>
                </div>
                <div className={classNames(projectcss.all, sty.column__b1EU)}>
                  <TeamWraper
                    className={classNames(
                      "__wab_instance",
                      sty.teamWraper__h4Ion
                    )}
                  >
                    <PlasmicImg__
                      alt={""}
                      className={classNames(sty.img__de79D)}
                      displayHeight={"auto"}
                      displayMaxHeight={"none"}
                      displayMaxWidth={"none"}
                      displayMinHeight={"0"}
                      displayMinWidth={"0"}
                      displayWidth={"auto"}
                      link={"/Agents-single"}
                      loading={"lazy"}
                      src={{
                        src: "/plasmic/psd_j/images/image4.png",
                        fullWidth: 774,
                        fullHeight: 1161,
                        aspectRatio: undefined
                      }}
                    />
                  </TeamWraper>
                </div>
              </Stack__>
            </Stack__>
          </Stack__>
          <Footer2
            data-plasmic-name={"footer2"}
            data-plasmic-override={overrides.footer2}
            className={classNames("__wab_instance", sty.footer2)}
          />
        </Stack__>
      </div>
    </React.Fragment>
  ) as React.ReactElement | null;
}

const PlasmicDescendants = {
  root: [
    "root",
    "header",
    "bannerHeader",
    "h1",
    "svg",
    "foreground",
    "h2",
    "columns",
    "h4",
    "footer2"
  ],
  header: ["header"],
  bannerHeader: ["bannerHeader", "h1", "svg"],
  h1: ["h1"],
  svg: ["svg"],
  foreground: ["foreground", "h2"],
  h2: ["h2"],
  columns: ["columns", "h4"],
  h4: ["h4"],
  footer2: ["footer2"]
} as const;
type NodeNameType = keyof typeof PlasmicDescendants;
type DescendantsType<T extends NodeNameType> =
  (typeof PlasmicDescendants)[T][number];
type NodeDefaultElementType = {
  root: "div";
  header: typeof Header;
  bannerHeader: "div";
  h1: "h1";
  svg: "svg";
  foreground: "div";
  h2: "h2";
  columns: "div";
  h4: "h4";
  footer2: typeof Footer2;
};

type ReservedPropsType = "variants" | "args" | "overrides";
type NodeOverridesType<T extends NodeNameType> = Pick<
  PlasmicAgents__OverridesType,
  DescendantsType<T>
>;
type NodeComponentProps<T extends NodeNameType> =
  // Explicitly specify variants, args, and overrides as objects
  {
    variants?: PlasmicAgents__VariantsArgs;
    args?: PlasmicAgents__ArgsType;
    overrides?: NodeOverridesType<T>;
  } & Omit<PlasmicAgents__VariantsArgs, ReservedPropsType> & // Specify variants directly as props
    /* Specify args directly as props*/ Omit<
      PlasmicAgents__ArgsType,
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
          internalArgPropNames: PlasmicAgents__ArgProps,
          internalVariantPropNames: PlasmicAgents__VariantProps
        }),
      [props, nodeName]
    );
    return PlasmicAgents__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicAgents";
  } else {
    func.displayName = `PlasmicAgents.${nodeName}`;
  }
  return func;
}

export const PlasmicAgents = Object.assign(
  // Top-level PlasmicAgents renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements
    header: makeNodeComponent("header"),
    bannerHeader: makeNodeComponent("bannerHeader"),
    h1: makeNodeComponent("h1"),
    svg: makeNodeComponent("svg"),
    foreground: makeNodeComponent("foreground"),
    h2: makeNodeComponent("h2"),
    columns: makeNodeComponent("columns"),
    h4: makeNodeComponent("h4"),
    footer2: makeNodeComponent("footer2"),

    // Metadata about props expected for PlasmicAgents
    internalVariantProps: PlasmicAgents__VariantProps,
    internalArgProps: PlasmicAgents__ArgProps,

    // Page metadata
    pageMetadata: {
      title: "",
      description: "",
      ogImageSrc: "",
      canonical: ""
    }
  }
);

export default PlasmicAgents;
/* prettier-ignore-end */
