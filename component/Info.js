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

import Svg, { Path } from 'react-native-svg'

function Info(){
    return(<Svg style={{width: 30, height: 30 }} viewBox="0 0 45 45">
        <Path d="M22.235 44.47c12.28 0 22.236-9.954 22.236-22.235C44.47 9.955 34.516 0 22.235 0 9.955 0 0 9.955 0 22.235s9.955 22.236 22.235 22.236Z" fill="#44991D"/>
        <Path d="M22.235 16.059a3.706 3.706 0 1 0 0-7.412 3.706 3.706 0 0 0 0 7.412ZM18.53 23.47v9.883a2.47 2.47 0 0 0 2.47 2.47h4.941V21a2.47 2.47 0 0 0-2.47-2.47H16.059V21a2.47 2.47 0 0 0 2.47 2.47Z" fill="#fff" />
    </Svg>)
}

export default Info