import React from 'react';
import Card from 'react-bootstrap/Card';
import './sidecard.css';


const SideCard =({infected,deaths,recovered}) =>(
    <>
        <Card bg='warning' border='warning' text='light' className='cardSize '>
            <Card.Body>
                <Card.Header className='cardHeader'>Infected</Card.Header>
                <Card.Title className='cardTitle'>{infected}</Card.Title>
            </Card.Body>
        </Card>
        <Card bg='danger' border='danger' text='light' className='cardSize'>
            <Card.Body>
                <Card.Header className='cardHeader'>Deaths</Card.Header>
                <Card.Title className='cardTitle'>{deaths}</Card.Title>
            </Card.Body>
        </Card>
        <Card bg='success' border='success' text='light' className='cardSize'>
            <Card.Body>
                <Card.Header className='cardHeader'>Recovered</Card.Header>
                <Card.Title className='cardTitle'>{recovered}</Card.Title>
            </Card.Body>
        </Card>
    </>
)


export default SideCard;