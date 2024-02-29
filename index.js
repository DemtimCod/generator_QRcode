const input = document.querySelector("input");
const imgqr = document.querySelector("img");
const genereteBtn = document.querySelector("#generete");

genereteBtn.addEventListener("click", () => {
  if (input.value == "") {
    Swal.fire({
      title: "Tolong Di isi Terlebih Dahulu. Terimakasih🙏💕",
      showClass: {
        popup: "animate__animated animate__fadeInDown",
      },
      hideClass: {
        popup: "animate__animated animate__fadeOutUp",
      },
    });
  } else if (input.value) {
    let timerInterval;
    Swal.fire({
      title: "Sedang DI Proses",
      html: "",
      timer: 1500,
      timerProgressBar: true,
      didOpen: () => {
        Swal.showLoading();
      },
      willClose: () => {
        clearInterval(timerInterval);
      },
    }).then((result) => {
      if (result.dismiss === Swal.DismissReason.timer) {
        const qrcode = `https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=${input.value}`;
        imgqr.src = qrcode;
      }
    });
  }
});

document.addEventListener("click", function (e) {
  if (e.target.classList.contains("down")) {
    const a = fetch(qrcode);
    const blob = a.blob();
    const downlod = document.createElement("a");
    downlod.href = URL.createObjectURL(blob);
    downlod.download = "qrcode.png";
    downlod.click();
  }
});

// const downloadBtn = document.querySelector("#downlods");
// downloadBtn.addEventListener("click", async () => {
//   const a = await fetch(qrcode);
//   const blob = await a.blob();
//   const downlod = document.createElement("a");
//   downlod.href = URL.createObjectURL(blob);
//   download.Download = "qrcode.png";
//   download.click();
// });
