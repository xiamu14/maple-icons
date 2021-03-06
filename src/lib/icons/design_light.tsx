import * as React from 'react'
import { SVGProps } from 'react'

const DesignLight = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width="1em"
    height="1em"
    viewBox="0 0 22 22"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="m11.728 4.657-2.85-2.85a3 3 0 0 0-4.242 0l-2.828 2.83a3 3 0 0 0 0 4.242l1.407 1.407.007.007.006.007 1.429 1.428-2.2 2.2a1 1 0 0 0-.274.511l-1.06 5.303a1 1 0 0 0 1.176 1.177l5.304-1.06a1 1 0 0 0 .51-.274l2.2-2.2 2.808 2.807a3 3 0 0 0 4.243 0l2.828-2.828a3 3 0 0 0 0-4.243l-2.807-2.807 2.535-2.536a3 3 0 0 0 0-4.242L18.506 2.12a3 3 0 0 0-4.243 0l-2.535 2.536ZM3.222 6.05a1 1 0 0 0 0 1.414l.707.708 1.414-1.415a1 1 0 0 1 1.414 1.415L5.343 9.586l.728.728 4.243-4.243-2.85-2.85a1 1 0 0 0-1.414 0l-2.828 2.83Zm12.748 5.678-4.242 4.243.686.686.707-.707a1 1 0 0 1 1.414 1.414l-.707.707.707.707a1 1 0 0 0 1.415 0l2.828-2.828a1 1 0 0 0 0-1.414l-2.808-2.808Zm2.536-6.778-1.414-1.414a1 1 0 0 0-1.414 0L14.263 4.95l2.829 2.828 1.414-1.414a1 1 0 0 0 0-1.414ZM4.085 15.128l8.764-8.764 2.829 2.828-8.765 8.765-3.535.707.707-3.536Z"
      fill={props.color || '#6F767E'}
      fillRule="evenodd"
    />
  </svg>
)

export default DesignLight
