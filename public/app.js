$.getJSON("/articles", data => {
    console.log(data);
    for (let i = 0; i < data.length; i++) {
        // console.log(data.title)
        $("#articles").append(
    `<div class="row">
    <div class="col-lg-4">
    <div class="card">
    <div class="card-body">
    <h5 class="card-title">${data[i].title}</h5>
    <a href= ${data[i].link}  class="btn btn-dark">Read!</a>
    <a class="btn btn-dark" value = ${data[i]._id} id ="save">Save!</button>
</div>`)
        }
}).then(function(){
    console.log("hi")
});
$("#save").on("click", function () {
    console.log("hello");

    $("#notes").empty();
    const uniqueId = $(this).attr("value")
    $.ajax({
        method: "POST",
        url: "/articles/" + thisId,
        data: {
            // Value taken from title input
            title: $("#titleinput").val(),
            // Value taken from note textarea
            body: $("#bodyinput").val()
        }
    })
        // With that done
        .then(function (data) {
            // Log the response
            console.log(data);
            // Empty the notes section
            $("#notes").empty();
        });

    // Also, remove the values entered in the input and textarea for note entry
    $("#titleinput").val("");
    $("#bodyinput").val("");
});