import { useState, useEffect } from "react";
import styles from "./Contact.module.css";
function Contact() {
    const [email, setEmail] = useState("");
    const [subject, setSubject] = useState("");
    const [message, setMessage] = useState("");

    function handleSubmit(e) {
        e.preventDefault();

        console.log(email);
        console.log(subject);
        console.log(message);
    }

    useEffect(() => {
        console.log(email)
    }, [email]);

    return (
        <div className={styles.SD}>
            <h1>Contacte moi</h1>
            <form>
                <label>Email</label>
                <input
                    type="email"
                    placeholder="youremail@gmail.com"
                    onChange={(e) => setEmail(e.target.value)}
                />
                <label>Subject</label>
                <input
                    type="text"
                    placeholder="enter subject"
                    onChange={(e) => setSubject(e.target.value)}
                />
                <label>Message</label>
                <textarea
                    rows="5"
                    placeholder="enter message"
                    onChange={(e) => setMessage(e.target.value)}
                />
            <button type="submit">envoyer</button>
            </form>
        </div>

    )

}

export default Contact;