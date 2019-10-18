// add solution here
function theBeatlesPlay (musicians, instruments) {
  var array = [];
  for (var i = 0; i < musicians.length; i++) {
    var newPair = musicians[i] + " plays " + instruments[0];
    array.push(newPair);
  }
  
  return array
}