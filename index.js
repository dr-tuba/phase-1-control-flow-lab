function scuberGreetingForFeet(num){
  if (num <= 400) {
    return "This one is on me!";
  } else if (num > 2000 && num < 2500) {
    return "I will gladly take your thirty bucks.";
  } else if (num > 2500) {
    return "No can do.";
  }
};

function ternaryCheckCity(city){
  return (city == "NYC") ? "Ok, sounds good." : "No go.";
}

function switchOnCharmFromTip(tip){
  let charm;
  switch(tip) {
    case "generous":
    charm = "Thank you so much.";
    break;
    case "not as generous":
    charm = "Thank you.";
    break;
    default:
    charm = "Bye."  
  }
  return charm;
}