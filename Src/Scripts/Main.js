let users = [];
let orderDetails = [];
function handleRegistrationSubmit() {
  const RegistrationForm = document.forms["RegistrationForm"];
  RegistrationForm.onsubmit = (e) => {
    e.preventDefault();
    const FirstName = RegistrationForm.elements["Firstname"].value;
    const LastName = RegistrationForm.elements["Lastname"].value;
    const Email = RegistrationForm.elements["Email"].value;
    const Password = RegistrationForm.elements["createPassword"].value;
    const ConfirmPassword = RegistrationForm.elements["confirmPassword"].value;
    if (Password === ConfirmPassword) {
      const user = {
        FirstName,
        LastName,
        Email,
        Password,
      };
      users.push(user);
      const data = JSON.stringify(users);
      localStorage.setItem("createdUser", data);
      window.location.href = "Home.html";
    } else {
      alert("Password and Confirm Password does not match");
    }
  };
}

function handleLoginSubmit() {
  const LoginForm = document.forms["Loginform"];
  LoginForm.onsubmit = (e) => {
    e.preventDefault();
    const Email = LoginForm.elements["Email"].value;
    const Password = LoginForm.elements["password"].value;
    const data = localStorage.getItem("createdUser");
    const user = JSON.parse(data);
    // console.log(user);
    if (user) {
      for (let i = 0; i < user.length; i++) {
        if (user[i].Email === Email && user[i].Password === Password) {
          window.location.href = "Landing.html";
        } else {
          alert("Email or Password is incorrect");
        }
      }
    } else {
      alert("Please register first");
    }
  };
}

function handleCheckoutAndLogout() {
  alert("Thanks for Having Lunch with us");
  localStorage.removeItem("createdUser");
  window.location.href = "Home.html";
}

function addOrderAndCheckout(btn) {
  const orderName = btn.getAttribute("name");
  const orderPrice = parseInt(btn.value);
  const Order = {
    orderName,
    orderPrice,
  };
  orderDetails.push(Order);
  alert(
    `Your Order ${Order.orderName} and Costs ${Order.orderPrice} is Successfully Placed`
  );
  console.log(orderDetails);
}
