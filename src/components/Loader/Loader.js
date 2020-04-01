import React from 'react';
import FadeIn from 'react-fade-in';
import Lottie from 'react-lottie';
//import ReactLoading from 'react-loading';
import {Container,Row} from 'react-bootstrap';
import * as gradientLoader from './Assets/gradient-loader.json';

const defaultOptions = {
    loop:true,
    autoplay:true,
    animationData:gradientLoader.default,
    renderSettings:{
        preserveAspectRatio: 'xMidYMid slice'
    }
}



const Loader  = () =>
{


    /*
    return (
        <ReactLoading type='balls' color='pink'/>
    )*/

    return(
        <FadeIn>
            <Container className="h-100">
            <Row style={{marginTop:30,height:600}} className='align-items-center justify-content-center'>
                
                <Lottie options={defaultOptions} height={250} width={250}/>
            </Row>
            </Container>
        </FadeIn>
    )
}


export default Loader;