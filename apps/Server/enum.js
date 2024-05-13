const commands = Object.freeze({
  aaptDump: "cd resources && ./aapt2 dump badging ",
  mongoUrl: "mongodb+srv://balajis:hcsnTgKf5YhQ6oGw@cluster1.uzi21wt.mongodb.net/apkdetails",
  deleter:"cd resources && rm ",
  aaptPermission:"cd resources && ./aapt2 dump permissions ",
  keytoolDump:"cd resources && keytool -printcert -jarfile "
});


module.exports = commands;
