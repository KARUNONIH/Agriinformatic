let currentIndex = 0;

$(document).ready(function () {
  setStylePage();
  setfunctionPage();
  // setOpenPage();
  setAudio();
});

function setAudio() {
  const audio = $("#audio")[0];
  const audioControl = $("#audioControl");
  const logoControl = $("#logoControl");

  function updateIcon() {
    if (audio.paused) {
      logoControl.removeClass("fa-pause").addClass("fa-play");
    } else {
      logoControl.removeClass("fa-play").addClass("fa-pause");
    }
  }

  audio.play();

  audioControl.click(function () {
    if (audio.paused) {
      audio.play();
    } else {
      audio.pause();
    }
    updateIcon();
  });

  audio.onplay = updateIcon;
  audio.onpause = updateIcon;
}

function setOpenPage() {
  flipFrontPage(2);
}

function setStylePage() {
  $(".pages div.page").each(function (index, element) {
    const degree = -34 + 2 * index;
    $(element).css({
      position: "absolute",
      "-webkit-transform": `rotateY(${degree}deg)`,
      "-moz-transform": `rotateY(${degree}deg)`,
      transform: `rotateY(${degree}deg)`,
    });
  });
}

function setfunctionPage() {
  const frontPage = $(".front-page");
  const backPage = $(".back-page");
  const audio = document.getElementById("backsound");

  frontPage.each(function (index, element) {
    $(element)
      .off("click")
      .on("click", function (event) {
        if (index === 1) {
          if (!$(event.target).closest("#container-daftar-isi").length) {
            flipFrontPage(index);
            audio.currentTime = 0;
            audio.play();
          }
        } else {
          flipFrontPage(index);
          audio.currentTime = 0;
          audio.play();
        }
      });
  });

  backPage.each(function (index, element) {
    $(element)
      .off("click")
      .on("click", function () {
        flipBackPage(index);
        audio.currentTime = 0;
            audio.play();
      });
  });
}

function flipFrontPage(index) {
  console.log("backPage", index);
  for (let i = currentIndex; i <= index; i++) {
    $(`.pages div.page`).eq(i).css({
      "-webkit-transform": "rotateY(-140deg)",
      "-moz-transform": "rotateY(-140deg)",
      transform: "rotateY(-140deg)",
    });
  }
}

function flipBackPage(index) {
  const degree = -34 + 2 * index;
  $(`.pages div.page`)
    .eq(index)
    .css({
      "-webkit-transform": `rotateY(${degree}deg)`,
      "-moz-transform": `rotateY(${degree}deg)`,
      transform: `rotateY(${degree}deg)`,
    });
}
