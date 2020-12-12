import React from 'react';
import './App.css';
import { Table } from './Table';
import CPU from './CardComponents/CPU';
import Motherboard from './CardComponents/Motherboard';
import RAM from './CardComponents/RAM';
import Case from './CardComponents/Case';
import Cooling from './CardComponents/Cooling';
import GPU from './CardComponents/GPU';
import HDD from './CardComponents/HDD';
import SSD from './CardComponents/SSD';
import PSU from './CardComponents/PSU';
import YoutubeSearch from './YoutubeSearch';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      cpuOptions: '',
      motherboardsOptions: '',
      ramsOptions: '',
      casesOptions: '',
      coolingsOptions: '',
      gpusOptions: '',
      hddsOptions: '',
      ssdsOptions: '',
      psusOptions: '',
      cpuPrice: '$00.00',
      motherboardsPrice: '$00.00',
      ramsPrice: '$00.00',
      casesPrice: '$00.00',
      coolingsPrice: '$00.00',
      gpusPrice: '$00.00',
      hddsPrice: '$00.00',
      ssdsPrice: '$00.00',
      psusPrice: '$00.00',
    };
  }
  handleCallback = (name, component, price) => {
    if (component === 'cpu') {
      this.setState({ cpuOptions: name.target.value, cpuPrice: price });
    } else if (component === 'mobo') {
      this.setState({
        motherboardsOptions: name.target.value,
        motherboardsPrice: price,
      });
    } else if (component === 'ram') {
      this.setState({ ramsOptions: name.target.value, ramsPrice: price });
    } else if (component === 'case') {
      this.setState({ casesOptions: name.target.value, casesPrice: price });
    } else if (component === 'cooling') {
      this.setState({
        coolingsOptions: name.target.value,
        coolingsPrice: price,
      });
    } else if (component === 'gpu') {
      this.setState({ gpusOptions: name.target.value, gpusPrice: price });
    } else if (component === 'hdd') {
      this.setState({ hddsOptions: name.target.value, hddsPrice: price });
    } else if (component === 'ssd') {
      this.setState({ ssdsOptions: name.target.value, ssdsPrice: price });
    } else if (component === 'psu') {
      this.setState({ psusOptions: name.target.value, psusPrice: price });
    }
    name.persist();
    name.preventDefault();
  };
  render() {
    const computerParts = [
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
        <nav
          className='navbar navbar-dark bg-dark navbar-expand-sm fixed-top'
          id='navbar-site'
        >
          <div className='container'>
            <a className='navbar-brand' href='#top'>
              PC Builder
            </a>
            <button
              className='navbar-toggler'
              type='button'
              data-toggle='collapse'
              data-target='#toggleNav'
              aria-controls='toggleNav'
              aria-expanded='false'
              aria-label='Toggle Navigation'
            >
              <span className='navbar-toggler-icon'></span>
            </button>
            <div className='collapse navbar-collapse' id='toggleNav'>
              <div className='navbar-nav'>
                <a className='nav-item nav-link' href='#parts'>
                  Parts Selection
                </a>
                <a className='nav-item nav-link' href='#pricerundown'>
                  Price Rundown
                </a>
                <a className='nav-item nav-link' href='#recommendedvids'>
                  Recommended Videos
                </a>
              </div>
              {/* navbar-nav */}
            </div>
            {/* collapse navbar-collapse */}
            <span className='navbar-text d-none d-xl-inline-block'>
              For anyone looking to build a Desktop Computer
            </span>
          </div>
          {/* container */}
        </nav>

        <div className='container'>
          <div className='row mx-0 mb-2 mt-4 justify-content-center'>
            <div className='h4' id='parts' style={{ marginTop: 50 + 'px' }}>
              Parts Selection
            </div>
            {/* h4 */}
          </div>
          {/* row mx-0 mb-2 mt-4 justify-content-center */}
          <div className='row row-cols-sm-1 row-cols-md-2 row-cols-lg-3'>
            <CPU key={computerParts[0]} parentCallback={this.handleCallback} />
            <Motherboard
              key={computerParts[1]}
              parentCallback={this.handleCallback}
            />
            <RAM key={computerParts[2]} parentCallback={this.handleCallback} />
            <Case key={computerParts[3]} parentCallback={this.handleCallback} />
            <Cooling
              key={computerParts[4]}
              parentCallback={this.handleCallback}
            />
            <GPU key={computerParts[5]} parentCallback={this.handleCallback} />
            <HDD key={computerParts[6]} parentCallback={this.handleCallback} />
            <SSD key={computerParts[7]} parentCallback={this.handleCallback} />
            <PSU key={computerParts[8]} parentCallback={this.handleCallback} />
          </div>
          {/* row row-cols-sm-2 row-cols-md-3 */}
          <div className='row mx-0 mb-2 justify-content-center'>
            <div className='h4' id='pricerundown'>
              Price Rundown
            </div>
          </div>
          {/* row mx-0 mb-2 justify-content-center */}
          <div className='row mx-0 text-center mb-4'>
            <Table
              computerParts={computerParts}
              cpuOption={this.state.cpuOptions}
              moboOption={this.state.motherboardsOptions}
              ramOption={this.state.ramsOptions}
              caseOption={this.state.casesOptions}
              coolingOption={this.state.coolingsOptions}
              gpuOption={this.state.gpusOptions}
              hddOption={this.state.hddsOptions}
              ssdOption={this.state.ssdsOptions}
              psuOption={this.state.psusOptions}
              cpuPrice={this.state.cpuPrice}
              motherboardsPrice={this.state.motherboardsPrice}
              ramsPrice={this.state.ramsPrice}
              casesPrice={this.state.casesPrice}
              coolingsPrice={this.state.coolingsPrice}
              gpusPrice={this.state.gpusPrice}
              hddsPrice={this.state.hddsPrice}
              ssdsPrice={this.state.ssdsPrice}
              psusPrice={this.state.psusPrice}
            />
          </div>
          {/* row mx-0 text-center */}
          <div className='row mx-0 mb-2 justify-content-center'>
            <div className='h4' id='recommendedvids'>
              Recommended Videos
            </div>
          </div>
          {/* row mx-0 mb-2 justify-content-center */}
          <div className='row mx-0 text-center row row-cols-sm-1 row-cols-md-2 justify-content-center'>
            <YoutubeSearch
              cpu={this.state.cpuOptions}
              motherboard={this.state.motherboardsOptions}
              gpu={this.state.gpusOptions}
            />
          </div>
          {/* row mx-0 text-center row row-cols-sm-1 row-cols-md-2 justify-content-center */}
        </div>
        {/* container */}
      </div> /* App */
    );
  }
}
export default App;
