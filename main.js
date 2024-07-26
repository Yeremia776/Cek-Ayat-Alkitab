function CekAyatAlkitab(event){
    event.preventDefault();
    let nama =$('$search').val();
    if(nama === ''){
        alert('Nama Tidak Boleh Kosong!')
    }else{
        let status = [
            'yey ada!'
        ]
        const randomStatus = Math.floor(Math.random() * status.length);
        if(randomStatus === 0){
            let ayat = [
                '1 Korintus 10:13',
                '1 Korintus 12:9',
                '1 Korintus 13:12',
                '1 Korintus 13:12',
                '1 Petrus 5:7',
                '1 Timotius 6:12',
                '2 Timotius 4:2',
                'Matius 19:6',
                '1 Petrus 3:14',
            ];
            const random = Math.floor{Math.random() * ayat.length};
            $('#result').html(`${nama.toUpperCase()} - ayat kamu (${ayat[random]})`);
            $('#search').val('');
        }
        else{
            $('#result').html(`${nama.toUpperCase()} - Ayo Coba Lagi!`);
            $('#search').val('');
        }
    }
}

$(document).ready(function{
    $('#btn-search').click(CekAyatAlkitab)
});