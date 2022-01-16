import React, { Component } from "react";
import { Card, CardImg, CardText, CardBody, CardTitle } from "reactstrap";

class DishDetail extends Component {
  constructor(props) {
    super(props);
  }

  renderDish(dish) {
    if (dish != null)
      return (
        <div className="col-12 col-md-5 m-1">
          <Card>
            <CardImg width="100%" src={dish.image} alt={dish.name} />
            <CardBody>
              <CardTitle>{dish.name}</CardTitle>
              <CardText>{dish.description}</CardText>
            </CardBody>
          </Card>
        </div>
      );
    else return <div></div>;
  }

  renderComments(comments) {
    if (comments == null) return <div></div>;

    const dishComment = comments.map((cmnt) => {
      return (
        <li key={cmnt.id}>
          <p>{cmnt.comment}</p>
          <p>
            --{cmnt.author}, {cmnt.date}
          </p>
        </li>
      );
    });

    return (
      <div className="col-12 col-md-5 m-1">
        <h4>Comments</h4>
        <ul className="list-unstyled">{dishComment}</ul>
      </div>
    );
  }

  render() {
    const dish = this.props.dish;
    if (dish == null) {
      return <div></div>;
    }
    return (
      <div className="row">
        {this.renderDish(dish)}
        {this.renderComments(dish.comments)}
      </div>
    );
  }
}

export default DishDetail;
