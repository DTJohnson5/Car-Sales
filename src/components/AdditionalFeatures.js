import React from 'react';
import AdditionalFeature from './AdditionalFeature';

const AdditionalFeatures = props => {
  return (
    <div className="content">
      <h4>Additional Features</h4>
      {props.store.length ? (
        <ol type="1">
          {props.store.map(item => (
            <AdditionalFeature key={item.id} feature={item} purchaseUpgrade={props.purchaseUpgrade}/>
          ))}
        </ol>
      ) : (
        <p>All available upgrades have been added!</p>
      )}
    </div>
  );
};

export default AdditionalFeatures;