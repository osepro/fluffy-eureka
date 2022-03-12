import { Provider } from "react-redux";
import styled from 'styled-components'
import store from "./store"
import Main from "./components/Main"

const Wrapper = styled.div`
display: flex;
flex-direction: row;
flex: 1;
`

function App() {
  return (
    <Provider store={store}>
      <Wrapper>
        <Main />
      </Wrapper>
    </Provider>
  );
}

export default App;
