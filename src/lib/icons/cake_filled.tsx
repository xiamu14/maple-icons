import * as React from 'react'
import { SVGProps } from 'react'

const CakeFilled = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width="1em"
    height="1em"
    viewBox="0 0 20 20"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <g fill={props.color || '#6F767E'} fillRule="evenodd">
      <g fillRule="nonzero">
        <path d="M.174 10.83a.462.462 0 0 0 .225.532l1.609.92a2 2 0 0 0 1.984 0l1.516-.867a2 2 0 0 1 1.984 0l1.516.866a2 2 0 0 0 1.984 0l1.516-.866a2 2 0 0 1 1.984 0l1.516.866a2 2 0 0 0 1.984 0l1.609-.919a.462.462 0 0 0 .225-.532A4.002 4.002 0 0 0 16 8H4a4.002 4.002 0 0 0-3.826 2.83ZM20 14.3a.5.5 0 0 0-.748-.435l-.267.153a4 4 0 0 1-3.97 0l-1.515-.866-1.515.866a4 4 0 0 1-3.97 0L6.5 13.152l-1.515.866a4 4 0 0 1-3.97 0l-.267-.153a.5.5 0 0 0-.748.434V18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-3.7Z" />
      </g>
      <path d="M10 5a1 1 0 0 1 1 1v2a1 1 0 0 1-2 0V6a1 1 0 0 1 1-1ZM8.737 1.605a1.53 1.53 0 0 0 2.458 1.821v-.001c.21-.262.335-.594.335-.955 0-.321-.098-.62-.267-.865a1.542 1.542 0 0 0-.067-.09l-.001-.002v-.001a41.045 41.045 0 0 0-.943-1.215.323.323 0 0 0-.504 0 53.567 53.567 0 0 0-.942 1.214v.002c-.024.03-.047.06-.068.09v.002Zm1.307.83.045.035-.045-.034Z" />
    </g>
  </svg>
)

export default CakeFilled
