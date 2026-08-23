const fs = require('fs');
const path = require('path');

const ROOT_DIR = path.resolve(__dirname, '..');
const PUBLIC_ASSETS_DIR = path.join(ROOT_DIR, 'public', 'assets');
const SRC_DIR = path.join(ROOT_DIR, 'src');

const DIRS = {
  CLIENTS: path.join(ROOT_DIR, 'Our Clients'),
  IT: path.join(ROOT_DIR, 'IT Proof'),
  MARKETING: path.join(ROOT_DIR, 'Marketing Proof')
};

const DEST_DIRS = {
  CLIENTS: path.join(PUBLIC_ASSETS_DIR, 'clients'),
  IT: path.join(PUBLIC_ASSETS_DIR, 'it'),
  MARKETING: path.join(PUBLIC_ASSETS_DIR, 'marketing')
};

// Create destination directories
Object.values(DEST_DIRS).forEach(dir => {
  if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir, { recursive: true });
  }
});

const assetData = {
  clients: [],
  itProjects: [],
  marketing: []
};

function sanitizeFileName(name) {
  const ext = path.extname(name);
  const base = path.basename(name, ext);
  const sanitizedBase = base
    .replace(/[^a-zA-Z0-9]/g, '-')
    .replace(/-+/g, '-')
    .replace(/^-|-$/g, '')
    .toLowerCase();
  
  return `${sanitizedBase}${ext.toLowerCase()}`;
}

let counter = 0;
function getUniqueName(name) {
  counter++;
  const ext = path.extname(name);
  const base = path.basename(name, ext);
  return `${base}-${counter}${ext}`;
}

if (fs.existsSync(DIRS.CLIENTS)) {
  const files = fs.readdirSync(DIRS.CLIENTS);
  files.forEach(file => {
    if (file.match(/\.(jpg|jpeg|png|webp|gif|svg)$/i)) {
      let safeName = sanitizeFileName(file);
      safeName = getUniqueName(safeName);
      const srcPath = path.join(DIRS.CLIENTS, file);
      const destPath = path.join(DEST_DIRS.CLIENTS, safeName);
      
      fs.copyFileSync(srcPath, destPath);
      assetData.clients.push(`/assets/clients/${safeName}`);
    }
  });
}

if (fs.existsSync(DIRS.IT)) {
  const files = fs.readdirSync(DIRS.IT);

  files.forEach(file => {
    const ext = path.extname(file).toLowerCase();
    const isImage = file.match(/\.(png|jpg|jpeg|webp)$/i);
    const isPdf = ext === '.pdf';
    
    if (isImage || isPdf) {
      let safeName = sanitizeFileName(file);
      safeName = getUniqueName(safeName);
      const srcPath = path.join(DIRS.IT, file);
      const destPath = path.join(DEST_DIRS.IT, safeName);
      
      fs.copyFileSync(srcPath, destPath);
      
      if (isImage) {
        let title = path.basename(file, ext).replace(/[-_—]+/g, ' ').trim();
        assetData.itProjects.push({
          title,
          image: `/assets/it/${safeName}`,
          originalName: path.basename(file, ext)
        });
      }
    }
  });

  files.forEach(file => {
    if (file.toLowerCase().endsWith('.pdf')) {
      const baseName = path.basename(file, '.pdf').toLowerCase().replace(/[^a-z0-9]/g, '');
      let safeName = sanitizeFileName(file);
      safeName = getUniqueName(safeName);
      const srcPath = path.join(DIRS.IT, file);
      const destPath = path.join(DEST_DIRS.IT, safeName);
      
      fs.copyFileSync(srcPath, destPath);
      
      const match = assetData.itProjects.find(p => {
        const pBase = p.originalName.toLowerCase().replace(/[^a-z0-9]/g, '');
        return pBase === baseName || pBase.includes(baseName) || baseName.includes(pBase);
      });

      if (match) {
        match.pdf = `/assets/it/${safeName}`;
      }
    }
  });
}

if (fs.existsSync(DIRS.MARKETING)) {
  const categories = fs.readdirSync(DIRS.MARKETING, { withFileTypes: true })
    .filter(dirent => dirent.isDirectory())
    .map(dirent => dirent.name);

  categories.forEach(category => {
    const categoryPath = path.join(DIRS.MARKETING, category);
    
    const safeCategory = sanitizeFileName(category).replace(/\./g, '');
    const categoryDest = path.join(DEST_DIRS.MARKETING, safeCategory);
    if (!fs.existsSync(categoryDest)) {
      fs.mkdirSync(categoryDest, { recursive: true });
    }

    const files = fs.readdirSync(categoryPath);
    files.forEach(file => {
      if (file.match(/\.(jpg|jpeg|png|webp|gif)$/i)) {
        let safeName = sanitizeFileName(file);
        safeName = getUniqueName(safeName);
        const srcPath = path.join(categoryPath, file);
        const destPath = path.join(categoryDest, safeName);
        
        fs.copyFileSync(srcPath, destPath);
        
        assetData.marketing.push({
          category: category, 
          categorySlug: safeCategory,
          image: `/assets/marketing/${safeCategory}/${safeName}`
        });
      }
    });
  });
}

const jsonPath = path.join(SRC_DIR, 'assetData.json');
fs.writeFileSync(jsonPath, JSON.stringify(assetData, null, 2));

console.log('✅ Assets processed and assetData.json generated successfully!');
console.log(`- Clients: ${assetData.clients.length}`);
console.log(`- IT Projects: ${assetData.itProjects.length}`);
console.log(`- Marketing Items: ${assetData.marketing.length}`);
