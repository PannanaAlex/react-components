const designTokens = {
    T_BUTTON_COMMON_COLOR_MASK: '#ffffff',
    T_BUTTON_PRIMARY_COLOR_BG_DEFAULT: 'linear-gradient(135deg, #6488fc 0%,#3860f4 100%)',
    T_BUTTON_PRIMARY_COLOR_BG_HOVER: 'linear-gradient(135deg, #5c76e8 0%,#3357df 100%)',
    T_BUTTON_PRIMARY_COLOR_TEXT_DEFAULT: '#ffffff',
    T_BUTTON_SECONDARY_COLOR_BG_DEFAULT: '#ffffff',
    T_COLOR_BG_MENU: '#ffffff',
    T_COLOR_BG_WHITE: '#ffffff',
    T_COLOR_BG_TRANSPARENT: 'transparent',
    T_COLOR_BG_PRIMARY_1: '#3860f4',
    T_COLOR_BG_PRIMARY_2: '#3357df',
    T_COLOR_BG_PRIMARY_3: 'linear-gradient(135deg, #6488fc 0%,#3860f4 100%)',
    T_COLOR_BG_PRIMARY_4: 'linear-gradient(135deg, #5c76e8 0%,#3357df 100%)',
    T_COLOR_BG_PRIMARY_5: '#e3e9ff',
    T_COLOR_BG_DEFAULT_NORMAL: '#ffffff',
    T_COLOR_BG_DEFAULT_LIGHT: '#fafafc',
    T_COLOR_BG_DEFAULT_DARK: '#f6f6fb',
    T_COLOR_BG_DEFAULT_HOVER: '#eaeefd',
    T_COLOR_BG_CONTENT_1: 'linear-gradient(180deg, #e7eaf3 0%, #e7eaf3 100%)',
    T_COLOR_BG_NOTICE_LIGHT: '#fafafc',
    T_COLOR_BG_NOTICE_DARK: '#526075',
    T_COLOR_BG_SUCCESS_LIGHT: '#edfff2',
    T_COLOR_BG_SUCCESS_DARK: '#4cd964',
    T_COLOR_BG_WARNING_LIGHT: '#fffce5',
    T_COLOR_BG_WARNING_DARK: '#f9ce1d',
    T_COLOR_BG_ERROR_LIGHT: '#fff0f0',
    T_COLOR_BG_ERROR_DARK: '#f44336',
    T_COLOR_BG_DISABLED_LIGHT: '#f7f7f7',
    T_COLOR_BG_DISABLED_DARK: '#cccccc',
    T_COLOR_BG_SIDEBAR: '#e7e9f3',
    T_COLOR_LINE_DEFAULT_LIGHT: '#d2d6ea',
    T_COLOR_LINE_DEFAULT_DARK: '#c3cad9',
    T_COLOR_LINE_DEFAULT_TRANSPARENT: 'transparent',
    T_COLOR_LINE_PRIMARY_DEFAULT: '#3860f4',
    T_COLOR_LINE_PRIMARY_HOVER: '#3357df',
    T_COLOR_LINE_PRIMARY_LIGHT: '#e3e9ff',
    T_COLOR_LINE_NOTICE_LIGHT: '#d2d6ea',
    T_COLOR_LINE_NOTICE_DARK: '#526075',
    T_COLOR_LINE_SUCCESS_LIGHT: '#9effa5',
    T_COLOR_LINE_SUCCESS_DARK: '#4cd964',
    T_COLOR_LINE_WARNING_LIGHT: '#fff28f',
    T_COLOR_LINE_WARNING_DARK: '#f9ce1d',
    T_COLOR_LINE_ERROR_LIGHT: '#fed4d4',
    T_COLOR_LINE_ERROR_DARK: '#f44336',
    T_COLOR_LINE_DISABLED_LIGHT: '#d9d9d9',
    T_COLOR_LINE_DISABLED_DARK: '#cccccc',
    T_COLOR_TEXT_WHITE: '#ffffff',
    T_COLOR_TEXT_DEFAULT_NORMAL: '#ffffff',
    T_COLOR_TEXT_DEFAULT_LIGHT: '#526075',
    T_COLOR_TEXT_DEFAULT_DARK: '#0a1633',
    T_COLOR_TEXT_PRIMARY_DEFAULT: '#3860f4',
    T_COLOR_TEXT_PRIMARY_HOVER: '#3357df',
    T_COLOR_TEXT_REMARK_LIGHT: 'rgba(10,22,51,0.12)',
    T_COLOR_TEXT_REMARK_DARK: '#7a8baa',
    T_COLOR_TEXT_SUCCESS: '#4cd964',
    T_COLOR_TEXT_WARNING: '#f9ce1d',
    T_COLOR_TEXT_ERROR: '#f44336',
    T_COLOR_TEXT_DISABLED: '#cccccc',
    T_COLOR_LEGEND_PURPLE_1: '#f7f1fd',
    T_COLOR_LEGEND_PURPLE_2: '#dec6f9',
    T_COLOR_LEGEND_PURPLE_3: '#cdaaf5',
    T_COLOR_LEGEND_PURPLE_4: '#bd8df2',
    T_COLOR_LEGEND_PURPLE_5: '#ac71ef',
    T_COLOR_LEGEND_PURPLE_6: '#9b66d7',
    T_COLOR_LEGEND_PURPLE_7: '#784fa7',
    T_COLOR_LEGEND_PURPLE_8: '#452d60',
    T_COLOR_LEGEND_PURPLE_9: '#221730',
    T_COLOR_LEGEND_LIGHTBLUE_1: '#eafaff',
    T_COLOR_LEGEND_LIGHTBLUE_2: '#abebff',
    T_COLOR_LEGEND_LIGHTBLUE_3: '#82e2ff',
    T_COLOR_LEGEND_LIGHTBLUE_4: '#58d8ff',
    T_COLOR_LEGEND_LIGHTBLUE_5: '#2eceff',
    T_COLOR_LEGEND_LIGHTBLUE_6: '#29b9e6',
    T_COLOR_LEGEND_LIGHTBLUE_7: '#2090b3',
    T_COLOR_LEGEND_LIGHTBLUE_8: '#125266',
    T_COLOR_LEGEND_LIGHTBLUE_9: '#092933',
    T_COLOR_LEGEND_BLUE_1: '#edf5fe',
    T_COLOR_LEGEND_BLUE_2: '#b6d9fb',
    T_COLOR_LEGEND_BLUE_3: '#92c5f9',
    T_COLOR_LEGEND_BLUE_4: '#6db2f7',
    T_COLOR_LEGEND_BLUE_5: '#499ff5',
    T_COLOR_LEGEND_BLUE_6: '#428fdd',
    T_COLOR_LEGEND_BLUE_7: '#336fac',
    T_COLOR_LEGEND_BLUE_8: '#1d4062',
    T_COLOR_LEGEND_BLUE_9: '#0f2031',
    T_COLOR_LEGEND_ORANGE_1: '#fff4f0',
    T_COLOR_LEGEND_ORANGE_2: '#fed4c3',
    T_COLOR_LEGEND_ORANGE_3: '#fdbfa6',
    T_COLOR_LEGEND_ORANGE_4: '#fda988',
    T_COLOR_LEGEND_ORANGE_5: '#fc946a',
    T_COLOR_LEGEND_ORANGE_6: '#e3855f',
    T_COLOR_LEGEND_ORANGE_7: '#b0684a',
    T_COLOR_LEGEND_ORANGE_8: '#653b2a',
    T_COLOR_LEGEND_ORANGE_9: '#321e15',
    T_COLOR_LEGEND_YELLOW_1: '#fffcea',
    T_COLOR_LEGEND_YELLOW_2: '#fff3a9',
    T_COLOR_LEGEND_YELLOW_3: '#ffee7f',
    T_COLOR_LEGEND_YELLOW_4: '#ffe854',
    T_COLOR_LEGEND_YELLOW_5: '#ffe229',
    T_COLOR_LEGEND_YELLOW_6: '#e6cb25',
    T_COLOR_LEGEND_YELLOW_7: '#b39e1d',
    T_COLOR_LEGEND_YELLOW_8: '#665a10',
    T_COLOR_LEGEND_YELLOW_9: '#332d08',
    T_COLOR_LEGEND_CYAN_1: '#e7fefa',
    T_COLOR_LEGEND_CYAN_2: '#9dfbeb',
    T_COLOR_LEGEND_CYAN_3: '#6cf9e2',
    T_COLOR_LEGEND_CYAN_4: '#3bf7d8',
    T_COLOR_LEGEND_CYAN_5: '#0af5ce',
    T_COLOR_LEGEND_CYAN_6: '#09ddb9',
    T_COLOR_LEGEND_CYAN_7: '#07ac90',
    T_COLOR_LEGEND_CYAN_8: '#046252',
    T_COLOR_LEGEND_CYAN_9: '#023129',
    T_LOADING_COLOR_LAYER_DEFAULT: 'rgba(255,255,255,0.70)',
    T_MODAL_COLOR_LAYER_DEFAULT: 'rgba(0,0,0,0.7)',
    T_MODAL_SHADOW_DEFAULT:
        '0 3px 6px -4px rgba(0,0,0,0.12),0 6px 16px 0 rgba(0,0,0,0.08),0 9px 28px 8px rgba(0,0,0,0.05)',
    T_PAY_COLOR_BG_1: 'linear-gradient(180deg, #e7eaf3 0%, #e7eaf3 100%)',
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
    T_SWITCH_COLOR_BG_INNER_ON: '#edfff2',
    T_SWITCH_COLOR_TEXT_OFF: '#526075',
    T_SWITCH_COLOR_TEXT_ON: '#4cd964',
    T_TABLE_ROW_COLOR_BG_DEFAULT: '#f6f6fb',
    T_TABLE_ROW_COLOR_BG_HOVER: '#eaeefd',
    T_TABS_DEFAULT_COLOR_BG_DEFAULT: '#e7eaf3',
    T_TABS_DEFAULT_COLOR_BG_HOVER: '#fafafc',
    T_TABS_DEFAULT_COLOR_LINE_HOVER: '#efeff8',
    T_CARD_COLOR_BG_DEFAULT: '#ffffff',
    T_CORNER_SM: '2px',
    T_CORNER_LG: '4px',
    T_CORNER_CIRCLE: '50%',
    T_CORNER_ZERO: '0',
    T_HEIGHT_SM: '24px',
    T_HEIGHT_MD: '28px',
    T_HEIGHT_LG: '32px',
    T_IDE_DEFAULT_COLOR_BG_DEFAULT: '#0a1633',
    T_IDE_READONLY_COLOR_BG_DEFAULT: '#f6f6fb',
    T_INPUT_COLOR_BG_DEFAULT: '#fafafc',
    T_INPUT_COLOR_BG_ACTIVE: '#f6f6fb',
    T_LINE_WIDTH_BASE: '1px',
    T_LINE_WIDTH_SM: '0px',
    T_LINE_WIDTH_LG: '2px',
    T_LINE_STYLE_BASE: 'solid',
    T_LINE_STYLE_DASHED: 'dashed',
    T_SHADOW_INSET_1: 'inset 0 1px 3px 0 #d2d6ea',
    T_SHADOW_BLOCK_DEFAULT_SM:
        '0 0 2px 0 rgba(0,0,0,0.08), 0 5px 8px -4px rgba(0,0,0,0.12), 0 1px 0 0 rgba(0,0,0,0.05)',
    T_SHADOW_BLOCK_DEFAULT_MD:
        '0 0 1px 0 rgba(0,0,0,0.12), 0 8px 12px -4px rgba(0,0,0,0.12), 0 4px 4px -2px rgba(0,0,0,0.05)',
    T_SHADOW_BLOCK_DEFAULT_LG:
        '0 0 1px 0 rgba(0,0,0,0.05), 0 12px 32px -4px rgba(0,0,0,0.08), 0 2px 17px -6px rgba(0,0,0,0.05)',
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
    T_SHADOW_BUTTON_DEFAULT:
        '0 1px 2px 0 rgba(0,0,0,0.08),0 1px 1px -1px rgba(0,0,0,0.30),0 1px 3px -1px rgba(0,0,0,0.12),inset 0 1px 0 0 rgba(0,0,0,0.05)',
    T_SHADOW_BUTTON_HOVER:
        '0 0 1px 0 rgba(0,0,0,0.12),0 8px 12px -4px rgba(0,0,0,0.12),0 2px 1px -1px rgba(0,0,0,0.05)',
    T_SHADOW_BUTTON_PRIMARY: '0 1px 3px -1px #5c76e8',
    T_SHADOW_BUTTON_PRIMARY_HOVER: '0 5px 8px -4px #5c76e8',
    T_SHADOW_BUTTON_ERROR: '0 1px 3px -1px #f44336',
    T_SHADOW_BUTTON_ERROR_HOVER: '0 5px 8px -4px #f44336',
    T_SPACING_COMMON_XS: '4px',
    T_SPACING_COMMON_SM: '8px',
    T_SPACING_COMMON_MD: '12px',
    T_SPACING_COMMON_LG: '16px',
    T_SPACING_COMMON_XLG: '20px',
    T_SPACING_COMMON_XXLG: '24px',
    T_SPACING_COMMON_XXXLG: '32px',
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
    T_WIDTH_LG: '320px'
};

export { designTokens };
