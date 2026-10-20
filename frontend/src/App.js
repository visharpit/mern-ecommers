import logo from './logo.svg';
import {gql} from '@apollo/client'
import {useQuery} from '@apollo/client/react'
import './App.css';



const query = gql`
query GetTodosWithUser {
 todo:getTodos {
    id
    todo
    completed
    user {
      firstName
    }
  }
}
`
function App() {
  const {data, loading} = useQuery(query);

  if(loading) return <h1>Loading...</h1>
  return (
    <div className="App">
      {JSON.stringify(data)}
    </div>
  );
}

export default App;
