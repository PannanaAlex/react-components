const designTokens = {
    T_BUTTON_COMMON_COLOR_MASK: '#ffffff',
    T_BUTTON_PRIMARY_COLOR_BG_DEFAULT: '#406AE6',
    T_BUTTON_PRIMARY_COLOR_BG_HOVER: '#2c4cbf',
    T_BUTTON_PRIMARY_COLOR_TEXT_DEFAULT: '#ffffff',
    T_BUTTON_SECONDARY_COLOR_BG_DEFAULT: '#ffffff',
    T_COLOR_BG_MENU: '#ffffff',
    T_COLOR_BG_HIGHLIGHT: '#fff5bd',
    T_COLOR_BG_WHITE: '#ffffff',
    T_COLOR_BG_TRANSPARENT: 'transparent',
    T_COLOR_BG_PRIMARY_1: '#3860f4',
    T_COLOR_BG_PRIMARY_2: '#3357df',
    T_COLOR_BG_PRIMARY_3: '#406AE6',
    T_COLOR_BG_PRIMARY_4: '#2c4cbf',
    T_COLOR_BG_PRIMARY_5: '#f8f8ff',
    // 用于body、tableHeader等中性底色
    T_COLOR_BG_BODY_NORMAL: '#F5F7FA',
    T_COLOR_BG_DEFAULT_NORMAL: '#ffffff',
    T_COLOR_BG_DEFAULT_BRIGHT: '#ffffff',
    T_COLOR_BG_DEFAULT_LIGHT: '#fafafc',
    T_COLOR_BG_DEFAULT_DARK: '#f6f6fb',
    T_COLOR_BG_DEFAULT_HOVER: '#F4F6FF',
    T_COLOR_BG_CONTENT_1: 'linear-gradient(180deg, #ebedf5 0%, #d8dceb 100%)',
    T_COLOR_BG_NOTICE_LIGHT: '#fafafc',
    T_COLOR_BG_NOTICE_DARK: '#526075',
    T_COLOR_BG_SUCCESS_LIGHT: '#e6ffed',
    T_COLOR_BG_SUCCESS_DARK: '#15ad31',
    T_COLOR_BG_WARNING_LIGHT: '#fffce6',
    T_COLOR_BG_WARNING_DARK: '#ffc42e',
    T_COLOR_BG_ERROR_LIGHT: '#fff0f0',
    T_COLOR_BG_ERROR_DARK: '#f44336',
    T_COLOR_BG_DISABLED_LIGHT: '#f7f7f7',
    T_COLOR_BG_DISABLED_DARK: '#cccccc',
    T_COLOR_BG_SIDEBAR: '#e7e9f3',
    T_COLOR_LINE_DEFAULT_LIGHT: 'rgba(0,0,0,.06)',
    T_COLOR_LINE_DEFAULT_DARK: '#c3cad9',
    TEXT_SECOND_Title_COLOR: '#303133',
    TEXT_SECOND_TITLE_FONT_BASE: '16px',
    T_COLOR_LINE_DEFAULT_TRANSPARENT: 'transparent',
    T_COLOR_LINE_PRIMARY_DEFAULT: '#3860f4',
    T_COLOR_LINE_PRIMARY_HOVER: '#3357df',
    T_COLOR_LINE_PRIMARY_LIGHT: '#e3e9ff',
    T_COLOR_LINE_NOTICE_LIGHT: '#d2d6ea',
    T_COLOR_LINE_NOTICE_DARK: '#526075',
    T_COLOR_LINE_SUCCESS_LIGHT: '#9effa5',
    T_COLOR_LINE_SUCCESS_DARK: '#15ad31',
    T_COLOR_LINE_WARNING_LIGHT: '#ffe38d',
    T_COLOR_LINE_WARNING_DARK: '#ffc42e',
    T_COLOR_LINE_ERROR_LIGHT: '#fed4d4',
    T_COLOR_LINE_ERROR_DARK: '#f44336',
    T_COLOR_LINE_DISABLED_LIGHT: '#d9d9d9',
    T_COLOR_LINE_DISABLED_DARK: '#cccccc',
    T_COLOR_TEXT_WHITE: '#ffffff',
    T_COLOR_TEXT_DEFAULT_NORMAL: '#ffffff',
    T_COLOR_TEXT_DEFAULT_BRIGHT: '#ffffff',
    T_COLOR_TEXT_DEFAULT_LIGHT: '#526075',
    T_COLOR_TAB_DEFAULT_LIGHT: '#666666',
    T_COLOR_TAB_NAV_BG: '#f0f2f5',
    T_COLOR_TEXT_TAB_ACTIVE: '#ffffff',

    T_COLOR_TEXT_DEFAULT_DARK: '#0a1633',
    T_COLOR_TEXT_TITLE_DARK: '#000000',
    T_COLOR_TEXT_PRIMARY_DEFAULT: '#406AE6',
    T_COLOR_TEXT_PRIMARY_HOVER: '#3357df',
    T_COLOR_TEXT_REMARK_LIGHT: 'rgba(10,22,51,0.20)',
    T_COLOR_TEXT_REMARK_DARK: '#7a8baa',
    T_COLOR_TEXT_SUCCESS: '#15ad31',
    T_COLOR_TEXT_SUCCESS_DARK: '#00591c',
    T_COLOR_TEXT_WARNING: '#ffc42e',
    T_COLOR_TEXT_WARNING_DARK: '#ffc42e',
    T_COLOR_TEXT_ERROR: '#f44336',
    T_COLOR_TEXT_ERROR_DARK: '#5a0c06',
    T_COLOR_TEXT_DISABLED: '#cccccc',
    T_COLOR_TEXT_SYSTEM_WHITE: '#ffffff',
    T_COLOR_TEXT_SYSTEM_BLACK: '#000000',
    T_COLOR_LEGEND_PURPLE_1: '#f4ebf9',
    T_COLOR_LEGEND_PURPLE_2: '#e1ccf0',
    T_COLOR_LEGEND_PURPLE_3: '#c6a7e5',
    T_COLOR_LEGEND_PURPLE_4: '#af85db',
    T_COLOR_LEGEND_PURPLE_5: '#a06dd4',
    T_COLOR_LEGEND_PURPLE_6: '#935ecf',
    T_COLOR_LEGEND_PURPLE_7: '#6b3aaa',
    T_COLOR_LEGEND_PURPLE_8: '#4f298a',
    T_COLOR_LEGEND_PURPLE_9: '#322044',
    T_COLOR_LEGEND_LIGHTBLUE_1: '#e7f5fd',
    T_COLOR_LEGEND_LIGHTBLUE_2: '#c1e9fb',
    T_COLOR_LEGEND_LIGHTBLUE_3: '#93e2f8',
    T_COLOR_LEGEND_LIGHTBLUE_4: '#6ad7f5',
    T_COLOR_LEGEND_LIGHTBLUE_5: '#4dcff4',
    T_COLOR_LEGEND_LIGHTBLUE_6: '#3ad0f3',
    T_COLOR_LEGEND_LIGHTBLUE_7: '#17b1cd',
    T_COLOR_LEGEND_LIGHTBLUE_8: '#0a95a8',
    T_COLOR_LEGEND_LIGHTBLUE_9: '#154250',
    T_COLOR_LEGEND_BLUE_1: '#e7eefd',
    T_COLOR_LEGEND_BLUE_2: '#c1d4fa',
    T_COLOR_LEGEND_BLUE_3: '#95bff7',
    T_COLOR_LEGEND_BLUE_4: '#6ca7f4',
    T_COLOR_LEGEND_BLUE_5: '#4f95f2',
    T_COLOR_LEGEND_BLUE_6: '#3c90f0',
    T_COLOR_LEGEND_BLUE_7: '#1971cb',
    T_COLOR_LEGEND_BLUE_8: '#0c5fa7',
    T_COLOR_LEGEND_BLUE_9: '#152d4f',
    T_COLOR_LEGEND_ORANGE_1: '#fff5e6',
    T_COLOR_LEGEND_ORANGE_2: '#ffe3bd',
    T_COLOR_LEGEND_ORANGE_3: '#ffc48d',
    T_COLOR_LEGEND_ORANGE_4: '#ffac61',
    T_COLOR_LEGEND_ORANGE_5: '#ff9e42',
    T_COLOR_LEGEND_ORANGE_6: '#FF8C2E',
    T_COLOR_LEGEND_ORANGE_7: '#d9610b',
    T_COLOR_LEGEND_ORANGE_8: '#B34400',
    T_COLOR_LEGEND_ORANGE_9: '#543211',
    T_COLOR_LEGEND_YELLOW_1: '#fffce6',
    T_COLOR_LEGEND_YELLOW_2: '#fff5bd',
    T_COLOR_LEGEND_YELLOW_3: '#ffe38d',
    T_COLOR_LEGEND_YELLOW_4: '#FFD761',
    T_COLOR_LEGEND_YELLOW_5: '#ffd042',
    T_COLOR_LEGEND_YELLOW_6: '#ffc42e',
    T_COLOR_LEGEND_YELLOW_7: '#d9980b',
    T_COLOR_LEGEND_YELLOW_8: '#b37400',
    T_COLOR_LEGEND_YELLOW_9: '#544411',
    T_COLOR_LEGEND_CYAN_1: '#e8fcfc',
    T_COLOR_LEGEND_CYAN_2: '#c3f8f5',
    T_COLOR_LEGEND_CYAN_3: '#98f3e5',
    T_COLOR_LEGEND_CYAN_4: '#70efdb',
    T_COLOR_LEGEND_CYAN_5: '#55ecd6',
    T_COLOR_LEGEND_CYAN_6: '#43eacb',
    T_COLOR_LEGEND_CYAN_7: '#1fc4a1',
    T_COLOR_LEGEND_CYAN_8: '#12a17d',
    T_COLOR_LEGEND_CYAN_9: '#174d45',
    T_COLOR_LEGEND_RED_1: '#fff0f0',
    T_COLOR_LEGEND_RED_2: '#ffe2e2',
    T_COLOR_LEGEND_RED_3: '#fed4d4',
    T_COLOR_LEGEND_RED_4: '#FBA49F',
    T_COLOR_LEGEND_RED_5: '#F7736B',
    T_COLOR_LEGEND_RED_6: '#f44336',
    T_COLOR_LEGEND_RED_7: '#C13126',
    T_COLOR_LEGEND_RED_8: '#8D1E16',
    T_COLOR_LEGEND_RED_9: '#5a0c06',
    T_COLOR_LEGEND_GREEN_1: '#E6FFED',
    T_COLOR_LEGEND_GREEN_2: '#C2FFC9',
    T_COLOR_LEGEND_GREEN_3: '#9EFFA5',
    T_COLOR_LEGEND_GREEN_4: '#70E47E',
    T_COLOR_LEGEND_GREEN_5: '#43C858',
    T_COLOR_LEGEND_GREEN_6: '#15AD31',
    T_COLOR_LEGEND_GREEN_7: '#0E912A',
    T_COLOR_LEGEND_GREEN_8: '#077523',
    T_COLOR_LEGEND_GREEN_9: '#00591C',
    T_FRAME_TOP_COLOR_BG_DEFAULT: '#3860f4',
    T_FRAME_TOP_COLOR_BG_HOVER: '#3357df',
    T_FRAME_LOGO_COLOR_BG_DEFAULT: '#3357df',
    T_FRAME_PRODUCTS_COLOR_TEXT_ICON: '#152d4f',
    T_FRAME_SIDEBAR_COLOR_BG_DEFAULT: '#dfe0f1',
    T_FRAME_SIDEBAR_COLOR_BG_ACTIVE: '#f8f8ff',
    T_FRAME_SIDEBAR_COLOR_BG_EXPAND: '#ffffff',
    T_LOADING_COLOR_LAYER_DEFAULT: 'rgba(255,255,255,0.70)',
    T_MODAL_COLOR_LAYER_DEFAULT: 'rgba(0,0,0,0.50)',
    T_MODAL_SHADOW_DEFAULT:
        '0 3px 6px -4px rgba(0,0,0,0.12),0 6px 16px 0 rgba(0,0,0,0.08),0 9px 28px 8px rgba(0,0,0,0.05)',
    T_PAY_COLOR_BG_1: 'linear-gradient(180deg, #ebedf5 0%, #d8dceb 100%)',
    T_PAY_COLOR_BG_2: '#efeff8',
    T_PAY_COLOR_BG_3: '#f8f8ff',
    T_POPOVER_COLOR_BG_LIGHT: '#ffffff',
    T_POPOVER_COLOR_BG_DARK: '#0a1633',
    T_POPOVER_COLOR_LINE_LIGHT: '#d2d6ea',
    T_POPOVER_COLOR_LINE_DARK: 'transparent',
    T_SLIDER_COLOR_BG_ACTIVE: '#f8f8ff',
    T_SLIDER_COLOR_BG_DEFAULT: '#fafafc',
    T_SLIDER_COLOR_LINE_ACTIVE: '#3860f4',
    T_SLIDER_COLOR_LINE_DEFAULT: '#c3cad9',
    T_SLIDER_COLOR_TEXT_ACTIVE: '#3860f4',
    T_SLIDER_COLOR_TEXT_DEFAULT: '#7a8baa',
    T_SWITCH_COLOR_BG_OUTER: '#ffffff',
    T_SWITCH_COLOR_BG_INNER_OFF: '#f6f6fb',
    T_SWITCH_COLOR_BG_INNER_ON: '#15ad31',
    T_SWITCH_COLOR_TEXT_OFF: '#526075',
    T_SWITCH_COLOR_TEXT_ON: '#ffffff',
    T_SWITCH_COLOR_LINE_INNER_ON: '#e6ffed',
    T_TABLE_ROW_COLOR_BG_DEFAULT: '#f6f6fb',
    T_TABLE_ROW_COLOR_BG_HOVER: '#F2F5F8',
    T_TABLE_HEAD_PADDING_V_SM: '6px',
    T_TABLE_HEAD_PADDING_V_MD: '10px',
    T_TABLE_HEAD_PADDING_V_LG: '14px',
    T_TABLE_HEAD_PADDING_H: '10px',
    T_TABLE_BODY_PADDING_V_SM: '6px',
    T_TABLE_BODY_PADDING_V_MD: '8px',
    T_TABLE_BODY_PADDING_V_LG: '10px',
    T_TABLE_BODY_PADDING_H: '10px',
    T_TABS_DEFAULT_COLOR_BG_DEFAULT: '#F5F7FA',
    T_TABS_DEFAULT_COLOR_BG_HOVER: '#fafafc',
    T_TABS_DEFAULT_COLOR_LINE_HOVER: '#efeff8',
    T_TABS_PRODUCT_COLOR_TEXT_DEFAULT: 'rgba(0,0,0,0.7)',
    T_TABS_PRODUCT_COLOR_SHADOW_DEFAULT: '#edf0fd',
    T_TABS_PRODUCT_COLOR_SHADOW_HOVER: '#dee1e9',
    T_TABS_PRODUCT_COLOR_BG_HOVER: 'rgba(233,237,245,0.5)',
    T_TABS_PRODUCT_COLOR_LINE_ACTIVE: '#dfe0f1',
    T_CARD_COLOR_BG_DEFAULT: '#ffffff',
    T_CORNER_SM: '2px',
    T_CORNER_LG: '8px',
    T_CORNER_MD: '4px',
    T_CORNER_CIRCLE: '50%',
    T_CORNER_ZERO: '0',
    T_HEIGHT_SM: '24px',
    T_HEIGHT_MD: '30px',
    T_HEIGHT_LG: '32px',

    TAB_PANEL_TITLE_HEIGHT: '48px', // Tab标题高度
    TAB_PANEL_PADDING_SM: '10px 20px', // Tab的padding sm
    TAB_PANEL_PADDING_MD: '14px 22px', // Tab的padding md
    TAB_PANEL_PADDING_LG: '16px 24px', // Tab的padding lg

    TAB_PANEL_LINEHEIGHT_SM: '18px', // Tab的行高 sm
    TAB_PANEL_LINEHEIGHT_MD: '20px', // Tab的行高 md
    TAB_PANEL_LINEHEIGHT_LG: '22px', // Tab的行高 lg

    TAB_PANEL_FONTSIZE_SM: '16px', // Tab的fontsize sm
    TAB_PANEL_FONTSIZE_MD: '18px', // Tab的fontsize md
    TAB_PANEL_FONTSIZE_LG: '20px', // Tab的fontsize lg

    TAB_PANEL_FONTWEIGHT_SM: 'normal', // Tab的fontweight sm
    TAB_PANEL_FONTWEIGHT_MD: 'normal', // Tab的fontweight md
    TAB_PANEL_FONTWEIGHT_LG: 'bold', // Tab的fontweight lg

    NUMBER_INPUT_COLOR: '#c2cff0', // NumberInput的border颜色
    NUMBER_INPUT_BG_COLOR: '#eef3ff', // NumberInput的背景颜色
    NUMBER_INPUT_SUFFIX_COLOR: '#9ea8c2', // NumberInput的suffix颜色

    SELECT_BORDER_COLOR: '#c0c4cc', // Select边框颜色
    CARD_SELECT_FONTSIZE_COLOR: '#666666', // Card下拉select字体颜色

    TEXT_NORMAL_TITLE_COLOR: '#303133', // 正文标题文字颜色
    RADIO_FONTSIZE_LINEHEIGHT: '18px', // Radio行高

    ITEM_COLUMN_SPACE: '40px', // Item垂直方向的距离

    T_IDE_DEFAULT_COLOR_BG_DEFAULT: '#0a1633',
    T_IDE_DEFAULT_COLOR_BG_ACTION: 'rgba(255,255,255,0.12)',
    T_IDE_READONLY_COLOR_BG_DEFAULT: '#f6f6fb',
    T_IDE_READONLY_COLOR_BG_ACTION: 'rgba(10,22,51,0.12)',
    T_INPUT_COLOR_BG_DEFAULT: '#fafafc',
    T_INPUT_COLOR_BG_ACTIVE: '#f6f6fb',
    T_LINE_WIDTH_BASE: '1px',
    T_LINE_WIDTH_SM: '0px',
    T_LINE_WIDTH_LG: '2px',
    T_LINE_STYLE_BASE: 'solid',
    T_LINE_STYLE_DASHED: 'dashed',
    T_PROGRESS_COLOR_BG_DEFAULT: '#dfe0f1',
    T_SHADOW_TAB_NAV: '0px 0px 4px 0px rgba(62, 89, 184, 0.21)',
    T_SHADOW_INSET_1: 'inset 0 1px 3px 0 #d2d6ea',
    T_SHADOW_INSET_TOP: 'inset 0 10px 8px -8px rgba(0,0,0,0.12)',
    T_SHADOW_INSET_RIGHT: 'inset -10px 0 8px -8px rgba(0,0,0,0.12)',
    T_SHADOW_INSET_BOTTOM: 'inset 0 -10px 8px -8px rgba(0,0,0,0.12)',
    T_SHADOW_INSET_LEFT: 'inset 10px 0 8px -8px rgba(0,0,0,0.12)',
    T_SHADOW_INSET_DEFAULT: 'inset 0 3px 0 0 rgba(0,0,0,0.05)',
    T_SHADOW_INSET_ERROR: 'inset 0 1px 3px 0 #fed4d4',
    T_SHADOW_BLOCK_DEFAULT_SM:
        '0 0 2px 0 rgba(0,0,0,0.08), 0 5px 8px -4px rgba(0,0,0,0.12), 0 1px 0 0 rgba(0,0,0,0.05),inset 0 -1px 0px 0px #f8f8ff',
    T_SHADOW_BLOCK_DEFAULT_MD:
        '0 0 1px 0 rgba(0,0,0,0.12), 0 8px 12px -4px rgba(0,0,0,0.12), 0 4px 4px -2px rgba(0,0,0,0.05),inset 0 -2px 0px 0px #f8f8ff',
    T_SHADOW_BLOCK_DEFAULT_LG:
        '0 6px 16px 0 rgba(0,0,0,0.05), 0 16px 24px -8px rgba(0,0,0,0.08), 0 0 16px 0 rgba(0,0,0,0.05),inset 0 -2px 0px 0px #f8f8ff',
    T_SHADOW_BLOCK_LEFT_SM: '-3px 0 3px -2px rgba(0,0,0,0.05),-8px 0 6px -6px rgba(0,0,0,0.08)',
    T_SHADOW_BLOCK_LEFT_LG:
        '-46px 0 24px -35px rgba(0,0,0,0.05),-25px 0 10px -16px rgba(0,0,0,0.05),-10px 0 6px -6px rgba(0,0,0,0.05)',
    T_SHADOW_BLOCK_RIGHT_SM: '3px 0 3px -2px rgba(0,0,0,0.05),8px 0 6px -6px rgba(0,0,0,0.08)',
    T_SHADOW_BLOCK_RIGHT_LG:
        '46px 0 24px -35px rgba(0,0,0,0.05),25px 0 10px -16px rgba(0,0,0,0.05),10px 0 6px -6px rgba(0,0,0,0.05)',
    T_SHADOW_BLOCK_BOTTOM_SM: '0 3px 3px -2px rgba(0,0,0,0.05),0 8px 6px -6px rgba(0,0,0,0.08)',
    T_SHADOW_BLOCK_BOTTOM_LG:
        '0 46px 24px -35px rgba(0,0,0,0.05),0 25px 10px -16px rgba(0,0,0,0.05),0 10px 6px -6px rgba(0,0,0,0.05)',
    T_SHADOW_BLOCK_TOP_SM: '0 -3px 3px -2px rgba(0,0,0,0.05),0 -8px 6px -6px rgba(0,0,0,0.08)',
    T_SHADOW_BLOCK_TOP_LG:
        '0 -46px 24px -35px rgba(0,0,0,0.05),0 -25px 10px -16px rgba(0,0,0,0.05),0 -10px 6px -6px rgba(0,0,0,0.05)',
    T_SHADOW_BUTTON_DEFAULT: '0 2px 0 rgba(0,0,0,.015)',
    T_SHADOW_BUTTON_HOVER: '0 2px 0 rgba(0,0,0,.015)',
    T_SHADOW_BUTTON_PRIMARY: '0 2px 0 rgba(0,0,0,.045)',
    T_SHADOW_BUTTON_PRIMARY_HOVER: '0 2px 0 rgba(0,0,0,.045)',
    T_SHADOW_BUTTON_ERROR: '0 1px 3px -1px #f44336',
    T_SHADOW_BUTTON_ERROR_HOVER: '0 5px 8px -4px #f44336',
    T_SPACING_COMMON_XS: '4px',
    T_SPACING_COMMON_SM: '8px',
    T_SPACING_COMMON_MD: '12px',
    T_SPACING_COMMON_LG: '16px',
    T_SPACING_COMMON_XLG: '20px',
    T_SPACING_COMMON_XXLG: '24px',
    T_SPACING_COMMON_XXXLG: '32px',
    T_FORMITEM_LABEL_MB: '8px',
    T_SQUARE_SM: '24px',
    T_SQUARE_MD: '28px',
    T_SQUARE_LG: '32px',
    T_TYPO_FONT_SIZE_1: '12px',
    T_TYPO_FONT_SIZE_2: '14px',
    T_TYPO_FONT_SIZE_3: '16px',
    T_TYPO_FONT_SIZE_4: '18px',
    T_TYPO_FONT_SIZE_5: '20px',
    T_TYPO_FONT_SIZE_6: '24px',
    T_TYPO_FONT_SIZE_7: '28px',
    T_TYPO_FONT_SIZE_8: '32px',
    T_TYPO_LINE_HEIGHT_SM: '1.3',
    T_TYPO_LINE_HEIGHT_MD: '1.5',
    T_TYPO_LINE_HEIGHT_LG: '1.7',
    T_TYPO_FONT_WEIGHT_NORMAL: '400',
    T_TYPO_FONT_WEIGHT_LIGHT: '300',
    T_TYPO_FONT_WEIGHT_BOLD: '600',
    T_WIDTH_SM: '144px',
    T_WIDTH_MD: '192px',
    T_WIDTH_LG: '320px',
    T_CONTROL_HEIGHT_SM: '24px',
    T_CONTROL_HEIGHT_MD: '28px',
    T_CONTROL_HEIGHT_LG: '32px',
    T_CONTROL_SPACING_SM: '8px',
    T_CONTROL_SPACING_MD: '8px',
    T_CONTROL_SPACING_LG: '12px',
    T_CONTROL_FONT_SIZE_SM: '12px',
    T_CONTROL_FONT_SIZE_MD: '12px',
    T_CONTROL_FONT_SIZE_LG: '14px'
};

export { designTokens };
