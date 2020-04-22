// const budget = () => {
//     let balance = 0;
//     let changeBal = val => (balance += val);
//     let checkBal = () => `Balance: ${balance}`;
//     const deposit = val => changeBal(val);
//     const withdraw = val => changeBal(-val);
//     return { deposit, withdraw, checkBal };
//   };
  
//   let wallet = budget();
//   wallet.deposit(100);
//   wallet.withdraw(30);
//   console.log(wallet.checkBal());
//   console.log(wallet.balance); 
//   // logging 'wallet.balance' will output undefined
//   // because it is a private variable created using closures
  