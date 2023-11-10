  function saveData(){
  
  const fname = document.getElementById('fname').value;
  const email = document.getElementById('email').value;
  const password = document.getElementById('password').value;
  const address= document.getElementById('address').value;
  const city = document.getElementById('city').value; 
 
  let user_record=new Array();
  user_record=JSON.parse(localStorage.getItem('users'))?JSON.parse(localStorage.getItem('users')):[];

  if(user_record.some((v)=>{
    return v.email==email && v.password==password;
  }))
  {
    alert("email id already exist");
  }else{
    user_record.push(
    {
      "fname":fname,
      'email':email,
      'password':password,
      'address':address,
      'city':city,
     })
     localStorage.setItem("users",JSON.stringify(user_record));
  }
}
 
 
//checking
function check(){
 
  var cemail = document.getElementById('cemail').value;
  var cpassword = document.getElementById('cpassword').value;

  let user_record=new Array();
  user_record=JSON.parse(localStorage.getItem('users'))?JSON.parse(localStorage.getItem('users')):[];

  if(user_record.some((v)=>{
    return v.email==cemail && v.password==cpassword
  })){
    alert("login successfull")
    let current_user=user_record.filter((v)=>{
      return v.email==cemail && v.password==cpassword
    })[0]
    localStorage.setItem("fname",current_user.fname);
    localStorage.setItem("email",current_user.email);
    window.location.href="persondetails.html";
  }else{
    alert("Invalid user");
  }
}


//getstart
function getstart(){
  var getstart=document.getElementById('getstart').value;

  let user_record=new Array();
  user_record=JSON.parse(localStorage.getItem('users'))?JSON.parse(localStorage.getItem('users')):[];

  if(user_record.some((v)=>{
    return  v.email == getstart
  })){
    let current_user=user_record.filter((v)=>{
      return v.email== getstart
    })[0]
    localStorage.setItem("fname",current_user.fname);
    localStorage.setItem("email",current_user.email);
    window.location.href="persondetails.html";
  }else{
    alert("Invalid User");
  }
}

//contactus
function sendmsg(){
  var uname = document.getElementById('uname').value;
  var memail = document.getElementById('memail').value;
  let user_record=new Array();
  user_record=JSON.parse(localStorage.getItem('users'))?JSON.parse(localStorage.getItem('users')):[];
  if(user_record.some((v)=>{
    return  v.email == memail
  })){
    alert("Message Sent")
    let current_user=user_record.filter((v)=>{
      return v.email== memail
    })[0]
  localStorage.setItem("fname",current_user.fname);
  localStorage.setItem("email",current_user.email);
  
}else{
  alert("Invalid User");
}
}

