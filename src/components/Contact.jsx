import { motion } from "framer-motion";
import { profile } from "../data";

export default function Contact() {
  return (
    <section className="section" id="contact">
      <div className="section-header">
        <span>Stay in touch</span>
        <h2>Contact</h2>
      </div>

      <motion.div
        className="contact-card"
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.5 }}
      >
        <p className="contact-copy">
          I’m always open to collaborating on new frontend and data-driven projects.
          Reach out and let’s create something compelling together.
        </p>

        <div className="contact-actions">
          <a className="btn accent" href={`mailto:${profile.contact.email}`}>
            Email me
          </a>
          <a
            className="btn ghost"
            href={profile.contact.linkedin}
            target="_blank"
            rel="noreferrer"
          >
            LinkedIn profile
          </a>
        </div>

        <p className="contact-meta">{profile.contact.location}</p>
      </motion.div>
    </section>
  );
}
