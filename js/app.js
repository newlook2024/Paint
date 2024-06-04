// const canvas = document.getElementById('drawing-board');
// const toolbar = document.getElementById('toolbar');
// const ctx = canvas.getContext('2d');

// const canvasOffsetX = canvas.offsetLeft;
// const canvasOffsetY = canvas.offsetTop;

// canvas.width = window.innerWidth - canvasOffsetX;
// canvas.height = window.innerHeight - canvasOffsetY;

// let isPainting = false;
// let lineWidth = 5;
// let startX;
// let startY;

// toolbar.addEventListener('click', e => {
//     if (e.target.id === 'clear') {
//         ctx.clearRect(0, 0, canvas.width, canvas.height);
//     }
// });

// toolbar.addEventListener('change', e => {
//     if(e.target.id === 'stroke') {
//         ctx.strokeStyle = e.target.value;
//     }

//     if(e.target.id === 'lineWidth') {
//         lineWidth = e.target.value;
//     }

// });

// const draw = (e) => {
//     if(!isPainting) {
//         return;
//     }

//     ctx.lineWidth = lineWidth;
//     ctx.lineCap = 'round';

//     ctx.lineTo(e.clientX - canvasOffsetX, e.clientY);
//     ctx.stroke();
// }

// canvas.addEventListener('mousedown', (e) => {
//     isPainting = true;
//     startX = e.clientX;
//     startY = e.clientY;
// });

// canvas.addEventListener('mouseup', e => {
//     isPainting = false;
//     ctx.stroke();
//     ctx.beginPath();
// });

// canvas.addEventListener('mousemove', draw);

// MY FUNCTIONS

document.addEventListener("DOMContentLoaded", function () {
    let canvas = document.querySelector("#painting");
    let config = document.querySelector(".configBox");
    let ctx = canvas.getContext("2d");
    let color = document.querySelector('#color')
    
    canvas.width = canvas.offsetWidth;
    canvas.height = canvas.offsetHeight;
    
  let isPainting = false;
  let lineWidth = 5;

  config.addEventListener("click", (e) => {
    if (e.target.id === "clear") {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
    }
    if(e.target.id === 'switch'){
        ctx.strokeStyle = 'white'
    }
    if(e.target.id === 'pencil'){
        ctx.strokeStyle = color.value
    }
  });

  config.addEventListener("change", (e) => {
    if (e.target.id === "color") {
      ctx.strokeStyle = e.target.value;
    }
    if (e.target.id === "strokeWidth") {
      lineWidth = e.target.value;
    }
  });


  const getMousePos = (e) => {
    const rect = canvas.getBoundingClientRect();
    return {
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    };
  };

  let chizish = (e) => {
    if (!isPainting) {
      return;
    }

    const pos = getMousePos(e);
    ctx.lineWidth = lineWidth;
    ctx.lineCap = "round";

    ctx.lineTo(pos.x, pos.y);
    ctx.stroke();
    ctx.beginPath();
    ctx.moveTo(pos.x, pos.y);
  };

  canvas.addEventListener("mousedown", (e) => {
    isPainting = true;
    const pos = getMousePos(e);
    ctx.beginPath();
    ctx.moveTo(pos.x, pos.y);
    canvas.style.cursor = 'pointer'
});

canvas.addEventListener("mouseup", (e) => {
    isPainting = false;
    ctx.stroke();
    ctx.beginPath();
    canvas.style.cursor = 'default'
  });

  canvas.addEventListener("mousemove", chizish);
});
