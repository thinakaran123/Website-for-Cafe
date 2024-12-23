let cart = {};
let userdata = {};
// products and price
let productsandprice = {
  Brownie: 6.15,
  Baklava: 6.5,
  Redcake: 7.0,
  CremeBrulee: 5.0,
  Macaron: 8.0,
  Meringue: 5.0,
  PannaCotta: 7.35,
  Tiramisu: 5.5,
  Waffle: 6.5,
};
let qunatity = 0;
let totalprice = 0;
let totalpricewithtax = 0;
// forms
form_1 = document.getElementById("form_page_1");
form_2 = document.getElementById("form_page_2");
let plus_icons = document.querySelectorAll(".plus_icon");
// plus button inside the qunatity box
plus_icons.forEach((plus) => {
  plus.addEventListener("click", () => {
    plus.previousElementSibling.value =
      parseInt(plus.previousElementSibling.value) + 1;
    console.log("hh");
    qunatity++;
    cart[plus.parentElement.parentElement.parentElement.dataset.name] =
      plus.previousElementSibling.value;
    console.log(cart);
  });
});
let minus_icons = document.querySelectorAll(".minus_icon");
// minus button inside the qunatity box
minus_icons.forEach((minus) => {
  minus.addEventListener("click", () => {
    qunatity--;
    if (minus.nextElementSibling.value >= 2) {
      minus.nextElementSibling.value =
        parseInt(minus.nextElementSibling.value) - 1;
    }
    cart[minus.parentElement.parentElement.parentElement.dataset.name] =
      minus.nextElementSibling.value;
    console.log(cart);
  });
});

// form_page_1 validations
mailbox = document.getElementById("mail_input");
passwordbox = document.getElementById("password_input");
confirmpasswordbox = document.getElementById("confirm_password_input");

re = /^[a-zA-Z0-9]+@[a-zA-Z0-9]+.[a-zA-Z]+$/;
document.getElementById("right_arrow_page_1").addEventListener("click", () => {
  let isFormValidforform1 = true;
  if (re.test(mailbox.value)) {
    userdata["user_mail"] = mailbox.value;
  } else {
    mailbox.nextElementSibling.style.display = "inline";
    isFormValidforform1 = false;
  }
  if (
    passwordbox.value != confirmpasswordbox.value ||
    passwordbox.value === "" ||
    confirmpasswordbox.value === ""
  ) {
    isFormValidforform1 = false;

    confirmpasswordbox.nextElementSibling.style.display = "inline";
  } else {
    userdata["user_password"] = confirmpasswordbox.value;
  }
  console.log(userdata);
  if (isFormValidforform1) {
    form_2.style.display = "block";
    form_1.style.display = "none";
  }
});

//add to cart btn
addtocartbtn = document.querySelectorAll(".add_to_cart_button");
addtocartbtn.forEach((btn) => {
  btn.addEventListener("click", () => {
    qunatity += 1;
    btn.previousElementSibling.style.display = "flex";
    btn.style.display = "none";
    cart[btn.parentElement.parentElement.dataset.name] = 1;
    btn.previousElementSibling.children[1].value = "1";
    btn.nextElementSibling.style.display = "inline";
    console.log(cart);
  });
});
console.log(cart);

// xbox inside the error pupup for quantity box
function xboxclick() {
  document.getElementById("error_popup_quantity").style.display = "none";
}
console.log(Object.keys(cart).length);

// remove button
remove_item = document.querySelectorAll(".remove_item");
remove_item.forEach((btn) => {
  btn.addEventListener("click", () => {
    btn.style.display = "none";
    btn.previousElementSibling.style.display = "block";
    btn.previousElementSibling.previousElementSibling.style.display = "none";
    console.log("j");
    itemname = btn.parentElement.parentElement.dataset.name;
    console.log(itemname);
    delete cart[itemname];
    console.log(cart);
  });
});

// validation for form 2
name_input = document.getElementById("name_input");
phone_input = document.getElementById("phone_input");
postcode_input = document.getElementById("postcode_input");
address_input = document.getElementById("address_input");
city_input = document.getElementById("city_input");
province_input = document.getElementById("province");
payment_btn = document.getElementById("payment_btn");

