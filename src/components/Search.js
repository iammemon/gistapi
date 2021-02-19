import React, { useState } from 'react'
import styled from 'styled-components'
import Octicon from 'react-octicon'
import debounce from 'lodash.debounce'
import PropTypes from 'prop-types';

const Search = ({ fetchCallback }) => {

  const [lastSearchQuery, setLastSearchQuery] = useState('')

  const waitUntil = 1000; //ms

  const doSearch = (e) => {
    const value = e.target.value;
    // we dont want to search the same thing again
    if (lastSearchQuery == value) return;
    setLastSearchQuery(value)
    fetchCallback(value)
  }

  return (
    <Wrapper>
      <InputBox>
        <Octicon name="search" />
        <Input placeholder="Search Gists for the username" onChange={debounce(doSearch, waitUntil)} />
      </InputBox>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  padding: 8px;
  background-color: #ffffff;
  font-size: 14px;
  line-height: 1.5;
  border-radius: 6px;
  margin: 0 16px;
`;

const InputBox = styled.div`
  border-radius: 4px;
  display: flex;
  width: 400px;
`;

const Input = styled.input`
  border: none;
  width: 100%;
  font-size: 16px;

  &:focus{
    outline: 0;
  }
`;

Search.propTypes = {
  fetchCallback: PropTypes.func
}


export default Search
