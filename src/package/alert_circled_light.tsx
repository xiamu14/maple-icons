import * as React from 'react'
import { SVGProps } from 'react'

const AlertCircledLight = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width="1em"
    height="1em"
    viewBox="0 0 20 20"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <g fill={props.color || '#6F767E'} fillRule="evenodd">
      <path d="M10 12a1 1 0 0 0 1-1V6a1 1 0 0 0-2 0v5a1 1 0 0 0 1 1Z" />
      <path d="M11 14a1 1 0 1 1-2 0 1 1 0 0 1 2 0Z" fillRule="nonzero" />
      <path d="M10 18a8 8 0 1 0 0-16 8 8 0 0 0 0 16Zm0 2c5.523 0 10-4.477 10-10S15.523 0 10 0 0 4.477 0 10s4.477 10 10 10Z" />
    </g>
  </svg>
)

export default AlertCircledLight
