import { SVGProps } from 'react'
import { SVGUniqueID } from 'react-svg-unique-id'

export function Close(props: SVGProps<SVGSVGElement>) {
  return (
    <SVGUniqueID>
      <svg
        viewBox="0 0 512 512"
        height="16"
        width="16"
        xmlns="http://www.w3.org/2000/svg"
        strokeWidth="0"
        stroke="currentColor"
        fill="currentColor"
        {...props}
      >
        <path d="M289.94 256l95-95A24 24 0 00351 127l-95 95-95-95a24 24 0 00-34 34l95 95-95 95a24 24 0 1034 34l95-95 95 95a24 24 0 0034-34z" />
      </svg>
    </SVGUniqueID>
  )
}
