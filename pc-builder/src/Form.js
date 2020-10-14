import React from 'react';

export const Form = () => (
  <form className='form-inline d-flex justify-content-center'>
    <input
      className='form-control mr-sm-2 text-center'
      type='search'
      placeholder='Search to Filter'
      aria-label='Search'
    />
    <div className='form-group'>
      <label htmlFor='name'>Name</label>
      <select className='form-control' id='name'>
        <option>1</option>
        <option>2</option>
        <option>3</option>
        <option>4</option>
        <option>5</option>
      </select>

      <label htmlFor='price'>Price</label>
      <select className='form-control' id='price'>
        <option>1</option>
        <option>2</option>
        <option>3</option>
        <option>4</option>
        <option>5</option>
      </select>
    </div>
  </form>
);
