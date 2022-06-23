document.addEventListener("mousemove", (e) =>{
  console.log("move");
  // 動かしたらカーソルの位置を取得する
  // e = event, clientX マウスのカーソルのX座標の値を取得する
  const mouseX = e.clientX;
  const mouseY = e.clientY;
  console.log(mouseX);

  gsap.to(".circle", {
    x:mouseX,
    y:mouseY,
    stagger: -0.1
  })

  // set 遅延のないアニメーション
  gsap.set(".cursor",{
    x:mouseX,
    y:mouseY,
  })
})