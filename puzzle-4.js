function downThreeTimes(){
	down()
  down()
}
downThreeTimes()
downThreeTimes()
down()
var sequence = 0;
while( sequence < 2){
  up()
  right()
  var firstcolor = getColor()
  down()
  setColor(firstcolor)
	right()
  right()
  var sequence = sequence + 1
}
