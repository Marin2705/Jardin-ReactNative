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

function People(){
    return(
        <Svg style={{width: 30, height: 30 }} viewBox="0 0 42 45">
            <Path
                d="M10.617 25.67c0-2.314.763-4.451 2.048-6.178a7.556 7.556 0 0 0-5.07-1.952A7.596 7.596 0 0 0 0 25.136s1.787 15.96 7.596 15.96c2.245 0 3.887-2.386 5.06-5.311-1.369-4.503-1.922-8.998-2.03-9.965l-.01-.15ZM7.596 16.99a6.708 6.708 0 0 0 5.89-3.496 9.257 9.257 0 0 1-1.413-8.197 6.679 6.679 0 0 0-4.477-1.722 6.708 6.708 0 0 0 0 13.415ZM34.404 17.54c-1.95 0-3.723.742-5.069 1.952a10.312 10.312 0 0 1 2.049 6.178l-.01.15c-.108.967-.661 5.461-2.03 9.964 1.173 2.925 2.815 5.311 5.06 5.311 5.809 0 7.596-15.96 7.596-15.96 0-4.193-3.4-7.595-7.596-7.595Z"
                fill="#44991D"
            />
            <Path
                d="M28.514 13.493a6.708 6.708 0 1 0 5.89-9.919c-1.723 0-3.289.656-4.477 1.723a9.267 9.267 0 0 1-1.413 8.196ZM21 16.627a9.043 9.043 0 0 0-9.043 9.043s2.128 19 9.043 19c6.915 0 9.043-19 9.043-19A9.043 9.043 0 0 0 21 16.627Z"
                fill="#44991D"
            />
            <Path
                d="M21 15.971a7.986 7.986 0 1 0 0-15.97 7.986 7.986 0 0 0 0 15.97Z"
                fill="#44991D"
            />
        </Svg>
    );
}

export default People;