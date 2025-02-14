// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */

/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */

// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: wauR2tk1hPNKxeSBCX7ndF
// Component: y_FDIM6Zq-d5

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

import { useScreenVariants as useScreenVariants_2YPqM3KDWg } from "./PlasmicGlobalVariant__Screen"; // plasmic-import: 2yPqM3-kD-WG/globalVariant

import "@plasmicapp/react-web/lib/plasmic.css";

import plasmic_antd_5_hostless_css from "../antd_5_hostless/plasmic.module.css"; // plasmic-import: ohDidvG9XsCeFumugENU3J/projectcss
import projectcss from "./plasmic.module.css"; // plasmic-import: wauR2tk1hPNKxeSBCX7ndF/projectcss
import sty from "./PlasmicFooter.module.css"; // plasmic-import: y_FDIM6Zq-d5/css

import _14655891761535698998SvgIcon from "./icons/PlasmicIcon___14655891761535698998Svg"; // plasmic-import: YG3YAEM_AYjb/icon
import Icon8Icon from "./icons/PlasmicIcon__Icon8"; // plasmic-import: YDVzHW_YDla2/icon
import _12454851961582823590SvgIcon from "./icons/PlasmicIcon___12454851961582823590Svg"; // plasmic-import: wLv-cuxrHYjG/icon
import _13616027201551939471SvgIcon from "./icons/PlasmicIcon___13616027201551939471Svg"; // plasmic-import: lXJ49SFW0l0e/icon
import Icon3Icon from "./icons/PlasmicIcon__Icon3"; // plasmic-import: 3l5hCinkLRJ5/icon
import Icon2Icon from "./icons/PlasmicIcon__Icon2"; // plasmic-import: QbNOavY00qMy/icon
import Icon28Icon from "./icons/PlasmicIcon__Icon28"; // plasmic-import: 6GSnbq0MM0Zg/icon
import IconIcon from "./icons/PlasmicIcon__Icon"; // plasmic-import: 8DjHUJI81s9x/icon

createPlasmicElementProxy;

export type PlasmicFooter__VariantMembers = {};
export type PlasmicFooter__VariantsArgs = {};
type VariantPropType = keyof PlasmicFooter__VariantsArgs;
export const PlasmicFooter__VariantProps = new Array<VariantPropType>();

export type PlasmicFooter__ArgsType = {};
type ArgPropType = keyof PlasmicFooter__ArgsType;
export const PlasmicFooter__ArgProps = new Array<ArgPropType>();

export type PlasmicFooter__OverridesType = {
  root?: Flex__<"div">;
};

export interface DefaultFooterProps {
  className?: string;
}

const $$ = {};

function useNextRouter() {
  try {
    return useRouter();
  } catch {}
  return undefined;
}

