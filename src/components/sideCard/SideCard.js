import React from 'react';
import Card from 'react-bootstrap/Card';
import './sidecard.css';


const SideCard =() =>(
    <>
        <Card bg='warning' border='warning' text='light' className='cardSize '>
            <Card.Body>
                <Card.Header className='cardHeader'>Infected</Card.Header>
                <Card.Title className='cardTitle'>55</Card.Title>
            </Card.Body>
        </Card>
        <Card bg='danger' border='danger' text='light' className='cardSize'>
            <Card.Body>
                <Card.Header className='cardHeader'>Deaths</Card.Header>
                <Card.Title className='cardTitle'>55</Card.Title>
            </Card.Body>
        </Card>
        <Card bg='success' border='success' text='light' className='cardSize'>
            <Card.Body>
                <Card.Header className='cardHeader'>Recovered</Card.Header>
                <Card.Title className='cardTitle'>55</Card.Title>
            </Card.Body>
        </Card>
    </>
)


export default SideCard;