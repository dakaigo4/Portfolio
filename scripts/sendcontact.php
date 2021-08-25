<?php include('scriptsHeader.php'); ?>



<?php 

  $firstName = $_POST['firstName'];
  $lastName = $_POST['lastName'];
  $contactInfo = $_POST['contactInfo'];
  $comment = $_POST['comment'];


  $dbh = new DBConnection();
  $conn = $dbh->getConnection();//connection obtained

  $stmnt = $conn->prepare($sql);
  $stmnt->execute(array(
    
    ':firstName' => $firstName, 
    ':lastName' => $lastName, 
    ':contactInfo' => $contactInfo, 
    ':comment' => $comment
  ));

  $stmnt->closeCursor();
  $dbh = null;



?>


    <div id="confWrap">

        <div id="confCont">

                  <h1 class="conf">Contact information recieved as follows:</h1>
                  <p class="conf"><strong>First name:</strong> <span class="userAnswer"><?php echo $firstName; ?></span></p>
                  <p class="conf"><strong>Last name:</strong> <span class="userAnswer"><?php echo $lastName; ?></span></p>
                  <p class="conf"><strong>Contact Information:</strong> <span class="userAnswer"><?php echo $contactInfo; ?></span></p>
                  <p class="conf"><strong>Comments:</strong> <span class="userAnswer"><?php echo $comment; ?></span></p>

                      <input type="submit" class="button" value="Confirm Submit" action="#">
        </div>
      


    </div>


</div>

  
