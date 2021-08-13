import React from 'react'
import BackgroundImage from 'gatsby-background-image'
import { convertToBgImage } from "gbimage-bridge"
import { getImage } from "gatsby-plugin-image"
import PropTypes from 'prop-types';

/**
 * Background component for banners and the hero section
 * 
 * @param { node } children Optional JSX Hero content
 * @param { boolean } darkImage Makes the image darker
 * @param { string } minHeight For the height of a banner, default height is 100vh
 * @param { object } placeholderImage
 */
 const GbiBridged = ({ children, darkImage, minHeight, placeholderImage }) => {
    const image = getImage( placeholderImage )

    // Use like this:
    const bgImage = convertToBgImage( image )

    const backgroundStyle = {
        minHeight: minHeight || "100vh",
        backgroundColor: darkImage ? 'rgba(0,0,0,0.65)' : 'transparent' 
    }

    return (
        <BackgroundImage
        Tag="section"
        /** Spread bgImage into BackgroundImage: */
        { ...bgImage }
        preserveStackingContext
        >
        <div style={ backgroundStyle }>
            { children }
        </div>
        </BackgroundImage>
    )
}

GbiBridged.defaultProps = {
    darkImage: false
};
  
  GbiBridged.propTypes = {
    children: PropTypes.node,
    darkImage: PropTypes.bool,
    minHeight: PropTypes.string,
    placeholderImage: PropTypes.object.isRequired,
};

export default GbiBridged
