function action(){
  function repeatDown(8) {
    var count = 0;
    while (count < 8) {
      down();
      count = count + 1;
    }
  }
  right()
  right()
  function repeatUp(8) {
    var count = 0;
    while (count < 8) {
      up();
      count = count + 1;
    }
  }
  right()
  right()
}
action()
action()
action()
