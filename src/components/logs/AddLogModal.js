import React, { useState, useEffect } from 'react';
import { addLog } from '../../actions/logActions';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import M from 'materialize-css/dist/js/materialize.min.js';

const AddLogModal = ({ addLog }) => {
  const [message, setMessage] = useState('');
  const [attention, setAttention] = useState(false);
  const [tech, setTech] = useState('');

  const onSubmit = () => {
    if (message === '' && tech === '') {
      M.toast({
        html: 'Please enter a message and techician',
        classes: 'rounded'
      });
    } else {
      const newLog = { message, attention, tech, date: new Date() };
      addLog(newLog);
      M.toast({
        html: `Log added by ${tech}`,
        classes: 'rounded'
      });
      setMessage('');
      setTech('');
      setAttention(false);
    }
  };

  return (
    <div style={modalStyle} id="add-log-modal" className="modal">
      <div className="modal-content">
        <h4>Enter System Log</h4>
        <div className="row">
          <div className="input-field">
            <input
              type="text"
              name="message"
              value={message}
              onChange={e => setMessage(e.target.value)}
            />
            <label htmlFor="message" className="active">
              Log Message
            </label>
          </div>
        </div>

        <div className="row">
          <div className="input-field">
            <select
              className="browser-default"
              name="tech"
              value={tech}
              onChange={e => setTech(e.target.value)}
            >
              <option value="" disabled>
                Select a Technician
              </option>
              <option value="Stephen Frein">Stephen Frein</option>
              <option value="Dwight Schrute">Dwight Schrute</option>
              <option value="Pam Beesley">Pam Beesley</option>
            </select>
          </div>
        </div>

        <div className="row">
          <div className="input-field">
            <label>
              <input
                type="checkbox"
                className="filled-in"
                checked={attention}
                value={attention}
                onChange={e => setAttention(!attention)}
              />
              <span>Needs Attention</span>
            </label>
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

const modalStyle = {
  width: '75%',
  height: '75%'
};

AddLogModal.propTypes = {
  addLog: PropTypes.func.isRequired
};

export default connect(
  null,
  { addLog }
)(AddLogModal);
