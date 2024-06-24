<!DOCTYPE html>
<html lang="lv">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Palielināt bilde</title>
    <style>
        .image {
            transition: transform 0.2s ease;
        }

        .image:hover {
            transform: scale(1.1);
            cursor: pointer;
        }
    </style>
</head>
<body>
    <img class="image" src="example.jpg" alt="Attēls">

    <script>
        // Iegūst attēlu elementu
        const image = document.querySelector('.image');

        // Pievieno notikumu klausītāju, lai palielinātu attēlu, kad tiek noklikšķināts
        image.addEventListener('click', function() {
            this.style.transform = 'scale(1.5)'; // Mainīt attēla izmēru uzspiežot
            this.style.transition = 'transform 0.5s'; // Veiciet pāreju, lai veiktu izmaiņas gludi
        });
    </script>
</body>
</html>