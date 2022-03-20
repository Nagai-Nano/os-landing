import { SVGProps } from 'react'
import { SVGUniqueID } from 'react-svg-unique-id'

export function News(props: SVGProps<SVGSVGElement>) {
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
          d="M33.3334 8.33333V31.6667H6.66671V8.33333H33.3334ZM33.3334 5H6.66671C4.81671 5 3.33337 6.48333 3.33337 8.33333V31.6667C3.33337 33.5167 4.81671 35 6.66671 35H33.3334C35.1834 35 36.6667 33.5167 36.6667 31.6667V8.33333C36.6667 6.48333 35.1834 5 33.3334 5ZM30 25H10V28.3333H30V25ZM16.6667 11.6667H10V21.6667H16.6667V11.6667ZM20 15H30V11.6667H20V15ZM30 18.3333H20V21.6667H30V18.3333Z"
          fill="currentColor"
        />
      </svg>
    </SVGUniqueID>
  )
}
