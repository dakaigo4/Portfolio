<?php

  class DBConnection{
    private $DB_HOST = 'localhost';
    private $DB_NAME = 'dkdcontact_db';
    private $DB_USERNAME = 'root';
    private $DB_PASSWORD = '';
    


    public $dbh;

    //Constructor Method: will always bne called at the moment the calss is instantiated
    public function __construct(){
        try{
          $dsn = 'mysql:host=' . $this->DB_HOST . ';dbname=' . $this->DB_NAME;
          $this->dbh = new PDO($dsn, $this->DB_USERNAME, $this->DB_PASSWORD);
          
        } catch(PDOException $e){
          echo $e->getmessage();
        }
    }

    public function getConnection(){
      return $this->dbh;
    }

  } 

  