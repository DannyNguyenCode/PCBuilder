import React from 'react';
import './App.css';
import { Form } from './Form';
import { Modal } from './Modal';

import Card from './Card';
import PriceRundown from './PriceRundown';

class App extends React.Component {
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
            <div className='col-md leftLayout'>
              <div className='row'>
                {computerParts.map((components, index) => {
                  return (
                    <div className='col-md-4' key={index}>
                      <div className='card bg-light mb-3'>
                        <div className='card-header'>{components}</div>
                        <div className='card-body'>
                          <Form />
                          <br />
                          <Modal />
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
            {/*End of layout column col-md-6 */}
          </div>
        </div>
      </div>
    );
  }
}
export default App;
