import * as React from 'react'
import { SVGProps } from 'react'

const AppleLight = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width="1em"
    height="1em"
    viewBox="0 0 16 20"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M.836 7.39c.876-1.52 2.44-2.481 4.139-2.506.505-.01.998.12 1.46.284.208.073.41.153.602.23.474.187.897.355 1.239.355.231 0 .522-.092.857-.22a26 26 0 0 0 .34-.131c.754-.298 1.678-.662 2.631-.566.053.002.113.006.18.011.614.051 1.794.273 2.795 1.184.42.384.27 1.036-.135 1.435-.618.608-1.357 1.65-1.343 3.16.018 1.953 1.119 3.066 1.905 3.612.418.29.669.803.474 1.274a11.152 11.152 0 0 1-1.08 2.005c-.833 1.218-1.698 2.432-3.06 2.457-.655.012-1.092-.177-1.547-.374-.476-.206-.971-.42-1.755-.42-.82 0-1.337.22-1.836.433-.433.184-.852.363-1.44.386-1.316.05-2.318-1.318-3.158-2.532C.386 14.984-.926 10.451.836 7.391ZM8.12 3.803c.005-.04.011-.082.018-.122.138-.832.567-1.618 1.04-2.164.26-.304.584-.58.94-.812l.002-.001a4.73 4.73 0 0 1 1.09-.527.68.68 0 0 1 .896.755 4.353 4.353 0 0 1-.342 1.166l-.001.004a4.833 4.833 0 0 1-.68 1.092 4.2 4.2 0 0 1-.98.863l-.005.003c-.364.23-.764.404-1.176.492a.659.659 0 0 1-.646-.213.68.68 0 0 1-.156-.536ZM5.23 18.004a.04.04 0 0 1-.009-.002l.01.002Zm6.37-7.36a6.186 6.186 0 0 1 1.155-3.68 2.973 2.973 0 0 0-.734-.13 2.004 2.004 0 0 1-.118-.008c-.292-.03-.683.05-1.299.282-.07.026-.186.072-.317.123-.216.084-.472.185-.624.24-.286.102-.813.282-1.387.282-.535 0-1.011-.144-1.31-.246-.233-.078-.498-.183-.708-.267l-.171-.067c-.56-.219-.86-.294-1.074-.29h-.01c-.947.014-1.886.556-2.434 1.506-.563.978-.71 2.348-.434 3.909.272 1.544.92 3.028 1.613 4.03.432.624.782 1.098 1.124 1.42.192.18.302.235.341.25.19-.01.308-.057.81-.27.56-.236 1.354-.548 2.515-.548 1.189 0 1.989.342 2.516.57.468.203.555.228.748.224h.003c.032 0 .14-.001.398-.242.304-.285.612-.708 1.047-1.345.22-.32.405-.642.558-.94a6.508 6.508 0 0 1-1.237-1.425c-.546-.859-.957-1.972-.97-3.379Z"
      fill={props.color || '#6F767E'}
      fillRule="evenodd"
    />
  </svg>
)

export default AppleLight
