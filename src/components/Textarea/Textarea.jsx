import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { TextareaWrap } from './style';

// TODO: autoSize https://github.com/ant-design/ant-design/blob/master/components/input/calculateNodeHeight.tsx

class Textarea extends Component {
    static propTypes = {
        /** @ignore */
        className: PropTypes.string,
        /** 是否使用带阴影的输入框 */
        isShadowInput: PropTypes.bool
    };
    render() {
        const { ...rest } = this.props;
        return <TextareaWrap {...rest} />;
    }
}

export default Textarea;