function PlasmicFooter__RenderFunc(props: {
  variants: PlasmicFooter__VariantsArgs;
  args: PlasmicFooter__ArgsType;
  overrides: PlasmicFooter__OverridesType;
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
      <div className={classNames(projectcss.all, sty.freeBox__tIOmw)}>
        <Stack__
          as={"div"}
          hasGap={true}
          className={classNames(projectcss.all, sty.freeBox___6TCx)}
        >
          <Stack__
            as={"div"}
            hasGap={true}
            className={classNames(projectcss.all, sty.freeBox__mxt8Q)}
          >
            <Stack__
              as={"div"}
              hasGap={true}
              className={classNames(projectcss.all, sty.freeBox__f9An)}
            >
              <h4
                className={classNames(
                  projectcss.all,
                  projectcss.h4,
                  projectcss.__wab_text,
                  sty.h4__rDbCc
                )}
              >
                {"Contact us"}
              </h4>
              <Stack__
                as={"div"}
                hasGap={true}
                className={classNames(projectcss.all, sty.freeBox__bewBb)}
              >
                <div className={classNames(projectcss.all, sty.freeBox__xBpCw)}>
                  <_14655891761535698998SvgIcon
                    className={classNames(projectcss.all, sty.svg__efZt4)}
                    role={"img"}
                  />
                </div>
                {false ? (
                  <div
                    className={classNames(projectcss.all, sty.freeBox___7BdbI)}
                  >
                    <Icon8Icon
                      className={classNames(projectcss.all, sty.svg__yWnDq)}
                      role={"img"}
                    />
                  </div>
                ) : null}
                <Stack__
                  as={"div"}
                  hasGap={true}
                  className={classNames(projectcss.all, sty.freeBox__cUitr)}
                >
                  <div
                    className={classNames(
                      projectcss.all,
                      projectcss.__wab_text,
                      sty.text__kcHeM
                    )}
                  >
                    {"Location address  121 "}
                  </div>
                </Stack__>
              </Stack__>
              <Stack__
                as={"div"}
                hasGap={true}
                className={classNames(projectcss.all, sty.freeBox__h3Ss8)}
              >
                <div className={classNames(projectcss.all, sty.freeBox__uReDg)}>
                  <_12454851961582823590SvgIcon
                    className={classNames(projectcss.all, sty.svg___6P2Ve)}
                    role={"img"}
                  />
                </div>
                {false ? (
                  <div
                    className={classNames(projectcss.all, sty.freeBox__l5Nh)}
                  >
                    <Icon8Icon
                      className={classNames(projectcss.all, sty.svg__wpHcN)}
                      role={"img"}
                    />
                  </div>
                ) : null}
                <Stack__
                  as={"div"}
                  hasGap={true}
                  className={classNames(projectcss.all, sty.freeBox__xjfJ)}
                >
                  <div
                    className={classNames(
                      projectcss.all,
                      projectcss.__wab_text,
                      sty.text__y6Nte
                    )}
                  >
                    {"098436454353"}
                  </div>
                </Stack__>
              </Stack__>
              <Stack__
                as={"div"}
                hasGap={true}
                className={classNames(projectcss.all, sty.freeBox__hXlx)}
              >
                <div className={classNames(projectcss.all, sty.freeBox__uuYuF)}>
                  <_13616027201551939471SvgIcon
                    className={classNames(projectcss.all, sty.svg___9CfXn)}
                    role={"img"}
                  />
                </div>
                {false ? (
                  <div
                    className={classNames(projectcss.all, sty.freeBox__hqO36)}
                  >
                    <Icon8Icon
                      className={classNames(projectcss.all, sty.svg__oj8Rq)}
                      role={"img"}
                    />
                  </div>
                ) : null}
                <Stack__
                  as={"div"}
                  hasGap={true}
                  className={classNames(projectcss.all, sty.freeBox__fMww)}
                >
                  <div
                    className={classNames(
                      projectcss.all,
                      projectcss.__wab_text,
                      sty.text___8TMz
                    )}
                  >
                    {"info@gmail.com"}
                  </div>
                </Stack__>
              </Stack__>
              <Stack__
                as={"div"}
                hasGap={true}
                className={classNames(projectcss.all, sty.freeBox__iXcQp)}
              >
                <Icon3Icon
                  className={classNames(projectcss.all, sty.svg__iiIxc)}
                  role={"img"}
                />

                <Icon2Icon
                  className={classNames(projectcss.all, sty.svg__w3M03)}
                  role={"img"}
                />

                <Icon28Icon
                  className={classNames(projectcss.all, sty.svg__cwIkx)}
                  role={"img"}
                />
              </Stack__>
            </Stack__>
          </Stack__>
          <Stack__
            as={"div"}
            hasGap={true}
            className={classNames(projectcss.all, sty.freeBox__cjBnG)}
          >
            <h4
              className={classNames(
                projectcss.all,
                projectcss.h4,
                projectcss.__wab_text,
                sty.h4__llQwK
              )}
            >
              {"Categories"}
            </h4>
            <Stack__
              as={PlasmicLink__}
              hasGap={true}
              className={classNames(
                projectcss.all,
                projectcss.a,
                sty.link___14HU
              )}
              component={Link}
              platform={"nextjs"}
            >
              {false ? (
                <IconIcon
                  className={classNames(projectcss.all, sty.svg__amimO)}
                  role={"img"}
                />
              ) : null}
              <div
                className={classNames(
                  projectcss.all,
                  projectcss.__wab_text,
                  sty.text__l0Kaa
                )}
              >
                {"Apartments(12)"}
              </div>
              {false ? (
                <IconIcon
                  className={classNames(projectcss.all, sty.svg__nDXgY)}
                  role={"img"}
                />
              ) : null}
            </Stack__>
            <Stack__
              as={PlasmicLink__}
              hasGap={true}
              className={classNames(
                projectcss.all,
                projectcss.a,
                sty.link__ydC7
              )}
              component={Link}
              platform={"nextjs"}
            >
              {false ? (
                <IconIcon
                  className={classNames(projectcss.all, sty.svg___4AiVo)}
                  role={"img"}
                />
              ) : null}
              <div
                className={classNames(
                  projectcss.all,
                  projectcss.__wab_text,
                  sty.text___9Vf2B
                )}
              >
                {"Condos(8)"}
              </div>
              {false ? (
                <IconIcon
                  className={classNames(projectcss.all, sty.svg__jtia9)}
                  role={"img"}
                />
              ) : null}
            </Stack__>
            <Stack__
              as={PlasmicLink__}
              hasGap={true}
              className={classNames(
                projectcss.all,
                projectcss.a,
                sty.link__vUvN0
              )}
              component={Link}
              platform={"nextjs"}
            >
              {false ? (
                <IconIcon
                  className={classNames(projectcss.all, sty.svg__cYyd7)}
                  role={"img"}
                />
              ) : null}
              <div
                className={classNames(
                  projectcss.all,
                  projectcss.__wab_text,
                  sty.text__yBwH4
                )}
              >
                {"Industrial(1)"}
              </div>
              {false ? (
                <IconIcon
                  className={classNames(projectcss.all, sty.svg__jFHsa)}
                  role={"img"}
                />
              ) : null}
            </Stack__>
            <Stack__
              as={PlasmicLink__}
              hasGap={true}
              className={classNames(
                projectcss.all,
                projectcss.a,
                sty.link__qsndf
              )}
              component={Link}
              platform={"nextjs"}
            >
              {false ? (
                <IconIcon
                  className={classNames(projectcss.all, sty.svg__lOsH)}
                  role={"img"}
                />
              ) : null}
              <div
                className={classNames(
                  projectcss.all,
                  projectcss.__wab_text,
                  sty.text__hhHjq
                )}
              >
                {"Retail(4)"}
              </div>
              {false ? (
                <IconIcon
                  className={classNames(projectcss.all, sty.svg__xytAw)}
                  role={"img"}
                />
              ) : null}
            </Stack__>
          </Stack__>
          <Stack__
            as={"div"}
            hasGap={true}
            className={classNames(projectcss.all, sty.freeBox__wkd5B)}
          >
            <h4
              className={classNames(
                projectcss.all,
                projectcss.h4,
                projectcss.__wab_text,
                sty.h4__gkOu6
              )}
            >
              {"Company"}
            </h4>
            <Stack__
              as={PlasmicLink__}
              hasGap={true}
              className={classNames(
                projectcss.all,
                projectcss.a,
                sty.link__guKnE
              )}
              component={Link}
              platform={"nextjs"}
            >
              {false ? (
                <IconIcon
                  className={classNames(projectcss.all, sty.svg__ye5Uf)}
                  role={"img"}
                />
              ) : null}
              <div
                className={classNames(
                  projectcss.all,
                  projectcss.__wab_text,
                  sty.text__y5PeX
                )}
              >
                {"About"}
              </div>
              {false ? (
                <IconIcon
                  className={classNames(projectcss.all, sty.svg__s3Pe)}
                  role={"img"}
                />
              ) : null}
            </Stack__>
            <Stack__
              as={PlasmicLink__}
              hasGap={true}
              className={classNames(
                projectcss.all,
                projectcss.a,
                sty.link__rfHp4
              )}
              component={Link}
              platform={"nextjs"}
            >
              {false ? (
                <IconIcon
                  className={classNames(projectcss.all, sty.svg__me9Nu)}
                  role={"img"}
                />
              ) : null}
              <div
                className={classNames(
                  projectcss.all,
                  projectcss.__wab_text,
                  sty.text__l8D1
                )}
              >
                {"Contact us"}
              </div>
              {false ? (
                <IconIcon
                  className={classNames(projectcss.all, sty.svg__efhjo)}
                  role={"img"}
                />
              ) : null}
            </Stack__>
            <Stack__
              as={PlasmicLink__}
              hasGap={true}
              className={classNames(
                projectcss.all,
                projectcss.a,
                sty.link___14HOn
              )}
              component={Link}
              platform={"nextjs"}
            >
              {false ? (
                <IconIcon
                  className={classNames(projectcss.all, sty.svg__wRee9)}
                  role={"img"}
                />
              ) : null}
              <div
                className={classNames(
                  projectcss.all,
                  projectcss.__wab_text,
                  sty.text__wAuJr
                )}
              >
                {"Careers"}
              </div>
              {false ? (
                <IconIcon
                  className={classNames(projectcss.all, sty.svg__tjgQb)}
                  role={"img"}
                />
              ) : null}
            </Stack__>
            <Stack__
              as={PlasmicLink__}
              hasGap={true}
              className={classNames(
                projectcss.all,
                projectcss.a,
                sty.link___2Rfpv
              )}
              component={Link}
              platform={"nextjs"}
            >
              {false ? (
                <IconIcon
                  className={classNames(projectcss.all, sty.svg__hzCfd)}
                  role={"img"}
                />
              ) : null}
              <div
                className={classNames(
                  projectcss.all,
                  projectcss.__wab_text,
                  sty.text__vq21X
                )}
              >
                {"Media"}
              </div>
              {false ? (
                <IconIcon
                  className={classNames(projectcss.all, sty.svg__zsYU)}
                  role={"img"}
                />
              ) : null}
            </Stack__>
          </Stack__>
          <Stack__
            as={"div"}
            hasGap={true}
            className={classNames(projectcss.all, sty.freeBox__eOnmS)}
          >
            <h4
              className={classNames(
                projectcss.all,
                projectcss.h4,
                projectcss.__wab_text,
                sty.h4__zDkMl
              )}
            >
              {"Navigation"}
            </h4>
            <Stack__
              as={PlasmicLink__}
              hasGap={true}
              className={classNames(
                projectcss.all,
                projectcss.a,
                sty.link__p1Ea
              )}
              component={Link}
              platform={"nextjs"}
            >
              {false ? (
                <IconIcon
                  className={classNames(projectcss.all, sty.svg__foZOi)}
                  role={"img"}
                />
              ) : null}
              <div
                className={classNames(
                  projectcss.all,
                  projectcss.__wab_text,
                  sty.text__e6AuG
                )}
              >
                {"Nav link"}
              </div>
              {false ? (
                <IconIcon
                  className={classNames(projectcss.all, sty.svg___5NIe)}
                  role={"img"}
                />
              ) : null}
            </Stack__>
            <Stack__
              as={PlasmicLink__}
              hasGap={true}
              className={classNames(
                projectcss.all,
                projectcss.a,
                sty.link___7L64
              )}
              component={Link}
              platform={"nextjs"}
            >
              {false ? (
                <IconIcon
                  className={classNames(projectcss.all, sty.svg__nXhEh)}
                  role={"img"}
                />
              ) : null}
              <div
                className={classNames(
                  projectcss.all,
                  projectcss.__wab_text,
                  sty.text__mdWZ
                )}
              >
                {"Nav link"}
              </div>
              {false ? (
                <IconIcon
                  className={classNames(projectcss.all, sty.svg__qwArJ)}
                  role={"img"}
                />
              ) : null}
            </Stack__>
            <Stack__
              as={PlasmicLink__}
              hasGap={true}
              className={classNames(
                projectcss.all,
                projectcss.a,
                sty.link__keMv3
              )}
              component={Link}
              platform={"nextjs"}
            >
              {false ? (
                <IconIcon
                  className={classNames(projectcss.all, sty.svg__awYh5)}
                  role={"img"}
                />
              ) : null}
              <div
                className={classNames(
                  projectcss.all,
                  projectcss.__wab_text,
                  sty.text__hDxfj
                )}
              >
                {"Nav link"}
              </div>
              {false ? (
                <IconIcon
                  className={classNames(projectcss.all, sty.svg__itylw)}
                  role={"img"}
                />
              ) : null}
            </Stack__>
            <Stack__
              as={PlasmicLink__}
              hasGap={true}
              className={classNames(
                projectcss.all,
                projectcss.a,
                sty.link__c1IcN
              )}
              component={Link}
              platform={"nextjs"}
            >
              {false ? (
                <IconIcon
                  className={classNames(projectcss.all, sty.svg__uStiW)}
                  role={"img"}
                />
              ) : null}
              <div
                className={classNames(
                  projectcss.all,
                  projectcss.__wab_text,
                  sty.text__xdFd2
                )}
              >
                {"Nav link"}
              </div>
              {false ? (
                <IconIcon
                  className={classNames(projectcss.all, sty.svg__d7LQ)}
                  role={"img"}
                />
              ) : null}
            </Stack__>
          </Stack__>
        </Stack__>
      </div>
      <div className={classNames(projectcss.all, sty.freeBox__hCcNx)}>
        <div
          className={classNames(
            projectcss.all,
            projectcss.__wab_text,
            sty.text__xcUxf
          )}
        >
          <React.Fragment>
            <React.Fragment>
              {
                "\u00a9 Company. All rights reserved. This site proudly built with "
              }
            </React.Fragment>
            {
              <PlasmicLink__
                className={classNames(
                  projectcss.all,
                  projectcss.a,
                  projectcss.__wab_text,
                  projectcss.plasmic_default__inline,
                  sty.link__aJb5
                )}
                component={Link}
                href={"https://www.plasmic.app"}
                platform={"nextjs"}
              >
                {"Plasmic"}
              </PlasmicLink__>
            }
            <React.Fragment>{"."}</React.Fragment>
          </React.Fragment>
        </div>
      </div>
    </div>
  ) as React.ReactElement | null;
}

