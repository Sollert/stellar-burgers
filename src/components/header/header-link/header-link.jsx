const HeaderLinkText = ({ isActive, text }) => {
	return <span className={`${!isActive && 'text_color_inactive'}`}>{text}</span>
}

export default HeaderLinkText
