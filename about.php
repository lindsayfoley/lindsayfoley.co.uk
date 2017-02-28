<!DOCTYPE html>
<html>
<head>
<title>About Me | Lindsay Foley | Web Developer based in London</title>
<?php include('structure/meta.php'); ?>
<meta name="keywords" content="freelancer, freelance, web, developer, development, London, XHTML, HTML, HTML 5, CSS, jQuery, Javascript, web design, web development, web site development, web site design, web design development, interactive, london web design, london ecommerce, london e-commerce, london web development, uk, web site, web sites, Lindsay Foley">
<meta name="description" content="Lindsay Foley is a freelance web developer in London, find out about me here and get in touch to discuss your next project.">
<?php include('structure/styles.php'); ?>
<link rel="stylesheet" type="text/css" href="style/about.css">
<link rel="stylesheet" type="text/css" href="style/about_responsive.css">
<?php include('structure/icons.php'); ?>
<?php include('structure/scripts.php'); ?>
<?php include('structure/legacy.php'); ?>
</head>

<body itemscope itemtype="http://schema.org/Person">

<header><h1 itemprop="name"><a href="/">Lindsay Foley</a></h1></header>

<main>	
	<section id="professional">
		<div>
			<h2>A Bit About Me</h2>
			<img class="header-separator-img" src="images/plug.png" alt="" />
			<p>I’ve been busy working on my little corner of the internet for quite a while so thanks for stopping by!</p>
			<p>I have 6 years of experience working in an ecommerce environment and have been developing professionally for about 5 years now.</p>
			<p itemprop="description">I have been lucky enough to work for some notable companies such as Anya Hindmarch and Selfridges &amp; Co. in February 2015, I joined the Walt Disney Travel Company as a <span itemprop="jobTitle">Front End Web Developer</span>.</p>
			<p itemprop="makesOffer">I'm freelancing in my spare time so please get in touch if I can get involved in your upcoming projects.</p>
			<a id="contact-cta" class="button" itemprop="email" href="mailto:me@lindsayfoley.co.uk">contact me</a> 
			<a id="skills-cta" class="button">my skills</a>
		</div>
		<div id="skills-section">
			<h2>Key Skills &amp; Experience</h2>
			<div>
				<section id="animated-screen">
					<div>
						<img src="images/skills_screen.png" alt="an animated computer screen with moving panels" />
						<div id="top_row"></div>
						<div id="hero_row"></div>
						<div>
							<div>
								<div id="last_row_first_square"></div>
								<div id="last_row_second_square"></div>
							</div>
							<div>
								<div id="last_row_top_rectangle"></div>
								<div id="last_row_middle_rectangle"></div>
								<div id="last_row_bottom_rectangle"></div>
							</div>
						</div>
					</div>
				</section>
				<dl>
					<dt>WEB DEVELOPMENT</dt>
					<dd>6 years experience</dd>
					<dd>HTML5</dd>
					<dd>CSS3</dd>
					<dd>jQuery, jQuery UI</dd>
					<dd>JavaScript</dd>
					<dd>Bit of PHP</dd>
					<dd>Foundation and Bootstrap</dd>
					<dd>RWD/AWD/RESS</dd>
					<dd>Cross browser compatibility</dd>
					<dd>SVN, Git - Gitflow workflow</dd>
					<dd>Webpage optimisation</dd>
					<dd>JMeter, Blazemeter</dd>
					<dd>Performance tuning</dd>
					<dd>Microdata</dd>
					<dd>Agile methodologies</dd>
					<dd>Vast CMS experience</dd>
				</dl>
		  </div>
			<div>
				<img src="images/skills_email.png" alt="HTML emails" />
				<dl>
					<dt>HTML EMAILS</dt>
					<dd>Rich HTML emails</dd>
					<dd>Responsive emails</dd>
					<dd>Dynamic emails</dd>
					<dd>Email marketing platforms</dd>
					<dt>OTHER</dt>
					<dd>Qualified Digital Marketer</dd>
					<dd>MVT testing</dd>
					<dd>Social plugin integration</dd>
					<dd>Analytics platforms</dd>
					<dd>Issue tracking software</dd>
					<dd>Wordpress customisation</dd>
					<dd>Squarespace customisation</dd>
					<dd>Accessibility</dd>
					<dd>Modern SEO</dd>
					<dd>Graphic design</dd>
				</dl>
			</div>
		</div>
		<div id="professional-tiles">
			<figure id="coding">
				<img src="images/coding.png" alt="Coding tools" />
				<figcaption><p>My last 2 projects involved re-writing web frameworks making them mobile friendly</p></figcaption>		  
			</figure>
			<figure id="learning">
				<img src="images/reading.png" alt="Online resources that have helped me learn" />
				<figcaption><p>I use online resources such as Codecademy to learn and practice programming</p></figcaption>
			</figure>
			<figure id="time">
				<img src="images/time.png" alt="Blogs I read" />
				<figcaption><p>I read publications like Smashing Magazine to keep my knowledge current</p></figcaption>		  
			</figure>	
		</div>
	</section>
	<nav itemscope itemtype="http://schema.org/CreativeWork">
		<a href="portfolio" itemprop="url">View my work</a>
		<a href="/">Back to home</a>
	</nav>
</main>
<?php include('structure/footer.php'); ?>

</body>
</html>	
