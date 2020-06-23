(function($) {
  $(document).ready(function() {
    var $actionsSelect, $formatsElement;
    if ($('body').hasClass('grp-change-list')) {
        // using grappelli
        $actionsSelect = $('#grp-changelist-form select[name="action"]');
        $formatsElement = $('#grp-changelist-form select[name="file_format"]');
        $filenameElement = $('#grp-changelist-form select[name="filename"]');
    } else {
        // using default admin
        $actionsSelect = $('#changelist-form select[name="action"]');
        $formatsElement = $('#changelist-form select[name="file_format"]').parent();
        $filenameElement = $('#changelist-form select[name="filename"]').parent();
    }
    $actionsSelect.change(function() {
      if ($(this).val() === 'export_admin_action') {
        $formatsElement.show();
        $filenameElement.show();
      } else {
        $formatsElement.hide();
        $filenameElement.hide();
      }
    });
    $actionsSelect.change();
  });
})(django.jQuery);
