import React from "react";
import ToggleList from "./ToggleList";

const Liblist = () => {
  return <div><table>
    <tr>
      <th>Library</th>
      <th>Data</th>
    </tr>
    <tr>
      <td>Thompson</td>
      <td><ToggleList libraryIndex={0}/></td>
    </tr>
    <tr>
      <td>18th Ave</td>
      <td><ToggleList libraryIndex={1}/></td>
    </tr>
    <tr>
      <td>Architecture</td>
      <td><ToggleList libraryIndex={2}/></td>
    </tr>
    <tr>
      <td>Fine Arts</td>
      <td><ToggleList libraryIndex={3}/></td>
    </tr>
    <tr>
      <td>FAE Sciences</td>
      <td><ToggleList libraryIndex={4}/></td>
    </tr>
    <tr>
      <td>Geology</td>
      <td><ToggleList libraryIndex={5}/></td>
    </tr>
    <tr>
      <td>Health Sciences</td>
      <td><ToggleList libraryIndex={6}/></td>
    </tr>
    <tr>
      <td>Morritz Law</td>
      <td><ToggleList libraryIndex={7}/></td>
    </tr>
    </table>
  </div>;
};

export default Liblist;
