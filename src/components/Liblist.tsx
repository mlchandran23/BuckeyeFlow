import React from "react";
import ToggleList from "./ToggleList";

const Thompson = new Array(1000, 300, 80, 50, 25);
const eighteen = new Array(800, 80, 60, 30, 30);
const architect = new Array(400, 40, 40, 30, 10);
const fineart = new Array(400, 10, 100, 30, 20);
const fae = new Array(600, 200, 80, 50, 25);
const geo = new Array(500, 65, 100, 46, 22);
const hsl = new Array(400, 85, 80, 50, 25);
const law = new Array(300, 85, 40, 25, 10);

const Liblist = () => {
  return <div><table>
    <tr>
      <th>Library</th>
      <th>Data</th>
    </tr>
    <tr>
      <td>Thompson</td>
      <td><ToggleList libraryIndex={0} maxValues={Thompson} /></td>
    </tr>
    <tr>
      <td>18th Ave</td>
      <td><ToggleList libraryIndex={1} maxValues={eighteen}/></td>
    </tr>
    <tr>
      <td>Architecture</td>
      <td><ToggleList libraryIndex={2} maxValues={architect}/></td>
    </tr>
    <tr>
      <td>Fine Arts</td>
      <td><ToggleList libraryIndex={3} maxValues={fineart}/></td>
    </tr>
    <tr>
      <td>FAE Sciences</td>
      <td><ToggleList libraryIndex={4} maxValues={fae}/></td>
    </tr>
    <tr>
      <td>Geology</td>
      <td><ToggleList libraryIndex={5} maxValues={geo}/></td>
    </tr>
    <tr>
      <td>Health Sciences</td>
      <td><ToggleList libraryIndex={6} maxValues={hsl}/></td>
    </tr>
    <tr>
      <td>Morritz Law</td>
      <td><ToggleList libraryIndex={7} maxValues={law}/></td>
    </tr>
    </table>
  </div>;
};

export default Liblist;
