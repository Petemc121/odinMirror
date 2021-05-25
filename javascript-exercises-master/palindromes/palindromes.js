const palindromes = function (string) {

    formated = string.replace(/[\W_]+/g,"");
   lowercase =  formated.toLowerCase();

   reversed = reverse(lowercase);

   if (reversed == lowercase)
   {
       return true;
   } else {
       return false;
   }


};

function reverse(string) {
  if(string == "")
    {
        return "";
    }

    return reverse(string.substr(1)) + string.charAt(0);
}

console.log(palindromes('Hi there, how are you?'));



module.exports = palindromes
