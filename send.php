<?php
$tel = $_POST['tel'];

mail("rebrum1920@mail.ru", "Application from site", "Phone: ".$tel,"From: rebrum1920@mail.ru\r\n")
?>


<script>
	window.close()
</script>

<!-- 
<script>
	function changeurl(){eval(self.location="http://gagarin.m-c-m-c.ru/");}
window.setTimeout("changeurl();",1000);
</script> -->