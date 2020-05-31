import React from 'react';
import useInput from '../../hooks/input';
import phoneMask from './utils';
import styles from './Contact.css';

function Contact() {
  const { changeHandler: handleNameChange, value: name } = useInput('');
  const { changeHandler: handlePhoneChange, value: phone } = useInput('');

  return (
    <div className={styles.Contact}>
      <h1>Contact</h1>
      <form>
        <label htmlFor="message-type">
          Message Type:
          <select className={styles.formInput} name="message-type" required>
            <option value="">Please Select a Message Type</option>
            <option value="collaboration">Collaboration Inquiry</option>
            <option value="bug">Bug Report</option>
            <option value="question">Question</option>
            <option value="other">Other</option>
          </select>
        </label>
        <label htmlFor="name">
          Name:
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
        <label htmlFor="email">
          Email:
          <input
            className={styles.formInput}
            name="email"
            required
            placeholder="name@domain.com"
            type="email"
          />
        </label>
        <label htmlFor="phone">
          Phone (optional):
          <input
            className={styles.formInput}
            maxLength="15"
            name="phone"
            onChange={
              (e) => handlePhoneChange(phoneMask(e.target.value, phone))
            }
            placeholder="(000) 000-0000"
            type="tel"
            value={phone}
          />
        </label>
        <label htmlFor="message">
          Message:
          <textarea
            className={styles.formInput}
            name="message"
            placeholder="Ground Control to Major Tom..."
            required
            rows="5"
          />
        </label>
        <button type="submit">send</button>
      </form>
    </div>
  );
}

export default Contact;
