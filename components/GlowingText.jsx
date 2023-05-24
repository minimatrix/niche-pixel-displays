const GlowingText = ({ tag: Tag, children, glowColor, glowSpread, textColor, style, ...props }) => {
    const unit = glowSpread / 8;

    const shadow = `
            0 0 ${unit}px ${textColor},
            0 0 ${unit * 2}px ${textColor},
            0 0 ${unit * 3}px ${textColor},
            0 0 ${unit * 4}px ${glowColor},
            0 0 ${unit * 5}px ${glowColor},
            0 0 ${unit * 6}px ${glowColor},
            0 0 ${glowSpread}px ${glowColor}
    `
    return <Tag style={{ color: textColor, textShadow: shadow, ...style }}  >{children}</Tag>
}


export default GlowingText;