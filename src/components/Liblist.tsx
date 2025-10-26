import React from "react";
import ToggleList from "./ToggleList";

interface LiblistProps {
  onDataChange?: (libraryIndex: number, occupants: number, max: number) => void
}

const Liblist: React.FC<LiblistProps> = ({ onDataChange }) => {

  const Thompson = new Array(1000, 300, 80, 50, 25);
  const eighteen = new Array(800, 80, 60, 30, 30);
  const architect = new Array(400, 40, 40, 30, 10);
  const fineart = new Array(400, 10, 100, 30, 20);
  const fae = new Array(600, 200, 80, 50, 25);
  const geo = new Array(500, 65, 100, 46, 22);
  const hsl = new Array(400, 85, 80, 50, 25);
  const law = new Array(300, 85, 40, 25, 10);
  const vet = new Array(200, 54, 20, 30, 15);

  const maxOccupancies = [
    Thompson[0],
    eighteen[0],
    architect[0],
    fineart[0],
    fae[0],
    geo[0],
    hsl[0],
    law[0],
    vet[0]
  ];

  return <div><table>
    <tr>
      <th>Library</th>
      <th>Data</th>
    </tr>
    <tr>
      <td>Thompson</td>
      <td><ToggleList libraryIndex={0} maxValues={Thompson} onDataChange={onDataChange} /></td>
    </tr>
    <tr>
      <td>18th Ave</td>
      <td><ToggleList libraryIndex={1} maxValues={eighteen} onDataChange={onDataChange}/></td>
    </tr>
    <tr>
      <td>Architecture</td>
      <td><ToggleList libraryIndex={2} maxValues={architect} onDataChange={onDataChange}/></td>
    </tr>
    <tr>
      <td>Fine Arts</td>
      <td><ToggleList libraryIndex={3} maxValues={fineart} onDataChange={onDataChange}/></td>
    </tr>
    <tr>
      <td>FAE Sciences</td>
      <td><ToggleList libraryIndex={4} maxValues={fae} onDataChange={onDataChange}/></td>
    </tr>
    <tr>
      <td>Geology</td>
      <td><ToggleList libraryIndex={5} maxValues={geo} onDataChange={onDataChange}/></td>
    </tr>
    <tr>
      <td>Health Sciences</td>
      <td><ToggleList libraryIndex={6} maxValues={hsl} onDataChange={onDataChange}/></td>
    </tr>
    <tr>
      <td>Morritz Law</td>
      <td><ToggleList libraryIndex={7} maxValues={law} onDataChange={onDataChange}/></td>
    </tr>
    <tr>
      <td>Vet Health</td>
      <td><ToggleList libraryIndex={8} maxValues={vet} onDataChange={onDataChange}/></td>
    </tr>
    </table>
  </div>;
};

export default Liblist;
