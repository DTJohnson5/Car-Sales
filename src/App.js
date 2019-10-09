import React from "react";
import Header from "./components/Header";
import AddedFeatures from "./components/AddedFeatures";
import AdditionalFeatures from "./components/AdditionalFeatures";
import Total from "./components/Total";
import { connect } from "react-redux";
import { adjoinAttribute, extractAttribute } from "./actions/Actions";

  const App = ({ state, adjoinAttribute, extractAttribute }) => {
    const removeFeature = item => {
      // dispatch an action here to remove an item
      extractAttribute(item);
    };

    const purchaseUpgrade = item => {
      // dipsatch an action here to add an item
      adjoinAttribute(item);
    };

    return (
      <div className="boxes">
        <div className="box">
          <Header car={state.car} />
          <AddedFeatures car={state.car} removeFeature={removeFeature} />
        </div>
        <div className="box">
          <AdditionalFeatures store={state.store} purchaseUpgrade={purchaseUpgrade} />
          <Total car={state.car} additionalPrice={state.additionalPrice} />
        </div>
      </div>
    );
  };

const mapStateToProps = state => {
  return {
    state: state
  };
};

export default connect(
  mapStateToProps,
  { adjoinAttribute, extractAttribute }
)(App);
