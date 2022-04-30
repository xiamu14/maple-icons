import * as React from 'react'
import { SVGProps } from 'react'

const ShipLight = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width="1em"
    height="1em"
    viewBox="0 0 20 20"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M10 0a1 1 0 0 1 1 1v1h1a3 3 0 0 1 3 3v1a3 3 0 0 1 3 3v2.286l.138.04a2.5 2.5 0 0 1 1.73 3.047l-.835 3.127a1 1 0 0 1 .414 1.894l-.105.053a3 3 0 0 1-2.572.053h-.02l.002-.008a2.86 2.86 0 0 1-.094-.045l-.21-.105a1 1 0 0 0-.895 0l-.211.105a3 3 0 0 1-2.684 0l-.21-.105a1 1 0 0 0-.895 0l-.211.105a3 3 0 0 1-2.684 0l-.21-.105a1 1 0 0 0-.895 0l-.211.105a3 3 0 0 1-2.684 0l-.21-.105a1 1 0 0 0-.895 0l-.211.105c-.031.016-.063.03-.094.045l.002.008h-.02a3 3 0 0 1-2.572-.053l-.105-.053A1 1 0 0 1 .967 17.5l-.834-3.127a2.5 2.5 0 0 1 1.729-3.048l.138-.04V9a3 3 0 0 1 3-3V5a3 3 0 0 1 3-3h1V1a1 1 0 0 1 1-1ZM3.01 17.404a3 3 0 0 1 2.332.149l.21.105a1 1 0 0 0 .895 0l.211-.105a3 3 0 0 1 2.684 0l.21.105a1 1 0 0 0 .895 0l.211-.105a3 3 0 0 1 2.684 0l.21.105a1 1 0 0 0 .895 0l.211-.105a3 3 0 0 1 2.331-.15l.946-3.545a.5.5 0 0 0-.346-.61l-7.314-2.09a1 1 0 0 0-.55 0l-7.314 2.09a.5.5 0 0 0-.346.61l.946 3.546Zm.99-6.69 5.176-1.479a3 3 0 0 1 1.648 0L16 10.715V9a1 1 0 0 0-1-1H5a1 1 0 0 0-1 1v1.714ZM7 5a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v1H7V5Z"
      fill={props.color || '#6F767E'}
      fillRule="evenodd"
    />
  </svg>
)

export default ShipLight