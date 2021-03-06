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

function Share(){
    return(
        <Svg style={{width: 30, height: 30 }} viewBox="0 0 43 43">
            <Path
                d="M2.89 39.892c.415.953 1.213 1.726 2.22 2.149a4.404 4.404 0 0 0 3.148.107 4.048 4.048 0 0 0 1.506-.95c.416-.418.725-.92.903-1.471l.076-.265c1.118-5.104 4.036-9.662 8.295-12.96a14.824 14.824 0 0 1 3.582-1.866l1.584 3.658c.288.65.763 1.217 1.372 1.639.608.421 1.325.68 2.07.746a4.313 4.313 0 0 0 2.21-.334 3.847 3.847 0 0 0 1.653-1.375l10.587-16.115c.325-.5.518-1.068.565-1.659a3.653 3.653 0 0 0-.297-1.744 4.023 4.023 0 0 0-1.096-1.463 4.38 4.38 0 0 0-1.665-.875L19.727 1.628a4.58 4.58 0 0 0-2.619.149 4.078 4.078 0 0 0-1.542.994 3.545 3.545 0 0 0-.95 1.813 3.57 3.57 0 0 0 .22 2.039l1.584 3.658C8.213 13.155-1.3 29.297 2.89 39.892Z"
                fill="#fff"
            />
            <Path
                d="M1.507 38.533c.415.952 1.213 1.725 2.22 2.148a4.404 4.404 0 0 0 3.149.107 4.048 4.048 0 0 0 1.505-.95c.417-.418.725-.92.904-1.47l.075-.266c1.119-5.103 4.036-9.662 8.295-12.96a14.824 14.824 0 0 1 3.582-1.866l1.584 3.658c.288.65.764 1.217 1.372 1.639.608.421 1.325.68 2.07.747a4.314 4.314 0 0 0 2.21-.335 3.847 3.847 0 0 0 1.653-1.375l10.587-16.115c.325-.5.518-1.068.565-1.659a3.653 3.653 0 0 0-.297-1.743 4.023 4.023 0 0 0-1.095-1.463 4.38 4.38 0 0 0-1.666-.876L18.346.268a4.58 4.58 0 0 0-2.62.15 4.078 4.078 0 0 0-1.542.993 3.546 3.546 0 0 0-.949 1.813 3.57 3.57 0 0 0 .219 2.04l1.584 3.657C6.83 11.795-2.683 27.937 1.507 38.533Z"
                fill="#44991D"
            />
        </Svg>
    );
}

export default Share;