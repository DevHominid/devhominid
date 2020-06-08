import React, { useEffect, useState } from 'react';
import { useInput, usePrevious } from '../../hooks';
import {
  handleFormSubmit,
  handleFormValidation,
  isEmailValidated,
  isFormValidated,
  isPhoneValidated,
  phoneMask
} from './utils';
import styles from './Contact.css';

function Contact() {
  const { changeHandler: handleMessageTypeChange, reset: resetMessageType, value: messageType } = useInput('');
  const { changeHandler: handleNameChange, reset: resetName, value: name } = useInput('');
  const { changeHandler: handleEmailChange, reset: resetEmail, value: email } = useInput('');
  const { changeHandler: handlePhoneChange, reset: resetPhone, value: phone } = useInput('');
  const { changeHandler: handleMessageChange, reset: resetMessage, value: message } = useInput('');
  const [validationError, setValidationError] = useState(null);
  const prevPhone = usePrevious(phone);
  const resetHandlers = {
    resetEmail,
    resetMessage,
    resetMessageType,
    resetName,
    resetPhone
  };
  const formValues = {
    email,
    message,
    messageType,
    name,
    phone
  };
  const formValidated = isFormValidated(formValues);

  useEffect(() => {
    if (prevPhone && validationError?.name === 'phone') {
      if (!phone || (!isPhoneValidated(prevPhone) && isPhoneValidated(phone))) {
        setValidationError(null);
      }
    }
  }, [phone]);

  return (
    <div className={styles.Contact}>
      <h1 className={`${formValidated && styles.active}`}>Contact</h1>
      <form onSubmit={formValidated
        ? (e) => handleFormSubmit(e, resetHandlers)
        : handleFormValidation(formValues, setValidationError)}
      >
        <label className={`${messageType ? styles.isValidated : ''}`} htmlFor="messageType">
          Message Type:
          {validationError && (
            <div className={`${styles.validationError} ${validationError.name === 'messageType' ? styles.active : ''}`}>
              {validationError.text}
            </div>
          )}
          <select
            className={styles.formInput}
            name="messageType"
            onChange={(e) => handleMessageTypeChange(e.target.value)}
            required
            value={messageType}
          >
            <option value="">Please Select a Message Type</option>
            <option value="collaboration inquiry">Collaboration Inquiry</option>
            <option value="bug report">Bug Report</option>
            <option value="question">Question</option>
            <option value="other">Other</option>
          </select>
        </label>
        <label className={`${name ? styles.isValidated : ''}`} htmlFor="name">
          Name:
          {validationError && (
            <div className={`${styles.validationError} ${validationError.name === 'name' ? styles.active : ''}`}>
              {validationError.text}
            </div>
          )}
          <input
            className={styles.formInput}
            name="name"
            required
            onChange={(e) => handleNameChange(e.target.value)}
            placeholder="First Last"
            type="text"
            value={name}
          />
        </label>
        <label className={`${isEmailValidated(email) ? styles.isValidated : ''}`} htmlFor="email">
          Email:
          {validationError && (
            <div className={`${styles.validationError} ${validationError.name === 'email' ? styles.active : ''}`}>
              {validationError.text}
            </div>
          )}
          <input
            className={styles.formInput}
            name="email"
            required
            onChange={(e) => handleEmailChange(e.target.value)}
            placeholder="name@domain.com"
            type="email"
            value={email}
          />
        </label>
        <label className={`${styles.optional} ${isPhoneValidated(phone) ? styles.isValidated : ''}`} htmlFor="phone">
          Phone (optional):
          {validationError && (
            <div className={`${styles.validationError} ${validationError.name === 'phone' ? styles.active : ''}`}>
              {validationError.text}
            </div>
          )}
          <input
            className={styles.formInput}
            maxLength="15"
            name="phone"
            minLength="15"
            onChange={
              (e) => handlePhoneChange(phoneMask(e.target.value, phone))
            }
            placeholder="(000) 000-0000"
            type="tel"
            value={phone}
          />
        </label>
        <label className={`${message ? styles.isValidated : ''}`} htmlFor="message">
          Message:
          {validationError && (
            <div className={`${styles.validationError} ${validationError.name === 'message' ? styles.active : ''}`}>
              {validationError.text}
            </div>
          )}
          <textarea
            className={styles.formInput}
            name="message"
            onChange={(e) => handleMessageChange(e.target.value)}
            placeholder="Ground Control to Major Tom..."
            required
            rows="5"
            value={message}
          />
        </label>
        <button className={`${formValidated && styles.active}`} type="submit">send</button>
      </form>
    </div>
  );
}

export default Contact;
