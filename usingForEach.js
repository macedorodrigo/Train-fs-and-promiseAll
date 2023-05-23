const fs = require('fs').promises;

const files = [
  'file1.txt',
  'file2.txt',
  'file3.txt',
]

const main = async () => {
  try {
    await files.forEach(async (file, index) => {
      const contentFile = await fs.readFile(file, 'utf8');
      console.log(`File ${index + 1}: ${contentFile}`);
    });
  } catch (err) {
    console.log(err);
  }
};

main();