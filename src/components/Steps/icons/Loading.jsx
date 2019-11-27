import React, { PureComponent } from 'react';

import SvgIcon from '../SvgIcon';

export default class Loading extends PureComponent {
    render() {
        return (
            <SvgIcon {...this.props}>
                <path d="M12 2a1 1 0 010 2.09A7.91 7.91 0 1019.91 12 1 1 0 0122 12 10 10 0 1112 2z" />
            </SvgIcon>
        );
    }
}