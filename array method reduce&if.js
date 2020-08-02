Given an array, "findShortestWordAmongMixedElements"
returns the shortest string within the given array.(배열이 주어졌을때, "findShortestWordAmongMixedElements"
  함수는 주어진 배열에서 가장 짧은 문자열을 반환합니다.)



function findShortestWordAmongMixedElements(arr) {
  if (arr.length === 0) {
    return ''
  }

  return arr.reduce((acc, cur) => {
    if (typeof acc !== 'string') {
      if (typeof cur === 'string') {
        return cur
      }
      return ''
    }

    if (typeof cur === 'string') {
      if (cur.length < acc.length) {
        return cur
      }
      return acc
    }
    return acc
  })
}

// 리듀스의 활용을 보는 문제였는데 보이는 것만큼 if문의 조건이 많아 이런건 어떤식으로 동작하는지 감이 안잡혀서 한참을 디버깅을 봤었다
// acc와 cur이 동시에 들어가게 되는데 첫번째 if를 acc가 통과하지 못했다고 cur또한 못통과 하는게 아니라 cur은 아래의 if에게 검사를 받게 된다. 만약 둘다 만족하는것이 하나도 없다면 리턴 ''
// 드디어 한시간동안 들여다본결과 힌트를 얻어서 이해를 했다...
// 리듀스안의 if 문이 여러개 있다면 그리고 하위에 if 문이 있다면 간단하게 첫번째 if문을 만족하면 안쪽의 if문으로 들어가게 되고 첫번째 if 문이 만족하지 않으면 다른 if 문에 가서 첫번째 검사를 하게된다 똑같이 첫번째 if문이 맞을 경우에만 두번째 if문을 들어가게 되고 거기서 true, false를 리턴하게 된다
// 하지만 둘다 만족하지 않는다면  마지막 리턴값으로 가게된다