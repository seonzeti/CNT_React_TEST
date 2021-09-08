import React, { memo } from "react";

const Contact = memo(props => {
  return (
    <>
      <section>
        <div>
          <span></span>
          <h3>Email</h3>
          <a href="#">seonzeroticket@gmail.com</a>
        </div>
      </section>
      <section>
        <div>
          <span></span>
          <h3>Phone</h3>
          <a>010-3778-5741</a>
        </div>
      </section>
      <section>
        <div>
          <span></span>
          <h3>Address</h3>
          <a>Somewhere Road #2 Namgu, Gwangju</a>
        </div>
      </section>
    </>
  );
});

export default Contact;
