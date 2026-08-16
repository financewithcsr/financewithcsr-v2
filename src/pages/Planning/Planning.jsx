import { Link } from "react-router-dom";
import "./Planning.css";

function Planning() {
  const planningTools = [
    {
      icon: "🛟",
      title: "Emergency Fund",
      description:
        "Build a financial safety net for unexpected expenses and income disruptions.",
      path: "/planning",
      action: "Plan Emergency Fund",
    },
    {
      icon: "🏖️",
      title: "Retirement Planning",
      description:
        "Estimate how much you may need for retirement and start planning your future corpus.",
      path: "/planning",
      action: "Plan Retirement",
    },
    {
      icon: "🎓",
      title: "Child Education",
      description:
        "Plan ahead for your child's future education expenses and long-term financial goals.",
      path: "/planning",
      action: "Plan Education",
    },
    {
      icon: "🏠",
      title: "Home Planning",
      description:
        "Understand your affordability before taking a major home-related financial decision.",
      path: "/loans/home-loan",
      action: "Calculate Home Loan",
    },
    {
      icon: "🎯",
      title: "Financial Goals",
      description:
        "Turn your financial goals into a practical savings and investment plan.",
      path: "/investments",
      action: "Explore Investments",
    },
    {
      icon: "💰",
      title: "Wealth Planning",
      description:
        "Explore investment calculators and understand how your money can grow over time.",
      path: "/investments",
      action: "Explore Calculators",
    },
  ];

  return (
    <main className="planning-page">

      {/* HERO */}

      <section className="planning-hero">

        <div className="planning-container">

          <span className="planning-eyebrow">
            FINANCIAL PLANNING
          </span>

          <h1>
            Plan Your Money.
            <span>Plan Your Future.</span>
          </h1>

          <p>
            Good financial planning is not about earning more
            money alone. It is about knowing where your money
            should go and preparing for the goals that matter
            to you.
          </p>

        </div>

      </section>


      {/* INTRO */}

      <section className="planning-intro">

        <div className="planning-container">

          <div className="planning-intro-grid">

            <div>

              <span className="planning-label">
                WHY PLANNING MATTERS
              </span>

              <h2>
                Your financial goals
                need a plan.
              </h2>

            </div>

            <div className="planning-intro-text">

              <p>
                Whether you are building an emergency fund,
                planning for retirement, saving for your
                child's education or working towards buying
                a home, having a clear plan can make the
                journey easier.
              </p>

              <p>
                FinanceWithCSR brings useful planning ideas
                and financial calculators together so you
                can make decisions with more clarity.
              </p>

            </div>

          </div>

        </div>

      </section>


      {/* PLANNING TOOLS */}

      <section className="planning-tools">

        <div className="planning-container">

          <div className="planning-section-heading">

            <span className="planning-label">
              EXPLORE YOUR GOALS
            </span>

            <h2>
              Start planning what matters
              to you.
            </h2>

            <p>
              Choose a financial goal and explore the
              tools available on FinanceWithCSR.
            </p>

          </div>


          <div className="planning-grid">

            {planningTools.map((tool) => (
              <div
                className="planning-card"
                key={tool.title}
              >

                <div className="planning-card-icon">
                  {tool.icon}
                </div>

                <h3>
                  {tool.title}
                </h3>

                <p>
                  {tool.description}
                </p>

                <Link
                  to={tool.path}
                  className="planning-card-link"
                >
                  {tool.action}
                  <span>→</span>
                </Link>

              </div>
            ))}

          </div>

        </div>

      </section>


      {/* SIMPLE FRAMEWORK */}

      <section className="planning-framework">

        <div className="planning-container">

          <div className="planning-framework-card">

            <div className="planning-framework-heading">

              <span className="planning-label">
                A SIMPLE APPROACH
              </span>

              <h2>
                Plan your money in
                four simple steps.
              </h2>

            </div>


            <div className="planning-steps">

              <div className="planning-step">

                <span className="planning-step-number">
                  01
                </span>

                <div>

                  <h3>
                    Know Your Money
                  </h3>

                  <p>
                    Understand your income, expenses,
                    debt and existing investments.
                  </p>

                </div>

              </div>


              <div className="planning-step">

                <span className="planning-step-number">
                  02
                </span>

                <div>

                  <h3>
                    Define Your Goals
                  </h3>

                  <p>
                    Decide what you want your money to
                    achieve and when you need it.
                  </p>

                </div>

              </div>


              <div className="planning-step">

                <span className="planning-step-number">
                  03
                </span>

                <div>

                  <h3>
                    Choose Your Strategy
                  </h3>

                  <p>
                    Select suitable savings and investment
                    options based on your goals.
                  </p>

                </div>

              </div>


              <div className="planning-step">

                <span className="planning-step-number">
                  04
                </span>

                <div>

                  <h3>
                    Review Regularly
                  </h3>

                  <p>
                    Your income, goals and responsibilities
                    change. Your plan should change with them.
                  </p>

                </div>

              </div>

            </div>

          </div>

        </div>

      </section>


      {/* CTA */}

      <section className="planning-cta">

        <div className="planning-container">

          <div className="planning-cta-card">

            <span className="planning-cta-mark">
              FINANCEWITHCSR
            </span>

            <h2>
              Don't just earn money.
              <br />
              Give every rupee a purpose.
            </h2>

            <p>
              Start exploring our free financial calculators
              and planning tools.
            </p>

            <Link
              to="/investments"
              className="planning-cta-button"
            >
              Explore Calculators
              <span>→</span>
            </Link>

          </div>

        </div>

      </section>

    </main>
  );
}

export default Planning;