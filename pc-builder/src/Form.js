import React from 'react';

class Form extends React.Component {
  constructor(props) {
    super(props);
    this.state = { priceOption: '' };
    this.onTrigger = this.onTrigger.bind(this);
  }
  onTrigger = (event) => {
    let option = this.props.data.find(
      ({ name }) => name.toLowerCase() === event.target.value
    );
    if (option === undefined) {
      this.setState({ price: 'Select Name for Price' });
    } else {
      this.setState({ price: option.price });
      this.props.cardCallBack(event, option.price);
    }
  };
  render() {
    const { selectid, data } = this.props;
    return (
      <form>
        <div className='form-group'>
          <label htmlFor={selectid + 'Name'}>Name</label>
          <select
            className='form-control'
            id={selectid + 'Name'}
            onChange={this.onTrigger}
            style={{ textAlign: 'center' }}
          >
            <option defaultValue>Please select option</option>
            {data &&
              data.map((data, index) => {
                return (
                  <option
                    key={index}
                    id={data.name.toLowerCase()}
                    value={data.name.toLowerCase()}
                  >
                    {data.name}
                  </option>
                );
              })}
          </select>
        </div>
        {/* form-group */}
        <div className='form-group'>
          <label htmlFor='price'>Price</label>
          <input
            className='form-control'
            type='text'
            placeholder='Select Name for Price'
            id='price'
            value={this.state.price || ''}
            style={{ textAlign: 'center' }}
            disabled
          />
        </div>
        {/* form-group */}
      </form>
    );
  }
}
export default Form;
