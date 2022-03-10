import styled from 'styled-components'
import Main from "./components/Main"

const Wrapper = styled.div`
display: flex;
flex-direction: row;
flex: 1;
padding: 5%;
`

function App() {
  return (
    <Wrapper>
      <Main />
    </Wrapper>
  );
}

export default App;
