import React from 'react';
import './App.css';
import { Table } from './Table';
import Components from './Components';

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
  handleCallback = (name, component, optionName, price) => {
    if (component === 'cpu') {
      this.setState({ cpuOptions: optionName, cpuPrice: price });
    } else if (component === 'mobo') {
      this.setState({
        motherboardsOptions: optionName,
        motherboardsPrice: price,
      });
    } else if (component === 'ram') {
      this.setState({ ramsOptions: optionName, ramsPrice: price });
    } else if (component === 'case') {
      this.setState({ casesOptions: optionName, casesPrice: price });
    } else if (component === 'cooling') {
      this.setState({
        coolingsOptions: optionName,
        coolingsPrice: price,
      });
    } else if (component === 'gpu') {
      this.setState({ gpusOptions: optionName, gpusPrice: price });
    } else if (component === 'hdd') {
      this.setState({ hddsOptions: optionName, hddsPrice: price });
    } else if (component === 'ssd') {
      this.setState({ ssdsOptions: optionName, ssdsPrice: price });
    } else if (component === 'psu') {
      this.setState({ psusOptions: optionName, psusPrice: price });
    }
    name.persist();
    name.preventDefault();
  };
  render() {
    const computerParts = [
      [
        'Central Processing Unit',
        'https://componentsapi.herokuapp.com/amdprocessors',
        'cpu',
      ],

      ['Motherboard', 'https://componentsapi.herokuapp.com/amdmobos', 'mobo'],

      [
        'Random Access Memory',
        'https://componentsapi.herokuapp.com/ddr4rams',
        'ram',
      ],

      ['Case', 'https://componentsapi.herokuapp.com/cases', 'case'],

      [
        'Cooling',
        'https://componentsapi.herokuapp.com/cpufansheatsinks',
        'cooling',
      ],

      [
        'Graphics Processing Unit',
        'https://componentsapi.herokuapp.com/nvidiagpus',
        'gpu',
      ],

      [
        'Hard Disk Drive',
        'https://componentsapi.herokuapp.com/harddiskdrives',
        'hdd',
      ],

      [
        'Solid State Drive',
        'https://componentsapi.herokuapp.com/nvmessds',
        'ssd',
      ],

      ['Power Supply Unit', 'https://componentsapi.herokuapp.com/psus', 'psu'],
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
            {computerParts.map((data) => (
              <Components
                key={data[0]}
                header={data[0]}
                url={data[1]}
                component={data[2]}
                parentCallback={this.handleCallback}
              />
            ))}
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
        </div>
        {/* container */}
      </div> /* App */
    );
  }
}
export default App;
