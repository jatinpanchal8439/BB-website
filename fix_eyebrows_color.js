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

  const spanRegex = /<span className="([^"]*font-\[family-name:var\(--font-poppins\)\][^"]*)"/gi;
  content = content.replace(spanRegex, (match, classes) => {
    let newClasses = classes.replace('text-[#64748B]', 'text-[#FF4D00]');
    return `<span className="${newClasses}"`;
  });

  if (content !== originalContent) {
    fs.writeFileSync(file, content, 'utf8');
    updatedCount++;
    console.log('Updated', file);
  }
});

console.log('Total files updated:', updatedCount);
