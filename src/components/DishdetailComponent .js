import React, {Component} from 'react';
import { Card, CardTitle, CardText, CardImg, CardBody } from 'reactstrap';

class DishDetails extends Component{
    constructor(props){
        super(props)
    }
    
    render(){

        const comments = this.props.dishes.comments.map((comment) => {
            return(
                <div>
                    {comment.comment}
                    <div>
                        -- {comment.author} ,{new Date(comment.date).toDateString()}
                    </div>
                </div>
            );
        });

        return(
            <div className="row">
                <div className="col-12 col-md-5 m-1">
                    <Card>
                        <CardImg  width="100%" src={this.props.dishes.image} alt={this.props.dishes.name} />
                        <CardBody>
                            <CardTitle style={{fontSize:"30px", fontWeight:"bold"}}>{this.props.dishes.name}</CardTitle>
                            <CardText>{this.props.dishes.description}</CardText>
                        </CardBody>
                    </Card>
                </div>
                <div className="col-12 col-md-5 m-1">
                    <h4>Comments</h4>
                    {comments}
                </div>
            </div>
        );
    }
}

export default DishDetails;