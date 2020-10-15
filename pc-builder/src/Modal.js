import React from 'react';

export const Modal = ({ component = 'No component provided' }) => (
  <div className='modal-wrapper d-flex justify-content-center'>
    <button
      type='button'
      className='btn btn-light btn-outline-primary'
      data-toggle='modal'
      data-target={'#' + component}
    >
      Advanced Information &gt;&gt;
    </button>

    <div
      className='modal fade'
      id={component}
      tabIndex='-1'
      role='dialog'
      aria-labelledby='exampleModalCenterTitle'
      aria-hidden='true'
    >
      <div className='modal-dialog modal-dialog-centered' role='document'>
        <div className='modal-content'>
          <div className='modal-header'>
            <h5 className='modal-title' id='exampleModalLongTitle'>
              Advanced Information for {component}
            </h5>
            <button
              type='button'
              className='close'
              data-dismiss='modal'
              aria-label='Close'
            >
              <span aria-hidden='true'>&times;</span>
            </button>
          </div>
          <div className='modal-body'>
            <div className='container-fluid'>
              <div className='row'>
                <div className='col-3' style={{ border: '1px solid black' }}>
                  Series
                </div>
                <div
                  className='col-9'
                  style={{ border: '1px solid black', borderLeft: 'none' }}
                >
                  tortor
                </div>
              </div>
              <div className='row'>
                <div className='col-3' style={{ border: '1px solid black' }}>
                  faucibus
                </div>
                <div
                  className='col-9'
                  style={{ border: '1px solid black', borderLeft: 'none' }}
                >
                  at
                </div>
              </div>
              <div className='row'>
                <div className='col-3' style={{ border: '1px solid black' }}>
                  turpis
                </div>
                <div
                  className='col-9'
                  style={{ border: '1px solid black', borderLeft: 'none' }}
                >
                  viverra
                </div>
              </div>
              <div className='row'>
                <div className='col-3' style={{ border: '1px solid black' }}>
                  in
                </div>
                <div
                  className='col-9'
                  style={{ border: '1px solid black', borderLeft: 'none' }}
                >
                  adipiscing
                </div>
              </div>
              <div className='row'>
                <div className='col-3' style={{ border: '1px solid black' }}>
                  eu mi
                </div>
                <div
                  className='col-9'
                  style={{ border: '1px solid black', borderLeft: 'none' }}
                >
                  at
                </div>
              </div>
              <div className='row'>
                <div className='col-3' style={{ border: '1px solid black' }}>
                  bibendum
                </div>
                <div
                  className='col-9'
                  style={{ border: '1px solid black', borderLeft: 'none' }}
                >
                  lacus
                </div>
              </div>
            </div>
          </div>
          <div className='modal-footer'>
            <button
              type='button'
              className='btn btn-secondary'
              data-dismiss='modal'
            >
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
);
