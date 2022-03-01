import * as React from 'react'
import Svg, { Path } from 'react-native-svg'

const ScrollArrow = (props) => (
  <Svg
    width={43}
    height={23}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <Path
      d="m1.5 1.5 21 18.5 19-18.5"
      stroke="snow"
      strokeWidth={3}
      strokeLinecap="round"
    />
  </Svg>
)

export default ScrollArrow
