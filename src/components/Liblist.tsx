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
      <td><ToggleList /></td>
    </tr>
    <tr>
      <td>18th Ave</td>
      <td><ToggleList /></td>
    </tr>
    <tr>
      <td>Architecture</td>
      <td><ToggleList /></td>
    </tr>
    <tr>
      <td>Fine Arts</td>
      <td><ToggleList /></td>
    </tr>
    <tr>
      <td>FAE Sciences</td>
      <td><ToggleList /></td>
    </tr>
    <tr>
      <td>Geology</td>
      <td><ToggleList /></td>
    </tr>
    <tr>
      <td>Health Sciences</td>
      <td><ToggleList /></td>
    </tr>
    <tr>
      <td>Morritz Law</td>
      <td><ToggleList /></td>
    </tr>
    </table>
  </div>;
};

export default Liblist;
