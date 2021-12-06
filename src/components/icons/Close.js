import React from 'react'

const Close = (props) => {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width={16}
            height={16}
            fill="currentColor"
            className="prefix__bi prefix__bi-x-lg"
            { ...props }
        >
        <path
            fillRule="evenodd"
            d="M13.854 2.146a.5.5 0 010 .708l-11 11a.5.5 0 01-.708-.708l11-11a.5.5 0 01.708 0z"
        />
        <path
            fillRule="evenodd"
            d="M2.146 2.146a.5.5 0 000 .708l11 11a.5.5 0 00.708-.708l-11-11a.5.5 0 00-.708 0z"
        />
        </svg>
    )
}

export default Close