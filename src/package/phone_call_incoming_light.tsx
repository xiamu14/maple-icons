import * as React from 'react'
import { SVGProps } from 'react'

const PhoneCallIncomingLight = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width="1em"
    height="1em"
    viewBox="0 0 20 20"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <g fill={props.color || '#6F767E'} fillRule="evenodd">
      <path d="M6.325 4.998 4.817 2.943a.327.327 0 0 0-.442-.082C2.403 4.138 1.861 6.087 2.652 7.524c.865 1.572 2.2 3.5 4.247 5.547 2.048 2.047 3.975 3.382 5.547 4.248 1.437.791 3.387.249 4.663-1.724a.327.327 0 0 0-.08-.442l-2.057-1.507a1 1 0 0 0-1.038-.088l-.82.41c-.697.348-1.652.47-2.557.005-.604-.31-1.536-.902-2.597-1.963-1.06-1.06-1.652-1.992-1.963-2.597-.465-.904-.342-1.86.006-2.557l.41-.819a1 1 0 0 0-.088-1.039ZM3.289 1.182C.749 2.826-.56 5.838.9 8.49c.952 1.73 2.4 3.81 4.585 5.996 2.186 2.186 4.267 3.633 5.997 4.586 2.65 1.46 5.663.151 7.306-2.39a2.327 2.327 0 0 0-.577-3.14l-2.056-1.508a3 3 0 0 0-3.116-.264l-.82.41a.822.822 0 0 1-.747.016c-.43-.221-1.19-.692-2.098-1.599-.906-.907-1.377-1.668-1.598-2.098a.822.822 0 0 1 .016-.747l.41-.82a3 3 0 0 0-.264-3.115L6.43 1.76a2.327 2.327 0 0 0-3.141-.578Z" />
      <path
        d="M18.207 3.207a1 1 0 0 0-1.414-1.414L14 4.586V4a1 1 0 0 0-2 0v2.5A1.5 1.5 0 0 0 13.5 8H16a1 1 0 0 0 0-2h-.586l2.793-2.793Z"
        fillRule="nonzero"
      />
    </g>
  </svg>
)

export default PhoneCallIncomingLight
