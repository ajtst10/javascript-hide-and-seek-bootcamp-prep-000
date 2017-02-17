function getFirstSelector(selector) {
   var firstMatch = document.querySelector(selector);
   return firstMatch;
}

function nestedTarget() {
  var firstMatch = document.getElementsByTagName('div')[4]
  return firstMatch;
}

function increaseRankBy( n ) {
  var total;
  var increaseRanks = document.getElementById('app').querySelectorAll('ul.ranked-list li');

  for ( var i = 0; i < increaseRanks.length; i++ ) {
    var tempVar = increaseRanks[i].innerHTML;
    total = n + parseInt(tempVar);
    increaseRanks[i].innerHTML = total;
  }
}

function deepestChild() {
    var matchingElements = [];
    var nextNode;
    var node;

    matchingElements = document.getElementById('grand-node');
    nextNode = matchingElements.children[0];

    while (nextNode) {
      node = nextNode
      nextNode = node.children[0];
    }

      return node;
}
