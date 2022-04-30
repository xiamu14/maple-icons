import * as React from 'react'
import { SVGProps } from 'react'

const AppleFilled = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width="1em"
    height="1em"
    viewBox="0 0 16 20"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M13.6 10.625c.019 1.954 1.12 3.067 1.906 3.613.418.29.669.803.474 1.274a11.152 11.152 0 0 1-1.08 2.005c-.833 1.218-1.698 2.432-3.06 2.457-1.34.025-1.77-.794-3.302-.794-1.53 0-2.009.769-3.276.819-1.316.05-2.318-1.318-3.158-2.532C.386 14.984-.926 10.451.836 7.391c.876-1.52 2.44-2.482 4.139-2.507 1.292-.025 2.51.869 3.3.869s2.272-1.075 3.83-.917c.535.022 1.864.186 2.974 1.195.42.384.27 1.036-.135 1.435-.618.608-1.357 1.65-1.343 3.16Zm-2.516-7.432c.512-.62.902-1.418 1.022-2.262a.68.68 0 0 0-.895-.755c-.76.249-1.52.74-2.033 1.34-.496.573-.944 1.41-1.058 2.286-.061.468.34.849.802.75.841-.182 1.63-.716 2.162-1.359Z"
      fill={props.color || '#6F767E'}
      fillRule="nonzero"
    />
  </svg>
)

export default AppleFilled