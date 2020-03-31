import React from 'react';
import './header.css';
import {useHistory} from 'react-router-dom';

const Header = ({goBackButton = false,pageTitle}) =>
{
    let history = useHistory()

    const backButtonStyle = {
        visibility:'hidden',
        color:'white',
        textAlign:'center',
    }
    if(goBackButton )
    {
        backButtonStyle.visibility ='visible'
    }

    const handleGoBack =() =>{
        history.goBack()
    }

return (
<div className="headerContainer">
    <p style={backButtonStyle}><button onClick={handleGoBack}>Go Back </button></p>
    <h1 className="headerTitle">{pageTitle}</h1>
</div>
)
}
export default Header;