import * as React from 'react'
import { SVGProps } from 'react'

const YoutubeLight = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width="1em"
    height="1em"
    viewBox="0 0 20 14"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <g fill={props.color || '#6F767E'} fillRule="evenodd">
      <path d="m3.907 2.69-.498.055a.911.911 0 0 0-.798.755 21.288 21.288 0 0 0 0 7c.067.402.393.71.798.755l.498.056c4.05.45 8.137.45 12.186 0l.498-.056a.91.91 0 0 0 .798-.755 21.287 21.287 0 0 0 0-7 .911.911 0 0 0-.798-.755l-.498-.056c-4.05-.45-8.137-.45-12.186 0ZM3.188.756a2.911 2.911 0 0 0-2.55 2.415 23.288 23.288 0 0 0 0 7.656 2.911 2.911 0 0 0 2.55 2.415l.498.055c4.196.467 8.432.467 12.628 0l.498-.055a2.911 2.911 0 0 0 2.55-2.415 23.286 23.286 0 0 0 0-7.656 2.911 2.911 0 0 0-2.55-2.415l-.498-.055a57.176 57.176 0 0 0-12.628 0l-.498.055Z" />
      <path
        d="M12.752 6.168a1 1 0 0 1 0 1.664L9.555 9.964A1 1 0 0 1 8 9.13V4.87a1 1 0 0 1 1.555-.833l3.197 2.132Z"
        fillRule="nonzero"
      />
    </g>
  </svg>
)

export default YoutubeLight