form_3 = document.getElementById("form_page_3");
payment_btn.addEventListener("click", () => {
  let isFormValid = true; // Initialize flag variable to track form validity

  // Validate name input
  regexforname = /^[a-zA_Z]{1,}$/;
  if (regexforname.test(name_input.value.trim()) != "") {
    userdata["user_name"] = name_input.value;
  } else {
    name_input.nextElementSibling.style.display = "inline";
    isFormValid = false; // Set flag to false if validation fails
  }

  // Validate phone number input
  const re_for_phnum = /^[0-9]{3}\-[0-9]{3}\-[0-9]{4}$/;
  if (re_for_phnum.test(phone_input.value)) {
    userdata["user_phnum"] = phone_input.value;
  } else {
    phone_input.nextElementSibling.style.display = "inline";
    isFormValid = false;
  }

  // Validate postcode input
  const re_for_postcode =
    /^[a-zA-Z]{1}[0-9]{1}[a-zA-Z]{1}\s[0-9]{1}[a-zA-Z]{1}[0-9]{1}$/;
  if (re_for_postcode.test(postcode_input.value)) {
    userdata["user_postcode"] = postcode_input.value;
  } else {
    postcode_input.nextElementSibling.style.display = "inline";
    isFormValid = false;
  }

  // Validate address input
  if (address_input.value.trim() != "") {
    userdata["user_address"] = address_input.value;
  } else {
    address_input.nextElementSibling.style.display = "inline";
    isFormValid = false;
  }

  // Validate city input
  if (typeof city_input.value === "string" && city_input.value.trim() !== "") {
    userdata["user_city"] = city_input.value;
  } else {
    console.log("iam yes");
    city_input.nextElementSibling.style.display = "inline";
    isFormValid = false;
  }

  // Validate province input
  if (province_input.value != "") {
    console.log("h");
    userdata["user_province"] = province_input.value;
  } else {
    province_input.nextElementSibling.style.display = "inline";
    isFormValid = false;
  }

  if (isFormValid) {
    form_2.style.display = "none";
    form_3.style.display = "block";
  } else {
    console.log("Please correct the errors in the form.");
  }
});

// validations for form 3 (credit card page)
const card_number = document.getElementById("card_number");
const expiry_month = document.getElementById("expiry_month");
const expiry_year = document.getElementById("expiry_year");
const cvv = document.getElementById("cvv");

// regular expressions
regex_for_card_number = /^[0-9]{4}\-[0-9]{4}\-[0-9]{4}\-[0-9]{4}$/;
regex_for_expiry_month = /^[a-zA-Z]{3}$/;
regex_for_expiry_year = /^[0-9]{4}$/;
regex_for_expiry_cvv = /^[0-9]{3}$/;

