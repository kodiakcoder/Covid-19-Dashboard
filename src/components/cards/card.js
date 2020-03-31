import React from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import {Link} from 'react-router-dom';
import './style.css';



const CountryCard = ({countryData,country,infected,recovered,dead='0',onClick}) => {

    

return(
    <Card className="card" border='info'>
        <Card.Header className="header">{country}</Card.Header>
        <Card.Body className="cardBody">
            <Card.Text className="cardText">
                <strong>Infected:</strong> {infected} <br/>
                <strong>Recovered:</strong> {recovered} <br/>
                <strong>Deaths:</strong> {dead}
            </Card.Text>
            <Link to={{pathname:`/${country}`,state:{countryData}}}>
                <Button className="button" onClick={onClick}>View Timeline</Button>
            </Link>
        </Card.Body>
    </Card>
)
}


export default CountryCard;