const PlasmicDescendants = {
  root: ["root"]
} as const;
type NodeNameType = keyof typeof PlasmicDescendants;
type DescendantsType<T extends NodeNameType> =
  (typeof PlasmicDescendants)[T][number];
type NodeDefaultElementType = {
  root: "div";
};

type ReservedPropsType = "variants" | "args" | "overrides";
type NodeOverridesType<T extends NodeNameType> = Pick<
  PlasmicFooter__OverridesType,
  DescendantsType<T>
>;
type NodeComponentProps<T extends NodeNameType> =
  // Explicitly specify variants, args, and overrides as objects
  {
    variants?: PlasmicFooter__VariantsArgs;
    args?: PlasmicFooter__ArgsType;
    overrides?: NodeOverridesType<T>;
  } & Omit<PlasmicFooter__VariantsArgs, ReservedPropsType> & // Specify variants directly as props
    /* Specify args directly as props*/ Omit<
      PlasmicFooter__ArgsType,
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
          internalArgPropNames: PlasmicFooter__ArgProps,
          internalVariantPropNames: PlasmicFooter__VariantProps
        }),
      [props, nodeName]
    );
    return PlasmicFooter__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicFooter";
  } else {
    func.displayName = `PlasmicFooter.${nodeName}`;
  }
  return func;
}

export const PlasmicFooter = Object.assign(
  // Top-level PlasmicFooter renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements

    // Metadata about props expected for PlasmicFooter
    internalVariantProps: PlasmicFooter__VariantProps,
    internalArgProps: PlasmicFooter__ArgProps
  }
);

export default PlasmicFooter;
/* prettier-ignore-end */
