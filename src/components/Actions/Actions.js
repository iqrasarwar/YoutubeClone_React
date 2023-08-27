import React from "react";
import Action from "../Action/Action";

const Actions = () => {
  const actions = [
    { title: "Home", image: "../static/images/Home.png" },
    { title: "Explore", image: "../static/images/Explore.png" },
    { title: "Shorts", image: "../static/images/Shorts.png" },
    { title: "Subscriptions", image: "../static/images/Subscriptions.png" },
    { title: "Settings", image: "../static/images/Settings.png" },
    { title: "History", image: "../static/images/History.png" },
    { title: "Help", image: "../static/images/Help.png" },
    { title: "Send feedback", image: "../static/images/Feedback.png" },
  ];

  return (
    <div>
      {actions.map((action, index) => (
        <React.Fragment key={index}>
          <Action {...action} />
          {action.title === "Subscriptions" && <hr className="sidebarHr" />}
        </React.Fragment>
      ))}
    </div>
  );
};

export default Actions;
