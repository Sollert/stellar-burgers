import {HeaderLinkProps} from "./header-link.types";

const HeaderLinkText = ({isActive, text}: HeaderLinkProps) => {
  return <span className={`${!isActive && 'text_color_inactive'}`}>{text}</span>
}

export default HeaderLinkText
