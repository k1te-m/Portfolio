$(document).ready(function () {
 

  $("#subButton").on("click", function (event) {
    event.preventDefault();

    userName = $("#name").val().trim();
    userEmail = $("#email").val().trim();
    userMessage = $("textArea").val().trim();

    let newMessage = {};
    newMessage["name"] = userName;
    newMessage["email"] = userEmail;
    newMessage["message"] = userMessage;
    newMessage["createdAt"] = new Date(Date.now()).toISOString();
    newMessage["updatedAt"] = new Date(Date.now()).toISOString();

    console.log(newMessage);

    $.post("/contact/add", newMessage).done(function(){
        alert("Message Sent!");
        window.location.href= "/contact";
    });
  });
});
