// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */

/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */

// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: wauR2tk1hPNKxeSBCX7ndF
// Component: 9pDOvBRTOpt9

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
import sty from "./PlasmicFooter2.module.css"; // plasmic-import: 9pDOvBRTOpt9/css

import Group2Icon from "./icons/PlasmicIcon__Group2"; // plasmic-import: _H0IQrBu9ajq/icon
import Group3Icon from "./icons/PlasmicIcon__Group3"; // plasmic-import: nqlvjsI0YM8G/icon
import Group4Icon from "./icons/PlasmicIcon__Group4"; // plasmic-import: 6ST9P-ZIKTDi/icon
import Group5Icon from "./icons/PlasmicIcon__Group5"; // plasmic-import: oWSWF85Rn-6P/icon
import Group6Icon from "./icons/PlasmicIcon__Group6"; // plasmic-import: X2UEXtAP0Vzx/icon

createPlasmicElementProxy;

export type PlasmicFooter2__VariantMembers = {};
export type PlasmicFooter2__VariantsArgs = {};
type VariantPropType = keyof PlasmicFooter2__VariantsArgs;
export const PlasmicFooter2__VariantProps = new Array<VariantPropType>();

export type PlasmicFooter2__ArgsType = {};
type ArgPropType = keyof PlasmicFooter2__ArgsType;
export const PlasmicFooter2__ArgProps = new Array<ArgPropType>();

export type PlasmicFooter2__OverridesType = {
  footer1?: Flex__<"div">;
  topSection?: Flex__<"div">;
  logoSocialMedia?: Flex__<"div">;
  logo?: Flex__<"div">;
  img?: Flex__<typeof PlasmicImg__>;
  socialMedia5?: Flex__<"div">;
  icon20?: Flex__<"div">;
  remixIconsFillLogosFacebookCircleFill5?: Flex__<"div">;
  icon21?: Flex__<"div">;
  remixIconsFillLogosInstagramFill5?: Flex__<"div">;
  icon22?: Flex__<"div">;
  remixIconsFillLogosYoutubeFill5?: Flex__<"div">;
  frame13?: Flex__<"div">;
  frame11?: Flex__<"div">;
  httpsMapsAppGooGlCiZucfaa67Tu2EZ382?: Flex__<"a"> & Partial<LinkProps>;
  info20?: Flex__<"div">;
  info23?: Flex__<"div">;
  frame12?: Flex__<"div">;
  httpsMapsAppGooGlWKcpHAhDyKbXd4Pj82?: Flex__<"a"> & Partial<LinkProps>;
  info22?: Flex__<"div">;
  freeBox?: Flex__<"div">;
  info24?: Flex__<"div">;
  info25?: Flex__<"div">;
  socialMedia4?: Flex__<"div">;
  icon17?: Flex__<"div">;
  remixIconsFillLogosFacebookCircleFill4?: Flex__<"div">;
  icon18?: Flex__<"div">;
  remixIconsFillLogosInstagramFill4?: Flex__<"div">;
  icon19?: Flex__<"div">;
  remixIconsFillLogosYoutubeFill4?: Flex__<"div">;
  socialMedia3?: Flex__<"div">;
  icon14?: Flex__<"div">;
  remixIconsFillLogosFacebookCircleFill3?: Flex__<"div">;
  icon15?: Flex__<"div">;
  remixIconsFillLogosInstagramFill3?: Flex__<"div">;
  icon16?: Flex__<"div">;
  remixIconsFillLogosYoutubeFill3?: Flex__<"div">;
  bottomSection?: Flex__<"div">;
  copyright?: Flex__<"div">;
  language?: Flex__<"div">;
  remixIconsLineBusinessGlobalLine?: Flex__<"div">;
  text?: Flex__<"div">;
  remixIconsFillSystemArrowDownSFill?: Flex__<"div">;
};

export interface DefaultFooter2Props {
  className?: string;
}

const $$ = {};

function useNextRouter() {
  try {
    return useRouter();
  } catch {}
  return undefined;
}

