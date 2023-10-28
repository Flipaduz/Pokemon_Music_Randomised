<?php
$folderPath = './pk_rojo/'; // Utiliza './' para referenciar la carpeta actual

$audioFiles = array();
$dir = opendir($folderPath);

while (($file = readdir($dir)) !== false) {
    if (is_file($folderPath . $file) && pathinfo($file, PATHINFO_EXTENSION) === 'mp3') {
        $audioFiles[] = $folderPath . $file;
    }
}

closedir($dir);

header('Content-Type: application/json');
echo json_encode($audioFiles);
?>
