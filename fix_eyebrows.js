const fs = require('fs');
const path = require('path');

const walkSync = (dir, filelist = []) => {
  fs.readdirSync(dir).forEach(file => {
    filelist = fs.statSync(path.join(dir, file)).isDirectory()
      ? walkSync(path.join(dir, file), filelist)
      : filelist.concat(path.join(dir, file));
  });
  return filelist;
};

const files = walkSync('/home/jatin/Downloads/banegabrand/src/app/components');
const jsxFiles = files.filter(f => f.endsWith('.jsx') || f.endsWith('.js'));

let updatedCount = 0;

jsxFiles.forEach(file => {
  let content = fs.readFileSync(file, 'utf8');
  let originalContent = content;

  // Pattern: <span className="...uppercase...">
  const spanRegex = /<span className="([^"]*uppercase[^"]*)"/gi;
  content = content.replace(spanRegex, (match, classes) => {
    // Ensure it looks like an eyebrow
    if ((classes.includes('tracking-') || classes.includes('tracking-widest')) && (classes.includes('font-bold') || classes.includes('font-semibold'))) {
      
      // Keep everything except existing text colors
      let newClasses = classes
        .replace(/text-\[[^\]]+\]/g, '')
        .replace(/text-(orange|red|gray|blue|zinc|slate)-[0-9]+/g, '')
        .replace(/text-[#\w]+/g, '')
        .replace(/\s+/g, ' ')
        .trim();
      
      // Add Poppins and grey
      newClasses += ' text-[#64748B] font-[family-name:var(--font-poppins)]';
      return `<span className="${newClasses}"`;
    }
    return match;
  });

  if (content !== originalContent) {
    fs.writeFileSync(file, content, 'utf8');
    updatedCount++;
    console.log('Updated', file);
  }
});

console.log('Total files updated:', updatedCount);