function PlasmicFooter2__RenderFunc(props: {
  variants: PlasmicFooter2__VariantsArgs;
  args: PlasmicFooter2__ArgsType;
  overrides: PlasmicFooter2__OverridesType;
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
      data-plasmic-name={"footer1"}
      data-plasmic-override={overrides.footer1}
      data-plasmic-root={true}
      data-plasmic-for-node={forNode}
      className={classNames(
        projectcss.all,
        projectcss.root_reset,
        projectcss.plasmic_default_styles,
        projectcss.plasmic_mixins,
        projectcss.plasmic_tokens,
        plasmic_antd_5_hostless_css.plasmic_tokens,
        sty.footer1
      )}
    >
      <Stack__
        as={"div"}
        data-plasmic-name={"topSection"}
        data-plasmic-override={overrides.topSection}
        hasGap={true}
        className={classNames(projectcss.all, sty.topSection)}
      >
        <Stack__
          as={"div"}
          data-plasmic-name={"logoSocialMedia"}
          data-plasmic-override={overrides.logoSocialMedia}
          hasGap={true}
          className={classNames(projectcss.all, sty.logoSocialMedia)}
        >
          <div
            data-plasmic-name={"logo"}
            data-plasmic-override={overrides.logo}
            className={classNames(projectcss.all, sty.logo)}
          >
            <PlasmicImg__
              data-plasmic-name={"img"}
              data-plasmic-override={overrides.img}
              alt={""}
              className={classNames(sty.img)}
              displayHeight={"auto"}
              displayMaxHeight={"none"}
              displayMaxWidth={"100%"}
              displayMinHeight={"0"}
              displayMinWidth={"0"}
              displayWidth={"236px"}
              loading={"lazy"}
              src={{
                src: "/plasmic/psd_j/images/logoSvg.svg",
                fullWidth: 196,
                fullHeight: 48,
                aspectRatio: 4.083333
              }}
            />
          </div>
          <Stack__
            as={"div"}
            data-plasmic-name={"socialMedia5"}
            data-plasmic-override={overrides.socialMedia5}
            hasGap={true}
            className={classNames(projectcss.all, sty.socialMedia5)}
          >
            <Stack__
              as={"div"}
              data-plasmic-name={"icon20"}
              data-plasmic-override={overrides.icon20}
              hasGap={true}
              className={classNames(projectcss.all, sty.icon20)}
            >
              <div
                data-plasmic-name={"remixIconsFillLogosFacebookCircleFill5"}
                data-plasmic-override={
                  overrides.remixIconsFillLogosFacebookCircleFill5
                }
                className={classNames(
                  projectcss.all,
                  sty.remixIconsFillLogosFacebookCircleFill5
                )}
              >
                <Group2Icon
                  className={classNames(projectcss.all, sty.svg___5SeoL)}
                  role={"img"}
                />
              </div>
            </Stack__>
            <Stack__
              as={"div"}
              data-plasmic-name={"icon21"}
              data-plasmic-override={overrides.icon21}
              hasGap={true}
              className={classNames(projectcss.all, sty.icon21)}
            >
              <div
                data-plasmic-name={"remixIconsFillLogosInstagramFill5"}
                data-plasmic-override={
                  overrides.remixIconsFillLogosInstagramFill5
                }
                className={classNames(
                  projectcss.all,
                  sty.remixIconsFillLogosInstagramFill5
                )}
              >
                <Group3Icon
                  className={classNames(projectcss.all, sty.svg__oHewP)}
                  role={"img"}
                />
              </div>
            </Stack__>
            <Stack__
              as={"div"}
              data-plasmic-name={"icon22"}
              data-plasmic-override={overrides.icon22}
              hasGap={true}
              className={classNames(projectcss.all, sty.icon22)}
            >
              <div
                data-plasmic-name={"remixIconsFillLogosYoutubeFill5"}
                data-plasmic-override={
                  overrides.remixIconsFillLogosYoutubeFill5
                }
                className={classNames(
                  projectcss.all,
                  sty.remixIconsFillLogosYoutubeFill5
                )}
              >
                <Group4Icon
                  className={classNames(projectcss.all, sty.svg__tauAp)}
                  role={"img"}
                />
              </div>
            </Stack__>
          </Stack__>
        </Stack__>
        <Stack__
          as={"div"}
          data-plasmic-name={"frame13"}
          data-plasmic-override={overrides.frame13}
          hasGap={true}
          className={classNames(projectcss.all, sty.frame13)}
        >
          <Stack__
            as={"div"}
            data-plasmic-name={"frame11"}
            data-plasmic-override={overrides.frame11}
            hasGap={true}
            className={classNames(projectcss.all, sty.frame11)}
          >
            <PlasmicLink__
              data-plasmic-name={"httpsMapsAppGooGlCiZucfaa67Tu2EZ382"}
              data-plasmic-override={
                overrides.httpsMapsAppGooGlCiZucfaa67Tu2EZ382
              }
              className={classNames(
                projectcss.all,
                projectcss.a,
                projectcss.__wab_text,
                sty.httpsMapsAppGooGlCiZucfaa67Tu2Ez382
              )}
              component={Link}
              href={"https://maps.app.goo.gl/CiZucfaa67TU2eZ38 2\n"}
              platform={"nextjs"}
              target={"_blank"}
            >
              {
                "\u0e1a\u0e23\u0e34\u0e29\u0e31\u0e17 \u0e1c\u0e14\u0e38\u0e07\u0e28\u0e34\u0e25\u0e1b\u0e4c\u0e42\u0e22\u0e18\u0e32\u0e01\u0e32\u0e23 \u0e08\u0e33\u0e01\u0e31\u0e14 (\u0e2a\u0e33\u0e19\u0e31\u0e01\u0e07\u0e32\u0e19\u0e43\u0e2b\u0e0d\u0e48)"
              }
            </PlasmicLink__>
            <div
              data-plasmic-name={"info20"}
              data-plasmic-override={overrides.info20}
              className={classNames(
                projectcss.all,
                projectcss.__wab_text,
                sty.info20
              )}
            >
              {
                "16/77 \u0e0b\u0e2d\u0e22\u0e41\u0e08\u0e49\u0e07\u0e27\u0e31\u0e12\u0e19\u0e30 14 \u0e16\u0e19\u0e19\u0e41\u0e08\u0e49\u0e07\u0e27\u0e31\u0e12\u0e19\u0e30 \u0e40\u0e02\u0e15\u0e2b\u0e25\u0e31\u0e01\u0e2a\u0e35\u0e48 \u0e01\u0e23\u0e38\u0e07\u0e40\u0e17\u0e1e\u0e2f 10210"
              }
            </div>
            <div
              data-plasmic-name={"info23"}
              data-plasmic-override={overrides.info23}
              className={classNames(
                projectcss.all,
                projectcss.__wab_text,
                sty.info23
              )}
            >
              {hasVariant(globalVariants, "screen", "mobileOnly")
                ? "(662) 573-3533\r, (662)573-7726"
                : "(662) 573-3533\r\n(662)573-7726"}
            </div>
          </Stack__>
          <Stack__
            as={"div"}
            data-plasmic-name={"frame12"}
            data-plasmic-override={overrides.frame12}
            hasGap={true}
            className={classNames(projectcss.all, sty.frame12)}
          >
            <PlasmicLink__
              data-plasmic-name={"httpsMapsAppGooGlWKcpHAhDyKbXd4Pj82"}
              data-plasmic-override={
                overrides.httpsMapsAppGooGlWKcpHAhDyKbXd4Pj82
              }
              className={classNames(
                projectcss.all,
                projectcss.a,
                projectcss.__wab_text,
                sty.httpsMapsAppGooGlWKcpHAhDyKbXd4Pj82
              )}
              component={Link}
              href={"https://maps.app.goo.gl/wKcpHAhDyKbXd4PJ8 2"}
              platform={"nextjs"}
              target={"_blank"}
            >
              {
                "\u0e1a\u0e23\u0e34\u0e29\u0e31\u0e17 \u0e1c\u0e14\u0e38\u0e07\u0e28\u0e34\u0e25\u0e1b\u0e4c\u0e27\u0e34\u0e28\u0e27\u0e01\u0e32\u0e23 \u0e08\u0e33\u0e01\u0e31\u0e14 (\u0e42\u0e23\u0e07\u0e07\u0e32\u0e19)"
              }
            </PlasmicLink__>
            <div
              data-plasmic-name={"info22"}
              data-plasmic-override={overrides.info22}
              className={classNames(
                projectcss.all,
                projectcss.__wab_text,
                sty.info22
              )}
            >
              {
                "100/7 \u0e2b\u0e21\u0e39\u0e48 1 \u0e16\u0e19\u0e19\u0e1b\u0e17\u0e38\u0e21\u0e18\u0e32\u0e19\u0e35 -\u0e2a\u0e32\u0e21\u0e42\u0e04\u0e01 \u0e2d.\u0e2a\u0e32\u0e21\u0e42\u0e04\u0e01 \u0e08.\u0e1b\u0e17\u0e38\u0e21\u0e18\u0e32\u0e19\u0e35 12160"
              }
            </div>
            <Stack__
              as={"div"}
              data-plasmic-name={"freeBox"}
              data-plasmic-override={overrides.freeBox}
              hasGap={true}
              className={classNames(projectcss.all, sty.freeBox)}
            >
              <div
                data-plasmic-name={"info24"}
                data-plasmic-override={overrides.info24}
                className={classNames(
                  projectcss.all,
                  projectcss.__wab_text,
                  sty.info24
                )}
              >
                {hasVariant(globalVariants, "screen", "mobileOnly")
                  ? "(662) 593-1109\r, (662) 593-1110, (662) 977-2777, \n(662) 593-1109\r, (662) 593-1110, (662) 977-2777"
                  : "(662) 593-1109\r\n(662) 593-1110\n(662) 977-2777"}
              </div>
              <div
                data-plasmic-name={"info25"}
                data-plasmic-override={overrides.info25}
                className={classNames(
                  projectcss.all,
                  projectcss.__wab_text,
                  sty.info25
                )}
              >
                {hasVariant(globalVariants, "screen", "mobileOnly")
                  ? "(662) 593-1109\r, (662) 593-1110, (662) 977-2777"
                  : "(662) 977-2778\n(662) 977-2779\n(662) 573-1112"}
              </div>
            </Stack__>
          </Stack__>
          {(
            hasVariant(globalVariants, "screen", "mobileOnly") ? true : false
          ) ? (
            <Stack__
              as={"div"}
              data-plasmic-name={"socialMedia4"}
              data-plasmic-override={overrides.socialMedia4}
              hasGap={true}
              className={classNames(projectcss.all, sty.socialMedia4)}
            >
              <Stack__
                as={"div"}
                data-plasmic-name={"icon17"}
                data-plasmic-override={overrides.icon17}
                hasGap={true}
                className={classNames(projectcss.all, sty.icon17)}
              >
                <div
                  data-plasmic-name={"remixIconsFillLogosFacebookCircleFill4"}
                  data-plasmic-override={
                    overrides.remixIconsFillLogosFacebookCircleFill4
                  }
                  className={classNames(
                    projectcss.all,
                    sty.remixIconsFillLogosFacebookCircleFill4
                  )}
                >
                  <Group2Icon
                    className={classNames(projectcss.all, sty.svg__bmjwz)}
                    role={"img"}
                  />
                </div>
              </Stack__>
              <Stack__
                as={"div"}
                data-plasmic-name={"icon18"}
                data-plasmic-override={overrides.icon18}
                hasGap={true}
                className={classNames(projectcss.all, sty.icon18)}
              >
                <div
                  data-plasmic-name={"remixIconsFillLogosInstagramFill4"}
                  data-plasmic-override={
                    overrides.remixIconsFillLogosInstagramFill4
                  }
                  className={classNames(
                    projectcss.all,
                    sty.remixIconsFillLogosInstagramFill4
                  )}
                >
                  <Group3Icon
                    className={classNames(projectcss.all, sty.svg__xakM3)}
                    role={"img"}
                  />
                </div>
              </Stack__>
              <Stack__
                as={"div"}
                data-plasmic-name={"icon19"}
                data-plasmic-override={overrides.icon19}
                hasGap={true}
                className={classNames(projectcss.all, sty.icon19)}
              >
                <div
                  data-plasmic-name={"remixIconsFillLogosYoutubeFill4"}
                  data-plasmic-override={
                    overrides.remixIconsFillLogosYoutubeFill4
                  }
                  className={classNames(
                    projectcss.all,
                    sty.remixIconsFillLogosYoutubeFill4
                  )}
                >
                  <Group4Icon
                    className={classNames(projectcss.all, sty.svg__hdFBe)}
                    role={"img"}
                  />
                </div>
              </Stack__>
            </Stack__>
          ) : null}
        </Stack__>
        {(hasVariant(globalVariants, "screen", "mobileOnly") ? true : false) ? (
          <Stack__
            as={"div"}
            data-plasmic-name={"socialMedia3"}
            data-plasmic-override={overrides.socialMedia3}
            hasGap={true}
            className={classNames(projectcss.all, sty.socialMedia3)}
          >
            <Stack__
              as={"div"}
              data-plasmic-name={"icon14"}
              data-plasmic-override={overrides.icon14}
              hasGap={true}
              className={classNames(projectcss.all, sty.icon14)}
            >
              <div
                data-plasmic-name={"remixIconsFillLogosFacebookCircleFill3"}
                data-plasmic-override={
                  overrides.remixIconsFillLogosFacebookCircleFill3
                }
                className={classNames(
                  projectcss.all,
                  sty.remixIconsFillLogosFacebookCircleFill3
                )}
              >
                <Group2Icon
                  className={classNames(projectcss.all, sty.svg__zfDcp)}
                  role={"img"}
                />
              </div>
            </Stack__>
            <Stack__
              as={"div"}
              data-plasmic-name={"icon15"}
              data-plasmic-override={overrides.icon15}
              hasGap={true}
              className={classNames(projectcss.all, sty.icon15)}
            >
              <div
                data-plasmic-name={"remixIconsFillLogosInstagramFill3"}
                data-plasmic-override={
                  overrides.remixIconsFillLogosInstagramFill3
                }
                className={classNames(
                  projectcss.all,
                  sty.remixIconsFillLogosInstagramFill3
                )}
              >
                <Group3Icon
                  className={classNames(projectcss.all, sty.svg__nwgNk)}
                  role={"img"}
                />
              </div>
            </Stack__>
            <Stack__
              as={"div"}
              data-plasmic-name={"icon16"}
              data-plasmic-override={overrides.icon16}
              hasGap={true}
              className={classNames(projectcss.all, sty.icon16)}
            >
              <div
                data-plasmic-name={"remixIconsFillLogosYoutubeFill3"}
                data-plasmic-override={
                  overrides.remixIconsFillLogosYoutubeFill3
                }
                className={classNames(
                  projectcss.all,
                  sty.remixIconsFillLogosYoutubeFill3
                )}
              >
                <Group4Icon
                  className={classNames(projectcss.all, sty.svg___5PHn3)}
                  role={"img"}
                />
              </div>
            </Stack__>
          </Stack__>
        ) : null}
      </Stack__>
      <Stack__
        as={"div"}
        data-plasmic-name={"bottomSection"}
        data-plasmic-override={overrides.bottomSection}
        hasGap={true}
        className={classNames(projectcss.all, sty.bottomSection)}
      >
        <div
          data-plasmic-name={"copyright"}
          data-plasmic-override={overrides.copyright}
          className={classNames(
            projectcss.all,
            projectcss.__wab_text,
            sty.copyright
          )}
        >
          {"Copyright \u00a9 2024 PADUNGSILPA GROUP. All Rights Reserved."}
        </div>
        <Stack__
          as={"div"}
          data-plasmic-name={"language"}
          data-plasmic-override={overrides.language}
          hasGap={true}
          className={classNames(projectcss.all, sty.language)}
        >
          <div
            data-plasmic-name={"remixIconsLineBusinessGlobalLine"}
            data-plasmic-override={overrides.remixIconsLineBusinessGlobalLine}
            className={classNames(
              projectcss.all,
              sty.remixIconsLineBusinessGlobalLine
            )}
          >
            <Group5Icon
              className={classNames(projectcss.all, sty.svg__scEn)}
              role={"img"}
            />
          </div>
          <div
            data-plasmic-name={"text"}
            data-plasmic-override={overrides.text}
            className={classNames(
              projectcss.all,
              projectcss.__wab_text,
              sty.text
            )}
          >
            {hasVariant(globalVariants, "screen", "mobileOnly")
              ? "\u0e20\u0e32\u0e29\u0e32\u0e44\u0e17\u0e22"
              : "\u0e20\u0e32\u0e29\u0e32\u0e44\u0e17\u0e22"}
          </div>
          <div
            data-plasmic-name={"remixIconsFillSystemArrowDownSFill"}
            data-plasmic-override={overrides.remixIconsFillSystemArrowDownSFill}
            className={classNames(
              projectcss.all,
              sty.remixIconsFillSystemArrowDownSFill
            )}
          >
            <Group6Icon
              className={classNames(projectcss.all, sty.svg__i1FXs)}
              role={"img"}
            />
          </div>
        </Stack__>
      </Stack__>
    </div>
  ) as React.ReactElement | null;
}

