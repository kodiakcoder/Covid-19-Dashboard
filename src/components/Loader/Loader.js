import React from 'react';
import FadeIn from 'react-fade-in';
import Lottie from 'react-lottie';
//import ReactLoading from 'react-loading';
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
            <div style={{justifyContent:'center',alignItems:'center',textAlign:'center'}}>
                <h1 >Loading...</h1>
                <Lottie options={defaultOptions} height={250} width={250}/>
            </div>
        </FadeIn>
    )
}


export default Loader;