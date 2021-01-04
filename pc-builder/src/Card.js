import React from 'react';
import Form from './Form';

class Card extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.onTrigger = this.onTrigger.bind(this);
  }
  onTrigger = (data, name, price) => {
    this.props.componentCallBack(data, name, price);
    data.preventDefault();
  };
  render() {
    return (
      <div className='col-12 mb-5'>
        <div className='card text-center'>
          <div className='card-header'>{this.props.header}</div>{' '}
          {/* card-header */}
          <div className='card-body'>
            <Form
              selectid={this.props.header}
              data={this.props.data}
              cardCallBack={this.onTrigger}
            />
          </div>
          {/* card-body */}
        </div>
        {/* card */}
      </div>
      /* col-3 */
    );
  }
}
export default Card;
