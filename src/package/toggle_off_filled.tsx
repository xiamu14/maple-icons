import * as React from 'react'
import { SVGProps } from 'react'

const ToggleOffFilled = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width="1em"
    height="1em"
    viewBox="0 0 20 14"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <g fill={props.color || '#6F767E'} fillRule="evenodd">
      <path d="M0 7a7 7 0 0 1 7-7h6a7 7 0 1 1 0 14H7a7 7 0 0 1-7-7Zm7-5a5 5 0 0 0 0 10h6a5 5 0 0 0 0-10H7Z" />
      <path
        d="M7 3.5a3.5 3.5 0 1 0 0 7 3.5 3.5 0 0 0 0-7Z"
        fillRule="nonzero"
      />
    </g>
  </svg>
)

export default ToggleOffFilled
