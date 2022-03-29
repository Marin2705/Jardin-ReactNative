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

function Form(){
 return(
    <Svg style={{width: 30, height: 30 }} viewBox="0 0 36 45">
        <Path
            d="M.993 18.672a.993.993 0 0 0-.993.992v9.926c0 .548.444.992.993.992h9.925a.993.993 0 0 0 .993-.992v-9.926a.993.993 0 0 0-.993-.992H.993Zm.992 1.985h7.94v7.94h-7.94v-7.94ZM.993 32.56a.993.993 0 0 0-.993.993v9.925c0 .548.444.993.993.993h9.925a.993.993 0 0 0 .993-.993v-9.925a.993.993 0 0 0-.993-.993H.993Zm.992 1.985h7.94v7.94h-7.94v-7.94Z"
            fill="#44991D"
        />
        <Path
            d="M13.665.454a.993.993 0 1 1 1.652 1.101l-7.94 11.91a.992.992 0 0 1-1.714-.106l-1.985-3.97-.01-.022a.993.993 0 1 1 1.786-.866l1.22 2.44 2.791-4.187h-7.48v7.94h7.94v-3.86l1.986-2.978v7.83a.993.993 0 0 1-.993.993H.993A.993.993 0 0 1 0 15.687V5.76c0-.548.444-.992.993-.992h9.796L13.665.454Z"
            fill="#5DCF27"
        />
        <Path
            d="M15.53 12.992c0-.548.444-.992.992-.992h17.866c.548 0 .992.444.992.992v1.986a.993.993 0 0 1-.992.992H16.522a.993.993 0 0 1-.993-.992v-1.986ZM15.53 26.888c0-.548.444-.993.992-.993h17.866c.548 0 .992.445.992.993v1.985a.993.993 0 0 1-.992.992H16.522a.993.993 0 0 1-.993-.992v-1.985ZM15.53 40.79c0-.548.444-.992.992-.992h17.866c.548 0 .992.444.992.992v1.986a.993.993 0 0 1-.992.992H16.522a.993.993 0 0 1-.993-.992V40.79Z"
            fill="#fff"
        />
    </Svg>
 );
}

export default Form;