import { SVGProps } from 'react'
import { SVGUniqueID } from 'react-svg-unique-id'

export function Layout(props: SVGProps<SVGSVGElement>) {
  return (
    <SVGUniqueID>
      <svg
        width="40"
        height="40"
        viewBox="0 0 40 40"
        xmlns="http://www.w3.org/2000/svg"
        strokeWidth="0"
        stroke="currentColor"
        fill="currentColor"
        {...props}
      >
        <path
          d="M23.3333 6.66667H35M23.3333 15H35M23.3333 25H35M23.3333 33.3333H35M5 23.3333H16.6667V35H5V23.3333ZM5 5H16.6667V16.6667H5V5Z"
          strokeWidth="3"
          strokeLinecap="round"
          strokeLinejoin="round"
          fill="transparent"
          stroke="currentColor"
        />
      </svg>
    </SVGUniqueID>
  )
}
