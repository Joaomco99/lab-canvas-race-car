window.onload = () => {
  document.getElementById('start-button').onclick = () => {
    startGame();
  };

  const canvas = document.getElementById('canvas');

  const ctx = canvas.getContext('2d');


  const road = new Image();

  road.src = 'images/road.png';

  const car = new Car(

    canvas.width / 2 - 25,

    canvas.height - 110,

    50,
    100,
    ctx
  );

  function startGame() {

    let frames = 0;

    let score = 0;

    let obstacles = [];

    const gameInterval = setInterval(() => {
 
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      ctx.drawImage(road, 0, 0, canvas.width, canvas.height);
 
      car.draw();

      obstacles.forEach((obstacle) => {
        obstacle.draw();
        obstacle.move();
      });


      frames++;

      if (frames % 150 === 0) {

        const randomWidth = Math.floor(Math.random() * 200) + 50;

        const randomX = Math.floor(Math.random() * (canvas.width - randomWidth));

        const obstacle = new Obstacle(randomX, 0, randomWidth, ctx);

        obstacles.push(obstacle);
      }

      obstacles.forEach((obstacle, index) => {

        if (car.x < obstacle.x + obstacle.width &&
          car.x + car.width > obstacle.x &&

          car.y < obstacle.y + obstacle.height &&
          car.y + car.height > obstacle.y) {


          console.log('collision detected!');

          clearInterval(gameInterval);


          ctx.fillStyle = 'black';
          ctx.fillRect(0, 0, canvas.width, canvas.height);
          ctx.font = '50px Arial';
          ctx.fillStyle = 'white';
          ctx.fillText('Game Over', 120, 200);
          ctx.font = '30px Arial';
          ctx.fillText(`Score: ${score}`, 180, 250);


        }


        if (obstacle.y > canvas.height) {

          obstacles.splice(index, 1);

        }

      });


      ctx.font = '30px Arial';
      ctx.fillStyle = 'black';
      ctx.fillText(`Score: ${score}`, 70, 50);

      if (frames % 10 === 0) {
        score++;
      }
    }
      , 1000 / 60);

  }


  document.addEventListener('keydown', (event) => {
    switch (event.code) {
      case "ArrowLeft":
        car.moveLeft();
        break;
      case "ArrowRight":
        car.moveRight();
        break;
    }

    if (car.x < 0) {
      car.x = 0;
    }
    if (car.x > canvas.width - car.width) {
      car.x = canvas.width - car.width;
    }
  });


};
