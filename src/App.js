import CreateUser from './pages/CreateUser';
import { ChakraProvider } from '@chakra-ui/react'

function App() {
  return (
    <ChakraProvider>
      <CreateUser />
    </ChakraProvider>
  );
}

export default App;