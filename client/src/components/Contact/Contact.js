import React from 'react';
import styles from './Contact.css';

const Contact = () => (
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
        placeholder="First Last"
        type="text"
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
        name="phone"
        placeholder="(000) 000-0000"
        type="tel"
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

export default Contact;
