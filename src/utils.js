// Your code here
/*export function pointsForWord(word){
    let points= 0
    let vowels = ["a", "e","i", "o","u"]
    for(const char of word){
        if(vowels.includes(char)){
            points +=1
        } else {
            points +=2
        }
    }
    return points
}*/

export function pointsForWord(word) {
  let points = 0;
  for (const char of word) {
    points += /[aeiou]/i.test(char) ? 1 : 2;
  }
  return points;
}
