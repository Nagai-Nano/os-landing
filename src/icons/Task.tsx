import { SVGProps } from 'react'
import { SVGUniqueID } from 'react-svg-unique-id'

export function Task(props: SVGProps<SVGSVGElement>) {
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
          d="M8.33333 36.6667H31.6667C33.505 36.6667 35 35.1717 35 33.3333V8.33334C35 6.49501 33.505 5.00001 31.6667 5.00001H28.3333C28.3333 4.55798 28.1577 4.13406 27.8452 3.8215C27.5326 3.50894 27.1087 3.33334 26.6667 3.33334H13.3333C12.8913 3.33334 12.4674 3.50894 12.1548 3.8215C11.8423 4.13406 11.6667 4.55798 11.6667 5.00001H8.33333C6.495 5.00001 5 6.49501 5 8.33334V33.3333C5 35.1717 6.495 36.6667 8.33333 36.6667ZM8.33333 8.33334H11.6667V11.6667H28.3333V8.33334H31.6667V33.3333H8.33333V8.33334Z"
          fill="currentColor"
        />
        <path
          d="M18.3333 22.6433L15.3449 19.655L12.9883 22.0117L18.3333 27.3567L27.0116 18.6783L24.6549 16.3217L18.3333 22.6433Z"
          fill="currentColor"
        />
      </svg>
    </SVGUniqueID>
  )
}
