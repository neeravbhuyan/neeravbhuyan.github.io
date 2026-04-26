import { profile } from "../data";

export default function Skills() {
  return (
    <section>
      <h2>Skills</h2>
      <div className="skills">
        {profile.skills.map((s, i) => (
          <span key={i}>{s}</span>
        ))}
      </div>
    </section>
  );
}