/* Main JS for Women's Day Microsite */

$(document).ready(function () {
    // Show location modal on load
    $('#exampleModal').modal('show');

    // Handle location change
    $('.location_select').on('change', function () {
        const selectedValue = $(this).val();
        if (!selectedValue) return;

        // Update all select boxes to the same value
        $('.location_select').val(selectedValue);
        $('#input_selected_location').val(selectedValue);

        // Hide all city-specific divs
        $('.package_div').removeClass('show');

        // Show the selected city divs
        // Mapping selected city name to the class names used in the HTML
        const cityClassMap = {
            'Bangalore': 'banglore_div',
            'Chennai': 'chennai_div',
            'Mumbai': 'mumbai_div',
            'Kolkata': 'kolkata_div'
        };

        const targetClass = cityClassMap[selectedValue];
        if (targetClass) {
            $(`.${targetClass}`).addClass('show');
        }

        // Close modal if open
        $('#exampleModal').modal('hide');
    });

    // Form Validation logic
    $("#mobile").on("input", function () {
        const val = $(this).val();
        const btn = $("#submit_form");

        if (val.length === 10) {
            btn.prop("disabled", false);
        } else {
            btn.prop("disabled", true);
        }
    });

    // Form Submission (Simulated as per source)
    $("#call-back-form").on("submit", function (e) {
        e.preventDefault();
        const name = $("#name").val();
        const mobile = $("#mobile").val();
        const errorBox = $("#form-error");

        if (!name || mobile.length < 10) {
            errorBox.text("Please fill all details correctly.").show();
            return;
        }

        // Simulate OTP send phase
        $(this).find('input[type="text"]').prop('disabled', true);
        $(".form-verify-otp").show();
        errorBox.text("OTP sent to your mobile number!").css('color', 'green').show();
        $("#submit_form").val("Verify & Call Back");
    });
});
