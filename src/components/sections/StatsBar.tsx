import { Container } from "@/components/ui/Container";
import { STATS } from "@/lib/data";

export function StatsBar() {
  return (
    <section id="stats" className="stats-bar-wrap" aria-label="Company highlights">
      <Container size="xl">
        <div className="stats-bar">
          <div className="stats-bar-shine" aria-hidden="true" />
          <div className="stats-bar-grid">
            {STATS.map((stat, index) => (
              <div key={stat.label} className="stat-item">
                {index > 0 && (
                  <span className="stat-divider" aria-hidden="true" />
                )}
                <p className="stat-value">{stat.value}</p>
                <p className="stat-label">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
