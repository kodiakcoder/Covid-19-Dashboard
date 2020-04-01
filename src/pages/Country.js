import React from 'react';
import {Container,Row,Col} from 'react-bootstrap';
import { LineChart, Line, CartesianGrid, XAxis,YAxis, Tooltip,Legend,Label,ResponsiveContainer } from 'recharts';
import Header from '../components/header/header';
import SideCard from '../components/sideCard/SideCard';

const Country = ({match, location}) =>{
    const {params: {countryName}} = match
    const countryData = location.state.countryData
    const pageTitle = `${countryName} COVID-19 Data`
    
    const countryDates = []

    //TODO: Start from the date when infection rate is 1 or higher
    countryData.forEach(day => {
        //const obj = {date: day.date, infected: day.confirmed}
        const obj = {date: day.date, infected: day.confirmed,deaths: day.deaths}
        //countryData[0].push([ day.date,day.confirmed])
        //const val = day.date.substring(day.date.indexOf('-')+1)
        //const date = val[1].join
        //console.log(val)
        countryDates.push(obj)
        //console.log(obj)


    })

    const infected = countryData[countryData.length-1].confirmed
    const deaths = countryData[countryData.length-1].deaths
    const recovered = countryData[countryData.length-1].recovered

    console.log(countryDates)



    //TODO: Add a back button to the header to back home
    

    return(
        <Container fluid style={{backgroundColor: '#F1F1F1',paddingBottom:100}} height={100}>
            <Header pageTitle={pageTitle}/>
            <Row style={{marginTop:30}} className='align-items-center justify-content-center'>
                <Col md={3} >
                    
                    <SideCard infected={infected} deaths={deaths} recovered={recovered}/>
                </Col>
                <Col md={8}>
                <ResponsiveContainer width="100%" height={500}>
                <LineChart data={countryDates}  margin={{top: 15, right: 15, bottom: 15, left:50 }}>
                    <Line type="monotone" dataKey="infected" stroke="#FFC107"/>
                    <Line type="monotone" dataKey="deaths" stroke="#DC3545"/> 

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