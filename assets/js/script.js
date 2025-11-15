// Tunggu sampai halaman selesai dimuat
$(document).ready(function() {

    let indeksGambar = 0;
    const daftarGambar = [
        'assets/media/gambar1.jpg',
        'assets/media/gambar2.jpg',
        'assets/media/gambar3.jpg'
    ];

    // Fungsi untuk ganti gambar
    function gantiGambar() {
        indeksGambar++;
        if (indeksGambar >= daftarGambar.length) indeksGambar = 0;
        $('#gambar').attr('src', daftarGambar[indeksGambar]);
        console.log('Gambar sekarang:', daftarGambar[indeksGambar]);
    }

    // Fungsi untuk ganti tema
    function gantiTema() {
        $('body').toggleClass('bg-black text-light');
        $('.card').toggleClass('bg-dark text-light');
        console.log('Tema halaman diganti');
    }

    // Pasang event klik ke tombol
    $('#ubahGambarBtn').on('click', gantiGambar);
    $('#toggleThemeBtn').on('click', gantiTema);

    // --- Kalkulator Sederhana ---
    $('#hitungBtn').on('click', function() {
        const a = parseFloat($('#angka1').val());
        const b = parseFloat($('#angka2').val());
        const op = $('#operator').val();
        let res = 0;

        if (isNaN(a) || isNaN(b)) {
            res = 'Input salah!';
        } else {
            switch(op) {
                case '+': res = a + b; break;
                case '-': res = a - b; break;
                case '*': res = a * b; break;
                case '/': res = b !== 0 ? a / b : 'Error (bagi 0)'; break;
            }
        }

        $('#hasil').text(res);
        console.log('Hasil kalkulasi:', res);
    });

});
