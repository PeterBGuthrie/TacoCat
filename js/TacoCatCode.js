$("#btnTest").click(function () {
    let inputWord = $("#pal").val()

    // Test length
    if (inputWord.length < 2) {
        // Request user us a longer character set
        $("#title").text("Attention!");
        $("#sub").text("Please use two or more characters.");
    } else {
        let word = inputWord.replace(/\s|\'|\"/g, '').toLowerCase();

        let reversedInput = inputWord.split('').reverse().join('');

        let revword = reversedInput.replace(/\s|\'|\"/g, '').toLowerCase();

        let message = `Your input was: ${inputWord}. Reversed is ${reversedInput}.`;
        let result = ""

        if (word == revword) {
            result = "Congratulations";
        } else {
            result = "Unfortunately";
        };
        $("#title").text(result);
        $("#sub").text(message);
    }
});

// Clear page
$("#btnclear").click(function () {
    $("#pal").val("");
    $("#title, #sub").text("");

});