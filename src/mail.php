<?php

$data = $_POST;

header('Content-Type: application/json');

echo json_encode($_POST);
// echo $data['username'];