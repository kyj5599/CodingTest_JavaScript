// 문제 설명
// 정수 num1과 num2가 주어질 때, num1과 num2의 합을 return하도록 soltuion 함수를 완성해주세요.

// 제한사항
// -50,000 ≤ num1 ≤ 50,000
// -50,000 ≤ num2 ≤ 50,000

function solution(num1, num2) {
  if (num1 < -50000 || num1 > 50000 || num2 < -50000 || num2 > 50000) {
    throw new Error("num1 and num2 must be between -50000 and 50000.");
  }
  var answer = num1 + num2;
  return answer;
}
