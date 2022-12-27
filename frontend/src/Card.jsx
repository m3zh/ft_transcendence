import React from 'react';

function Card({ title }) {
  /*const content = props.data.map((d) =>
    <div class="card-body">
      <h5 class="card-title">{ d.username }</h5>
      <p class="card-text">{ d.max_score }</p>
    </div>
  );*/

  return (
      <>
        <div className="card border-light mb-3" style={{ maxWidth: "18rem"}}>
          <div className="card-header">
              <h5>{ title }</h5>
          </div>
        </div>
      </>
  )
}

export default Card