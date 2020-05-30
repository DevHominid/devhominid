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
        <select className={styles.formInput} required>
          <option value="">Please Select a Message Type</option>
          <option value="collaboration">Collaboration Inquiry</option>
          <option value="bug">Bug Report</option>
          <option value="question">Question</option>
          <option value="other">Other</option>
        </select>
        <input
          className={styles.formInput}
          name="name"
          required
          onChange={(e) => handleNameChange(e.target.value)}
          placeholder="First Last"
          type="text"
          value={name}
        />
        <input
          className={styles.formInput}
          name="email"
          required
          placeholder="name@domain.com"
          type="email"
        />
        <input
          className={styles.formInput}
          maxLength="15"
          name="phone"
          onChange={(e) => handlePhoneChange(phoneMask(e.target.value, phone))}
          placeholder="(000) 000-0000"
          type="tel"
          value={phone}
        />
        <textarea
          className={styles.formInput}
          name="message"
          placeholder="Message goes here..."
          required
          rows="5"
        />
        <button type="submit">send</button>
      </form>
    </div>
  );
}

export default Contact;
