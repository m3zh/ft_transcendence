import React from 'react';
import PropTypes from 'prop-types';

function Card(props) {
  const content = props.data.map((d) =>
    <div class="card-body">
      <h5 class="card-title">{ d.username }</h5>
      <p class="card-text">{ d.max_score }</p>
    </div>
  );

  return (
      <>
        <div class="card border-light mb-3" style="max-width: 18rem;">
          <div class="card-header"> TITLE </div>
          {/* content */}
        </div>
      </>
  )
}

export default Card