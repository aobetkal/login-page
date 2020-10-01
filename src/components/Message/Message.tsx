import React from 'react';

import Typography from '@material-ui/core/Typography';

import { MessageProps } from './MessageProps';

const Message = (props: MessageProps): JSX.Element | null => {
    const { message, type, isDisplayed } = props;

    if (isDisplayed) {
        return (
            <Typography
                color={type}
                display='inline'
            >
                {message}
            </Typography>
        );
    }

    return null;
};

export default Message;