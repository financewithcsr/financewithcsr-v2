function Stats() {
  const stats = [
    {
      number: "25+",
      title: "Financial Calculators",
    },
    {
      number: "100+",
      title: "Finance Articles",
    },
    {
      number: "1M+",
      title: "Calculations Performed",
    },
    {
      number: "24×7",
      title: "Free Access",
    },
  ];

  return (
    <section className="stats">
      <div className="container stats-grid">
        {stats.map((item) => (
          <div className="stat-card" key={item.title}>
            <h2>{item.number}</h2>
            <p>{item.title}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Stats;