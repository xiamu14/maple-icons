import * as React from 'react'
import { SVGProps } from 'react'

const BadgeFilled = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width="1em"
    height="1em"
    viewBox="0 0 18 22"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <g fill={props.color || '#6F767E'} fillRule="evenodd">
      <path d="M7.054 1.658a3 3 0 0 1 3.892 0l.07.06a3 3 0 0 0 1.707.707l.093.008a3 3 0 0 1 2.751 2.752l.008.092a3 3 0 0 0 .707 1.707l.06.07a3 3 0 0 1 0 3.892l-.06.07a3 3 0 0 0-.707 1.707l-.008.092A3 3 0 0 1 14 15.218v4.938a1 1 0 0 1-1.287.958L9 20l-3.713 1.114A1 1 0 0 1 4 20.156v-4.938a3 3 0 0 1-1.567-2.403l-.008-.092a3 3 0 0 0-.707-1.707l-.06-.07a3 3 0 0 1 0-3.892l.06-.07a3 3 0 0 0 .707-1.707l.008-.092a3 3 0 0 1 2.752-2.752l.092-.008a3 3 0 0 0 1.707-.707l.07-.06ZM9.65 3.18l.07.06a5 5 0 0 0 2.845 1.179l.092.007a1 1 0 0 1 .918.918l.007.092A5 5 0 0 0 14.76 8.28l.06.07a1 1 0 0 1 0 1.298l-.06.07a5 5 0 0 0-1.179 2.845l-.007.092a1 1 0 0 1-.918.918l-.092.007A5 5 0 0 0 9.72 14.76l-.07.06a1 1 0 0 1-1.298 0l-.07-.06a5 5 0 0 0-2.845-1.179l-.092-.007a1 1 0 0 1-.918-.918l-.007-.092A5 5 0 0 0 3.24 9.72l-.06-.07a1 1 0 0 1 0-1.298l.06-.07A5 5 0 0 0 4.42 5.436l.007-.092a1 1 0 0 1 .918-.918l.092-.007A5 5 0 0 0 8.28 3.24l.07-.06a1 1 0 0 1 1.298 0Z" />
      <path d="M12 9a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" fillRule="nonzero" />
    </g>
  </svg>
)

export default BadgeFilled