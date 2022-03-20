import { SVGProps } from 'react'
import { SVGUniqueID } from 'react-svg-unique-id'

export function ArrowRight(props: SVGProps<SVGSVGElement>) {
  return (
    <SVGUniqueID>
      <svg
        width="18"
        height="18"
        viewBox="0 0 18 18"
        xmlns="http://www.w3.org/2000/svg"
        strokeWidth="0"
        stroke="currentColor"
        fill="currentColor"
        {...props}
      >
        <path
          d="M12.6518 4.26715L11.8563 5.06263L15.2312 8.43752H0.5625V9.56256H15.2311L11.8563 12.9373L12.6518 13.7328L17.3847 8.99999L12.6518 4.26715Z"
          fill="currentColor"
        />
      </svg>
    </SVGUniqueID>
  )
}
