import React, { ReactNode, memo } from 'react';
import styled from '@emotion/styled';
import { css } from '@emotion/core';

import SvgIcon from 'src/components/SvgIcon';
import { Row, Col } from 'src/components/Grid';
import Combine, { CombineProps } from 'src/components/Combine';
import config from 'src/config';
import { DesignToken, sWrap } from 'src/style';

const { prefixCls: _prefixCls } = config;
const prefixCls = _prefixCls + '-form';
const itemCls = prefixCls + '-item';
const labelCls = prefixCls + '-label';
const controllerCls = prefixCls + '-controller';
const groupCls = prefixCls + '-group';
const groupTitleCls = groupCls + '-title';
const tipCls = prefixCls + '-tip';
export const tipIconCls = tipCls + '-icon';
export const tipContentCls = tipCls + '-content';
const subAreaCls = prefixCls + '-sub-area';

export const GridItemWrap = styled(
  sWrap({
    className: itemCls
  })(styled(Row)`
    /* empty */
  `)
)();

export const GridLabelWrap = sWrap<{ textAlign?: string }>({
  className: labelCls,
})(
  styled(Col)(props => {
    const {
      theme: { designTokens: DT },
      textAlign
    } = props;

    return css`
      padding-top: 4px;
      line-height: 20px;
      word-break: break-word;
      color: ${DT.TEXT_SECOND_Title_COLOR};
      font-size: ${DT.TEXT_SECOND_TITLE_FONT_BASE};
      text-align: ${textAlign};
    `;
  })
);

export const GridControllerWrap = sWrap({
  className: controllerCls
})(styled(Col)`
  /* empty */
`);

export const ItemWrap = sWrap({
  className: itemCls
})(styled('div')`
  /* empty */
`);

export const LabelWrap = sWrap<{ label?: ReactNode }>({
  className: labelCls
})(
  styled('div')(props => {
    const {
      theme: { designTokens: DT },
      label
    } = props;

    return css`
      line-height: 20px;
      font-weight: ${DT.T_TYPO_FONT_WEIGHT_BOLD};
      color: ${DT.TEXT_SECOND_Title_COLOR};
      font-size: ${DT.TEXT_SECOND_TITLE_FONT_BASE};
      margin-bottom: ${label ? DT.T_FORMITEM_LABEL_MB : 0};
      word-break: break-word;
    `;
  })
);

export const CommentWrap = sWrap()(
  styled.div(props => {
    const {
      theme: { designTokens: DT }
    } = props;

    return css`
      line-height: 20px;
      margin-top: ${DT.T_SPACING_COMMON_XS};
      color: ${DT.T_COLOR_TEXT_REMARK_DARK};
      /* overwrite inherit */
      font-weight: normal;
    `;
  })
);

export const ControllerWrap = sWrap({
  className: controllerCls
})(styled('div')`
  /* empty */
`);

export const GroupWrap = sWrap({
  className: groupCls
})(styled('div')`
  & + & {
    margin-top: 24px;
  }
`);

export const GroupTitle = sWrap({
  className: groupTitleCls
})(
  styled('div')(props => {
    const {
      theme: { designTokens: DT }
    } = props;

    return css`
      font-weight: bold;
      line-height: 22px;
      padding: 12px 0;
      margin-bottom: 24px;

      ${css`
        font-size: 14px;
        border-bottom: 1px solid ${DT.T_COLOR_LINE_DEFAULT_DARK};
        color: ${DT.T_COLOR_TEXT_DEFAULT_DARK};
      `};
    `;
  })
);

export const FormWrap = sWrap<{ size: string }>({
  className: prefixCls
})(
  styled('form')(props => {
    const {
      size,
      theme: { designTokens: DT }
    } = props;

    return css`
      font-size: ${DT.T_TYPO_FONT_SIZE_1};

      .${itemCls} {
        margin-bottom: ${DT.ITEM_COLUMN_SPACE};
        &:last-child {
          margin-bottom: 0;
        }
      }
      ${size === 'lg' &&
      css`
        ${GridItemWrap} {
          margin-bottom: 24px;
          .${labelCls} {
            padding-top: 6px;
          }
        }
      `};
    `;
  })
);

const IconColorMap: { [key: string]: DesignToken } = {
  success: 'T_COLOR_BG_SUCCESS_DARK',
  warning: 'T_COLOR_BG_WARNING_DARK',
  error: 'T_COLOR_BG_ERROR_DARK',
  loading: 'T_COLOR_TEXT_PRIMARY_DEFAULT'
};
const ColorMap: { [key: string]: DesignToken } = {
  error: 'T_COLOR_TEXT_ERROR'
};

export const Tip = sWrap<{ status: string } & CombineProps>({ className: tipCls })(
  styled(Combine)(props => {
    const {
      status,
      theme: { designTokens: DT }
    } = props;
    const iconColorDT: DesignToken = IconColorMap[status] || 'T_COLOR_TEXT_PRIMARY_DEFAULT';
    const colorDt: DesignToken = ColorMap[status] || 'T_COLOR_TEXT_DEFAULT_LIGHT';
    return css`
      display: flex;
      margin-top: 4px;
      color: ${DT[colorDt]};
      .${tipContentCls} {
        line-height: 20px;
      }
      .${tipIconCls} {
        fill: ${DT[iconColorDT]};
      }
    `;
  })
);

export const RequiredLabel = sWrap<{ textAlign?: string }>()(
  styled.span(props => {
    const {
      theme: { designTokens: DT },
      textAlign
    } = props;
    return  css`
      ${textAlign === "right" ? `margin-right: 4px;` : `margin-left: 4px`};
      color: ${DT.T_COLOR_TEXT_ERROR};
    `;
  })
);

export const HelpIcon = sWrap<{ type: string; size?: string, textAlign?: string }>()(
  styled(SvgIcon)(props => {
    const {
      theme: { designTokens: DT },
      textAlign
    } = props;
    return css`
      ${textAlign === "right" ? `margin-right: 8px;` : `margin-left: 8px`};
      vertical-align: middle;
      fill: ${DT.T_COLOR_TEXT_PRIMARY_DEFAULT};
    `;
  })
);

const StatusIconWithoutMemo = ({ status, ...rest }: { status: string; spin?: boolean }) => {
  const iconType =
    {
      success: 'tick-circle-filled',
      warning: 'exclamation-circle-filled',
      error: 'cross-circle-filled',
      loading: 'ring-loading'
    }[status] || 'info-circle-filled';
  return <SvgIcon type={iconType} className={tipIconCls} {...rest} />;
};
const StatusIcon = memo(StatusIconWithoutMemo);

export { StatusIcon };

export const SubAreaWrap = sWrap({ className: subAreaCls })(
  styled.div(props => {
    const {
      theme: { designTokens: DT }
    } = props;
    return css`
      padding: 27px 29px;
      /* border: 1px solid ${DT.T_COLOR_LINE_DEFAULT_LIGHT};
            background: ${DT.T_COLOR_BG_DEFAULT_DARK}; */

      background: #f8faff;
      border: 1px solid #d8dff4;
      border-radius: 8px;

      * + & {
        margin-top: 12px;
      }
      & .${itemCls} {
        margin-bottom: 16px;
      }
    `;
  })
);
