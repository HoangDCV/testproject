import Expenses from "./components/Expenses/Expenses";

function App() {
  const data = [
    {
      id: 'id1',
      name: 'car1',
      price: 50,
      date: new Date(2022,2,8)
    },
    {
      id: 'id2',
      name: 'car2',
      price: 52,
      date: new Date(2022,3,8)
    },
    {
      id: 'id3',
      name: 'car3',
      price: 53,
      date: new Date(2022,4,8)
    }
  ]
  return (
    <div>
      <h2>Let's get started!</h2>
      <Expenses items={data}/>
    </div>
  );
}

export default App;
