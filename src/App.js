import styled from 'styled-components'
import SideBar from "./components/SideBar"
import Products from "./components/Products"

const Wrapper = styled.div`
display: flex;
flex-direction: row;
flex: 1;
padding: 5%;
`

function App() {
  return (
    <Wrapper>
      <SideBar />
      <Products />
    </Wrapper>
  );
}

export default App;