const PlasmicDescendants = {
  footer1: [
    "footer1",
    "topSection",
    "logoSocialMedia",
    "logo",
    "img",
    "socialMedia5",
    "icon20",
    "remixIconsFillLogosFacebookCircleFill5",
    "icon21",
    "remixIconsFillLogosInstagramFill5",
    "icon22",
    "remixIconsFillLogosYoutubeFill5",
    "frame13",
    "frame11",
    "httpsMapsAppGooGlCiZucfaa67Tu2EZ382",
    "info20",
    "info23",
    "frame12",
    "httpsMapsAppGooGlWKcpHAhDyKbXd4Pj82",
    "info22",
    "freeBox",
    "info24",
    "info25",
    "socialMedia4",
    "icon17",
    "remixIconsFillLogosFacebookCircleFill4",
    "icon18",
    "remixIconsFillLogosInstagramFill4",
    "icon19",
    "remixIconsFillLogosYoutubeFill4",
    "socialMedia3",
    "icon14",
    "remixIconsFillLogosFacebookCircleFill3",
    "icon15",
    "remixIconsFillLogosInstagramFill3",
    "icon16",
    "remixIconsFillLogosYoutubeFill3",
    "bottomSection",
    "copyright",
    "language",
    "remixIconsLineBusinessGlobalLine",
    "text",
    "remixIconsFillSystemArrowDownSFill"
  ],
  topSection: [
    "topSection",
    "logoSocialMedia",
    "logo",
    "img",
    "socialMedia5",
    "icon20",
    "remixIconsFillLogosFacebookCircleFill5",
    "icon21",
    "remixIconsFillLogosInstagramFill5",
    "icon22",
    "remixIconsFillLogosYoutubeFill5",
    "frame13",
    "frame11",
    "httpsMapsAppGooGlCiZucfaa67Tu2EZ382",
    "info20",
    "info23",
    "frame12",
    "httpsMapsAppGooGlWKcpHAhDyKbXd4Pj82",
    "info22",
    "freeBox",
    "info24",
    "info25",
    "socialMedia4",
    "icon17",
    "remixIconsFillLogosFacebookCircleFill4",
    "icon18",
    "remixIconsFillLogosInstagramFill4",
    "icon19",
    "remixIconsFillLogosYoutubeFill4",
    "socialMedia3",
    "icon14",
    "remixIconsFillLogosFacebookCircleFill3",
    "icon15",
    "remixIconsFillLogosInstagramFill3",
    "icon16",
    "remixIconsFillLogosYoutubeFill3"
  ],
  logoSocialMedia: [
    "logoSocialMedia",
    "logo",
    "img",
    "socialMedia5",
    "icon20",
    "remixIconsFillLogosFacebookCircleFill5",
    "icon21",
    "remixIconsFillLogosInstagramFill5",
    "icon22",
    "remixIconsFillLogosYoutubeFill5"
  ],
  logo: ["logo", "img"],
  img: ["img"],
  socialMedia5: [
    "socialMedia5",
    "icon20",
    "remixIconsFillLogosFacebookCircleFill5",
    "icon21",
    "remixIconsFillLogosInstagramFill5",
    "icon22",
    "remixIconsFillLogosYoutubeFill5"
  ],
  icon20: ["icon20", "remixIconsFillLogosFacebookCircleFill5"],
  remixIconsFillLogosFacebookCircleFill5: [
    "remixIconsFillLogosFacebookCircleFill5"
  ],
  icon21: ["icon21", "remixIconsFillLogosInstagramFill5"],
  remixIconsFillLogosInstagramFill5: ["remixIconsFillLogosInstagramFill5"],
  icon22: ["icon22", "remixIconsFillLogosYoutubeFill5"],
  remixIconsFillLogosYoutubeFill5: ["remixIconsFillLogosYoutubeFill5"],
  frame13: [
    "frame13",
    "frame11",
    "httpsMapsAppGooGlCiZucfaa67Tu2EZ382",
    "info20",
    "info23",
    "frame12",
    "httpsMapsAppGooGlWKcpHAhDyKbXd4Pj82",
    "info22",
    "freeBox",
    "info24",
    "info25",
    "socialMedia4",
    "icon17",
    "remixIconsFillLogosFacebookCircleFill4",
    "icon18",
    "remixIconsFillLogosInstagramFill4",
    "icon19",
    "remixIconsFillLogosYoutubeFill4"
  ],
  frame11: [
    "frame11",
    "httpsMapsAppGooGlCiZucfaa67Tu2EZ382",
    "info20",
    "info23"
  ],
  httpsMapsAppGooGlCiZucfaa67Tu2EZ382: ["httpsMapsAppGooGlCiZucfaa67Tu2EZ382"],
  info20: ["info20"],
  info23: ["info23"],
  frame12: [
    "frame12",
    "httpsMapsAppGooGlWKcpHAhDyKbXd4Pj82",
    "info22",
    "freeBox",
    "info24",
    "info25"
  ],
  httpsMapsAppGooGlWKcpHAhDyKbXd4Pj82: ["httpsMapsAppGooGlWKcpHAhDyKbXd4Pj82"],
  info22: ["info22"],
  freeBox: ["freeBox", "info24", "info25"],
  info24: ["info24"],
  info25: ["info25"],
  socialMedia4: [
    "socialMedia4",
    "icon17",
    "remixIconsFillLogosFacebookCircleFill4",
    "icon18",
    "remixIconsFillLogosInstagramFill4",
    "icon19",
    "remixIconsFillLogosYoutubeFill4"
  ],
  icon17: ["icon17", "remixIconsFillLogosFacebookCircleFill4"],
  remixIconsFillLogosFacebookCircleFill4: [
    "remixIconsFillLogosFacebookCircleFill4"
  ],
  icon18: ["icon18", "remixIconsFillLogosInstagramFill4"],
  remixIconsFillLogosInstagramFill4: ["remixIconsFillLogosInstagramFill4"],
  icon19: ["icon19", "remixIconsFillLogosYoutubeFill4"],
  remixIconsFillLogosYoutubeFill4: ["remixIconsFillLogosYoutubeFill4"],
  socialMedia3: [
    "socialMedia3",
    "icon14",
    "remixIconsFillLogosFacebookCircleFill3",
    "icon15",
    "remixIconsFillLogosInstagramFill3",
    "icon16",
    "remixIconsFillLogosYoutubeFill3"
  ],
  icon14: ["icon14", "remixIconsFillLogosFacebookCircleFill3"],
  remixIconsFillLogosFacebookCircleFill3: [
    "remixIconsFillLogosFacebookCircleFill3"
  ],
  icon15: ["icon15", "remixIconsFillLogosInstagramFill3"],
  remixIconsFillLogosInstagramFill3: ["remixIconsFillLogosInstagramFill3"],
  icon16: ["icon16", "remixIconsFillLogosYoutubeFill3"],
  remixIconsFillLogosYoutubeFill3: ["remixIconsFillLogosYoutubeFill3"],
  bottomSection: [
    "bottomSection",
    "copyright",
    "language",
    "remixIconsLineBusinessGlobalLine",
    "text",
    "remixIconsFillSystemArrowDownSFill"
  ],
  copyright: ["copyright"],
  language: [
    "language",
    "remixIconsLineBusinessGlobalLine",
    "text",
    "remixIconsFillSystemArrowDownSFill"
  ],
  remixIconsLineBusinessGlobalLine: ["remixIconsLineBusinessGlobalLine"],
  text: ["text"],
  remixIconsFillSystemArrowDownSFill: ["remixIconsFillSystemArrowDownSFill"]
} as const;
type NodeNameType = keyof typeof PlasmicDescendants;
type DescendantsType<T extends NodeNameType> =
  (typeof PlasmicDescendants)[T][number];
