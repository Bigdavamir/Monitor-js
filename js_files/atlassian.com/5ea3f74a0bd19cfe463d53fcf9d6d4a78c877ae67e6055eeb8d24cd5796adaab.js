
    $(function() {
      $('.tool').tooltipster({
        animationDuration: 100,
        contentAsHTML: true,
        delay: 100,
        theme: 'tooltipster-borderless',
        functionInit: function (instance, helper) {
          var $origin = $(helper.origin),
              dataOptions = $origin.attr('data-tooltip-config');
          if (dataOptions){
            dataOptions = JSON.parse(dataOptions);
            $.each(dataOptions, function(name, option){
                instance.option(name, option);
            });
          }
        }
      });
      // clicks on first tab in subscribe popout since we won't know which is first
      // upon construction in the ruby code
      $('.updates-dropdown-nav > a').eq(0).click();

      // twitter follow button needs some margin
      $('.twitter-follow-button').css('margin-right', '6px');
    });

    $(function() {
      // open/close component groups
      HRB.utils.djshook('component-group-opener').on('click', function() {
        var groupParentIndicator = $(this).find('.group-parent-indicator');
        groupParentIndicator.toggleClass('fa-plus-square-o').toggleClass('fa-minus-square-o').end().parent().toggleClass('open');
        toggleGroup(groupParentIndicator)
      });
    });

    $(function() {
      HRB.utils.djshook('component-group-opener').on('keydown', function(event) {
        if (event.key !== "Enter" && event.key !== " ") {
          return;
        }
        event.preventDefault()
        var groupParentIndicator = $(this).find('.group-parent-indicator');
        groupParentIndicator.toggleClass('fa-plus-square-o').toggleClass('fa-minus-square-o').end().parent().toggleClass('open');
        toggleGroup(groupParentIndicator)
      });
    });

    function toggleGroup(groupParentIndicator) {
      var isOpen = groupParentIndicator.attr('aria-expanded')
      if (isOpen == 'false') {
          groupParentIndicator.attr('aria-expanded', 'true');
        } else {
          groupParentIndicator.attr('aria-expanded', 'false');
        }
    }

    $(function() {
      $(document).on('ajax:complete', '.modal.in', function(e) {
        // Close the active modal.
        $('.modal.in').modal('hide');
      });
    });

  