const final_btn = document.getElementById("final_btn");
final_btn.addEventListener("click", () => {
  console.log("in");
  isform3valid = true;

  if (regex_for_card_number.test(card_number.value)) {
    userdata["user_cardnumber"] = card_number.value;
  } else {
    card_number.nextElementSibling.style.display = "inline";
    isform3valid = false;
  }

  if (regex_for_expiry_month.test(expiry_month.value)) {
    userdata["user_card_expiry_month"] = expiry_month.value;
  } else {
    isform3valid = false;
    expiry_month.nextElementSibling.style.display = "inline";
  }

  if (regex_for_expiry_year.test(expiry_year.value)) {
    userdata["user_card_expiry_year"] = expiry_year.value;
  } else {
    isform3valid = false;
    expiry_year.nextElementSibling.style.display = "inline";
  }

  if (regex_for_expiry_cvv.test(cvv.value)) {
    userdata["user_card_cvv"] = cvv.value;
  } else {
    isform3valid = false;
    cvv.nextElementSibling.style.display = "inline";
  }

  if (isform3valid) {
    console.log("in");
    form_3.style.display = "none";

    document.getElementById("receipt_customer_name").textContent =
      userdata["user_name"];
    document.getElementById("receipt_customer_phone").textContent =
      userdata["user_phnum"];
    document.getElementById("receipt_customer_passcode").textContent =
      userdata["user_postcode"];
    document.getElementById("receipt_customer_address").textContent =
      userdata["user_address"];
    document.getElementById("receipt_customer_city").textContent =
      userdata["user_city"];
    document.getElementById("receipt_customer_province").textContent =
      userdata["user_province"];
    document.getElementById("receipt_customer_mail").textContent =
      userdata["user_mail"];
    document.getElementById("receipt_customer_card_number").textContent =
      userdata["user_cardnumber"];
    document.getElementById("receipt_customer_card_expiry_month").textContent =
      userdata["user_card_expiry_month"];
    document.getElementById("receipt_customer_card_expiry_year").textContent =
      userdata["user_card_expiry_year"];

    let receiptHTML = ""; // Initialize an empty string
    let subtotal = 0;
    i = 1;
    Object.keys(cart).forEach((key) => {
      receiptHTML += `<p><b>Product ${i}:</b></p><p><b>Product Name:</b> ${key} <b>Qunatity:</b> ${
        cart[key]
      } <b>Base Price:</b> ${productsandprice[key]}</p>
      <p><b>Total price for ${key}: $ ${
        cart[key] * productsandprice[key]
      }</b></p>
      `; // Append each product to the string
      i++;
      return (totalprice += parseFloat(cart[key] * productsandprice[key]));
    });
    document.getElementById("totalprice").textContent = totalprice;

    if (province.value === "Alberta") {
      document.getElementById("totalpricewithtax").textContent =
        totalprice + 0.05;
    } else if (province.value === "British Columbia") {
      document.getElementById("totalpricewithtax").textContent =
        totalprice + 0.12;
    } else if (province.value === "Manitoba") {
      document.getElementById("totalpricewithtax").textContent =
        totalprice + 0.12;
    } else if (province.value === "New Brunswick") {
      document.getElementById("totalpricewithtax").textContent =
        totalprice + 0.15;
    } else if (province.value === "Newfoundland and Labrador") {
      document.getElementById("totalpricewithtax").textContent =
        totalprice + 0.15;
    } else if (province.value === "Nova Scotia") {
      document.getElementById("totalpricewithtax").textContent =
        totalprice + 0.15;
    } else if (province.value === "Ontario") {
      document.getElementById("totalpricewithtax").textContent =
        totalprice + 0.13;
    } else if (province.value === "Prince Edward Island") {
      document.getElementById("totalpricewithtax").textContent =
        totalprice + 0.15;
    } else if (province.value === "Quebec") {
      document.getElementById("totalpricewithtax").textContent =
        totalprice + 0.14975;
    } else {
      document.getElementById("totalpricewithtax").textContent =
        totalprice + 0.11;
    }
    document.getElementById("receipt_products").innerHTML = receiptHTML; // Set the entire HTML content at once

    document.getElementById("receipt").style.display = "block";
  } else {
    console.log("false");
  }
});

// receipt
document.getElementById("receipt_customer_name");
document.getElementById("receipt_customer_phone");
document.getElementById("receipt_customer_passcode");
document.getElementById("receipt_customer_address");
document.getElementById("receipt_customer_city");
document.getElementById("receipt_customer_province");
document.getElementById("receipt_customer_mail");
document.getElementById("receipt_customer_card_number");
document.getElementById("receipt_customer_card_expiry_month");
document.getElementById("receipt_customer_card_expiry_year");

// checkout button

checkout_btn = document.getElementById("check_out_button");
checkout_btn.addEventListener("click", () => {
  // checking user purchased more than 10 dollars
  error_popup_quantity = document.getElementById("error_popup_quantity");
  if (qunatity >= 2) {
    console.log("h");
    console.log(qunatity);
    document.getElementById("form_page_1").style.display = "block";
  } else {
    console.log(qunatity);

    error_popup_quantity.style.display = "flex";
  }
});

//okay button
document.getElementById("okay_button").addEventListener("click", () => {
  location.reload();
});
