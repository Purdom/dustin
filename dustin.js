jQuery(document).ready(function($) {
  //alert('hooray');

 $('#socialmedia-container').clone().appendTo('#header .inside');

 var projectNav = '<ul id="filterNav" class="clearfix">'
                + '<li class="segment-0"><a href="#" data-filter="*" class="selected">All</a></li>'
                + '<li><a href="#" data-filter=".branding">Branding</a></li>'
                + '<li><a href="#" data-filter=".commercial">Commercial</a></li>'
                + '<li><a href="#" data-filter=".film-projects">Film</a></li>'
                + '<li><a href="#" data-filter=".illustration">Illustration</a></li>'
                +  '</ul>';

$(projectNav).prependTo('#homeProjects');

	jQuery('#filterNav a').click(function(){
		var projectType = jQuery(this).attr('data-filter');	
    alert(projectType);
		jQuery('#homeProjects .thumbs').isotope({
			filter: projectType,
      hiddenStyle : {
			    opacity: 0,
			    scale : 1
			}
		});
	
		if ( !jQuery(this).hasClass('selected') ) {
			jQuery(this).parents('#filterNav').find('.selected').removeClass('selected');
			jQuery(this).addClass('selected');
		}
		
		return false;
	});

});
