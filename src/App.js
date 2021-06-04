import React from 'react';
import user from './components/profile/user.json';
import Profile from './components/profile/Profile';
import Statistics from './components/statistics/Statistics';
import statisticalData from './components/statistics/statistical-data.json';
import friends from './components/friends/friends.json';
import FriendList from './components/friends/FriendList';
import transactions from './components/transactions/transactions.json';
import TransactionHistory from './components/transactions/TransactionHistory';


const App = () => {
  
  return (
    
    <>
      <TransactionHistory items={transactions} />
      
      <FriendList friends={friends} />
      
      <Statistics title="Upload stats" stats={statisticalData} />
      
      <Profile
        name={user.name}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />
    </>
  );
};

export default App;
