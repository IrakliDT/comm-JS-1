
var ID = prompt("გთხოვთ ჩაწეროთ თქვენი ID:")
var name = prompt("გთხოვთ ჩაწეროთ თქვენი სახელი:")
var income = prompt("გთხოვთ შეიყვანოთ მიმდინარე თვის ნავაჭრი:")

if (income <2000){
  alert("სამწუხაროდ თქვენ ვერ მიიღეთ ბონუსი")
}
else if (income >=2001 && income <2500){
  alert("თქვენი ბონუსი შეადგენს 345.22 ლარს")
}
else if (income >2501 && income <3000){
  alert("თქვენი ბონუსი შეადგენს 654.12 ლარს")
}