
  $(function () {
    const phoneNumberInput = $('#phone-number');
    const errorDiv = $('#sms-atl-error')
    if(errorDiv.length){
      function checkSelectedCountry() {
        const selectedCountry = $('#phone-country').val();
        const isOtpEnabled = $('#phone-number-country-code').attr('data-otp-enabled') === 'true';
        const form = document.getElementById('subscribe-form-sms');
        form.action = '/subscriptions/new-sms';
        const isOtpFlow = document.getElementById('otp_verify_flow');
        document.getElementById('otp-container').style.display = "none";
        if(false && selectedCountry === 'sg') { // Replace 'SG' with the actual value representing Singapore in your select tag
          phoneNumberInput.prop('disabled', true);
          errorDiv.html(`Due to new Singapore government regulations, we're currently not supporting text subscriptions in Singapore.<a href="https://community.atlassian.com/t5/Statuspage-articles/Attention-SMS-notifications-will-be-disabled-on-August-1st-2023/ba-p/2424398" target="_blank"> Learn more.</a> <br> Select another method to subscribe.`);
        } else {
          phoneNumberInput.prop('readonly', false);
          errorDiv.html('');
          if(false){
            if(isOtpEnabled){
              document.getElementById('subscribe-btn-sms').value = "Send OTP";
            }
            else {
              isOtpFlow.value = false;
              document.getElementById('subscribe-btn-sms').value = "Subscribe via Text Message";
            }
          }
        }
      }

      $('#phone-country').on('change', checkSelectedCountry);
      checkSelectedCountry();
    }
  });

  document.addEventListener('DOMContentLoaded', function() {
    const dropdown = document.querySelector('#phone-number-country-code .phone-country');
    if (dropdown){
      const wrapperDiv = document.getElementById('phone-number-country-code');
      const selectedOption = dropdown.options[dropdown.selectedIndex];
      const otpEnabled = selectedOption.getAttribute('data-otp-enabled');

      wrapperDiv.setAttribute('data-otp-enabled', otpEnabled);

      dropdown.addEventListener('change', function() {
        const selectedOption = dropdown.options[dropdown.selectedIndex];
        const otpEnabled = selectedOption.getAttribute('data-otp-enabled');

        wrapperDiv.setAttribute('data-otp-enabled', otpEnabled);
      });
    }
  });

  var countdownTimer;
  var resendBtn = document.getElementById('resend');
  var timer = document.getElementById('timer');
  var form = document.getElementById('subscribe-form-sms');
  var RESEND_TIMER = 30;
  $(function() {
    $('#subscribe-form-sms').on('ajax:success', function(e, data, status, xhr){
      const form = this;
      const action = form.getAttribute('action');
      if (data.type === 'success' && data.otp_flow === true) {
        document.getElementById('subscriber_code').value = data.subscriber_code
        document.getElementById('otp-container').style.display = "block";
        $('#phone-number').prop('readonly', true);
        var display = document.getElementById('countdown');
        disableResend();
        startTimer(RESEND_TIMER, display)
        document.getElementById('subscribe-btn-sms').value = "Verify OTP and Subscribe";
        document.getElementById('otp_verify_flow').value = true;
        form.action = '/subscriptions/verify-otp';
      } else if (data.type === 'success' && action.includes('verify')){
        document.getElementById('otp-container').style.display = "none";
        $('#phone-number').val('').prop('readonly', false);
        $('#otp').val('');
        document.getElementById('subscribe-btn-sms').value = "Send OTP";
        document.getElementById('otp_verify_flow').value = false;
        form.action = '/subscriptions/new-sms';
        SP.currentPage.updatesDropdown.hide();
      }
    });
    $("#btn-subcriber-change-number").on('click', () => {
      document.getElementById('otp-container').style.display = "none";
      $('#phone-number').prop('readonly', false);
      document.getElementById('subscribe-btn-sms').value = "Send OTP";
      form.action = '/subscriptions/new-sms';
      return false
    })
    $('#resend-otp-btn').on('click', function(e) {
      e.preventDefault();
      let phoneNumber = $('#phone-number').val();
      let countryCode = $('.phone-country').val();
      $.ajax({
        type: 'POST',
        url: "/subscriptions/new-sms",
        data: {
          phone_number: phoneNumber,
          phone_country: countryCode,
          type: 'resend'
        },
      }).done(function(data) {
        var messageOptions = (data.type !== undefined && data.type !== null) ? { cssClass: data.type } : {};
        HRB.utils.notify(data.text, messageOptions);
        var display = document.getElementById('countdown');
        disableResend();
        timer.style.display = "none"
        if (data.type === 'success') {
          startTimer(RESEND_TIMER, display);
        }
      })
    });
  })

  function startTimer(duration, display){
    var timer = duration, seconds;
    clearInterval(countdownTimer);
    countdownTimer = setInterval(function () {
      seconds = parseInt(timer % 60, 10);
      display.textContent = seconds;
      if(--timer < 0){
        enableResend();
        clearInterval(countdownTimer);
      }
    }, 1000);
    disableResend();
  }
  function enableResend(){
    resendBtn.style.display = "block";
    timer.style.display = "none"
  }
  function disableResend(){
    resendBtn.style.display = "none";
    timer.style.display = "block"
  }

  $(function() {
    $('#subscribe-form-email').on('submit', function() {
      var tokenField = document.getElementById('email-otp-token-field');
      let page_code = "pv54g7ltsc24"
      let key = keyForEmailOtpToken($('#email').val(), page_code);
      tokenField.value = localStorage.getItem(key);
    });
  });

  var emailOtpCountdownTimer;
  var emailOtpResendBtn = document.getElementById('resend-email-otp');
  var emailOtpTimer = document.getElementById('email-otp-timer');
  var emailOtpForm = document.getElementById('subscribe-form-email');
  var EMAIL_OTP_RESEND_TIMER = 600;
  $(function() {
    $('#subscribe-form-email').on('ajax:success', function(e, data, status, xhr){
      const form = this;
      const action = form.getAttribute('action');
      if (data.type === 'success' && data.email_otp_verify_flow === true) {
        document.getElementById('email-otp-container').style.display = "block";
        var display = document.getElementById('email-otp-countdown');
        display.textContent = EMAIL_OTP_RESEND_TIMER;
        disableEmailOtpResend();
        startEmailOtpTimer(EMAIL_OTP_RESEND_TIMER, display)
        document.getElementById('subscribe-btn-email').value = "Verify OTP and Subscribe";
        document.getElementById('email_otp_verify_flow').value = true;
        form.action = '/subscriptions/verify-email-otp';
      } else if (data.type === 'success' && action.includes('verify')){
        let email =  $('#email')
        let page_code = "pv54g7ltsc24"
        let key = keyForEmailOtpToken(email.val(), page_code);
        localStorage.setItem(key, data.email_otp_auth_token);

        document.getElementById('email-otp-container').style.display = "none";
        email.val('').prop('readonly', false);
        $('#email-otp').val('');
        document.getElementById('subscribe-btn-email').value = "Send OTP";
        document.getElementById('email_otp_verify_flow').value = false;
        form.action = '/subscriptions/new-email';
        SP.currentPage.updatesDropdown.hide();
      }
    });
    $('#resend-email-otp-btn').on('click', function(e) {
      e.preventDefault();
      let email = $('#email').val();
      $.ajax({
        type: 'POST',
        url: "/subscriptions/new-email",
        data: {
          email: email
        },
      }).done(function(data) {
        var messageOptions = (data.type !== undefined && data.type !== null) ? { cssClass: data.type } : {};
        HRB.utils.notify(data.text, messageOptions);
        if (data.type === 'success') {
          var display = document.getElementById('email-otp-countdown');
          display.textContent = EMAIL_OTP_RESEND_TIMER;
          disableEmailOtpResend();
          emailOtpTimer.style.display = "none"
          startEmailOtpTimer(EMAIL_OTP_RESEND_TIMER, display);
        }
      })
    });
  })

  function startEmailOtpTimer(duration, display){
    var timer = duration, seconds;
    clearInterval(emailOtpCountdownTimer);
    emailOtpCountdownTimer = setInterval(function () {
      seconds = parseInt(timer, 10);
      display.textContent = seconds;
      if(--timer < 0){
        enableEmailOtpResend();
        clearInterval(emailOtpCountdownTimer);
      }
    }, 1000);
    disableEmailOtpResend();
  }

  function enableEmailOtpResend(){
    emailOtpResendBtn.style.display = "block";
    emailOtpTimer.style.display = "none"
  }
  function disableEmailOtpResend(){
    emailOtpResendBtn.style.display = "none";
    emailOtpTimer.style.display = "block"
  }
  function keyForEmailOtpToken(email, pageCode) {
    return email + '|' + pageCode+ '|SUBSCRIBE_VIA_EMAIL';
  }
