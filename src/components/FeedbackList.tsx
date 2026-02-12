export default function FeedbackList() {
  return (
    <>
      <div className="container">
        <h1>Customer Feedback</h1>
        <p className="description">
          We value your feedback. Please answer the following questions to help
          us improve our services.
        </p>

        <form>
          // Name
          <div className="form-group">
            <label for="name">Full Name</label>
            <input
              type="text"
              id="name"
              placeholder="Enter your full name"
              required
            />
          </div>
          // Email
          <div className="form-group">
            <label for="email">Email Address</label>
            <input
              type="email"
              id="email"
              placeholder="Enter your email"
              required
            />
          </div>
          // Satisfaction Level
          <div className="form-group">
            <label>How satisfied are you with our service?</label>
            <div className="radio-group">
              <label>
                <input type="radio" name="satisfaction" required /> Very
                Satisfied
              </label>
              <label>
                <input type="radio" name="satisfaction" /> Satisfied
              </label>
              <label>
                <input type="radio" name="satisfaction" /> Neutral
              </label>
              <label>
                <input type="radio" name="satisfaction" /> Unsatisfied
              </label>
              <label>
                <input type="radio" name="satisfaction" /> Very Unsatisfied
              </label>
            </div>
          </div>
          // Recommendation
          <div className="form-group">
            <label>Would you recommend our company to others?</label>
            <div className="radio-group">
              <label>
                <input type="radio" name="recommend" required /> Yes
              </label>
              <label>
                <input type="radio" name="recommend" /> No
              </label>
            </div>
          </div>
          // Services Used
          <div className="form-group">
            <label>Which of our services have you used?</label>
            <div className="checkbox-group">
              <label>
                <input type="checkbox" /> Customer Support
              </label>
              <label>
                <input type="checkbox" /> Online Ordering
              </label>
              <label>
                <input type="checkbox" /> Delivery Service
              </label>
              <label>
                <input type="checkbox" /> Technical Assistance
              </label>
            </div>
          </div>
          // Improvement
          <div className="form-group">
            <label for="improve">What can we improve?</label>
            <textarea
              id="improve"
              placeholder="Share your suggestions..."
            ></textarea>
          </div>
          // Overall Rating
          <div className="form-group">
            <label for="rating">Overall Rating</label>
            <select id="rating" required>
              <option value="">Select rating</option>
              <option>5 - Excellent</option>
              <option>4 - Good</option>
              <option>3 - Average</option>
              <option>2 - Poor</option>
              <option>1 - Very Poor</option>
            </select>
          </div>
          <button type="submit" className="btn-submit">
            Submit Feedback
          </button>
        </form>
      </div>
    </>
  );
}
