alert("You Can Run Kali Linux Commands here to hack the Server. to Start first Code open and submit to start the terminal.")
function checkCode() {
  const code = document.getElementById('codeInput').value;
  if (code === 'open') {
    alert('Access Granted');
    document.getElementById("hack").style.display = "inline";
  } else {
    alert('Access Denied');
  }
};


let commandCount = 0;

    document.getElementById('commandInput').addEventListener('keydown', function(event) {
      if (event.key === 'Enter') {
        const input = document.getElementById('commandInput');
        const output = document.getElementById('output');

        // Get the command from the input
        const command = input.value.trim();

        // Display the command in the output
        output.innerHTML += `<div class="output-line"><span class="prompt">[saki_edits786@Kali-Linux]$</span> ${command}</div>`;

        // Simulate running a command and output
        if (command) {
          output.innerHTML += `
            <div class="output-line">nslookup youtube.com</div>
            <div class="output-line">Server:         8.8.8.8</div>
            <div class="output-line">Address:        8.8.8.8#53</div>
            <br>
            <div class="output-line">Non-authoritative answer:</div>
            <div class="output-line">Name:   youtube.com</div>
            <div class="output-line">Address: 192.178.24.142</div>
            <div class="output-line">Name:   youtube.com</div>
            <div class="output-line">Address: 2a00:1450:4018:806::200e</div>
            <br>
            <div class="output-line">Life is too short for bad code!</div>
            <div class="output-line"><span class="prompt">[u0_a499@localhost ~]$</span> curl https://ipinfo.io/192.178.24.142</div>
            <div class="output-line">{</div>
            <div class="output-line">  "ip": "192.178.24.142",</div>
            <div class="output-line">  "hostname": "mct04s01-in-f14.1e100.net",</div>
            <div class="output-line">  "city": "Muscat",</div>
            <div class="output-line">  "region": "Muscat",</div>
            <div class="output-line">  "country": "OM",</div>
            <div class="output-line">  "loc": "23.5841,58.4078",</div>
            <div class="output-line">  "org": "AS15169 Google LLC",</div>
            <div class="output-line">  "timezone": "Asia/Muscat",</div>
            <div class="output-line">  "readme": "https://ipinfo.io/missingauth"</div>
            <div class="output-line">}</div>`;
        }

        // Increment the command count
        commandCount++;

        // Alert after three commands
        if (commandCount >= 3) {
          alert("ERROR! ERROR! ERROR! refresh the page...");
        }

        // Clear the input
        input.value = '';
      }
    });