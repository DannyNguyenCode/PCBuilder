import React from 'react';
import './App.css';
import { Form } from './Form';
import { Modal } from './Modal';

import Card from './Card';
import PriceRundown from './PriceRundown';

class App extends React.Component {
  state = {
    cpuOption: 'Placeholder1',
    moboOption: 'Placeholder2',
    ramOption: 'Placeholder3',
    caseOption: 'Placeholder4',
    coolingOption: 'Placeholder5',
    gpuOption: 'Placeholder6',
    hddOption: 'Placeholder7',
    ssdOption: 'Placeholder8',
    psuOption: 'Placeholder9',
  };

  render() {
    let computerParts = [
      'Central Processing Unit',
      'Motherboard',
      'Random Access Memory',
      'Case',
      'Cooling',
      'Graphics Processing Unit',
      'Hard Disk Drive',
      'Solid State Drive',
      'Power Supply Unit',
    ];

    return (
      <div className='App'>
        <h1 className='app-header'>PC Builder</h1>
        <div className='container-fluid'>
          <div className='row'>
            <div className='col-md'>
              <div className='row'>
                {computerParts.map((components, index) => {
                  return (
                    <div className='col-md-4' key={index} id={index}>
                      <div className='card bg-light mb-3'>
                        <div className='card-header'>{components}</div>
                        <div className='card-body'>
                          <Form component={components} />
                          <br />
                          <Modal component={components} />
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
            {/*End of layout column col-md-6 */}
          </div>
          <div className='row d-flex justify-content-center'>
            <h1 className='pricerundownheader'>Price Rundown</h1>
          </div>
          <div className='row'>
            {/*Price run down table */}
            <div className='col-md'>
              <table class='table table-sm table-striped table-hover table-bordered'>
                <thead>
                  <tr>
                    <th scope='col'>Part</th>
                    <th scope='col'>Name</th>
                    <th scope='col'>Price</th>
                  </tr>
                </thead>
                <tbody>
                  {computerParts.map((component, index) => {
                    return (
                      <tr key={index}>
                        <th scope='row'>{component}</th>
                        <td>{this.state.cpuOption}</td>
                        <td>$74.99</td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default App;
