import React, {Component} from 'react';
import { Card, CardTitle,  CardImg, CardImgOverlay } from 'reactstrap';
import DishDetails from "./DishdetailComponent ";

class Menu extends Component {
  
  constructor(props){
    super(props);

    this.state = {
      selectedDish: null
    };

  }

  onDishSelect(dish){
    this.setState({selectedDish: dish});
  }

  renderRecipe(dish){
    if (dish != null) {
      return(
        <DishDetails dishes = {this.state.selectedDish} />
      );
    } else {
      return(
        <div></div>
      );
    }
  }

  render(){
    const menu = this.props.dishes.map((dish) => {
      return (
        <div key={dish.id} className="col-12 col-md-5 m-1">
          <Card onClick={()=> this.onDishSelect(dish)}>
            <CardImg  width="100%" src={dish.image} alt={dish.name} />
            <CardImgOverlay>
              <CardTitle style={{fontSize:"30px", fontWeight:"bold"}}>{dish.name}</CardTitle>
              {/* <CardText>{dish.description}</CardText> */}
            </CardImgOverlay>
          </Card>
        </div>
      );
    });

    return(
      <div className="container">
        <div className="row">
            {menu}
        </div>
        {this.renderRecipe(this.state.selectedDish)}
      </div>
    );
  }
}

export default Menu;