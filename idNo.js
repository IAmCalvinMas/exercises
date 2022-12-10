/*
 * name: id no info extractor
 * author: https://github.com/IAmCalvinMas
 */

function rsaIdNo(idNo) {
  const idNoPattern = /\d{2}\d{8}[0-1][8-9]\d/;
  idNo = String(Math.abs(idNo));

  if (!idNoPattern.test(idNo)) {
    throw new Error("Please enter 13 numbers");
  }

  const user = new Object();

  user.year = idNo.substr(0, 2);

  if (user.year > new Date().getFullYear()) {
    throw new Error("Enter a valid year of birth");
  }

  user.month = idNo.substr(2, 2);

  if (user.month > 12 || user.month < 1) {
    throw new Error("Enter a valid month of birth");
  }

  user.date = idNo.substr(4, 2);

  if (user.date > 31 || user.date < 1) {
    throw new Error("Enter a valid date of birth");
  }

  user.gender = idNo.substr(6) >= 5 ? "male" : "female";
  user.saCitizen = idNo.substr(10) != 1;

  return user;
}

try {
  console.log(rsaIdNo("9407025527084"));
} catch (err) {
  console.error(err);
}
