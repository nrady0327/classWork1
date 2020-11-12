$(document).ready(function () {
    // Object containing the validation rules
    var myRules =
        {
            registration:
                {
                    required:true
                },
            grade:
                {
                    required: true,
                    min:5,
                    max: 8
                }
        };

    // Object containing the error messages
    var myMessages =
        {
            registration:
                {
                    required:"Fill in the boxes"
                },
            grade:
                {
                    required: "Must be grade 5-8",
                    min: "Must be at least in fifth grade",
                    max: "Can't be higher than eight grade"

                }
        };

    // Pass the configuration to the form's validate() method
    // Needs submitHandler, rules, and messages properties
    $("form").validate(
        {
            submitHandler: runMyProgram,
            rules: myRules,
            messages: myMessages
        }
    );

    function runMyProgram() {
        // Change the text of the <p> with ID of "message" to
        var name = $("#firstName").val();
        var grade = $("#grade").val();
        $("#message").text(`You have registered ${name} for grade ${grade} camp`);
        // state, for example, "You have registered Jane for grade 6 camp!"
        // Use the name and grade the user provided in the form.


    }



});