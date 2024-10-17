import * as React from "react"
import { SVGProps } from "react"

type SvgComponentProps = SVGProps<SVGSVGElement> & { place?: string };

const SvgComponent = (props: SvgComponentProps) => (
  <svg
    className={`globe-svg ${props.place === "artist-page" && "globe-svg-artist-page"}`}
    // width={32}
    // height={32}
    viewBox="0 0 32 32"
    // fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M16 5C9.92487 5 5 9.92487 5 16C5 22.0751 9.92487 27 16 27C22.0751 27 27 22.0751 27 16C27 9.92487 22.0751 5 16 5ZM3 16C3 8.8203 8.8203 3 16 3C23.1797 3 29 8.8203 29 16C29 23.1797 23.1797 29 16 29C8.8203 29 3 23.1797 3 16Z"
    //   fill="white"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M3.6875 12C3.6875 11.4477 4.13522 11 4.6875 11H27.3125C27.8648 11 28.3125 11.4477 28.3125 12C28.3125 12.5523 27.8648 13 27.3125 13H4.6875C4.13522 13 3.6875 12.5523 3.6875 12Z"
    //   fill="white"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M3.6875 20C3.6875 19.4477 4.13522 19 4.6875 19H27.3125C27.8648 19 28.3125 19.4477 28.3125 20C28.3125 20.5523 27.8648 21 27.3125 21H4.6875C4.13522 21 3.6875 20.5523 3.6875 20Z"
    //   fill="white"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M13.3837 8.13841C12.5439 10.0995 12 12.8783 12 16.0002C12 19.1221 12.5439 21.9009 13.3837 23.862C13.8044 24.8443 14.2797 25.5753 14.7565 26.0462C15.229 26.5129 15.6481 26.6752 16 26.6752C16.3519 26.6752 16.771 26.5129 17.2435 26.0462C17.7203 25.5753 18.1956 24.8443 18.6163 23.862C19.4561 21.9009 20 19.1221 20 16.0002C20 12.8783 19.4561 10.0995 18.6163 8.13841C18.1956 7.15609 17.7203 6.42507 17.2435 5.95417C16.771 5.4875 16.3519 5.3252 16 5.3252C15.6481 5.3252 15.229 5.4875 14.7565 5.95417C14.2797 6.42507 13.8044 7.15609 13.3837 8.13841ZM13.3511 4.53118C14.075 3.81627 14.9712 3.3252 16 3.3252C17.0288 3.3252 17.9251 3.81627 18.6489 4.53118C19.3685 5.24186 19.9707 6.2206 20.4548 7.35104C21.4246 9.61551 22 12.6741 22 16.0002C22 19.3263 21.4246 22.3849 20.4548 24.6493C19.9707 25.7798 19.3685 26.7585 18.6489 27.4692C17.925 28.1841 17.0288 28.6752 16 28.6752C14.9712 28.6752 14.075 28.1841 13.3511 27.4692C12.6315 26.7585 12.0293 25.7798 11.5452 24.6493C10.5754 22.3849 10 19.3263 10 16.0002C10 12.6741 10.5754 9.61551 11.5452 7.35104C12.0293 6.2206 12.6315 5.24186 13.3511 4.53118Z"
    //   fill="white"
    />
  </svg>
)
export { SvgComponent as GlobeSVG }
