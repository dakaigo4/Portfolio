<?php 
  require('scripts/database.php');

  $dbh = new DBConnection();
  $conn = $dbh->getConnection();

  $sql = 'INSERT INTO `dkdcontacts` (firstName, lastName, contactInfo, comment) VALUES (:firstName, :lastName, :contactInfo, :comment) ';

  $stmnt = $conn->prepare($sql);
  $stmnt->execute();
  $results = $stmnt->fetchAll();

//   foreach ($results as $result){
//     echo '<h3>Member</h3> First Name: ' . $result['firstName'] . '<br /> Last Name: ' . $result['lastName'] . '<br /> Contact Info: ' . $result['contactInfo'] . '<br /> Password: ' . $result['password'] . '<br /> Gender: ' . $result['gender'] . "<br />";
// }


echo json_encode($results);

  $stmnt->closeCursor();
  $dbh = null;