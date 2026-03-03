$(document).ready(function() {
    // Show Modal on Page Load
    const cityModal = new bootstrap.Modal(document.getElementById('cityModal'));
    cityModal.show();

    // Handle City Selection from Modal
    $('#modal_city_select').on('change', function() {
        const selectedCity = $(this).val();
        if (selectedCity) {
            updateCity(selectedCity);
            cityModal.hide();
        }
    });

    // Handle Header City Selection
    $('.location_select').on('change', function() {
        updateCity($(this).val());
    });

    function updateCity(city) {
        // Update both select boxes
        $('.location_select, #modal_city_select').val(city);
        // Update hidden input for form
        $('#input_selected_location').val(city);
        console.log("City updated to: " + city);
    }

    // Lead Form Simulation
    $('#call-back-form').on('submit', function(e) {
        e.preventDefault();
        const btn = $(this).find('button');
        
        if (!$(this).data('otp-sent')) {
            // First click - Simulate OTP send
            alert('OTP sent to your mobile number!');
            $('.form-verify-otp').slideDown();
            btn.text('Verify & Confirm');
            $(this).data('otp-sent', true);
        } else {
            // Second click - Success
            alert('Thank you! Our representative will call you shortly for ' + $('#input_selected_location').val());
            location.reload();
        }
    });
});