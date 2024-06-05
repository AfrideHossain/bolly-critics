import HeadLine from "../../../shared/HeadLine/HeadLine";

const FaqHome = () => {
  return (
    <>
      <HeadLine title={"Frequently asked questions"} />
      <div className="space-y-2 mt-10">
        <div className="collapse collapse-arrow bg-base-200">
          <input type="radio" name="my-accordion-2" defaultChecked />
          <div className="collapse-title text-xl font-medium">
            What is Bolly Critics?
          </div>
          <div className="collapse-content">
            <p>
              Bolly Critics is a dedicated platform for Bollywood movie reviews
              where users can read detailed critiques, ratings, and reviews by
              professional critics and fellow movie enthusiasts.
            </p>
          </div>
        </div>
        <div className="collapse collapse-arrow bg-base-200">
          <input type="radio" name="my-accordion-2" />
          <div className="collapse-title text-xl font-medium">
            Are the reviews on Bolly Critics unbiased?
          </div>
          <div className="collapse-content">
            <p>
              Yes, we strive to maintain unbiased and honest reviews. Our
              critics provide their personal opinions based on their viewing
              experiences, and we encourage a diverse range of perspectives to
              ensure a well-rounded critique.
            </p>
          </div>
        </div>
        <div className="collapse collapse-arrow bg-base-200">
          <input type="radio" name="my-accordion-2" />
          <div className="collapse-title text-xl font-medium">
            How do I contact Bolly Critics for more information or support?
          </div>
          <div className="collapse-content">
            <p>
              You can reach us through the "Contact Us" page on our website.
              Fill out the contact form with your query, and our support team
              will get back to you as soon as possible.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default FaqHome;
