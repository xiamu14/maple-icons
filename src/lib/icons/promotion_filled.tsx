import * as React from 'react'
import { SVGProps } from 'react'

const PromotionFilled = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width="1em"
    height="1em"
    viewBox="0 0 22 22"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M9.054 1.344a3 3 0 0 1 3.892 0l1.271 1.084a1 1 0 0 0 .57.236l1.665.133a3 3 0 0 1 2.751 2.751l.133 1.666a1 1 0 0 0 .236.569l1.084 1.271a3 3 0 0 1 0 3.892l-1.084 1.271a1 1 0 0 0-.236.57l-.133 1.665a3 3 0 0 1-2.751 2.752l-1.666.132a1 1 0 0 0-.569.236l-1.271 1.084a3 3 0 0 1-3.892 0l-1.271-1.084a1 1 0 0 0-.57-.236l-1.665-.132a3 3 0 0 1-2.752-2.752l-.132-1.666a1 1 0 0 0-.236-.569l-1.084-1.271a3 3 0 0 1 0-3.892l1.084-1.271a1 1 0 0 0 .236-.57l.132-1.665a3 3 0 0 1 2.752-2.751l1.666-.133a1 1 0 0 0 .569-.236l1.271-1.084ZM7.5 9a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3Zm8.5 5.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0Zm-.898-6.86a1 1 0 0 0-1.537-1.28l-6.666 8a1 1 0 0 0 1.536 1.28l6.667-8Z"
      fill={props.color || '#6F767E'}
      fillRule="evenodd"
    />
  </svg>
)

export default PromotionFilled
