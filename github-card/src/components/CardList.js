import React from 'react';
import Cards from './Card';
import Styled from 'styled-components';

const CardLists = Styled.div`
    display:flex;
    flex-wrap:wrap;
    justify-content:space-between;
    align-content:center;
    margin-bottom: 2rem;
`;


const CardList = props => {
    

    return(
        <CardLists>
            
            {
                props.data.map(item => {

                   return <Cards user={item.login} image={item.avatar_url} link={item.html_url} /> 
                })
            
            }   
        
        </CardLists>
    );


}

export default CardList;