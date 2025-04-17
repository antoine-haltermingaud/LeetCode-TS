function isPalindrome(s: string): boolean {
 s = s.toLowerCase()
 const clean: string = s.replace(/\s+/g, "")
 const clean1: string = clean.replace(/,+/g, "")
 const clean2: string = clean1.replace(/:+/g, "")
 console.log(clean1)
 const reverse: string = clean2.split("").reverse().join("")
 if (reverse === clean2) {
  return true
 }
 return false
};
