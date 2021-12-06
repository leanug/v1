import React from 'react'

const ArrowUp = ({ props }) => {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width={26}
            height={26}
            viewBox="0 0 16 16"
            fill="currentColor"
            style={{ overflow: 'visible', width: '100%' }}
            className="prefix__bi prefix__bi-arrow-up-short"
            { ...props }
        >
            <path
                fillRule="evenodd"
                d="M8 12a.5.5 0 00.5-.5V5.707l2.146 2.147a.5.5 0 00.708-.708l-3-3a.5.5 0 00-.708 0l-3 3a.5.5 0 10.708.708L7.5 5.707V11.5a.5.5 0 00.5.5z"
            />
        </svg>
    )
}

export default ArrowUp
