import React from 'react';
{
  /* dummy data in place of fetching api data 
  remember to pass fetched data from parent component to child as an array of objects
  */
}
let optionsTest = [
  { name: 'Asdsadas', price: '$100' },
  { name: 'Sdfgfghghg', price: '$200' },
  { name: 'Erereretr', price: '$300' },
  { name: 'Cvcvbbvbvbb', price: '$400' },
  { name: 'Grbtbtbtbtb', price: '$500' },
];
class Form extends React.Component {
  constructor(props) {
    super(props);
    this.state = { option: '', price: '' };
    this.handleChange = this.handleChange.bind(this);
  }
  handleChange(e) {
    let option = optionsTest.find(
      ({ name }) => name.toLowerCase() === e.target.value
    );
    if (option === undefined) {
      console.log('User must have selected default value');
      this.setState({ price: 'Select Name for Price' });
    } else {
      this.setState({ option: option.name, price: option.price });
    }
  }
  render() {
    return (
      <form className='form-inline d-flex justify-content-center'>
        <input
          className='form-control mr-sm-2 text-center'
          type='search'
          placeholder='Search to Filter'
          aria-label='Search'
        />
        <div className='form-group'>
          <label htmlFor='name'>Name</label>
          <select
            className='form-control'
            id='name'
            onChange={this.handleChange}
          >
            <option defaultValue>Please select an option</option>
            {optionsTest.map((option, index) => {
              return (
                <option
                  key={index}
                  id={option.name.toLowerCase()}
                  value={option.name.toLowerCase()}
                >
                  {option.name}
                </option>
              );
            })}
          </select>

          <label htmlFor='price'>Price</label>
          <input
            className='form-control'
            type='text'
            placeholder='Select Name for Price'
            id='price'
            value={this.state.price}
            disabled
          />
        </div>
      </form>
    );
  }
}

export default Form;
