import React from 'react';
/* do media queries for max and min width of each cell td
          style={{
            wordWrap: 'break-word',
            minWidth: 200 + 'px',
            maxWidth: 200 + 'px',
          }}*/
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
  cpuPrice,
  motherboardsPrice,
  ramsPrice,
  casesPrice,
  coolingsPrice,
  gpusPrice,
  hddsPrice,
  ssdsPrice,
  psusPrice,
}) => (
  <table className='table table-sm table-responsive-sm table-striped table-hover table-bordered'>
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
        <td>{cpuPrice}</td>
      </tr>
      <tr>
        <th scope='row'>{computerParts[1]}</th>
        <td>{moboOption}</td>
        <td>{motherboardsPrice}</td>
      </tr>
      <tr>
        <th scope='row'>{computerParts[2]}</th>
        <td>{ramOption}</td>
        <td>{ramsPrice}</td>
      </tr>
      <tr>
        <th scope='row'>{computerParts[3]}</th>
        <td>{caseOption}</td>
        <td>{casesPrice}</td>
      </tr>
      <tr>
        <th scope='row'>{computerParts[4]}</th>
        <td>{coolingOption}</td>
        <td>{coolingsPrice}</td>
      </tr>
      <tr>
        <th scope='row'>{computerParts[5]}</th>
        <td>{gpuOption}</td>
        <td>{gpusPrice}</td>
      </tr>
      <tr>
        <th scope='row'>{computerParts[6]}</th>
        <td>{hddOption}</td>
        <td>{hddsPrice}</td>
      </tr>
      <tr>
        <th scope='row'>{computerParts[7]}</th>
        <td>{ssdOption}</td>
        <td>{ssdsPrice}</td>
      </tr>
      <tr>
        <th scope='row'>{computerParts[8]}</th>
        <td>{psuOption}</td>
        <td>{psusPrice}</td>
      </tr>
      <tr>
        <th scope='row'>Total</th>
        <td>Total Price of All Components Are:</td>
        <td>
          $
          {Number.parseFloat(cpuPrice.substring(1)) +
            Number.parseFloat(motherboardsPrice.substring(1)) +
            Number.parseFloat(ramsPrice.substring(1)) +
            Number.parseFloat(casesPrice.substring(1)) +
            Number.parseFloat(coolingsPrice.substring(1)) +
            Number.parseFloat(gpusPrice.substring(1)) +
            Number.parseFloat(hddsPrice.substring(1)) +
            Number.parseFloat(ssdsPrice.substring(1)) +
            Number.parseFloat(psusPrice.substring(1))}
        </td>
      </tr>
    </tbody>
  </table>
);
