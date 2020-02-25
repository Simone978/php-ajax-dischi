
<?php
require __DIR__.'/database.php';

 ?>

<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta http-equiv="X-UA-Compatible" content="ie=edge">
  <link rel="stylesheet" href="dist/app.css">
  <title>Document</title>
</head>
<body>
  <div class="wrapper">

    <?php foreach ($dischi as $key => $disco) { ?>
      <div class="dischi_container">
      <img src="<?php echo $disco['poster'] ?>" alt="">
      <h2><?php echo $disco['title'] ?></h2>
      <h4><?php echo $disco['author'] ?></h4>
      <h5><?php echo $disco['year'] ?></h5>
      </div>
    <?php } ?>

  </div>


</body>
</html>
