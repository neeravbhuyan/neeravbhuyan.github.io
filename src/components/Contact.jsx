import { profile } from "../data";
import { motion } from "framer-motion";

export default function Contact() {
  return (
    <section>
      <h2>Contact</h2>

      <motion.div
        className="card"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
      >
        <p>
          📧 Email: 
          <a href={`mailto:${profile.contact.email}`}>
            {profile.contact.email}
          </a>
        </p>

        <p>
          🔗 LinkedIn: 
          <a href={profile.contact.linkedin} target="_blank">
            View Profile
          </a>
        </p>
      </motion.div>
    </section>
  );
}