type NodeDefaultElementType = {
  footer1: "div";
  topSection: "div";
  logoSocialMedia: "div";
  logo: "div";
  img: typeof PlasmicImg__;
  socialMedia5: "div";
  icon20: "div";
  remixIconsFillLogosFacebookCircleFill5: "div";
  icon21: "div";
  remixIconsFillLogosInstagramFill5: "div";
  icon22: "div";
  remixIconsFillLogosYoutubeFill5: "div";
  frame13: "div";
  frame11: "div";
  httpsMapsAppGooGlCiZucfaa67Tu2EZ382: "a";
  info20: "div";
  info23: "div";
  frame12: "div";
  httpsMapsAppGooGlWKcpHAhDyKbXd4Pj82: "a";
  info22: "div";
  freeBox: "div";
  info24: "div";
  info25: "div";
  socialMedia4: "div";
  icon17: "div";
  remixIconsFillLogosFacebookCircleFill4: "div";
  icon18: "div";
  remixIconsFillLogosInstagramFill4: "div";
  icon19: "div";
  remixIconsFillLogosYoutubeFill4: "div";
  socialMedia3: "div";
  icon14: "div";
  remixIconsFillLogosFacebookCircleFill3: "div";
  icon15: "div";
  remixIconsFillLogosInstagramFill3: "div";
  icon16: "div";
  remixIconsFillLogosYoutubeFill3: "div";
  bottomSection: "div";
  copyright: "div";
  language: "div";
  remixIconsLineBusinessGlobalLine: "div";
  text: "div";
  remixIconsFillSystemArrowDownSFill: "div";
};

