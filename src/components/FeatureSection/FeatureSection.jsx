const FeatureSection = () => {
  return (
    <div>
      <h2 className="text-5xl mb-10 mt-20 text-blue-500 font-bold text-center">
        Online Group Study with Friends
      </h2>

      <div className="grid md:grid-cols-2 grid-cols-1 lg:grid-cols-3 gap-10">
        <div className="card  md:w-96 bg-base-100 shadow-xl">
          <figure>
            <img src="https://i.ibb.co/CM19KDN/la-collaboration-dans-l-icone-de-groupe-illustration-r4mxpe.jpg" alt="Feature 1" />
          </figure>
          <div className="card-body">
            <h2 className="card-title">Group Assignment Collaboration</h2>
            <p>
              Collaborate on assignments in real-time with friends, enabling simultaneous editing and group discussions.
            </p>
            <div className="card-actions justify-end">
              <button className="btn btn-primary">Learn More</button>
            </div>
          </div>
        </div>

        <div className="card md:w-96 bg-base-100 shadow-xl">
          <figure>
            <img src="https://i.ibb.co/GkdcKZr/download.jpg" alt="Feature 2" />
          </figure>
          <div className="card-body">
            <h2 className="card-title">Shared Study Resources</h2>
            <p>
              Share and access study materials, notes, and resources among the study group for enhanced learning.
            </p>
            <div className="card-actions justify-end">
              <button className="btn btn-primary">Learn More</button>
            </div>
          </div>
        </div>

        <div className="card md:w-96 bg-base-100 shadow-xl">
          <figure>
            <img src="https://i.ibb.co/zXF0WK2/tasks-discussion-forum-color-icon-animation-tasks-discussion-forum-animated-color-icon-tasks-discuss.webp" alt="Feature 3" />
          </figure>
          <div className="card-body">
            <h2 className="card-title">Discussion Forums</h2>
            <p>
              Engage in group discussions and forums to address queries, share insights, and brainstorm ideas together.
            </p>
            <div className="card-actions justify-end">
              <button className="btn btn-primary">Learn More</button>
            </div>
          </div>
        </div>

        <div className="card md:w-96 bg-base-100 shadow-xl">
          <figure>
            <img src="https://i.ibb.co/20r5ChV/online-discussion-isolated-cartoon-vector-illustrations-group-students-having-live-session-during-di.jpg" alt="Feature 4" />
          </figure>
          <div className="card-body">
            <h2 className="card-title">Live Video Sessions</h2>
            <p>
              Conduct live video sessions to discuss complex topics, host study groups, or conduct lectures together.
            </p>
            <div className="card-actions justify-end">
              <button className="btn btn-primary">Learn More</button>
            </div>
          </div>
        </div>

        <div className="card md:w-96 bg-base-100 shadow-xl">
          <figure>
            <img src="https://i.ibb.co/xjfjr9y/project-tracking-goal-tracker-businessman-260nw-2223370697.webp" alt="Feature 5" />
          </figure>
          <div className="card-body">
            <h2 className="card-title">Task and Progress Tracking</h2>
            <p>
              Track individual and group progress on tasks, assignments, and study goals within the group interface.
            </p>
            <div className="card-actions justify-end">
              <button className="btn btn-primary">Learn More</button>
            </div>
          </div>
        </div>

        <div className="card md:w-96 bg-base-100 shadow-xl">
          <figure>
            <img src="https://i.ibb.co/R99S31X/reminder-concept-notifications-page-with-notification-bell-new-notice-important-reminder-event-push.jpg" alt="Feature 6" />
          </figure>
          <div className="card-body">
            <h2 className="card-title">Notifications and Reminders</h2>
            <p>
              Receive notifications and reminders for upcoming group study sessions, assignments, and deadlines.
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
