<!DOCTYPE html>
<html>
<head>
<title>Tea Round Decider | Lindsay Foley | Web Developer based in London</title>
<?php include('structure/meta.php'); ?>
<?php include('structure/styles.php'); ?>
<link rel="stylesheet" type="text/css" href="style/portfolio.css">
<link rel="stylesheet" type="text/css" href="style/portfolio_responsive.css">
<?php include('structure/icons.php'); ?>
<?php include('structure/scripts.php'); ?>
<?php include('structure/legacy.php'); ?>
</head>
	
<style>
main > section { max-width:800px; margin:0 auto; padding:30px 20px; }  
p { margin-bottom:0!important; }
p.error { color:red!important; font-weight:bold; }
h3 { padding-bottom:10px; }
textarea { text-transform:capitalize; }
button.button { float:none; display:block; margin:20px 0; background:transparent; text-transform:uppercase; color:white; }
hr { margin:20px 0; }

</style>	

<header>
<!-- 	<h1><a href="\">Lindsay's Tea Round Decider</a></h1> -->
</header>

<main>
	<section>
		<div id="drinker-info">
			<h3>Enter <strong>each</strong> tea drinker below:</h3>
			<textarea></textarea>	
			<button class="button">Add more people</button>
			<p class="empty">Your list is empty.</p>
			<button class="button" id="remove" class="button">Remove someone from round</button>
		</div>
		<hr>
		<div id="result">
			<h3>Click the button below to see who fate has chosen</h3>
			<button class="button">Who will make tea?</button>
			<p></p>
		</div>
	</section>
</main>

<?php include('structure/footer.php'); ?>

<script src="js/tea.js"></script>
</body>

</html>