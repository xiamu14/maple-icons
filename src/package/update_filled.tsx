import * as React from 'react'
import { SVGProps } from 'react'

const UpdateFilled = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width="1em"
    height="1em"
    viewBox="0 0 20 20"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <g fill={props.color || '#6F767E'} fillRule="evenodd">
      <path
        d="M2 10a8 8 0 0 1 8-8 7.846 7.846 0 0 1 6.182 2.993l-1.68-.005a1 1 0 1 0-.005 2l3.559.01.441.002A1 1 0 0 0 19.5 6V2a1 1 0 1 0-2 0v1.45A9.83 9.83 0 0 0 10 0C4.477 0 0 4.477 0 10s4.477 10 10 10c3.936 0 7.264-2.272 8.895-5.555a1 1 0 1 0-1.79-.89C15.79 16.199 13.132 18 10 18a8 8 0 0 1-8-8Z"
        fillRule="nonzero"
      />
      <path d="M10 5a1 1 0 0 1 1 1v3.586l1.707 1.707a1 1 0 0 1-1.414 1.414L9.586 11A2 2 0 0 1 9 9.586V6a1 1 0 0 1 1-1Z" />
    </g>
  </svg>
)

export default UpdateFilled
