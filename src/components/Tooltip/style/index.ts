import styled from '@emotion/styled';
import { css } from '@emotion/core';
import { injectGlobal } from 'emotion';

import { prefixCls as popoverPrefixCls } from 'src/components/Popover/style';
import config from 'src/config';
import { sWrap } from 'src/style';

const { prefixCls: _prefixCls } = config;
export const prefixCls = _prefixCls + '-tooltip';

const arrowWidth = '6px';
const borderWidth = '1px';

export const tooltipPopupClassName = prefixCls + '-popup';
export const contentCls = prefixCls + '-content';

export const ContentWrap = sWrap<{ themeType: 'light' | 'dark'; customStyle?: { popupWrapperPadding?: string } }>({
    className: contentCls
})(
    styled('div')(props => {
        const {
            theme: { designTokens: DT },
            themeType,
            customStyle
        } = props;

        const map = {
            light: {
                text: DT.TEXT_NORMAL_TITLE_COLOR,
                border: DT.T_BUTTON_PRIMARY_COLOR_BG_DEFAULT,
                background: DT.T_POPOVER_COLOR_BG_LIGHT
            },
            dark: {
                text: DT.T_COLOR_TEXT_WHITE,
                border: DT.T_POPOVER_COLOR_BG_DARK,
                background: DT.T_POPOVER_COLOR_BG_DARK
            }
        };
        const colorMap = map[themeType];
        return css`
            line-height: 20px;
            padding: ${customStyle?.popupWrapperPadding || '8px 10px'};
            border: ${DT.T_LINE_WIDTH_BASE} solid ${colorMap.border};
            border-radius: 3px;
            font-size: 12px;
            text-align: left;
            text-decoration: none;
            word-break: keep-all;
            box-sizing: border-box;
            color: ${colorMap.text};
            background: ${colorMap.background};
        `;
    })
);

const arrowMixin = css`
    display: inline-block;
    position: absolute;
    width: 0;
    height: 0;
    border-width: 0;
    border-color: transparent;
    border-style: solid;
`;

export const Arrow = styled('span')`
    ${arrowMixin};
`;
export const ArrowInner = styled('span')`
    ${arrowMixin};
`;

injectGlobal`
    .${tooltipPopupClassName} {
        &.${popoverPrefixCls}-placement-bottom,
        &.${popoverPrefixCls}-placement-bottomLeft,
        &.${popoverPrefixCls}-placement-bottomRight {
            ${Arrow}, ${ArrowInner} {
                margin-left: -${arrowWidth};
                border-width: 0 ${arrowWidth} ${arrowWidth} ${arrowWidth};
                border-top-color: transparent;
                border-left-color: transparent;
                border-right-color: transparent;
            }
            ${Arrow} {
                top: -${arrowWidth};
            }
            ${ArrowInner} {
                top: ${borderWidth};
            }
        }
        &.${popoverPrefixCls}-placement-top,
        &.${popoverPrefixCls}-placement-topLeft,
        &.${popoverPrefixCls}-placement-topRight {
            ${Arrow}, ${ArrowInner} {
                margin-left: -${arrowWidth};
                border-width: ${arrowWidth} ${arrowWidth} 0 ${arrowWidth};
                border-bottom-color: transparent;
                border-left-color: transparent;
                border-right-color: transparent;
            }
            ${Arrow} {
                bottom: -${arrowWidth};
            }
            ${ArrowInner} {
                bottom: ${borderWidth};
            }
        }
        &.${popoverPrefixCls}-placement-left,
        &.${popoverPrefixCls}-placement-leftTop,
        &.${popoverPrefixCls}-placement-leftBottom {
            ${Arrow}, ${ArrowInner} {
                margin-top: -${arrowWidth};
                border-width: ${arrowWidth} 0 ${arrowWidth} ${arrowWidth};
                border-top-color: transparent;
                border-bottom-color: transparent;
                border-right-color: transparent;
            }
            ${Arrow} {
                right: -${arrowWidth};
            }
            ${ArrowInner} {
                right: ${borderWidth};
            }
        }
        &.${popoverPrefixCls}-placement-right,
        &.${popoverPrefixCls}-placement-rightTop,
        &.${popoverPrefixCls}-placement-rightBottom {
            ${Arrow}, ${ArrowInner} {
                margin-top: -${arrowWidth};
                border-width: ${arrowWidth} ${arrowWidth} ${arrowWidth} 0;
                border-top-color: transparent;
                border-bottom-color: transparent;
                border-left-color: transparent;
            }
            ${Arrow} {
                left: -${arrowWidth};
            }
            ${ArrowInner} {
                left: ${borderWidth};
            }
        }
        &.${popoverPrefixCls}-placement-bottomLeft,
        &.${popoverPrefixCls}-placement-topLeft {
            ${Arrow} {
                left: 16px;
            }
            .${contentCls} {
                min-width: 32px;
            }
        }
        &.${popoverPrefixCls}-placement-bottomRight,
        &.${popoverPrefixCls}-placement-topRight {
            ${Arrow} {
                right: 10px;
            }
            .${contentCls} {
                min-width: 32px;
            }
        }
        &.${popoverPrefixCls}-placement-leftTop,
        &.${popoverPrefixCls}-placement-rightTop {
            ${Arrow} {
                top: 5px;
                margin-top: 0;
            }
            .${contentCls} {
                min-height: 22px;
            }
        }
        &.${popoverPrefixCls}-placement-leftBottom,
        &.${popoverPrefixCls}-placement-rightBottom {
            ${Arrow} {
                bottom: 5px;
            }
            .${contentCls} {
                min-height: 22px;
            }
        }
        &.${popoverPrefixCls}-placement-top,
        &.${popoverPrefixCls}-placement-bottom {
            ${Arrow} {
                left: 50%;
            }
            .${contentCls} {
                min-width: 32px;
            }
        }
        &.${popoverPrefixCls}-placement-left,
        &.${popoverPrefixCls}-placement-right {
            ${Arrow} {
                top: 50%;
            }
            .${contentCls} {
                min-height: 22px;
            }
        }
    }
`;

export const TooltipWrap = sWrap<{ themeType: 'light' | 'dark' }>({})(
    styled('div')(props => {
        const {
            theme: { designTokens: DT },
            themeType
        } = props;

        const map = {
            light: {
                border: DT.T_BUTTON_PRIMARY_COLOR_BG_DEFAULT,
                background: DT.T_POPOVER_COLOR_BG_LIGHT
            },
            dark: {
                border: DT.T_POPOVER_COLOR_BG_DARK,
                background: DT.T_POPOVER_COLOR_BG_DARK
            }
        };
        const colorMap = map[themeType];
        return css`
            ${Arrow} {
                border-color: ${colorMap.border};
            }
            ${ArrowInner} {
                border-color: ${colorMap.background};
            }
        `;
    })
);
