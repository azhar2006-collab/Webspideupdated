const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

const baseDir = 'Why Work with webspide';

async function processDir(dir) {
  const items = fs.readdirSync(dir);
  for (const item of items) {
    const fullPath = path.join(dir, item);
    const stat = fs.statSync(fullPath);
    if (stat.isDirectory()) {
      await processDir(fullPath);
    } else if (item.endsWith('.webp') && !item.includes('-transparent')) {
      const outPath = fullPath.replace('.webp', '-transparent.png');
      if (fs.existsSync(outPath)) {
        console.log('Already exists:', outPath);
        continue;
      }
      try {
        const { data, info } = await sharp(fullPath)
          .ensureAlpha()
          .raw()
          .toBuffer({ resolveWithObject: true });

        for (let i = 0; i < data.length; i += 4) {
          const r = data[i];
          const g = data[i+1];
          const b = data[i+2];
          // Near-white pixels set to transparent
          if (r > 232 && g > 232 && b > 232) {
            data[i+3] = 0;
          }
        }

        await sharp(data, {
          raw: { width: info.width, height: info.height, channels: 4 }
        })
        .trim()
        .png()
        .toFile(outPath);

        console.log('Generated:', outPath);
      } catch (err) {
        console.error('Error generating', fullPath, err.message);
      }
    }
  }
}

processDir(baseDir)
  .then(() => console.log('All transparent PNGs ready!'))
  .catch(err => console.error(err));
