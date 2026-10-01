/* =====================================================
   RUQYAH NOOR
   JAVASCRIPT
===================================================== */


/* =====================================================
   WAIT FOR PAGE TO LOAD
===================================================== */

document.addEventListener("DOMContentLoaded", function () {


  /* =====================================================
     WHATSAPP NUMBER
  ===================================================== */

  const WHATSAPP_NUMBER = "923457518694";


  /* =====================================================
     MOBILE MENU
  ===================================================== */

  /*
     یہ دونوں طریقوں سے menu کو تلاش کرے گا:

     ID:
     #menuToggle
     #mainNav

     یا Class:
     .menu-toggle
     .main-nav
  */

  const menuToggle =
    document.getElementById("menuToggle") ||
    document.querySelector(".menu-toggle");

  const mainNav =
    document.getElementById("mainNav") ||
    document.querySelector(".main-nav");


  if (menuToggle && mainNav) {

    /* -----------------------------------------------
       MOBILE MENU BUTTON
    ------------------------------------------------ */

    menuToggle.addEventListener("click", function (event) {

      event.preventDefault();

      event.stopPropagation();

      mainNav.classList.toggle("active");

      /*
         Accessibility
      */

      const isOpen =
        mainNav.classList.contains("active");

      menuToggle.setAttribute(
        "aria-expanded",
        isOpen ? "true" : "false"
      );

    });


    /* -----------------------------------------------
       NAVIGATION LINKS
    ------------------------------------------------ */

    const navLinks =
      mainNav.querySelectorAll("a");


    navLinks.forEach(function (link) {

      link.addEventListener("click", function () {

        mainNav.classList.remove("active");

        menuToggle.setAttribute(
          "aria-expanded",
          "false"
        );

      });

    });


    /* -----------------------------------------------
       CLICK OUTSIDE MENU
    ------------------------------------------------ */

    document.addEventListener("click", function (event) {

      if (
        mainNav.classList.contains("active") &&
        !mainNav.contains(event.target) &&
        !menuToggle.contains(event.target)
      ) {

        mainNav.classList.remove("active");

        menuToggle.setAttribute(
          "aria-expanded",
          "false"
        );

      }

    });

  }


  /* =====================================================
     FAQ ACCORDION
  ===================================================== */

  const faqQuestions =
    document.querySelectorAll(".faq-question");


  faqQuestions.forEach(function (question) {

    question.addEventListener("click", function () {

      const faqItem =
        question.closest(".faq-item");


      if (!faqItem) {
        return;
      }


      const answer =
        faqItem.querySelector(".faq-answer");


      if (!answer) {
        return;
      }


      const isActive =
        faqItem.classList.contains("active");


      document
        .querySelectorAll(".faq-item")
        .forEach(function (item) {

          item.classList.remove("active");


          const itemAnswer =
            item.querySelector(".faq-answer");


          if (itemAnswer) {

            itemAnswer.style.maxHeight = null;

          }

        });


      if (!isActive) {

        faqItem.classList.add("active");


        answer.style.maxHeight =
          answer.scrollHeight + "px";

      }

    });

  });


  /* =====================================================
     WHATSAPP FUNCTION
  ===================================================== */

  function openWhatsApp(message) {

    if (
      !WHATSAPP_NUMBER ||
      WHATSAPP_NUMBER === "000000000000"
    ) {

      alert(
        "Please add your WhatsApp number in script.js first."
      );

      return false;

    }


    const encodedMessage =
      encodeURIComponent(message);


    const whatsappURL =
      "https://wa.me/" +
      WHATSAPP_NUMBER +
      "?text=" +
      encodedMessage;


    window.open(
      whatsappURL,
      "_blank"
    );


    return true;

  }


  /* =====================================================
     DATE DROPDOWNS
  ===================================================== */

  const dateDay =
    document.getElementById("dateDay");

  const dateMonth =
    document.getElementById("dateMonth");

  const dateYear =
    document.getElementById("dateYear");


  /* =====================================================
     CREATE DAY OPTIONS
  ===================================================== */

  if (dateDay) {

    for (
      let day = 1;
      day <= 31;
      day++
    ) {

      const option =
        document.createElement("option");


      option.value =
        String(day).padStart(2, "0");


      option.textContent =
        day;


      dateDay.appendChild(option);

    }

  }


  /* =====================================================
     CREATE YEAR OPTIONS
  ===================================================== */

  if (dateYear) {

    const currentYear =
      new Date().getFullYear();


    for (
      let year = currentYear;
      year <= currentYear + 2;
      year++
    ) {

      const option =
        document.createElement("option");


      option.value =
        year;


      option.textContent =
        year;


      dateYear.appendChild(option);

    }

  }


  /* =====================================================
     TIME DROPDOWNS
  ===================================================== */

  const timeHour =
    document.getElementById("timeHour");

  const timeMinute =
    document.getElementById("timeMinute");

  const timePeriod =
    document.getElementById("timePeriod");


  /* =====================================================
     CREATE HOUR OPTIONS
  ===================================================== */

  if (timeHour) {

    for (
      let hour = 1;
      hour <= 12;
      hour++
    ) {

      const option =
        document.createElement("option");


      const hourText =
        String(hour).padStart(2, "0");


      option.value =
        hourText;


      option.textContent =
        hourText;


      timeHour.appendChild(option);

    }

  }


  /* =====================================================
     CREATE MINUTE OPTIONS
  ===================================================== */

  if (timeMinute) {

    for (
      let minute = 0;
      minute <= 59;
      minute++
    ) {

      const option =
        document.createElement("option");


      const minuteText =
        String(minute).padStart(2, "0");


      option.value =
        minuteText;


      option.textContent =
        minuteText;


      timeMinute.appendChild(option);

    }

  }


  /* =====================================================
     CHECK VALID DATE
  ===================================================== */

  function isValidDate(day, month, year) {

    const date =
      new Date(
        Number(year),
        Number(month) - 1,
        Number(day)
      );


    return (

      date.getFullYear() ===
        Number(year)

      &&

      date.getMonth() ===
        Number(month) - 1

      &&

      date.getDate() ===
        Number(day)

    );

  }


  /* =====================================================
     CLEAR APPOINTMENT FORM
  ===================================================== */

  function clearAppointmentForm() {

    const fields = [
      "name",
      "country",
      "city",
      "age",
      "gender",
      "language",
      "whatsapp",
      "dateDay",
      "dateMonth",
      "dateYear",
      "timeHour",
      "timeMinute",
      "timePeriod",
      "concern"
    ];


    fields.forEach(function (fieldId) {

      const field =
        document.getElementById(fieldId);


      if (field) {

        field.value = "";

      }

    });


    const consent =
      document.getElementById("consent");


    if (consent) {

      consent.checked = false;

    }

  }


  /* =====================================================
     APPOINTMENT FORM
  ===================================================== */

  const appointmentForm =
    document.getElementById(
      "appointmentForm"
    );


  if (appointmentForm) {

    appointmentForm.addEventListener(
      "submit",
      function (event) {

        event.preventDefault();


        const name =
          document
            .getElementById("name")
            .value
            .trim();


        const country =
          document
            .getElementById("country")
            .value
            .trim();


        const city =
          document
            .getElementById("city")
            .value
            .trim();


        const age =
          document
            .getElementById("age")
            .value
            .trim();


        const gender =
          document
            .getElementById("gender")
            .value;


        const language =
          document
            .getElementById("language")
            .value;


        const whatsapp =
          document
            .getElementById("whatsapp")
            .value
            .trim();


        const day =
          document
            .getElementById("dateDay")
            .value;


        const month =
          document
            .getElementById("dateMonth")
            .value;


        const year =
          document
            .getElementById("dateYear")
            .value;


        const selectedHour =
          document
            .getElementById("timeHour")
            .value;


        const selectedMinute =
          document
            .getElementById("timeMinute")
            .value;


        const selectedPeriod =
          document
            .getElementById("timePeriod")
            .value;


        const concern =
          document
            .getElementById("concern")
            .value
            .trim();


        const consent =
          document
            .getElementById("consent")
            .checked;


        const formMessage =
          document.getElementById(
            "formMessage"
          );


        /* =================================================
           VALIDATION
        ================================================= */

        if (!name) {

          formMessage.textContent =
            "Please enter your name.";

          return;

        }


        if (!country) {

          formMessage.textContent =
            "Please enter your country.";

          return;

        }


        if (!whatsapp) {

          formMessage.textContent =
            "Please enter your WhatsApp number.";

          return;

        }


        if (!language) {

          formMessage.textContent =
            "Please select your preferred language.";

          return;

        }


        if (!day) {

          formMessage.textContent =
            "Please select the day.";

          return;

        }


        if (!month) {

          formMessage.textContent =
            "Please select the month.";

          return;

        }


        if (!year) {

          formMessage.textContent =
            "Please select the year.";

          return;

        }


        if (
          !isValidDate(
            day,
            month,
            year
          )
        ) {

          formMessage.textContent =
            "Please select a valid date.";

          return;

        }


        if (!selectedHour) {

          formMessage.textContent =
            "Please select the hour.";

          return;

        }


        if (!selectedMinute) {

          formMessage.textContent =
            "Please select the minute.";

          return;

        }


        if (!selectedPeriod) {

          formMessage.textContent =
            "Please select AM or PM.";

          return;

        }


        const time =
          selectedHour +
          ":" +
          selectedMinute +
          " " +
          selectedPeriod;


        if (!concern) {

          formMessage.textContent =
            "Please describe your concern.";

          return;

        }


        if (!consent) {

          formMessage.textContent =
            "Please confirm the consent checkbox.";

          return;

        }


        /* =================================================
           MONTH NAMES
        ================================================= */

        const monthNames = {

          "01": "January",
          "02": "February",
          "03": "March",
          "04": "April",
          "05": "May",
          "06": "June",
          "07": "July",
          "08": "August",
          "09": "September",
          "10": "October",
          "11": "November",
          "12": "December"

        };


        const selectedMonth =
          monthNames[month];


        const preferredDate =
          day +
          " " +
          selectedMonth +
          " " +
          year;


        /* =================================================
           WHATSAPP MESSAGE
        ================================================= */

        let message =
          "Assalamu Alaikum, I would like to request a Ruqyah session from Ruqyah Noor.\n\n";


        message +=
          "Name: " +
          name +
          "\n";


        message +=
          "Country: " +
          country +
          "\n";


        if (city) {

          message +=
            "City: " +
            city +
            "\n";

        }


        if (age) {

          message +=
            "Age: " +
            age +
            "\n";

        }


        if (gender) {

          message +=
            "Gender: " +
            gender +
            "\n";

        }


        message +=
          "Preferred Language: " +
          language +
          "\n";


        message +=
          "My WhatsApp: " +
          whatsapp +
          "\n";


        message +=
          "Preferred Date: " +
          preferredDate +
          "\n";


        message +=
          "Preferred Time: " +
          time +
          "\n";


        message +=
          "\nConcern:\n" +
          concern;


        /* =================================================
           OPEN WHATSAPP
        ================================================= */

        const whatsappOpened =
          openWhatsApp(message);


        if (whatsappOpened) {

          clearAppointmentForm();

          formMessage.textContent =
            "Opening WhatsApp...";

        }

      }
    );

  }


  /* =====================================================
     CONTACT WHATSAPP BUTTON
  ===================================================== */

  const whatsappButton =
    document.getElementById(
      "whatsappButton"
    );


  if (whatsappButton) {

    whatsappButton.addEventListener(
      "click",
      function () {

        const message =
          "Assalamu Alaikum, I would like to contact Ruqyah Noor regarding Ruqyah guidance.";


        openWhatsApp(message);

      }
    );

  }


  /* =====================================================
     CURRENT YEAR
  ===================================================== */

  const yearElement =
    document.getElementById(
      "year"
    );


  if (yearElement) {

    yearElement.textContent =
      new Date().getFullYear();

  }


});