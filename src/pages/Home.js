import React,{useEffect,useState} from 'react';
import CountryCard from '../components/cards/card';
import Header from '../components/header/header';
import {Container,Row,Col,InputGroup,FormControl} from 'react-bootstrap';
import dataService from '../services/statistics';
import Loader from '../components/Loader/Loader';
import FadeIn from 'react-fade-in';

const Home = () =>{

  const [isLoading, setIsLoading] = useState(true)
  const [countryData,setCountryData] = useState({})
  const [searchCountry, setSearchCountry] = useState('')


  useEffect(() => {
    async function fetchData (){
      const response = await dataService.getAll()
      console.log(response)
      //console.log(response)
      setCountryData(response)
      setTimeout(() => {
        setIsLoading(false)
        
      },2000)
      //console.log(countryData)
      
      }

      fetchData ()
  }, [])


/*
  const fetchData = async () =>
  { 
    console.log('Effect')
    await dataService.getAll().then(
      data => {setCountryData(data)
       setTimeout(1000000)
      setIsLoading(false)}
    )
    
  }
  
  useEffect(fetchData,[])
  */

  const searchByCountry = (event) => {
      console.log(event.target.value)
      setSearchCountry(event.target.value)
  }

  const handleOnClick = (countryName) =>
  {
    //console.log(item)
    //<Link to={`/${countryName}`} /> </Link>
    //alert('Button Press')
  }

  if(isLoading === true)
    return <Loader />
  else
  return(
   
    <Container fluid style={{backgroundColor: '#F1F1F1'}}>
      
      <Header pageTitle='COVID-19 Global Data' />
      <Row >
        <Col md={{ span: 4, offset: 4 }}>
        <InputGroup className="mb-3">
          <FormControl style={{textAlign:'center'}} className="searchBar" placeholder="Search By Country" value={searchCountry} onChange={searchByCountry}/>
        </InputGroup>
        </Col>
      </Row>
      <Row style={{justifyContent:'center'}}>
        {
          Object.entries(countryData).map( ([key,value])  => {
          if(key.toLowerCase().includes(searchCountry,0))
          {
              return (<FadeIn key={key}>
              <CountryCard 
              countryData={value}
              country={key}
              infected={value[value.length-1].confirmed}
              recovered={value[value.length-1].recovered}
              dead={value[value.length-1].deaths}
              onClick={() => handleOnClick(value)}
              />
              </FadeIn>
              )
          }
          else if(searchCountry === '')
          {
          return( <FadeIn key={key}><CountryCard 
            
          country={key}
          infected={value[value.length-1].confirmed}
          recovered={value[value.length-1].recovered}
          dead={value[value.length-1].deaths}
          onClick={() => handleOnClick(value)}
          />
          </FadeIn>
          )
          }
          else return null
          }
          )

          

        }
      </Row>
    </Container>
  )
}

export default Home;