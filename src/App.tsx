import './App.css'
import ProductsPage from './pages/ProductsPage'
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
function App() {
  const queryClient = new QueryClient({defaultOptions: {queries:{
    staleTime: 1000 * 60 * 5 } }});
  return (
    <QueryClientProvider client={queryClient}>
      <ProductsPage/>
    </QueryClientProvider>
  )
}

export default App
