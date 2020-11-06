$(document).ready(function () {
  $("#subButton").on("click", function (event) {
    event.preventDefault();

    userName = $("#name").val().trim();
    userEmail = $("#email").val().trim();
    userMessage = $("#textArea").val().trim();

    if (userName == "" || userEmail == "" || userMessage == "") {
      alert("All fields must be entered...");
    } else {
      let newMessage = {};
      newMessage["name"] = userName;
      newMessage["email"] = userEmail;
      newMessage["message"] = userMessage;
      newMessage["createdAt"] = new Date(Date.now()).toISOString();
      newMessage["updatedAt"] = new Date(Date.now()).toISOString();

      console.log(newMessage);

      // $.post("/contact/add", newMessage).done(function () {
      //   console.log("Message Sent");
      // });

      $.post("/contact/add", newMessage, function(req, res) {
        if (res == "success") {
            $("#messageModal").modal("show");
            $("[data-dismiss=modal]").on("click", function(event) {
              $("#name").val("");
              $("#email").val("");
              $("#textArea").val("");
            })
        } else {
          alert("error!");
        }
      })
    }
  });
});
