{/* <one line to give the program's name and a brief idea of what it does.>
Copyright (C) 2022 Marin BOUANCHAUD, Elodie PAN, Lucien BOISSEAU-SABLE

This program is free software: you can redistribute it and/or modify
it under the terms of the GNU Affero General Public License as published
by the Free Software Foundation, either version 3 of the License, or
(at your option) any later version.

This program is distributed in the hope that it will be useful,
but WITHOUT ANY WARRANTY; without even the implied warranty of
MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
GNU Affero General Public License for more details.

You should have received a copy of the GNU Affero General Public License
along with this program.  If not, see <https://www.gnu.org/licenses/>. */}

import React from 'react'
import Svg, { Circle, Path } from 'react-native-svg'

function HomePointer() {
  return (
    <Svg xmlns="http://www.w3.org/2000/svg" width={92} height={114} fill="none">
      <Circle cx={45.991} cy={45.991} r={26.771} fill="#fff" />
      <Path
        fill="#88F057"
        d="M45.99 0C20.632 0 0 20.631 0 45.991c0 10.464 3.43 20.319 9.917 28.5 8.4 10.591 32.83 35.74 33.865 36.805l2.209 2.272 2.209-2.271c1.036-1.066 25.472-26.22 33.874-36.816 6.482-8.173 9.908-18.025 9.908-28.49C91.982 20.631 71.351 0 45.991 0zm31.257 70.653c-6.764 8.53-24.928 27.502-31.256 34.065-6.327-6.562-24.484-25.53-31.247-34.056-5.616-7.08-8.583-15.611-8.583-24.67 0-21.963 17.868-39.831 39.83-39.831s39.83 17.868 39.83 39.83c0 9.06-2.965 17.588-8.574 24.662z"
      />
      <Path
        fill="#5DCF27"
        d="M45.99 18.257c-15.01 0-27.223 12.212-27.223 27.223S30.98 72.704 45.991 72.704c15.011 0 27.224-12.212 27.224-27.224 0-15.011-12.213-27.223-27.224-27.223zm0 48.286c-11.613 0-21.062-9.448-21.062-21.063 0-11.614 9.449-21.062 21.063-21.062 11.614 0 21.063 9.448 21.063 21.062s-9.45 21.063-21.063 21.063z"
      />
      <Path
        fill="#44991D"
        d="M46.575 45.406a2.746 2.746 0 0 1-3.85.43l-3.449-2.745a2.746 2.746 0 0 0-3.858.44l-.417.524a2.746 2.746 0 0 0 .439 3.858l8.247 6.561a2.745 2.745 0 0 0 3.85-.429l9.918-12.343a2.746 2.746 0 0 0-.421-3.86l-.522-.42a2.746 2.746 0 0 0-3.86.42l-6.077 7.564z"
      />
    </Svg>
  )
}

export default HomePointer
