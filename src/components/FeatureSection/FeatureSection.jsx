const FeatureSection = () => {
  return (
    <div>
      <h2 className="text-5xl mb-10 mt-20 text-blue-500 font-bold text-center">
        We Are Featuring...
      </h2>

      <div className="grid md:grid-cols-2 grid-cols-1 lg:grid-cols-3 gap-10">
        <div className="card w-96 bg-base-100 shadow-xl">
          <figure>
            <img src="/images/feature1.jpg" alt="Feature 1" />
          </figure>
          <div className="card-body">
            <h2 className="card-title">Assignment Submission</h2>
            <p>
              Easily submit your assignments online with a user-friendly
              interface and track their progress.
            </p>
            <div className="card-actions justify-end">
              <button className="btn btn-primary">Learn More</button>
            </div>
          </div>
        </div>

        <div className="card w-96 bg-base-100 shadow-xl">
          <figure>
            <img src="/images/feature2.jpg" alt="Feature 2" />
          </figure>
          <div className="card-body">
            <h2 className="card-title">Academic Resources</h2>
            <p>
              Access a rich library of study guides, reference materials, and
              FAQs to excel in your studies.
            </p>
            <div className="card-actions justify-end">
              <button className="btn btn-primary">Learn More</button>
            </div>
          </div>
        </div>

        <div className="card w-96 bg-base-100 shadow-xl">
          <figure>
            <img src="/images/feature3.jpg" alt="Feature 3" />
          </figure>
          <div className="card-body">
            <h2 className="card-title">Plagiarism Checker</h2>
            <p>
              Ensure academic integrity by checking your assignments for
              plagiarism before submission.
            </p>
            <div className="card-actions justify-end">
              <button className="btn btn-primary">Learn More</button>
            </div>
          </div>
        </div>

        <div className="card w-96 bg-base-100 shadow-xl">
          <figure>
            <img src="/images/feature4.jpg" alt="Feature 4" />
          </figure>
          <div className="card-body">
            <h2 className="card-title">Live Chat Support</h2>
            <p>
              Get instant assistance with assignment-related queries through our
              live chat support feature.
            </p>
            <div className="card-actions justify-end">
              <button className="btn btn-primary">Learn More</button>
            </div>
          </div>
        </div>

        <div className="card w-96 bg-base-100 shadow-xl">
          <figure>
            <img src="/images/feature5.jpg" alt="Feature 5" />
          </figure>
          <div className="card-body">
            <h2 className="card-title">Citation Generator</h2>
            <p>
              Effortlessly create proper citations and references for your
              assignments with our citation generator.
            </p>
            <div className="card-actions justify-end">
              <button className="btn btn-primary">Learn More</button>
            </div>
          </div>
        </div>

        <div className="card w-96 bg-base-100 shadow-xl">
          <figure>
            <img src="/images/feature6.jpg" alt="Feature 6" />
          </figure>
          <div className="card-body">
            <h2 className="card-title">Assignment Deadline Alerts</h2>
            <p>
              Receive timely reminders about assignment deadlines to stay on
              track with your studies.
            </p>
            <div className="card-actions justify-end">
              <button className="btn btn-primary">Learn More</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeatureSection;
