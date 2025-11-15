// Tunggu sampai halaman selesai dimuat
$(document).ready(function() {

    const gambar = $('#gambar');                // gambar di card
    const tombolGambar = $('#ubahGambarBtn');   // tombol untuk ganti gambar
    const tombolTema = $('#toggleThemeBtn');    // tombol untuk ganti tema
    const body = $('body');                     // seluruh body halaman
    const cards = $('.card');                   // semua card

    // Daftar gambar yang bisa diganti
    const daftarGambar = [
        'assets/media/gambar1.jpg',
        'assets/media/gambar2.jpg',
        'assets/media/gambar3.jpg'
    ];

    // Indeks gambar saat ini
    let indeksGambar = 0;

    // Fungsi untuk ganti gambar
    function gantiGambar() {
        indeksGambar++;  // tambah 1
        if (indeksGambar >= daftarGambar.length) {
            indeksGambar = 0;  // kembali ke gambar pertama jika sudah akhir
        }
        gambar.attr('src', daftarGambar[indeksGambar]); // ubah src gambar
        console.log('Gambar sekarang:', daftarGambar[indeksGambar]);
    }

    // Fungsi untuk ganti tema
    function gantiTema() {
        body.toggleClass('bg-black text-light');  // ubah background dan teks body
        cards.toggleClass('bg-dark text-light');  // ubah background dan teks card
        console.log('Tema halaman diganti');
    }

    // Pasang event klik ke tombol
    tombolGambar.on('click', gantiGambar);
    tombolTema.on('click', gantiTema);
});
