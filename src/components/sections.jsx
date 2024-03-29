import React from "react";

const Sections = props => {
  return (
    <>
      <section id="one" className="tiles">
        <article>
          <span className="image">
            <img src="#" alt="" />
          </span>
          <header className="major">
            <h3>
              <a href="#banner">Section1</a>
            </h3>
            <p>Ipsum dolor sit amet</p>
          </header>
        </article>

        <article>
          <span className="image">
            <img src="#" alt="" />
          </span>
          <header className="major">
            <h3>
              <a href="#banner">Section 2</a>
            </h3>
            <p>Ipsum dolor sit amet</p>
          </header>
        </article>
      </section>{" "}
      <section id="two" className="tiles">
        <article>
          <span className="image">
            <img src="#" alt="" />
          </span>
          <header className="major">
            <h3>
              <a href="#banner">Section 3</a>
            </h3>
            <p>Ipsum dolor sit amet</p>
          </header>
        </article>
        <article>
          <span className="image">
            <img src="#" alt="" />
          </span>
          <header className="major">
            <h3>
              <a href="#banner">Section 4</a>
            </h3>
            <p>Ipsum dolor sit amet</p>
          </header>
        </article>
      </section>{" "}
      <section id="three" className="tiles">
        <article>
          <span className="image">
            <img src="#" alt="" />
          </span>
          <header className="major">
            <h3>
              <a href="#banner">Section 5</a>
            </h3>
            <p>Ipsum dolor sit amet</p>
          </header>
        </article>
        <article>
          <span className="image">
            <img src="#" alt="" />
          </span>
          <header className="major">
            <h3>
              <a href="#banner">Section 6</a>
            </h3>
            <p>Ipsum dolor sit amet</p>
          </header>
        </article>
      </section>
    </>
  );
};

export default Sections;
