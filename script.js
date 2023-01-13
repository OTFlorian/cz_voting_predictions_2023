function generate() {
    // Get the input values
    var candidate1 = document.getElementById("candidate1").value;
    var candidate2 = document.getElementById("candidate2").value;
    var candidate3 = document.getElementById("candidate3").value;
    var candidate4 = document.getElementById("candidate4").value;
    var candidate5 = document.getElementById("candidate5").value;
    var candidate6 = document.getElementById("candidate6").value;
    var candidate7 = document.getElementById("candidate7").value;
    var candidate8 = document.getElementById("candidate8").value;
    var predictions = "";
    var total = 0;
    var candidates = [{
            name: "Petr Pavel",
            value: candidate1
        },
        {
            name: "Andrej Babiš",
            value: candidate2
        },
        {
            name: "Danuše Nerudová",
            value: candidate3
        },
        {
            name: "Pavel Fischer",
            value: candidate4
        },
        {
            name: "Jaroslav Bašta",
            value: candidate5
        },
        {
            name: "Marek Hilšer",
            value: candidate6
        },
        {
            name: "Karel Diviš",
            value: candidate7
        },
        {
            name: "Tomáš Zima",
            value: candidate8
        }
    ];
    for (var i = 0; i < candidates.length; i++) {
        if (candidates[i].value != "") {
            total += parseFloat(candidates[i].value);
        }
    }
    // Get the selected sorting, name format and whitespace options
    var sortOption = document.getElementById("sortOption").value;
    var nameOption = document.getElementById("nameOption").value;
    var includePercentageSign = document.getElementById("percentageSignOption").checked;
    var includeColon = document.getElementById("colonOption").checked;
    var includeWhitespace = document.getElementById("whitespaceOption").checked;
    // Sort the candidates based on the selected option
    if (sortOption == "alphabetFirst") {
        candidates.sort(function(a, b) {
            if (a.name.split(" ")[0] < b.name.split(" ")[0]) {
                return -1;
            } else if (a.name.split(" ")[0] > b.name.split(" ")[0]) {
                return 1;
            } else {
                return 0;
            }
        });
    } else if (sortOption == "alphabetLast") {
        candidates.sort(function(a, b) {
            if (a.name.split(" ")[1] < b.name.split(" ")[1]) {
                return -1;
            } else if (a.name.split(" ")[1] > b.name.split(" ")[1]) {
                return 1;
            } else {
                return 0;
            }
        });
    } else {
        candidates.sort(function(a, b) {
            return b.value - a.value;
        });
    }

    // Generate the sorted predictions string based on the selected options
    predictions = "";
    for (var i = 0; i < candidates.length; i++) {
        if (candidates[i].value != "") {
            if (nameOption == "last") {
                var lastName = candidates[i].name.split(" ")[1];
                if (includeColon) {
                    predictions += lastName + ": ";
                } else {
                    predictions += lastName + " ";
                }
                if (includePercentageSign) {
                    if (includeWhitespace) {
                        predictions += candidates[i].value + " %\n";
                    } else {
                        predictions += candidates[i].value + "%\n";
                    }
                } else {
                    predictions += candidates[i].value + "\n";
                }
            } else {
                if (includeColon) {
                    predictions += candidates[i].name + ": ";
                } else {
                    predictions += candidates[i].name + " ";
                }
                if (includePercentageSign) {
                    if (includeWhitespace) {
                        predictions += candidates[i].value + " %\n";
                    } else {
                        predictions += candidates[i].value + "%\n";
                    }
                } else {
                    predictions += candidates[i].value + "\n";
                }
            }
        }
    }
    // Copy the predictions to the clipboard
    navigator.clipboard.writeText(predictions);
}




function updateTotal() {
    var total = 0;
    var candidates = [{
            name: "Petr Pavel",
            value: document.getElementById("candidate1").value
        },
        {
            name: "Andrej Babiš",
            value: document.getElementById("candidate2").value
        },
        {
            name: "Danuše Nerudová",
            value: document.getElementById("candidate3").value
        },
        {
            name: "Pavel Fischer",
            value: document.getElementById("candidate4").value
        },
        {
            name: "Jaroslav Bašta",
            value: document.getElementById("candidate5").value
        },
        {
            name: "Marek Hilšer",
            value: document.getElementById("candidate6").value
        },
        {
            name: "Karel Diviš",
            value: document.getElementById("candidate7").value
        },
        {
            name: "Tomáš Zima",
            value: document.getElementById("candidate8").value
        }
    ];
    for (var i = 0; i < candidates.length; i++) {
        if (candidates[i].value != "") {
            total += parseFloat(candidates[i].value);
        }
    }
    document.getElementById("total").innerHTML = "Total Percentage: " + total + "%";
}
