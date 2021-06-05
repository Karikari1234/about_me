<script type="text/javascript">

function alterLinkCounter(factor, filterId){
	var counter;
	if (filterId) {
		counter = jQuery('.filter-' + filterId + '-link-count');
	} else {
		counter = jQuery('.current-link-count');
	}

	var cnt = parseInt(counter.eq(0).html(), 10);
	cnt = cnt + factor;
	counter.html(cnt);

	if ( blc_is_broken_filter ){
		//Update the broken link count displayed beside the "Broken Links" menu
		var menuBubble = jQuery('span.blc-menu-bubble');
		if ( menuBubble.length > 0 ){
			cnt = parseInt(menuBubble.eq(0).html());
			cnt = cnt + factor;
			if ( cnt > 0 ){
				menuBubble.html(cnt);
			} else {
				menuBubble.parent().hide();
			}
		}
	}
}

function replaceLinkId(old_id, new_id){
	var master = jQuery('#blc-row-'+old_id);

	master.attr('id', 'blc-row-'+new_id);
	master.find('.blc-link-id').html(new_id);
	master.find('th.check-column input[type="checkbox"]').val(new_id);

	var details_row = jQuery('#link-details-'+old_id);
	details_row.attr('id', 'link-details-'+new_id);
}

function reloadDetailsRow(link_id){
	var details_row = jQuery('#link-details-'+link_id);

	//Load up the new link info                     (so sue me)
	details_row.find('td').html('<center><br />
<b>Fatal error:  Uncaught Error: Call to undefined function esc_js() in /homepages/0/d787716287/htdocs/clickandbuilds/AhnafTRahman/wp-content/plugins/broken-link-checker/includes/admin/links-page-js.php:45
Stack trace:
#0 {main}
  thrown in <b>/homepages/0/d787716287/htdocs/clickandbuilds/AhnafTRahman/wp-content/plugins/broken-link-checker/includes/admin/links-page-js.php on line <b>45<br />
</script>