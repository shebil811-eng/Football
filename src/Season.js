import React from 'react';

function Season({ season }) {
  return (
    <li>
      <a href={`/season/${season.name}`}> {season.name} </a>
    </li>
  );
}

export default Season;