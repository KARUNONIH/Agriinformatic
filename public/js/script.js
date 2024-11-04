let currentIndex = 0;

$(document).ready(function () {
  setStylePage();
  setfunctionPage();
  setOpenPage();
  // $(document).on('click', function(event) {
  //     // Mendapatkan elemen yang diklik
  //     var clickedElement = $(event.target);

  //     // Mendapatkan nama kelas dari elemen yang diklik
  //     var classNames = clickedElement.attr('class');

  //     // Menampilkan nama kelas di konsol
  //     console.log(`Nama kelas yang diklik: ${classNames}`);
  // });
});

function setOpenPage() {
  flipFrontPage(7);
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

  frontPage.each(function (index, element) {
    $(element)
      .off("click")
      .on("click", function () {
        flipFrontPage(index);
      });
  });

  backPage.each(function (index, element) {
    $(element)
      .off("click")
      .on("click", function () {
        flipBackPage(index);
      });
  });
}

function flipFrontPage(index) {
  console.log('backPage', index);
  for (let i = currentIndex; i <= index; i++){
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

const audio = document.getElementById('background-audio');

// Menunggu halaman selesai dimuat
window.addEventListener('load', () => {
    // Memulai audio dengan metode play, tergantung izin browser
    audio.play().catch((error) => {
        // Jika autoplay gagal, tambahkan tombol untuk memulai audio
        const playButton = document.createElement('button');
        playButton.innerText = 'Play Audio';
        playButton.onclick = () => {
            audio.play();
            playButton.remove(); // Menghapus tombol setelah audio mulai diputar
        };
        document.body.appendChild(playButton);
    });
});
