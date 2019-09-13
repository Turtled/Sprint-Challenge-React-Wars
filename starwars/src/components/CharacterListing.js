import React, { useState, useEffect } from "react";
import styled from 'styled-components'

const StyledDiv = styled.div``;

// paragraph
const StyledP = styled.p`
opacity: 1;
`;

// section
const StyledSection = styled.section`
display: inline-block;
padding: 1em;
background: papayawhip;
width: 100px;
height: auto;
margin-bottom: 20px;
`;

// headers h1 - h6
const StyledHeading = styled.h1``;

// a
const StyledA = styled.a``;
export function CharacterListing(props) {

    if (!props.person) return <h3>Loading...</h3>;

    return (
        <StyledDiv className="App">
            <StyledSection>
                <StyledP className="characterName">{props.person.name}</StyledP>
                <StyledP>Height: {props.person.height}</StyledP>
                <StyledP>{props.person.hair_color}</StyledP>
                <StyledP>{props.person.gender}</StyledP>
            </StyledSection>
        </StyledDiv>
    );
}


