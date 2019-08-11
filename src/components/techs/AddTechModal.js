import React, { useState, useEffect } from 'react';
import M from 'materialize-css/dist/js/materialize.min.js';

const AddTechModal = () => {
  const [firstName, setFirstname] = useState('');
  const [lastName, setLastname] = useState('');

  const onSubmit = () => {
    if (firstName === '' && lastName === '') {
      M.toast({
        html: 'Please enter fisrt and last name',
        classes: 'rounded'
      });
    } else {
      console.log(firstName, lastName);
      setFirstname('');
      setLastname('');
    }
  };

  return (
    <div id="add-tech-modal" className="modal">
      <div className="modal-content">
        <h4>Add new technician</h4>
        <div className="row">
          <div className="input-field">
            <input
              type="text"
              name="firstName"
              value={firstName}
              onChange={e => setFirstname(e.target.value)}
            />
            <label htmlFor="firstName">First Name</label>
          </div>
        </div>
        <div className="row">
          <div className="input-field">
            <input
              type="text"
              name="lastName"
              value={lastName}
              onChange={e => setLastname(e.target.value)}
            />
            <label htmlFor="lastName">Last Name</label>
          </div>
        </div>
      </div>

      <div className="modal-footer">
        <a
          href="#!"
          onClick={onSubmit}
          className="modal-close blue waves-effect waves-blue btn"
        >
          Enter
        </a>
      </div>
    </div>
  );
};

export default AddTechModal;
