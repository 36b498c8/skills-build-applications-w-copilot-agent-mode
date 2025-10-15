import React, { useEffect, useState } from 'react';

const Activities = () => {
  const [activities, setActivities] = useState([]);
  const apiUrl = `${process.env.REACT_APP_CODESPACE_NAME ? `https://${process.env.REACT_APP_CODESPACE_NAME}-8000.app.github.dev` : 'http://localhost:8000'}/api/activities/`;

  useEffect(() => {
    fetch(apiUrl)
      .then(res => res.json())
      .then(data => {
        console.log('Activities API Endpoint:', apiUrl);
        console.log('Fetched Activities:', data);
        setActivities(data.results ? data.results : data);
      });
  }, [apiUrl]);

  return (
    <div>
      <h2 className="mb-4">Activities</h2>
      <table className="table table-striped table-bordered">
        <thead className="table-primary">
          <tr>
            <th>Type</th>
            <th>Duration (min)</th>
          </tr>
        </thead>
        <tbody>
          {activities.map(activity => (
            <tr key={activity.id}>
              <td>{activity.type}</td>
              <td>{activity.duration}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Activities;
