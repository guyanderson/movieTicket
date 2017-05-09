function Ticket(nameOfMovie, timeOfDay, age){
  this.movie = nameOfMovie;
  this.time = timeOfDay;
  this.age = age;
  this.price = 0;
}

Ticket.prototype.ticketPrice = function(newTicket){
  if(newTicket.time <= 2){
    this.price += 2;
  }
  else{
    this.price += 3;
  }

  if(this.movie === 1 || this.movie === 3){
    this.price += 3;
  }
  else {
    this.price += 2;
  }

  if(this.age > 65 || this.age <= 5){
    this.price += 1;
  }
  else{
    this.price += 3;
  }
  return this.price;
}

$(document).ready(function(){
  $("form#mainform").submit(function(event){
    event.preventDefault();
    $("#show-tickt").empty();

    var nameOfMovie = parseInt($("input:radio[name=movie]:checked").val());
    var timeOfDay = parseInt($("#times").val());
    var age = $("input#age").val();

    var newTicket = new Ticket(nameOfMovie, timeOfDay, age);
    console.log(newTicket);
    $("#show-tickt").append("<li>" + newTicket.ticketPrice(newTicket) + "</li>");
  });
});
