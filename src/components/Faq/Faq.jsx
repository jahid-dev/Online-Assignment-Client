import React from 'react';

const Faq = () => {
  return (
    <div>
      <h2 className="text-5xl mb-10 mt-20 text-blue-500 font-bold text-center">
        Group Study FAQs
      </h2>
      <div className="collapse collapse-arrow bg-base-200">
        <input type="radio" name="group-study-accordion" />
        <div className="collapse-title text-xl font-medium">
          How can I initiate a group study session?
        </div>
        <div className="collapse-content">
          <p>
            You can start a group study session by creating a shared document or using a collaborative platform where you and your friends can join, contribute, and discuss the study material together.
          </p>
        </div>
      </div>

      <div className="collapse collapse-arrow bg-base-200">
        <input type="radio" name="group-study-accordion" />
        <div className="collapse-title text-xl font-medium">
          What tools or platforms are best for group study online?
        </div>
        <div className="collapse-content">
          <p>
            There are various tools available for group study online, such as Google Meet, Zoom, Microsoft Teams, or platforms like Discord and Slack. Choose one that best fits your group's preferences and needs for collaborative studying.
          </p>
        </div>
      </div>

      <div className="collapse collapse-arrow bg-base-200">
        <input type="radio" name="group-study-accordion" />
        <div className="collapse-title text-xl font-medium">
          Can we share assignments or documents for collaborative work?
        </div>
        <div className="collapse-content">
          <p>
            Yes, you can share assignments or documents for collaborative work. Use cloud storage services like Google Drive, Dropbox, or collaborative document editing platforms like Google Docs or Microsoft Office Online for seamless sharing and editing among your group.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Faq;
