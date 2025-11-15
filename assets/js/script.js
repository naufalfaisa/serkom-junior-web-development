$(document).ready(function() {
    const $gambar = $('#gambar');
    const $tombolGambar = $('#ubahGambarBtn');
    const $tombolTema = $('#toggleThemeBtn');
    const $body = $('body');
    const $cards = $('.card');
    const gambarList = [
        // List gambar
        'assets/media/gambar1.jpg',
        'assets/media/gambar2.jpg'
    ];
    // Posisi awal gambar
    let index = 0;

    // Ubah gambar
    function ubahGambar() {
        index = (index + 1) % gambarList.length;
        $gambar.attr('src', gambarList[index]);
        console.log('Gambar diubah ke:', gambarList[index]);
    }

    // Ganti Tema
    function toggleTema() {
        $body.toggleClass('bg-black text-light');
        $cards.toggleClass('bg-dark text-light');
        console.log('Tema halaman diganti');
    }

    $tombolGambar.on('click', ubahGambar);
    $tombolTema.on('click', toggleTema);
});


// document.addEventListener('DOMContentLoaded', function() {
//     const gambar = document.getElementById('gambar');
//     const tombolGambar = document.getElementById('ubahGambarBtn');
//     const tombolTema = document.getElementById('toggleThemeBtn');
//     const body = document.body;
//     const cards = document.querySelectorAll('.card');

//     const gambarList = [
//         'assets/media/gambar1.jpg',
//         'assets/media/gambar2.jpg'
//     ];

//     let index = 0;

//     // Ubah gambar
//     function ubahGambar() {
//         index = (index + 1) % gambarList.length;
//         gambar.src = gambarList[index];
//         console.log('Gambar diubah ke:', gambarList[index]);
//     }

//     // Ganti Tema
//     function toggleTema() {
//         body.classList.toggle('bg-black');
//         body.classList.toggle('text-light');

//         cards.forEach(card => {
//             card.classList.toggle('bg-dark');
//             card.classList.toggle('text-light');
//         });

//         console.log('Tema halaman diganti');
//     }

//     tombolGambar.addEventListener('click', ubahGambar);
//     tombolTema.addEventListener('click', toggleTema);
// });