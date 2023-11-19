import validateEmail from "../utils/validation";

const Contact = () => {
  const handleFormSubmit = (event) => {
    event.preventDefault();

    // Get the values from the form
    const name = event.target.elements.name.value;
    const email = event.target.elements.email.value;
    const message = event.target.elements.message.value;

    // Validate email
    if (!validateEmail(email)) {
      alert("Please enter a valid email address");
      return;
    }

    // Recipient's email address
    const recipientEmail = "kaiserrobert1997@gmail.com";

    // Generate the mailto link with recipient's email, sender's email, subject, and body
    const mailtoLink = `mailto:${recipientEmail}?subject=${encodeURIComponent(
      `Message from ${name}`
    )}&body=${encodeURIComponent(`${message}\n\nSender's Email: ${email}`)}`;

    // Open the user's email client with the pre-filled email
    window.open(mailtoLink);
  };

  return (
    <div className="container mt-5 contact-container">
      <h1 className="mb-4 text-center">Contact Me</h1>
      <form onSubmit={handleFormSubmit}>
        <div className="mb-3">
          <label htmlFor="name" className="form-label">
            Name:
          </label>
          <input
            type="text"
            className="form-control"
            id="name"
            placeholder="Your Name"
            required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="email" className="form-label">
            Email:
          </label>
          <input
            type="email"
            className="form-control"
            id="email"
            placeholder="Your Email"
            required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="message" className="form-label">
            Message:
          </label>
          <textarea
            className="form-control"
            id="message"
            placeholder="Your Message"
            required
          />
        </div>
        <button type="submit" className="btn btn-primary">
          Send
        </button>
      </form>
    </div>
  );
};

export default Contact;
