import * as React from 'react'
import { SVGProps } from 'react'

const ExpandFilled = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width="1em"
    height="1em"
    viewBox="0 0 20 20"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <g fill={props.color || '#6F767E'} fillRule="evenodd">
      <path d="M0 3a3 3 0 0 1 3-3h2a1 1 0 0 1 0 2H3a1 1 0 0 0-1 1v2a1 1 0 0 1-2 0V3ZM0 17a3 3 0 0 0 3 3h2a1 1 0 0 0 0-2H3a1 1 0 0 1-1-1v-2a1 1 0 0 0-2 0v2ZM20 17a3 3 0 0 1-3 3h-2a1 1 0 0 1 0-2h2a1 1 0 0 0 1-1v-2a1 1 0 0 1 2 0v2ZM20 3a3 3 0 0 0-3-3h-2a1 1 0 0 0 0 2h2a1 1 0 0 1 1 1v2a1 1 0 0 0 2 0V3Z" />
    </g>
  </svg>
)

export default ExpandFilled
