import styled from '@emotion/styled';
import { css } from '@emotion/core';

import SvgIcon from 'src/components/SvgIcon';
import withProps from 'src/utils/withProps';
import config from 'src/config';

const { prefixCls: _prefixCls } = config;
export const prefixCls = _prefixCls + '-notice';
export const iconCls = prefixCls + '-icon';

const map = {
    default: 'info',
    success: 'success',
    warning: 'warning',
    error: 'error',
    info: 'success',
    disabled: 'disabled'
};

export const NoticeIconWrap = styled('span')`
    display: table-cell;
    font-size: 15px;
    width: 15px;
    color: inherit;
    padding-right: 10px;
`;

export const ContentWrap = styled('div')`
    display: table-cell;
    vertical-align: middle;
    line-height: 22px;
`;

export const ActionWrap = styled('div')`
    display: table-cell;
    padding-left: 8px;
    white-space: nowrap;
    text-align: right;
    > * {
        vertical-align: middle;
    }
`;

export const CloseWrap = styled('div')`
    display: table-cell;
    padding-left: 8px;
    white-space: nowrap;
    text-align: right;
    width: 12px;
`;

export const CloseIcon = styled(SvgIcon)`
    cursor: pointer;
`;

const themeMixin = props => {
    const {
        styleType,
        theme: { designTokens: DT }
    } = props;

    const style = map[styleType];
    const colorMap = {
        info: {
            color: DT.T_COLOR_TEXT_DEFAULT_DARK,
            border: DT.T_COLOR_LINE_NOTICE_LIGHT,
            background: DT.T_COLOR_BG_NOTICE_LIGHT,
            icon: DT.T_COLOR_TEXT_PRIMARY_DEFAULT
        },
        success: {
            color: DT.T_COLOR_TEXT_DEFAULT_DARK,
            border: DT.T_COLOR_LINE_SUCCESS_LIGHT,
            background: DT.T_COLOR_BG_SUCCESS_LIGHT,
            icon: DT.T_COLOR_TEXT_SUCCESS
        },
        warning: {
            color: DT.T_COLOR_TEXT_DEFAULT_DARK,
            border: DT.T_COLOR_LINE_WARNING_LIGHT,
            background: DT.T_COLOR_BG_WARNING_LIGHT,
            icon: DT.T_COLOR_TEXT_WARNING
        },
        error: {
            color: DT.T_COLOR_TEXT_DEFAULT_DARK,
            border: DT.T_COLOR_LINE_ERROR_LIGHT,
            background: DT.T_COLOR_BG_ERROR_LIGHT,
            icon: DT.T_COLOR_TEXT_ERROR
        },
        disabled: {
            color: DT.T_COLOR_TEXT_DISABLED,
            border: DT.T_COLOR_LINE_DISABLED_LIGHT,
            background: DT.T_COLOR_BG_DISABLED,
            icon: DT.T_COLOR_TEXT_DISABLED
        }
    }[style];
    return css`
        color: ${colorMap.color};
        background: ${colorMap.background};
        .${iconCls} {
            fill: ${colorMap.icon};
            color: ${colorMap.icon};
            vertical-align: middle;
        }
        ${ActionWrap} {
            color: ${DT.T_COLOR_TEXT_DEFAULT_LIGHT};
        }
    `;
};

export const NoticeWrap = withProps()(styled('div')`
    display: table;
    position: relative;
    box-sizing: border-box;
    width: 100%;
    padding: 12px 30px;
    margin: 0;
    border-radius: 1px;
    line-height: 18px;
    overflow: hidden;

    ${themeMixin};
`);
