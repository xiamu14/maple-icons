import * as React from 'react'
import { SVGProps } from 'react'

const BurgerFilled = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width="1em"
    height="1em"
    viewBox="0 0 22 18"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <g fill={props.color || '#6F767E'} fillRule="nonzero">
      <path d="M1.5 11.5A1.5 1.5 0 0 1 3 10h16a1.5 1.5 0 0 1 0 3H3a1.5 1.5 0 0 1-1.5-1.5ZM2 15.5a1 1 0 0 1 1-1h16a1 1 0 0 1 1 1 2.5 2.5 0 0 1-2.5 2.5h-13A2.5 2.5 0 0 1 2 15.5ZM2 4.286A4.286 4.286 0 0 1 6.286 0h9.428A4.286 4.286 0 0 1 20 4.286c0 .394-.32.714-.714.714H2.714A.714.714 0 0 1 2 4.286Z" />
      <path d="m6.88 9.3-.062-.071c-.742-.841-1.928-.902-2.735-.14l-.507.478c-.736.695-1.839.535-2.396-.349l-.473-.75C.187 7.643.707 6.5 1.6 6.5h18.8c.893 0 1.413 1.144.893 1.967l-.473.751c-.557.884-1.66 1.044-2.396.35l-.507-.48c-.807-.761-1.993-.7-2.735.14l-.063.071c-.758.86-1.987.86-2.746 0-.758-.859-1.988-.859-2.746 0-.758.86-1.988.86-2.746 0Z" />
    </g>
  </svg>
)

export default BurgerFilled
