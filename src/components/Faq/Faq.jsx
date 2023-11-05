const Faq = () => {
  return (
    <div>

<h2 className="text-5xl mb-10 mt-20 text-blue-500 font-bold text-center">Here are some Frequently Asked Questions...</h2>
      <div className="collapse collapse-arrow bg-base-200">
        <input type="radio" name="my-accordion-2" />
        <div className="collapse-title text-xl font-medium">
          How do I submit my assignment online?
        </div>
        <div className="collapse-content">
          <p>
            You can submit your assignment online by logging into your account
            and following the submission instructions on the website.
          </p>
        </div>
      </div>

      <div className="collapse collapse-arrow bg-base-200">
        <input type="radio" name="my-accordion-2" />
        <div className="collapse-title text-xl font-medium">
          What is the deadline for assignment submissions?
        </div>
        <div className="collapse-content">
          <p>
            The deadline for assignment submissions is usually specified in the
            assignment details. Make sure to submit your assignment before the
            deadline to avoid late penalties.
          </p>
        </div>
      </div>

      <div className="collapse collapse-arrow bg-base-200">
        <input type="radio" name="my-accordion-2" />
        <div className="collapse-title text-xl font-medium">
          Can I edit my submitted assignment?
        </div>
        <div className="collapse-content">
          <p>
            Once you submit your assignment, you may not be able to edit it.
            It's important to review your work carefully before submission.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Faq;
