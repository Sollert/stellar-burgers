import {HeaderLinkProps} from "../../../services/types/types";

const HeaderLinkText = ({isActive, text}: HeaderLinkProps) => {
  return <span className={`${!isActive && 'text_color_inactive'}`}>{text}</span>
}

export default HeaderLinkText
