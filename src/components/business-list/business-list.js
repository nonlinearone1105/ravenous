import React from "react";
import "./business-list.css";
import Business from "../business/business";

class BusinessList extends React.Component {
  render() {
    return (
      <div className="BusinessList">
        {this.props.businesses.map((business) => <Business business={business} key={business.id}/>)}
      </div>
    );
  }
}

export default BusinessList;
