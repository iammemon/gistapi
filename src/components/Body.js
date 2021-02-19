import React from 'react'
import styled from 'styled-components'
import GistList from './GistList';

const Loader = _ => {
    return (<div>
        <h3>is Loading ...</h3>
    </div>)
}

const Error = ({ msg }) => {
    return (
        <ErrorMsg>
            <h3>{msg}</h3>
        </ErrorMsg>
    )
}

const Body = ({ errMsg, data, isLoading }) => {
  
    //decide which view to load based on props
    const innerBody = _ => {
        if (isLoading) return <Loader />
        if (errMsg) return <Error msg={errMsg} />
        else return <GistList gists={data} />
    }

    return (
        <Wrapper data-testid="body">
            {innerBody()}
        </Wrapper>
    )
}

const ErrorMsg = styled.div`
    color:darkred;
`

const Wrapper = styled.div`
    display:flex;
    flex-direction:column;
    align-items:center;
    justify-content:center;
`

export default Body