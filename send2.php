<?php
$name = $_POST['name'];
$tel2 = $_POST['tel2'];

mail("rebrum1920@mail.ru", "Application from site", "Name: ".$name."Phone: ".$tel2,"From: rebrum1920@mail.ru\r\n")
?>


<script>
	window.close()
</script>

<!-- 
<script>
	function changeurl(){eval(self.location="http://gagarin.m-c-m-c.ru/");}
window.setTimeout("changeurl();",1000);
</script> -->