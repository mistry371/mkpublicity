const fs = require('fs');
const path = require('path');

const pagesDir = path.join(__dirname, '..', 'src', 'pages');

const filesToFix = [
  'About.jsx',
  'Blog.jsx',
  'Contact.jsx',
  'Industries.jsx',
  'Process.jsx',
  'Services.jsx'
];

filesToFix.forEach(file => {
  const filePath = path.join(pagesDir, file);
  if (fs.existsSync(filePath)) {
    let content = fs.readFileSync(filePath, 'utf8');
    if (!content.includes('import PageHero')) {
      content = "import PageHero from '../components/PageHero';\n" + content;
      fs.writeFileSync(filePath, content, 'utf8');
      console.log('Fixed ' + file);
    }
  }
});
