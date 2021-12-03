import React from "react";
import { useEffect, useState } from "react";
import "./style.css";
const Issue = () => {
  const [allIsuues, setAllIssues] = useState([]);
  const [isDataFetched, setDataFetched] = useState(true);

  useEffect(() => {
    fetch("https://api.github.com/repos/facebook/react/issues")
      .then((res) => res.json())
      .then((res) => {
        setAllIssues(res);
        setDataFetched(true);
      });
  }, []);

  return (
    <div className="all-issue-container">
      <div className="issue-card-container">
        {isDataFetched &&
          allIsuues.map(issue =>
            <div className="issue-card">
              <div kley={1} className="issue-card-data">
                <span className="title">{issue.title} </span>
                <span className="status">
                  {issue.labels.length > 0 ? issue.labels[0].name : "NULL"}{" "}
                </span>
                <div className="issue-card-footer">
                  <span className="openby">
                    opened by {allIsuues[0].user.login}
                  </span>
                </div>
              </div>
            </div>
          )}
      </div>
    </div>
  );
};

export default Issue;
