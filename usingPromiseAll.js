const fs = require('fs/promises');

const files = [
  'file1.txt',
  'file2.txt',
  'file3.txt',
]

const main = async () => {
  try {
    const promises = files.map(async (file, index) => {
      const contentFile = await fs.readFile(file, 'utf8');
      console.log(`File ${index + 1}: ${contentFile}`);
    });
    await Promise.all(promises);
    console.log(`That all folks`);
  } catch (err) {
    console.log(err);
  }
};

const getFilesSizeSum = async () => {
  try {
    let filesSizeSum = 0;
    await Promise.all(files.map( async (file) => {
      contentFile = await fs.readFile(file);
      filesSizeSum = filesSizeSum + contentFile.byteLength;
    }));
    result = `Lidos 3 arquivos tolalizando ${filesSizeSum} bytes`
    return console.log(result);
  } catch (err) {
    console.error(`Erro ao ler o arquivo: ${err.message}`)
  }
};

main();
getFilesSizeSum();