import React from 'react'
import styled from 'styled-components'

const Image = styled.img`
    display: block;
    margin: auto;
    max-width: 100%;
    padding: 15px 0;
`

const SongImage = ({image}) => {
    return <Image src={image} alt="" />
}

export default SongImage