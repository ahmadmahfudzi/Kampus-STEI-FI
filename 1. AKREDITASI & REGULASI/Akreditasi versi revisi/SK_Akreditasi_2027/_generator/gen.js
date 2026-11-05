// Membuat ulang semua SK: node gen.js <folder-tujuan>
const fs = require('fs'), path = require('path');
const { build } = require('./lib');
const sks = [...require('./content'), ...require('./content2')];
const out = process.argv[2] || '..';
fs.mkdirSync(out, { recursive: true });
(async () => {
  for (const sk of sks) {
    fs.writeFileSync(path.join(out, sk.file + '.docx'), await build(sk));
    console.log('ok', sk.file);
  }
})();
