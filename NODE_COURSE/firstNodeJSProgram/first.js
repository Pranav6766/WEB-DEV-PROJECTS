// console.log("coding");
//fs means file system -> to read and write files
const fs = require("fs");
fs.writeFile("output.txt", "writing a new file", (err) => {
  if (err) console.log("error occured");
  else console.log("file success");
});
//read eval print loop
//DNS - domain name service, computer send request to dns then dns give the address of that site to our system and then we move to final site
//dns server has 3 levels -> root dns, tld(top level domain), authoritative

//require keyword -> import modules in node js