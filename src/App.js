import React, { useState } from "react";
import './App.css';
import response from "./products/response.json";
import cartlogo from "./products/shopping-cart-icon-flat-design-260nw-570153007.jpg";
function App() {
  const [login, setlogin] = useState(true);
  let [fname, setfname] = useState("");
  let [lname, setlname] = useState("");
  let [pass, setpass] = useState("");
  let [cpass, setcpass] = useState("");
  let [email, setemail] = useState("");
  const [cart,setcart]= useState([]);
  const [loggedin, setloggedin] = useState(false);
  let[cartc,setcartc]=useState(false);
  let[cartvalue,setcartvalue]=useState(0);
  let[totalprice,settotalprice]=useState(0);

  const [usersdata, setusersdata] = useState([{email:"username@admin.com",password:1234}]);
  var data = response;

  return login ? (!loggedin ? (
    <div className="App">
      <div><h2>Shopping site</h2></div>
      Hi , Welcome to smitch
      <div>
        <input placeholder="Email" type="email" /><br />
        <input placeholder="Password" type="password" /><br />
        <button id='login' onClick={() => {
          console.log(data);
          if(usersdata[0].email=="username@admin.com" && usersdata[0].password===1234 ){
            setloggedin(true);
          }

        }}>LogIn</button>
                    <p>Note :::: by default email is <u>username@admin.com</u> and password is <u>1234</u></p>
        <h3>if you don't have an account please <a onClick={() => setlogin(false)} href="###">click here</a> to sing up</h3>
      </div>

    </div>
  ) :




    ( !cartc ?(
      <>
      <div onClick={
        ()=>setcartc(true)
      } className="cart-div"> 
      <h1>products for buying</h1>
      <button className="logout" onClick={()=>{setloggedin(false)}} id="logout">Logout</button>
        <h1><i className="cart-value">{cartvalue}</i></h1>
        <img className="cart-logo" src={cartlogo}/>
        
        </div>
        
        
        <div className="pd-main">

          {
            data.map((i,index) => {
              return (<div className="product" key={index}>
                <div className="p-image">
                  <img src={i.image_url} />
                  </div>
                  <div className="p-data">
                  <p className="p-name">{i.name}</p>
                  <p className="p-price"> Price ₹ {i.price}</p>
                  </div>
                  <button value={index} className="btn" onClick={(e)=>{
                    let a = e.target.value;
                    console.log(a);
                    setcart([...cart,data[e.target.value]])
                    console.log(cart);
                    setcartvalue(cart.length+1);
                    settotalprice(totalprice+(data[e.target.value].price))
                  }
                  }>Add to cart</button>
                  </div>)
            })
          }
        </div>
      </>):(
        <div>
        <button id="bck" onClick={()=>setcartc(false)}>Back</button>
         {
           
            cart.map((i,index) => {
             
              return (<div id="cart-main" className="product" key={index}>
                <div className="p-image">
                  <img src={i.image_url} />
                  
                  </div>
                  <div className="p-data">
                  <p className="p-name">{i.name}</p>
                  <p className="p-price"> Price ₹ {i.price}</p>
                  </div>
                  <button className="x-btn">X</button>
                  
                  </div>)
            })
          }
          <span className="total-payment">
          <h3>Total Payble amount = ₹ {" "+totalprice}</h3>
          <button id="checkout" onClick={()=>{}}>Checkout</button>
          </span>
        

        </div>
      )

    )





  ) : (

    <div className="App">
      <div ><h2> Fill deatils to Create an account </h2>  </div>
      <div>
        <form>
          <label>First Name </label>
          <input placeholder="First Name" type="text" onChange={(e) => setfname(e.target.value)} value={fname} /><br />
          <label>Last Name </label>
          <input placeholder="Last Name" type="text" onChange={(e) => setlname(e.target.value)} value={lname} /><br />
          <label>Email id </label>
          <input placeholder="Email" type="email" onChange={(e) => setemail(e.target.value)} value={email} /><br />
          <label>Password </label>
          <input placeholder="password" type="password" onChange={(e) => setpass(e.target.value)} value={pass} /><br />
          <label> Confirm Password </label>
          <input placeholder="password" type="password" onChange={(e) => setcpass(e.target.value)} value={cpass} /><br />
          <button onClick={(event) => {
            event.preventDefault();
            if (fname === "" || email === "" || pass === "" || cpass === "") {
              alert("Please fill all mandatory details")

            }
            if (pass !== cpass) {
              alert("Password is not same please enter same password ")
            }
            if ((/\S+@\S+\.\S+/.test(email) === false)) {

              alert("this is not a vaild email")
            }
            else {
              let obj = {
                userName: fname + " " + lname,
                useremail: email,
                userpass: pass

              }
              setusersdata([...usersdata, obj])
              // console.log(obj);
              console.log(usersdata);
              setfname("");
              setlname("");
              setemail("");
              setcpass("");
              setpass("");

            }
          }

          } id="singup">Sing Up </button><br /><br />

          <h3>if you have already an account please <a onClick={() => setlogin(true)} href="####">click here</a> to log in</h3>


        </form>
      </div>
    </div>
  )
}

export default App;
