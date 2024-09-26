document.getElementById("beautyForm").addEventListener("submit", function (event) {
    event.preventDefault();

    // Normalizing the input text: convert to lowercase and remove punctuation like "?"
    let inputText = document.getElementById("beautyInput").value.trim().toLowerCase();
    inputText = inputText.replace(/[?]/g, "");

    let resultText = "";

    const validPhrases = [
        "what is beauty",
        "describe beauty",
        "the essence of beauty",
        "true beauty",
        "beauty in life",
        "beauty defined",
        "what defines beauty",
        "the most beautiful girl in the whole wide world",
        "queen of nift shillong",
        "the girl who makes you say omg",
        "PRESIDENT OF THE WORLD"
    ];

    

    if (validPhrases.includes(inputText)) {
        resultText = "Ishneet Rekhi <3";
    }
    else {
        resultText = "Try a different phrase!";
    }

    document.getElementById("result").innerText = resultText;

    document.getElementById("doItAgainButton").style.display = "inline-block";

    document.getElementById("doItAgainButton").addEventListener("click", function () {
        document.getElementById("beautyInput").value = "";
        document.getElementById("result").innerText = "";
        this.style.display = "none";
    });
});
