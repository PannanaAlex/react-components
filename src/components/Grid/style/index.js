import styled from '@emotion/styled';
import { css } from '@emotion/core';

import { clearFixMixin } from 'src/style';
import config from 'src/config';
import withProps from 'src/utils/withProps';
import { sizes } from '../Col';

const { prefixCls: _prefixCls } = config;
const colPrefixCls = _prefixCls + '-col';
const rowPrefixCls = _prefixCls + '-row';

const maxColumns = 24;

const percentage = v => {
    return +(v * 100).toFixed(8) + '%';
};

const flexMixin = css`
    display: flex;
    flex-flow: row wrap;
`;
const spanMixin = props => {
    const { span } = props;

    return css`
        float: left;
        flex: 0 0 auto;
        width: ${percentage(span / maxColumns)};
        ${span === 0 &&
        css`
            display: none;
        `};
    `;
};
const pushMixin = props => {
    const { push } = props;

    return css`
        left: ${percentage(push / maxColumns)};
    `;
};
const pullMixin = props => {
    const { pull } = props;

    return css`
        right: ${percentage(pull / maxColumns)};
    `;
};
const offsetMixin = props => {
    const { offset } = props;

    return css`
        margin-left: ${percentage(offset / maxColumns)};
    `;
};
const orderMixin = props => {
    const { order } = props;

    return css`
        order: ${order};
    `;
};

const justifyMixin = props => {
    const { justify } = props;

    return css`
        justify-content: ${{
            start: 'flex-start',
            center: 'center',
            end: 'flex-end',
            'space-around': 'space-around',
            'space-between': 'space-between'
        }[justify]};
    `;
};
const alignMixin = props => {
    const { align } = props;

    return css`
        align-items: ${{ top: 'flex-start', middle: 'center', bottom: 'flex-end' }[align]};
    `;
};

export const ColWrap = withProps({
    className: colPrefixCls
})(
    styled('div')(props => {
        const {
            theme: { designTokens: DT }
        } = props;

        const sizeScreenMap = {
            xs: DT.T_SCREEN_XS,
            sm: DT.T_SCREEN_SM,
            md: DT.T_SCREEN_MD,
            lg: DT.T_SCREEN_LG,
            xl: DT.T_SCREEN_XL,
            xxl: DT.T_SCREEN_XXL
        };

        return css`
            position: relative;
            display: block;
            box-sizing: border-box;
            min-height: 1px;

            ${props.span !== undefined && spanMixin(props)};
            ${props.push && pushMixin(props)};
            ${props.pull && pullMixin(props)};
            ${props.offset && offsetMixin(props)};
            ${props.order && orderMixin(props)};

            ${sizes
                .filter(s => props[s] !== undefined)
                .map(s => {
                    return `@media (min-width: ${sizeScreenMap[s]}px) {
                        & {
                            width: ${percentage(props[s] / maxColumns)};
                        }
                    }`;
                })
                .join('')}
        `;
    })
);

export const RowWrap = withProps({
    className: rowPrefixCls
})(
    styled('div')(props => {
        const {
            type,
            gutter,
            theme: { designTokens: DT }
        } = props;

        const sizeScreenMap = {
            xs: DT.T_SCREEN_XS,
            sm: DT.T_SCREEN_SM,
            md: DT.T_SCREEN_MD,
            lg: DT.T_SCREEN_LG,
            xl: DT.T_SCREEN_XL,
            xxl: DT.T_SCREEN_XXL
        };
        const isObject = value => {
            return value !== null && typeof value === 'object';
        };

        let gutterHor = null;
        let gutterVer = null;
        // 响应式
        let gutterHorResponsive = null;
        let gutterVerResponsive = null;

        if (typeof gutter === 'number') {
            gutterHor = gutter;
        }
        // {sm: 1, lg: 8} 这种形式
        if (isObject(gutter)) {
            gutterHorResponsive = gutter;
        }
        if (Array.isArray(gutter)) {
            const [_gutterHor, _gutterVer] = gutter;

            /**
             * [1, 9]
             * [{sm: 1}, 9]
             * [{sm: 1}, {sm: 9}]
             * [1, {sm: 9}]
             */
            if (isObject(_gutterHor)) {
                gutterHorResponsive = _gutterHor;
            } else {
                gutterHor = _gutterHor;
            }

            if (isObject(_gutterVer)) {
                gutterVerResponsive = _gutterVer;
            } else {
                gutterVer = _gutterVer;
            }
        }
        gutterHor = gutterHor / 2 || 0;
        gutterVer = gutterVer / 2 || 0;

        return css`
            position: relative;
            display: block;
            height: auto;

            ${type === 'flex' ? flexMixin : clearFixMixin};
            ${gutterHor
                ? css`
                      margin-left: ${-gutterHor + 'px'};
                      margin-right: ${-gutterHor + 'px'};
                  `
                : null}
            ${gutterVer
                ? css`
                      margin-top: ${-gutterVer + 'px'};
                      margin-bottom: ${-gutterVer + 'px'};
                  `
                : null}

            ${justifyMixin(props)};
            ${alignMixin(props)};

            > .${colPrefixCls} {
                ${gutterHor
                    ? css`
                          padding-left: ${gutterHor + 'px'};
                          padding-right: ${gutterHor + 'px'};
                      `
                    : null}
                ${gutterVer
                    ? css`
                          padding-top: ${gutterVer + 'px'};
                          padding-bottom: ${gutterVer + 'px'};
                      `
                    : null}
            }

            ${gutterHorResponsive
                ? sizes
                      .filter(s => gutterHorResponsive[s] !== undefined)
                      .map(s => {
                          const _gutterHor = gutterHorResponsive[s] / 2 || 0;

                          return `@media (min-width: ${sizeScreenMap[s]}px) {
                        & {
                            margin-left: ${-_gutterHor + 'px'};
                            margin-right: ${-_gutterHor + 'px'};
                        }

                        & > .${colPrefixCls} {
                            padding-left: ${_gutterHor + 'px'};
                            padding-right: ${_gutterHor + 'px'};
                        }
                    }`;
                      })
                      .join('')
                : null}

            ${gutterVerResponsive
                ? sizes
                      .filter(s => gutterVerResponsive[s] !== undefined)
                      .map(s => {
                          const _gutterVer = gutterVerResponsive[s] / 2 || 0;

                          return `@media (min-width: ${sizeScreenMap[s]}px) {
                        & {
                            margin-top: ${-_gutterVer + 'px'};
                            margin-bottom: ${-_gutterVer + 'px'};
                        }

                        & > .${colPrefixCls} {
                            padding-left: ${_gutterVer + 'px'};
                            padding-right: ${_gutterVer + 'px'};
                        }
                    }`;
                      })
                      .join('')
                : null}
        `;
    })
);
