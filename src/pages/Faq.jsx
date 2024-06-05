import React from "react";

const faqs = [
  {
    question: "What is Bolly Critics?",
    answer:
      "Bolly Critics is a dedicated platform for Bollywood movie reviews where users can read detailed critiques, ratings, and reviews by professional critics and fellow movie enthusiasts.",
  },
  {
    question: "How can I read movie reviews on Bolly Critics?",
    answer:
      "Simply visit our homepage and browse through the latest reviews. You can also use the search bar to find reviews for specific movies or explore reviews categorized by genres and release dates.",
  },
  {
    question: "How can I submit my movie review?",
    answer:
      "To submit your review, you need to create an account on Bolly Critics. Once registered, you can log in and submit your reviews through the 'Submit Review' section on your profile.",
  },
  {
    question: "Are the reviews on Bolly Critics unbiased?",
    answer:
      "Yes, we strive to maintain unbiased and honest reviews. Our critics provide their personal opinions based on their viewing experiences, and we encourage a diverse range of perspectives to ensure a well-rounded critique.",
  },
  {
    question: "Can I trust the ratings on Bolly Critics?",
    answer:
      "Our ratings are a combination of professional critics' scores and user ratings. We ensure that all reviews are genuine and come from verified users to maintain the integrity of our ratings system.",
  },
  {
    question: "How frequently is the website updated with new reviews?",
    answer:
      "We update our website with new reviews as soon as a new Bollywood movie is released. Our team of critics works diligently to provide timely reviews so you can stay informed about the latest films.",
  },
  {
    question: "Is there a way to follow my favorite critics?",
    answer:
      "Yes, once you create an account, you can follow your favorite critics and receive notifications whenever they post new reviews.",
  },
  {
    question: "How do I contact Bolly Critics for more information or support?",
    answer:
      "You can reach us through the 'Contact Us' page on our website. Fill out the contact form with your query, and our support team will get back to you as soon as possible.",
  },
  {
    question: "Can I request a review for a specific movie?",
    answer:
      "Absolutely! If there's a particular movie you want reviewed, you can submit a request through our 'Request Review' section. We’ll do our best to accommodate your request.",
  },
  {
    question:
      "Are there any membership fees for accessing reviews on Bolly Critics?",
    answer:
      "No, accessing reviews on Bolly Critics is completely free. However, we offer premium memberships with additional features like ad-free browsing and early access to reviews.",
  },
];

const Faq = () => {
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-10 text-center">
        Frequently Asked Questions
      </h1>
      <div className="space-y-4">
        {faqs.map((faq, index) => (
          <div
            key={index}
            className="collapse collapse-arrow border border-base-300 bg-base-100 rounded-box"
          >
            <input type="checkbox" className="peer" />
            <div className="collapse-title text-lg font-medium">
              {faq.question}
            </div>
            <div className="collapse-content">
              <p>{faq.answer}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Faq;
