import { SVGProps } from 'react'
import { SVGUniqueID } from 'react-svg-unique-id'

export function Menu(props: SVGProps<SVGSVGElement>) {
  return (
    <SVGUniqueID>
      <svg
        viewBox="0 0 20 20"
        height="16"
        width="16"
        xmlns="http://www.w3.org/2000/svg"
        strokeWidth="0"
        stroke="currentColor"
        fill="currentColor"
        {...props}
      >
        <path
          d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM9 15a1 1 0 011-1h6a1 1 0 110 2h-6a1 1 0 01-1-1z"
          fillRule="evenodd"
          clipRule="evenodd"
        />
      </svg>
    </SVGUniqueID>
  )
}
