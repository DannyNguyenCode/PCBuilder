import React from 'react';
import './App.css';
import { Form } from './Form';
import { Modal } from './Modal';
import { Table } from './Table';

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
  handleSelect = (option) => {
    this.setState({ cpuOption: option });
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
              <div className='row' id='card-wrapper'>
                {computerParts.map((components, index) => {
                  return (
                    <div className='col-md-4' key={index} id={index}>
                      <div className='card bg-light mb-3'>
                        <div className='card-header'>{components}</div>
                        <div className='card-body'>
                          <Form
                            component={components}
                            onSelect={this.handleSelect}
                          />
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
          <div className='row' id='table'>
            {/*Price run down table */}
            <div className='col-md'>
              <Table
                computerParts={computerParts}
                cpuOption={this.state.cpuOption}
                moboOption={this.state.moboOption}
                ramOption={this.state.ramOption}
                caseOption={this.state.caseOption}
                coolingOption={this.state.coolingOption}
                gpuOption={this.state.gpuOption}
                hddOption={this.state.hddOption}
                ssdOption={this.state.ssdOption}
                psuOption={this.state.psuOption}
              />
            </div>
          </div>
          <div className='row' id='total'>
            <div className='col-md'></div>
          </div>
        </div>
      </div>
    );
  }
}
export default App;
