document.addEventListener("DOMContentLoaded", function () {
    document
      .getElementById("sendmailform")
      .addEventListener("submit", function (e) {
        e.preventDefault();

        const submitButton = document.querySelector("#submit-button");
      submitButton.innerHTML =
        '<svg class="animate-spin h-5 w-5 text-white mx-auto" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"><circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle><path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v4l3-3-3-3v4a8 8 0 00-8 8z"></path></svg>';
      submitButton.disabled = true;

        const formData = new FormData(this);
        let messageTable =
          "<table border='1' cellspacing='0' cellpadding='5'>";
        messageTable += "<tr><th>Field</th><th>Data</th></tr>";
        for (const [key, value] of formData.entries()) {
          messageTable += `<tr><td>${key}</td><td>${value}</td></tr>`;
        }
        messageTable += "</table>";
        emailjs
          .send("service_g675ycm", "template_j7jq8i9", {
            message: messageTable,
            to_email: "help@startassignments.co.uk",
          })
          .then(
            function (response) {
              console.log("SUCCESS!", response.status, response.text);
              alert("Email Sent Successfully");
              submitButton.innerHTML = "Submit"; 
              submitButton.disabled = false;
            },
            function (error) {
              console.log("FAILED...", error);
              alert("Email Failed to Send");
              submitButton.innerHTML = "Submit"; 
              submitButton.disabled = false;
            }
          );
      });
  });