import React from 'react'

const Message = ({ message }) => {
    if (message === null) {
        return null
    }

    return (
        <div className={message.includes('removed') ? "error" : "message"}>
            {message}
        </div>
    )
}

export default Message