let zIndex = 1;

const apps = {
  MyComputer: {
    title: "My Computer",
    content: `<div class = "aboutDevice">
      <h3 class="Bold">About the device</h3>
      <table class="specsTable">
        <tr>
          <td class="Bold">Name of the Device</td>
          <td>Test Type-01</td>
        </tr>
        <tr>
          <td class="Bold">CPU</td>
          <td>ENCOM Core T4</td>
        </tr>
        <tr>
          <td class="Bold">Operating System</td>
          <td>alphariu5 OS</td>
        </tr>
        <tr>
          <td class="Bold">OS Version</td>
          <td>a5-1.0.0</td>
        </tr>
        <tr>
          <td class="Bold">Installed RAM</td>
          <td>8 GB (7.9 Usable)</td>
        </tr>
        <tr>
          <td class="Bold">Graphic Card</td>
          <td>strk UHD Graphics 540 (128 MB)</td>
        </tr>
        <tr>
          <td class="Bold">Device ID</td>
          <td>Q8TF5-B75P7-R5YRJ-VKSZQ</td>
        </tr>
        <tr>
          <td class="Bold">System Type</td>
          <td>64-bit operating system, x64 processor</td>
        </tr>
      </table>
      <br>
      <b><p class="textOpenWindow" onclick="createWindow('Contact')"><u>Contact Support</u></p></b>
    </div>`
  },
  Documents: {
    title: "Documents",
    content: `
    <div class="documentsContent">
      <div class="documentsFolder">
        <a class="documentsLink" href="https://open.spotify.com/playlist/76QKQZ0PWoHBdg62DfQMUK?si=479Tml2MR0qwjqzPmyM5aQ" target="_blank" rel="noopener noreferrer">
          <img src="assets/img/directory.png" class="folderIcon"><br>Music
        </a>
      </div>
      <div class="documentsFolder">
        <a class="documentsLink" href="https://imgur.com" target="_blank" rel="noopener noreferrer">
          <img src="assets/img/directory.png" class="folderIcon"><br>Images
        </a>
      </div>
    </div>
    `
  },
  About:{
    title:"about.txt",
    content: `
      <div class ="aboutWindow">
        <h1>GIANT FUCKASS TITLE PLACEHOLDER</h1>
        <p>GIANT FUCKASS TEXT PLACEHOLDER</p>
      </div>
      `
  },
   Contact: {
    title:"Support",
    content:`
      <div class="form-container">
      <h2>Contact Support</h2>
        <div class="contactForm">
          <form method="POST" action="https://formsubmit.co/h3kill.016@gmail.com">
            <input name="name" type="text" placeholder="Enter Name" required/>
            <br>
            <input email="email" type="email" placeholder="Enter Email" required/>
            <br>
            <textarea name="message" placeholder"Enter Message"></textarea>
            <br>
            <button type="submit">Submit</button>
          </form>
        </div>
      </div>
      `
   },

  Strooggle: {
    title: "Strooggle",
    content: `
        <div class="browserWindow">
          <div>
            <img src="assets/img/browserLogo.png" class="browserLogo">
          </div>
          <br>
          <div class="browserSites">
            <a href="https://github.com/alphar1u5" target="_blank" class="browserLink" rel="noopener noreferrer"><img src="assets/img/github-8-64.png" class="browserIcon"><br>GitHub</a>
            <a href="https://x.com/alphariu5" target="_blank" class="browserLink" rel="noopener noreferrer"><img src="assets/img/twitter-64.png" class="browserIcon"><br>Twitter</a>
            <a href="https://www.reddit.com/user/H3KILL/" target="_blank" class="browserLink" rel="noopener noreferrer"><img src="assets/img/reddit-64.png" class="browserIcon"><br>Reddit</a>
          </div>
        </div>
    `
  }
};

function createWindow(appId) {
  const app = apps[appId];
  if (!app) return;

  const win = document.createElement('div');
  win.className = 'window';
  win.style.zIndex = zIndex++;

  win.innerHTML = `
    <div class="title-bar">
      <span>${app.title}</span>
      <div class="buttons">
        <button><a href="https://archive.org/details/microsoftwindows00boyc/mode/2up" target="_blank" rel="noopener noreferrer"><img src="assets/img/help.png" class="windowButton"></a></button>
        <button onclick="this.closest('.window').remove()"><img src="assets/img/close.png" class="windowButton"></button>
      </div>
    </div>
    <div class="windowContent">
      ${app.content}
    </div>
  `;

  makeDraggable(win);
  document.getElementById('desktop').appendChild(win);
}

function makeDraggable(win) {
  const header = win.querySelector('.title-bar');
  let offsetX = 0, offsetY = 0, isDragging = false;

  header.addEventListener('mousedown', (e) => {
    isDragging = true;
    offsetX = e.clientX - win.offsetLeft;
    offsetY = e.clientY - win.offsetTop;
    win.style.zIndex = zIndex++;
  });

  document.addEventListener('mousemove', (e) => {
    if (!isDragging) return;
    win.style.left = (e.clientX - offsetX) + 'px';
    win.style.top = (e.clientY - offsetY) + 'px';
  });

  document.addEventListener('mouseup', () => {
    isDragging = false;
  });
}

function updateClock() {
  const now = new Date();

  const time = now.toLocaleTimeString([], {
    hour: '2-digit',
    minute: '2-digit'
  });

  const date = now.toLocaleDateString();

  document.getElementById("time").textContent = time;
  document.getElementById("date").textContent = date;
}

setInterval(updateClock, 1000);

updateClock();