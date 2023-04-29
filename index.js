
 const getMenu = () => {

    fetch('https://raw.githubusercontent.com/saksham-accio/f2_contest_3/main/food.json')
      .then(response => response.json())
      .then(menu => {
        
        console.log('Menu:');
        menu.forEach(item => console.log(`${item.name} - $${item.price}`));
      })
      
  };
  
  // Define a function to take the order
  const takeOrder = () => {
    return new Promise((resolve, reject) => {
    
      setTimeout(() => {
        // 3 random burgers from the menu
        const burgers = ['Cheeseburger', 'Veggie Burger', 'Bacon Burger'];
        const order = { burgers: [] };
        for (let i = 0; i < 3; i++) {
          const burger = burgers[Math.floor(Math.random() * burgers.length)];
          order.burgers.push(burger);
          console.log(burger)
        }
        
        resolve(order);
        console.log("Order placed");
      }, 2500);
    });
  };
  
  // Define a function to prepare the order
  const orderPrep = (order) => {
    return new Promise((resolve, reject) => {
      
      setTimeout(() => {
       
        const orderStatus = { order_status: true, paid: false };
        
        resolve(orderStatus);
        console.log("Prepared food");
      }, 1500);
    });
  };
  
  
  const payOrder = (orderStatus) => {
    return new Promise((resolve, reject) => {
      
      setTimeout(() => {
        
        orderStatus.paid = true;
        
        resolve(orderStatus);
        console.log("thank you for the payment")
      }, 1000);
    });
  };
  
  
  const thankyouFnc = () => {
    console.log('Thank you for eating with us today!');
  };
  
  
  getMenu();
  takeOrder()
    .then(orderPrep)
    .then(payOrder)
    .then(orderStatus => {
      if (orderStatus.paid) {
        thankyouFnc();
      }
    })
    .catch(error => console.log(error));
  
  


 
  