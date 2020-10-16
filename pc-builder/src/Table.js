import React from 'react';

export const Table = ({
  computerParts,
  cpuOption,
  moboOption,
  ramOption,
  caseOption,
  coolingOption,
  gpuOption,
  hddOption,
  ssdOption,
  psuOption,
}) => (
  <table class='table table-sm table-striped table-hover table-bordered'>
    <thead>
      <tr>
        <th scope='col'>Part</th>
        <th scope='col'>Name</th>
        <th scope='col'>Price</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <th scope='row'>{computerParts[0]}</th>
        <td>{cpuOption}</td>
        <td>$74.99</td>
      </tr>
      <tr>
        <th scope='row'>{computerParts[1]}</th>
        <td>{moboOption}</td>
        <td>$74.99</td>
      </tr>
      <tr>
        <th scope='row'>{computerParts[2]}</th>
        <td>{ramOption}</td>
        <td>$74.99</td>
      </tr>
      <tr>
        <th scope='row'>{computerParts[3]}</th>
        <td>{caseOption}</td>
        <td>$74.99</td>
      </tr>
      <tr>
        <th scope='row'>{computerParts[4]}</th>
        <td>{coolingOption}</td>
        <td>$74.99</td>
      </tr>
      <tr>
        <th scope='row'>{computerParts[5]}</th>
        <td>{gpuOption}</td>
        <td>$74.99</td>
      </tr>
      <tr>
        <th scope='row'>{computerParts[6]}</th>
        <td>{hddOption}</td>
        <td>$74.99</td>
      </tr>
      <tr>
        <th scope='row'>{computerParts[7]}</th>
        <td>{ssdOption}</td>
        <td>$74.99</td>
      </tr>
      <tr>
        <th scope='row'>{computerParts[8]}</th>
        <td>{psuOption}</td>
        <td>$74.99</td>
      </tr>
    </tbody>
  </table>
);
