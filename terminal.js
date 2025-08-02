const output = document.getElementById('terminal-output');
const input = document.getElementById('terminal-input');

const commands = {
  help: `Available commands:
- about
- skills
- projects
- achievements
- contact
- clear`,

  about: "I'm an aspiring cybersecurity professional with hands-on experience in network security, system management, and cloud tools like AWS and Wazuh. Passionate about ethical hacking and digital protection.",

  skills: `Cyber Tools: Palo-Alto, Wazuh, Nmap, Wireshark
Programming: Python, Bash, JavaScript, C
Cloud/Systems: AWS, Windows Server, Linux
Other: Troubleshooting, Remote Desktop, Risk Assessment`,

  projects: `- Linux + Wazuh Monitoring (Capstone)
- AES-Encrypted Cloud Storage
- Secure LAN Design (Routers, VPN)
- Car Marketplace Website
- Windows Network Hardening
- Web Server Backup Simulation`,

  achievements: `- Dean’s List (2x) at Georgian College
- AI in Games Research Report
- Published 2 Journal Papers (AES, SURF)
- Workshops on Robotics, Web Dev, 3D Modeling
- World Robot Olympiad Participant`,

  contact: `Email: deveshbalakrishnan@gmail.com
Phone: +91 9962812130
LinkedIn: linkedin.com/in/devesh-balakrishnan-83a4aa277`
};

input.addEventListener('keydown', function (e) {
  if (e.key === 'Enter') {
    const cmd = input.value.trim().toLowerCase();
    const response = commands[cmd] || (cmd === 'clear' ? null : `Unknown command: ${cmd}`);
    if (cmd === 'clear') {
      output.innerHTML = '';
    } else {
      const div = document.createElement('pre');
      div.textContent = `> ${cmd}\n${response}`;
      output.appendChild(div);
    }
    input.value = '';
    output.scrollTop = output.scrollHeight;
  }
});

document.getElementById('back-to-light').addEventListener('click', () => {
  window.location.href = 'index.html';
});
