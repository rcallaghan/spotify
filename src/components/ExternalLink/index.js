import React from 'react'
import styled from 'styled-components';

const Link = styled.a`
    background: ${props => props.primary ? '#2ebd59' : '#7c25f8'};
    border-radius: 24px;
    color: #fff;
    display: block;
    padding: 15px;
    margin-bottom: 5px;
    text-decoration: none;

    @media (min-width: 500px) {
        font-size: 16px;
        display: inline-block;
        margin: 0 5px;
        padding: 10px 15px;
    }

    &:hover, &:focus {
        background: ${props => props.primary ? '#229043' : '#7c25f8'};
    }
`

const ExternalLink = ({link, text, primary}) => {
    return <Link primary={primary} href={link}>{text}</Link>
}

export default ExternalLink