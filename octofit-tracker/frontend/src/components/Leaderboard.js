import React, { useEffect, useState } from 'react';

const Leaderboard = () => {
  const [leaderboard, setLeaderboard] = useState([]);
  const apiUrl = `${process.env.REACT_APP_CODESPACE_NAME ? `https://${process.env.REACT_APP_CODESPACE_NAME}-8000.app.github.dev` : 'http://localhost:8000'}/api/leaderboard/`;

  useEffect(() => {
    fetch(apiUrl)
      .then(res => res.json())
      .then(data => {
        console.log('Leaderboard API Endpoint:', apiUrl);
        console.log('Fetched Leaderboard:', data);
        setLeaderboard(data.results ? data.results : data);
      });
  }, [apiUrl]);

  return (
    <div>
      <h2 className="mb-4">Leaderboard</h2>
      <table className="table table-striped table-bordered">
        <thead className="table-primary">
          <tr>
            <th>Team</th>
            <th>Points</th>
          </tr>
        </thead>
        <tbody>
          {leaderboard.map(entry => (
            <tr key={entry.id}>
              <td>{entry.team}</td>
              <td>{entry.points}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Leaderboard;
