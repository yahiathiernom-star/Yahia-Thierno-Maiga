import { useState, useEffect } from 'react';
import styles from './contact.module.css';

function Contact() {
  const [email, setEmail] = useState('');
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');
  const [sent, setSent] = useState(false);

  useEffect(() => {
    document.title = sent ? 'Message envoyé ✅' : 'Contact';
  }, [sent]);

  function handleSubmit(e) {
    e.preventDefault();
    if (!email || !subject || !message) return;
    console.log({ email, subject, message });
    setSent(true);
    setEmail('');
    setSubject('');
    setMessage('');
  }

  return (
    <div className={styles.SD}>
      <h1>Contacte moi</h1>
      {sent && <p className={styles.success}>✅ Message envoyé !</p>}
      <form onSubmit={handleSubmit}>
        <label>Email</label>
        <input
          type="email"
          placeholder="youremail@gmail.com"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <label>Sujet</label>
        <input
          type="text"
          placeholder="enter subject"
          value={subject}
          onChange={(e) => setSubject(e.target.value)}
        />
        <label>Message</label>
        <textarea
          rows="5"
          placeholder="enter message"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        />
        <button type="submit">Envoyer</button>
      </form>
    </div>
  );
}

export default Contact;