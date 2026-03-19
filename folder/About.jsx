import React from 'react';

const About = () => {
  return (
    <main className="main">
      {/* ABOUT SECTION */}
      <div className="about">
        <img src="/images/about-img.jpg" className="about-img" alt="About CocoMart" />
        <div className="about-text">
          <h1>About Us</h1>
          <p>
            Welcome to CocoMart! Your one-stop shop for sustainable gardening.
            Whether you need 100% coco peat blocks or eco-friendly grow bags,
            we’ve got you covered. Join us in our mission to make the world
            greener, one plant at a time.
          </p>
        </div>
      </div>

      <hr className="abt-hr" />

      {/* WHY US SECTION */}
      <h2 className="why">Why Us</h2>
      <div className="why-us">
        <div className="specialties spe-left">
          <img src="/images/special-01.png" alt="Quality" />
          <h3>Top-Tier Quality Products</h3>
          <p>
            At CocoMart, we don’t compromise. Our premium coir range is
            engineered to give your plants the best start and guarantee
            cultivation success.
          </p>
        </div>

        <div className="specialties spe-center">
          <img src="/images/special-02.png" alt="Sustainability" />
          <h3>Sustainability Focus</h3>
          <p>
            Sustainability drives us. Every product we make reflects our
            dedication to eco-friendly, responsible practices.
          </p>
        </div>

        <div className="specialties spe-right">
          <img src="/images/special-03.png" alt="Modern Tools" />
          <h3>Modern Cultivation Tools</h3>
          <p>
            From advanced substrates to eco-bags, we provide the innovative coir
            solutions today’s diverse environments require.
          </p>
        </div>
      </div>

      <hr className="abt-hr" />

      {/* TEAM SECTION */}
      <h2 className="why">The Team</h2>
      <div className="team-container">
        <div className="member">
          <img src="/images/team-almodal.png" alt="Sheena Almodal"/>
          <h3>Sheena Marie Almodal</h3>
          <h5>Lead Developer</h5>
          <p>sealmodal@fit.edu.ph</p>
        </div>
        <div className="member">
          <img src="/images/placeholder-team.png" alt="Laica Mae Asauro" /> {/* Added placeholder for empty img */}
          <h3>Laica Mae Asauro</h3>
          <h5>Developer</h5>
          <p>ldasauro@fit.edu.ph</p>
        </div>
        <div className="member">
          <img src="/images/team-pabelona.jpg" alt="Steven Pabelona" />
          <h3>Steven Kane Pabelona</h3>
          <h5>Developer</h5>
          <p>spabelona@fit.edu.ph</p>
        </div>
        <div className="member">
          <img src="/images/placeholder-team.png" alt="Kaye Antonette Visera" /> {/* Added placeholder for empty img */}
          <h3>Kaye Antonette Visera</h3>
          <h5>Developer</h5>
          <p>kavisera@fit.edu.ph</p>
        </div>
      </div>

      <hr className="abt-hr" />

      <div className="references">
        <h2 className="why">List of References</h2>
      </div>
    </main>
  );
};

export default About;