var box1, box2


function setup() 
{
  createCanvas(400, 400);
  var message = "Hi Amit";
  console.log(message);
  box1 = new Box(100,200,20,20,5)
  box2 = new Box(200,300,40,40,10)
}

function draw() 
{
  background(220);
  box1.show()
  box1.move()

  box2.show()
  box2.move()
  
}