type ReservedPropsType = "variants" | "args" | "overrides";
type NodeOverridesType<T extends NodeNameType> = Pick<
  PlasmicFooter2__OverridesType,
  DescendantsType<T>
>;
type NodeComponentProps<T extends NodeNameType> =
  // Explicitly specify variants, args, and overrides as objects
  {
    variants?: PlasmicFooter2__VariantsArgs;
    args?: PlasmicFooter2__ArgsType;
    overrides?: NodeOverridesType<T>;
  } & Omit<PlasmicFooter2__VariantsArgs, ReservedPropsType> & // Specify variants directly as props
    /* Specify args directly as props*/ Omit<
      PlasmicFooter2__ArgsType,
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
          internalArgPropNames: PlasmicFooter2__ArgProps,
          internalVariantPropNames: PlasmicFooter2__VariantProps
        }),
      [props, nodeName]
    );
    return PlasmicFooter2__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName
    });
  };
  if (nodeName === "footer1") {
    func.displayName = "PlasmicFooter2";
  } else {
    func.displayName = `PlasmicFooter2.${nodeName}`;
  }
  return func;
}

export const PlasmicFooter2 = Object.assign(
  // Top-level PlasmicFooter2 renders the root element
  makeNodeComponent("footer1"),
  {
    // Helper components rendering sub-elements
    topSection: makeNodeComponent("topSection"),
    logoSocialMedia: makeNodeComponent("logoSocialMedia"),
    logo: makeNodeComponent("logo"),
    img: makeNodeComponent("img"),
    socialMedia5: makeNodeComponent("socialMedia5"),
    icon20: makeNodeComponent("icon20"),
    remixIconsFillLogosFacebookCircleFill5: makeNodeComponent(
      "remixIconsFillLogosFacebookCircleFill5"
    ),
    icon21: makeNodeComponent("icon21"),
    remixIconsFillLogosInstagramFill5: makeNodeComponent(
      "remixIconsFillLogosInstagramFill5"
    ),
    icon22: makeNodeComponent("icon22"),
    remixIconsFillLogosYoutubeFill5: makeNodeComponent(
      "remixIconsFillLogosYoutubeFill5"
    ),
    frame13: makeNodeComponent("frame13"),
    frame11: makeNodeComponent("frame11"),
    httpsMapsAppGooGlCiZucfaa67Tu2EZ382: makeNodeComponent(
      "httpsMapsAppGooGlCiZucfaa67Tu2EZ382"
    ),
    info20: makeNodeComponent("info20"),
    info23: makeNodeComponent("info23"),
    frame12: makeNodeComponent("frame12"),
    httpsMapsAppGooGlWKcpHAhDyKbXd4Pj82: makeNodeComponent(
      "httpsMapsAppGooGlWKcpHAhDyKbXd4Pj82"
    ),
    info22: makeNodeComponent("info22"),
    freeBox: makeNodeComponent("freeBox"),
    info24: makeNodeComponent("info24"),
    info25: makeNodeComponent("info25"),
    socialMedia4: makeNodeComponent("socialMedia4"),
    icon17: makeNodeComponent("icon17"),
    remixIconsFillLogosFacebookCircleFill4: makeNodeComponent(
      "remixIconsFillLogosFacebookCircleFill4"
    ),
    icon18: makeNodeComponent("icon18"),
    remixIconsFillLogosInstagramFill4: makeNodeComponent(
      "remixIconsFillLogosInstagramFill4"
    ),
    icon19: makeNodeComponent("icon19"),
    remixIconsFillLogosYoutubeFill4: makeNodeComponent(
      "remixIconsFillLogosYoutubeFill4"
    ),
    socialMedia3: makeNodeComponent("socialMedia3"),
    icon14: makeNodeComponent("icon14"),
    remixIconsFillLogosFacebookCircleFill3: makeNodeComponent(
      "remixIconsFillLogosFacebookCircleFill3"
    ),
    icon15: makeNodeComponent("icon15"),
    remixIconsFillLogosInstagramFill3: makeNodeComponent(
      "remixIconsFillLogosInstagramFill3"
    ),
    icon16: makeNodeComponent("icon16"),
    remixIconsFillLogosYoutubeFill3: makeNodeComponent(
      "remixIconsFillLogosYoutubeFill3"
    ),
    bottomSection: makeNodeComponent("bottomSection"),
    copyright: makeNodeComponent("copyright"),
    language: makeNodeComponent("language"),
    remixIconsLineBusinessGlobalLine: makeNodeComponent(
      "remixIconsLineBusinessGlobalLine"
    ),
    text: makeNodeComponent("text"),
    remixIconsFillSystemArrowDownSFill: makeNodeComponent(
      "remixIconsFillSystemArrowDownSFill"
    ),

    // Metadata about props expected for PlasmicFooter2
    internalVariantProps: PlasmicFooter2__VariantProps,
    internalArgProps: PlasmicFooter2__ArgProps
  }
);

export default PlasmicFooter2;
/* prettier-ignore-end */
