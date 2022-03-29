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

function Facebook(){
    return(
        <Svg style={{width: 75, height: 75 }} viewBox="0 0 75 75">
            <Path
                d="M37.3404 0C57.9641 0 74.681 16.7192 74.681 37.3406C74.681 57.9644 57.9641 74.681 37.3404 74.681C16.7166 74.681 0 57.9641 0 37.3406C0 16.7192 16.7169 0 37.3404 0Z"
                fill="#44991D"
            />
            <Path
                d="M41.8868 25.7065H46.6991V18.5978H41.0421V18.6234C34.1877 18.8662 32.7829 22.7192 32.6591 26.766H32.645V30.3157H27.9775V37.2773H32.645V55.9381H39.6791V37.2773H45.4412L46.5543 30.3157H39.6814V28.1711C39.6814 26.8034 40.5915 25.7065 41.8868 25.7065Z"
                fill="#ffffff"
            />
        </Svg>
    );
}

export default Facebook;