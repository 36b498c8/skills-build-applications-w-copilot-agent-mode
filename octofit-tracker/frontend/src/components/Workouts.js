import React, { useEffect, useState } from 'react';

const Workouts = () => {
  const [workouts, setWorkouts] = useState([]);
  const codespaceName = window.location.hostname.split('-3000')[0];
  const apiUrl = window.location.hostname.includes('app.github.dev')
    ? `https://${codespaceName}-8000.app.github.dev/api/workouts/`
    : 'http://localhost:8000/api/workouts/';

  useEffect(() => {
    fetch(apiUrl)
      .then(res => res.json())
      .then(data => {
        console.log('Workouts API Endpoint:', apiUrl);
        console.log('Fetched Workouts:', data);
        setWorkouts(data.results ? data.results : data);
      });
  }, [apiUrl]);

  return (
    <div>
      <h2 className="mb-4">Workouts</h2>
      <table className="table table-striped table-bordered">
        <thead className="table-primary">
          <tr>
            <th>Name</th>
            <th>Description</th>
          </tr>
        </thead>
        <tbody>
          {workouts.map(workout => (
            <tr key={workout.id}>
              <td>{workout.name}</td>
              <td>{workout.description}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Workouts;
