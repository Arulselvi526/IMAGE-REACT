function Contact() {
  function click() {
    alert("submitted");
  }
  return (
    <>
      <section className="contact-section">
        <div className="contact-container">
          <h1>Contact Us</h1>
          <p>Have a question or suggestion? We'd be happy to hear from you. Get in touch anytime!</p>
          <input type="email" placeholder="Enter your email" />
          <button onClick={click}>Submit</button>
        </div>
      </section>
    </>
  );
}
export default Contact;