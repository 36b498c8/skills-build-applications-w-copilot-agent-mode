import React, { useEffect, useState } from 'react';

const Teams = () => {
  const [teams, setTeams] = useState([]);
  const apiUrl = `${process.env.REACT_APP_CODESPACE_NAME ? `https://${process.env.REACT_APP_CODESPACE_NAME}-8000.app.github.dev` : 'http://localhost:8000'}/api/teams/`;

  useEffect(() => {
    fetch(apiUrl)
      .then(res => res.json())
      .then(data => {
        console.log('Teams API Endpoint:', apiUrl);
        console.log('Fetched Teams:', data);
        setTeams(data.results ? data.results : data);
      });
  }, [apiUrl]);

  return (
    <div>
      <h2 className="mb-4">Teams</h2>
      <table className="table table-striped table-bordered">
        <thead className="table-primary">
          <tr>
            <th>Name</th>
          </tr>
        </thead>
        <tbody>
          {teams.map(team => (
            <tr key={team.id}>
              <td>{team.name}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Teams;
