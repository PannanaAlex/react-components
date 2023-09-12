import React from 'react';
import styled from '@emotion/styled';
import { css } from '@emotion/core';

import Input from 'src/components/Input';
import SvgIcon from 'src/components/SvgIcon';
import Menu from 'src/components/Menu';
import Button from 'src/components/Button';
import { inlineBlockWithVerticalMixin, sWrap } from 'src/style';
import config from 'src/config';
import { ButtonProps } from 'src/components/Button/Button';

const { prefixCls: _prefixCls } = config;
export const prefixCls = _prefixCls + '-select';
export const selectorContentCls = prefixCls + '-content';

export const SelectSearchInput = styled(Input.Search)`
    min-width: 100px;
    display: block;
    margin: 0 8px;
    margin-top: 10px;
`;

export const SSelector = sWrap<ButtonProps, HTMLButtonElement>({
    styleType: 'border'
})(
    styled(Button)(props => {
        const {
            theme: { designTokens: DT }
        } = props;

        return css`
            padding-right: 28px;
            width: 100%;
            min-width: 78px;
            text-align: left;
            overflow: hidden;
            height: ${DT.T_HEIGHT_MD};
            border-radius: ${DT.T_CORNER_LG};
            line-height: ${DT.T_HEIGHT_MD};
            .${selectorContentCls} {
                overflow: hidden;
                text-overflow: ellipsis;
                white-space: nowrap;
                font-size: ${DT.T_TYPO_FONT_SIZE_1};
                line-height: 16px;
            }
        `;
    })
);

export const Arrow = styled(SvgIcon)`
    position: absolute;
    right: 8px;
    top: 50%;
    margin-top: -6px;
`;
export const OptionWrap = styled(Menu.Item)(props => {
    const { hidden } = props;

    return css`
        ${hidden &&
        css`
            display: none;
        `};
    `;
});
export const FooterWrap = sWrap({})(
    styled.div(props => {
        const {
            theme: { designTokens: DT }
        } = props;

        return css`
            padding: 8px 0;
            box-shadow: ${DT.T_SHADOW_BLOCK_TOP_SM};
        `;
    })
);
export const ExtraWrap = styled('div')`
    margin: 0 8px;
`;
export const MenuWrap = sWrap({})(
    styled('div')(props => {
        const {
            theme: { designTokens: DT }
        } = props;

        return css`
            box-shadow: ${DT.T_SHADOW_BLOCK_DEFAULT_LG};
            background: ${DT.T_COLOR_BG_MENU};
            border-radius: ${DT.T_CORNER_SM};
            display: inline-block;
            width: 100%;
            min-width: 78px;
            /* stylelint-disable selector-type-no-unknown */
            & > ${ExtraWrap}:last-child {
                margin-bottom: 10px;
            }
            /* stylelint-enable selector-type-no-unknown */
        `;
    })
);

// eslint-disable-next-line react/prop-types,no-unused-vars
const CustomMenu = ({ customStyle, menuCustomStyle, ...rest }: any) => <Menu customStyle={menuCustomStyle} {...rest} />;

export const BlockMenu = styled(CustomMenu)(props => {
    const { customStyle = {} } = props;
    const maxHeight = customStyle.optionListMaxHeight
        ? typeof customStyle.optionListMaxHeight === 'string'
            ? customStyle.optionListMaxHeight
            : customStyle.optionListMaxHeight + 'px'
        : '380px';

    return css`
        display: block;
        border: none;
        box-shadow: none;
        max-height: ${maxHeight};
        background: unset;
        ${customStyle.popupWidth
            ? css`
                  width: ${customStyle.popupWidth};
              `
            : null}
    `;
});

export const SelectWrap = sWrap<{ disabled?: boolean }>({})(
    styled('div')(props => {
        const {
            theme: { designTokens: DT },
            disabled
        } = props;

        return css`
            box-sizing: border-box;
            position: relative;
            max-width: 100%;

            ${inlineBlockWithVerticalMixin};
            font-size: ${DT.T_TYPO_FONT_SIZE_1};
            color: ${DT.T_COLOR_TEXT_DEFAULT_DARK};
            ${disabled &&
            css`
                color: ${DT.T_COLOR_TEXT_DISABLED};
                pointer-events: none;
            `};
        `;
    })
);

export const EmptyContentWrapper = sWrap({})(
    styled('div')(props => {
        const {
            theme: { designTokens: DT }
        } = props;

        return css`
            text-align: center;
            color: ${DT.T_COLOR_TEXT_REMARK_DARK};
        `;
    })
);
