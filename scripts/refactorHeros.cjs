const fs = require('fs');
const path = require('path');

const pagesDir = path.join(__dirname, '..', 'src', 'pages');

const filesToRefactor = [
  {
    file: 'About.jsx',
    label: 'About Us',
    title: 'The Minds Behind the Magic',
    highlight: 'Magic',
    desc: 'We are a collective of visionaries, strategists, and creators dedicated to elevating your brand to unprecedented heights.'
  },
  {
    file: 'Blog.jsx',
    label: 'Insights & Knowledge',
    title: 'Strategies for Market Dominance',
    highlight: 'Dominance',
    desc: 'Deep dives, case studies, and actionable insights from the frontlines of marketing and PR.'
  },
  {
    file: 'Contact.jsx',
    label: 'Contact Us',
    title: "Let's Build Your Legacy",
    highlight: 'Legacy',
    desc: "Ready to scale? Our experts are standing by to engineer your next big growth phase."
  },
  {
    file: 'Industries.jsx',
    label: 'Industries We Serve',
    title: 'Expertise Across Sectors',
    highlight: 'Sectors',
    desc: "From manufacturing to tech startups, we've driven explosive growth across 18+ high-stakes industries."
  },
  {
    file: 'Process.jsx',
    label: 'Our Process',
    title: 'The Blueprint for Success',
    highlight: 'Success',
    desc: 'A proven, data-driven methodology that ensures predictable and scalable results for every campaign.'
  },
  {
    file: 'Services.jsx',
    label: 'Our Services',
    title: '11 Ways to Grow Your Brand',
    highlight: 'Grow',
    desc: 'Comprehensive marketing, PR, and media solutions designed to build visibility and achieve measurable growth.'
  }
];

filesToRefactor.forEach(({ file, label, title, highlight, desc }) => {
  const filePath = path.join(pagesDir, file);
  if (!fs.existsSync(filePath)) return;

  let content = fs.readFileSync(filePath, 'utf8');

  // Inject import if not exists
  if (!content.includes('import PageHero')) {
    content = content.replace(/import .*? from .*?;\\n/, match => match + "import PageHero from '../components/PageHero';\\n");
  }

  // Regex to match the old page-hero section
  const heroRegex = /<section className="page-hero"[\s\S]*?<\/section>/;
  
  const replacement = `<PageHero 
        label="${label}"
        title="${title}"
        highlight="${highlight}"
        description="${desc}"
      />`;

  if (heroRegex.test(content)) {
    content = content.replace(heroRegex, replacement);
    fs.writeFileSync(filePath, content, 'utf8');
    console.log(`Refactored ${file}`);
  }
});
