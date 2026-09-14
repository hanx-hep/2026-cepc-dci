const fs = require('fs');
for (const f of ['dist/index.html', 'dist/404.html']) {
  try {
    let s = fs.readFileSync(f, 'utf8');
    const before = s.length;
    s = s.replace(/<link[^>]*fonts\.googleapis\.com[^>]*>\s*/g, '');
    if (s.length !== before) {
      fs.writeFileSync(f, s);
      console.log(`stripped google fonts link from ${f}`);
    }
  } catch {}
}
