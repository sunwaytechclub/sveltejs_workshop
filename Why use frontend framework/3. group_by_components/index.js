const fs = require('fs');

(async function read() {
    let data = await fs.readFileSync('./FancyButton.pupu');
    let buf = Buffer.from(data).toString('utf-8');

    fs.writeFileSync('./index.html', buf);
})();