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

  about: "Cybersecurity enthusiast with hands-on experience in firewall administration, network security, and cloud systems like AWS. Certified in Cybersecurity (ISC2 CC), currently pursuing CompTIA Security+ and CySA+.",

  skills: `Cyber Tools: Palo Alto Firewall, Wazuh, Nmap, Wireshark
Cloud/Systems: AWS, VPNs, Remote Desktop, Windows Server, Linux
Languages: Python, Bash, JavaScript, C
Other: Network Design, Risk Assessment, Troubleshooting`,

  projects: `- Wazuh-Based Linux Monitoring (Capstone)
- AES-Encrypted Cloud File Sharing
- VPN & Firewall Secured LAN Design
- Car Marketplace Web App
- Windows Network Risk Mitigation
- Disaster Recovery Simulation`,

  achievements: `- Dean’s List (Georgian College, 86% GPA)
- Published Research (AI in Games, AES, SURF)
- World Robot Olympiad 2014
- Hosted Workshops: Web Design, Robotics, 3D Modeling`,

  contact: `Email: deveshbalakrishnan@gmail.com
Phone: +91 9962812130
LinkedIn: linkedin.com/in/devesh-balakrishnan-83a4aa277`
};

// Suggests funny feedback on typos
function getFunnyError(cmd) {
  const validCommands = Object.keys(commands);
  const closest = validCommands.find(c => levenshtein(cmd, c) === 1);
  if (closest) {
    return `Unknown command: ${cmd}\n🤔 Did you mean: '${closest}'? Try again, hacker.`;
  } else {
    return `Unknown command: ${cmd}\n🧐 That's not even close. Type 'help' to see what you CAN do.`;
  }
}

// Levenshtein Distance to detect close typos
function levenshtein(a, b) {
  const dp = Array.from({ length: a.length + 1 }, () => []);
  for (let i = 0; i <= a.length; i++) dp[i][0] = i;
  for (let j = 0; j <= b.length; j++) dp[0][j] = j;
  for (let i = 1; i <= a.length; i++) {
    for (let j = 1; j <= b.length; j++) {
      dp[i][j] = Math.min(
        dp[i - 1][j] + 1,
        dp[i][j - 1] + 1,
        dp[i - 1][j - 1] + (a[i - 1] === b[j - 1] ? 0 : 1)
      );
    }
  }
  return dp[a.length][b.length];
}

// Terminal command input logic
input.addEventListener('keydown', function (e) {
  if (e.key === 'Enter') {
    const cmd = input.value.trim().toLowerCase();
    let response;
    if (commands[cmd]) {
      response = commands[cmd];
    } else if (cmd === 'clear') {
      response = null;
    } else {
      response = getFunnyError(cmd);
    }
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
