<?php
	$body_class = 'butte-highlands';
	$page_title = 'Butte Highlands'; 
	include('header.php'); 
?>	
	<?php include('parts/sidebar.php'); ?>

	
	<?php include('parts/main-content-start.php'); ?>

			<div class="body-content">
				
				<div class="row">
					<div class="large-12 columns">
						<div class="tabs-content">
							<!-- photo tab -->
							<ul class="small-block-grid-3 large-block-grid-6 parent-container content active" id="photo-tab">
							 	<li><a href="images/test-1.jpg" title="Butte Highlands" class="th"><img src="images/BH-thumbs/bh-thumb-1.jpg" alt=""></a></li>
								<li><a href="images/test-1.jpg" title="Butte Highlands" class="th"><img src="images/BH-thumbs/bh-thumb-1.jpg" alt=""></a></li>
								<li><a href="images/test-1.jpg" title="Butte Highlands" class="th"><img src="images/BH-thumbs/bh-thumb-1.jpg" alt=""></a></li>
								<li><a href="images/test-1.jpg" title="Butte Highlands" class="th"><img src="images/BH-thumbs/bh-thumb-1.jpg" alt=""></a></li>
								<li><a href="images/test-1.jpg" title="Butte Highlands" class="th"><img src="images/BH-thumbs/bh-thumb-1.jpg" alt=""></a></li>
								<li><a href="images/test-1.jpg" title="Butte Highlands" class="th"><img src="images/BH-thumbs/bh-thumb-1.jpg" alt=""></a></li>
							</ul>
							<!-- info tab -->
							<div class="content info-tab" id="info-tab">
						  		<?php include('parts/project-info.php'); ?>
							</div>
						</div> <!-- /tabs-content -->
					</div>
				</div>

			</div> <!-- /body-contnet -->

	<?php include('parts/main-content-end.php'); ?>
	

	<?php include('parts/contact-form.php'); ?>
<?php include('footer.php'); ?>