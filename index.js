const chalk = require('chalk');
const crypto = require('crypto');
const readLineSync= require('readline-sync');

function md5(str)
{
  const algo = 'md5';
  const md5_hash = crypto.createHash(algo).update(str).digest('hex');
  return md5_hash;
}

function sha1(str1)
{
  const algo = 'sha1';
  const sha1_hash = crypto.createHash(algo).update(str1).digest('hex');
  return sha1_hash;
}

function sha256(str2)
{
  const algo = 'sha256';
  const sha256_hash = crypto.createHash(algo).update(str2).digest('hex');
  return sha256_hash;
}

function sha512(str3)
{
  const algo = 'sha512';
  const sha512_hash = crypto.createHash(algo).update(str3).digest('hex');
  return sha512_hash;
}

function stringHashing()
{
  console.log(chalk.yellowBright.bold("------STRING HASHING UTILITY APP------\n\n\n"));
  console.log(chalk.redBright("What do you want ? \n\n\n[1] MD5 Encoder \n\n[2] SHA1 Encoder\n\n\[3] SHA256 \n\n[4] SHA512 Encoder \n\n[5] Exit\n\n\n"));
  
  let option = parseInt(readLineSync.question(chalk.red("Enter your choice ? Press (1/2/3/4/5)\n")));

  while(option!==5)
  {
    switch(option)
    {
      case 1:
        console.log(chalk.redBright("\n----MD5 ENCODER----\n\n"));
        const str = readLineSync.question(chalk.yellowBright.bold("Enter the string to encode?\n"));
        const md5_str = md5(str);
        console.log(chalk.red("The encoded string is: ",md5_str +'\n\n'));
        break;

      case 2:
        console.log(chalk.redBright("\n----SHA1 ENCODER----\n\n"));
        const str1 = readLineSync.question(chalk.yellowBright.bold("Enter the string to encode?\n"));
        const sha1_str = sha1(str1);
        console.log(chalk.red("The encoded string is: ",sha1_str +'\n\n'));
        break;

      case 3:
        console.log(chalk.redBright("\n----SHA256 ENCODER----\n\n"));
        const str2 = readLineSync.question(chalk.yellowBright.bold("Enter the string to encode?\n"));
        const sha256_str = sha256(str2);
        console.log(chalk.red("The encoded string is: ",sha256_str +'\n\n'));
        break;

      case 4:
        console.log(chalk.redBright("\n----SHA512 ENCODER----\n\n"));
        const str3 = readLineSync.question(chalk.yellowBright.bold("Enter the string to encode?\n"));
        const sha512_str = sha512(str3);
        console.log(chalk.red("The encoded string is: ",sha512_str +'\n\n'));
        break;

      case 5:
        option = 5;
        break;

      default:
        console.log(chalk.green.bold("You have entered the wrong choice, Try again!!"));
        break;
    }

    if(option!==5)
    {
      const choice = parseInt(readLineSync.question(chalk.green("Do you want to continue ? Press (1 for yes/2 for no) \n")));
      if(choice===1)
      {
        option = parseInt(readLineSync.question(chalk.red("Enter your choice ? Press (1/2/3/4/5)\n")));
      }
      else if(choice===2)
      {
        option = 5;
      }
    }
  }

}

stringHashing();
console.log(chalk.bgBlue("\n\n----Thank You!!!----"));