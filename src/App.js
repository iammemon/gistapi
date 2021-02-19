import styled from 'styled-components'
import Header from "./components/Header";
import GlobalStyles from "./GlobalStyle";
import Search from './components/Search'
import { useState, useEffect } from 'react';
import { getGistForUser, getPublicGists } from './services/gistService'


const App = () => {

  const [gists, setGists] = useState([])
  const [err, setErr] = useState(null)
  const [isLoading, setIsLoading] = useState(false)

  useEffect(() => {
    fetchGists()
  }, [])

  const fetchGists = async (username = '') => {
    let response;

    try {
      if (username) {
        response = await getGistForUser(username)
      } else {
        response = await getPublicGists()
      }
      setGists(response.data)

    } catch (err) {
      console.log(err)
    }

  }

  return (
    <Wrapper className="App" data-testid="app">
      <Header>
        <Search fetchCallback={fetchGists} />
      </Header>
      <GlobalStyles />
    </Wrapper>
  );
}

const Wrapper = styled.div`
  font-size: 14px;
  line-height: 1.5;
`;

export default App;
