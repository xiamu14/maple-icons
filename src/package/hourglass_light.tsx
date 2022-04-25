import * as React from 'react'
import { SVGProps } from 'react'

const HourglassLight = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width="1em"
    height="1em"
    viewBox="0 0 16 20"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M0 1a1 1 0 0 1 1-1h14a1 1 0 1 1 0 2v.578a8 8 0 0 1-1.344 4.437L11.666 10l1.99 2.985A8 8 0 0 1 15 17.422V18a1 1 0 1 1 0 2H1a1 1 0 1 1 0-2v-.578a8 8 0 0 1 1.344-4.437L4.334 10l-1.99-2.985A8 8 0 0 1 1 2.578V2a1 1 0 0 1-1-1Zm3 17h1.25l1.206-1.93c1.175-1.88 3.913-1.88 5.088 0L11.75 18H13v-.578a6 6 0 0 0-1.008-3.328L9.93 11H6.07l-2.062 3.094A6 6 0 0 0 3 17.422V18Zm6.392 0-.544-.87a1 1 0 0 0-1.696 0l-.544.87h2.784ZM3 2h10v.578A6 6 0 0 1 12.49 5H3.51A6 6 0 0 1 3 2.578V2Zm1.737 5L6.07 9h3.86l1.333-2H4.737Z"
      fill={props.color || '#6F767E'}
      fillRule="evenodd"
    />
  </svg>
)

export default HourglassLight
