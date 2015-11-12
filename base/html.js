'use strict';

var defaultTitle = 'MySite';

function render(title, content) {
  return `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>${title || defaultTitle}</title>
</head>
<body>
  ${content}
</body>
</html>`;
}

module.exports = render;
