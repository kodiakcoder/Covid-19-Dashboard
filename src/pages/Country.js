import React from 'react';
import {Container,Row,Col} from 'react-bootstrap';
import { LineChart, Line, CartesianGrid, XAxis,YAxis, Tooltip,Legend,Label,ResponsiveContainer } from 'recharts';
import Header from '../components/header/header';
import SideCard from '../components/sideCard/SideCard';

const Country = ({match, location}) =>{
    const {params: {countryName}} = match
    const countryData = location.state.countryData
    const pageTitle = `COVID-19 Data ${countryName}`
    
    const countryDates = []

    countryData.forEach(day => {
        const obj = {date: day.date, infected: day.confirmed}
        //countryData[0].push([ day.date,day.confirmed])
        countryDates.push(obj)
        //console.log(obj)
    })

    console.log(countryDates)



    //TODO: Add a back button to the header to back home
    

    return(
        <Container fluid>
            <Header goBackButton={true} pageTitle={pageTitle}/>
            <Row style={{marginTop:30}} className='align-items-center justify-content-center'>
                <Col md={3} >
                    
                    <SideCard />
                </Col>
                <Col md={8}>
                <ResponsiveContainer width="100%" height={500}>
                <LineChart data={countryDates}  margin={{top: 15, right: 15, bottom: 15, left:50 }}>
                    <Line type="monotone" dataKey="infected" stroke="#8884d8"/>
                    <CartesianGrid stroke="#ccc" strokeDasharray="3 3"/>
                    <XAxis dataKey="date" >
                        <Label value="Date" offset={0} position="bottom"/>
                    </XAxis>
                    <YAxis >
                        <Label value="People" angle={-90} position="left"/>
                    </YAxis>
                    <Tooltip />
                    <Legend verticalAlign="top"/>
                </LineChart>
                </ResponsiveContainer>
                </Col>
            </Row>

        </Container> 
    )
}

export default Country;