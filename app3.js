function cammonWords (str1 , str2){
   return str1.split(", ")
   .filter(i=>str2.split(", ").includes(i))
   .join();
}

let str1 = "one, two, three";
let str2 = "one, six, nine, two";
console.log(cammonWords(str1, str2))