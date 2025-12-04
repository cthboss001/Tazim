const icons = {
  github: 'fa-brands fa-github',
  linkedin: 'fa-brands fa-linkedin',
  facebook: 'fa-brands fa-facebook',
  twitter: 'fa-brands fa-twitter',
  telegram: 'fa-brands fa-telegram',
  codeforces: 'fa-solid fa-code',
  atcoder: 'fa-solid fa-terminal'
};

function populateSocialIcons() {
  const socialContainer = document.getElementById('social-container');
  const socialIcons = Object.keys(icons);
  socialContainer.innerHTML = '';
  socialIcons.forEach(icon => {
    const iconElement = document.createElement('i');
    iconElement.className = icons[icon];
    socialContainer.appendChild(iconElement);
  });
}