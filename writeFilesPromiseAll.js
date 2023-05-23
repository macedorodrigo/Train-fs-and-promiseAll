const fs = require('fs/promises');

const arrayToFile = async () => {
  const strings = ['Finalmente', 'estou', 'usando', 'Promise.all', '!!!']

  const createFiles = strings.map((string, index) => {
    fs.writeFile(`./file${index + 1}.txt`, string)
  });
  await Promise.all(createFiles);

  const fileNames = [
    'file1.txt',
    'file2.txt',
    'file3.txt',
    'file4.txt',
    'file5.txt',
  ];

  const readFilePromises = fileNames.map((file) => fs.readFile(file, 'utf8'));
  const fileContents = await Promise.all(readFilePromises);
  const newFileContent = fileContents.join(' ');
  await fs.writeFile('./fileAll.txt', newFileContent)
};

arrayToFile();

