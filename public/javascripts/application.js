function display(name) {
  $("#name").html(name);
}

function newName(gender) {
  var first_name = gender == "male" ? randomFrom(male) : randomFrom(female);
  return (first_name + " " + randomFrom(last)).toLowerCase();
}

function randomFrom(arr) {
  var shuffle = parseInt(Math.random() * arr.length);
  return arr[shuffle];
}