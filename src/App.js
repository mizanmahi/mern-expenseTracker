import Header from './components/Header';
import Balance from './components/Balance';
import IncomeExpense from './components/Incomeexpense';
import TransactionList from './components/TransactionList';
import AddTransactionForm from './components/AddTransactionForm';

import { GlobalContextProvider } from './context/GlobalContext';

import './App.css';

function App() {
  return (
    <div className='App'>
      <Header />
      <div className='container'>
        <GlobalContextProvider>
          <Balance />
          <IncomeExpense />
          <TransactionList />
          <AddTransactionForm />
        </GlobalContextProvider>
      </div>
    </div>
  );
}

export default App;
