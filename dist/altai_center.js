/*
 * Name: altai_center
 * Title: Altai Center
 * Description: Center align a given element.
 *
 */

// jQuery
import $ from "jquery"
import jQuery from "jquery"

(($, window, document) => $.fn.extend({
  altaiCenter(options) {

    // Lets & Constants
    let action
    let log
    let settings
    const object = $(this)

    // Settings
    settings = {
      debug: true
    }
    settings = $.extend(settings, options)

    // Log
    log = message => {
      if (settings.debug) {
        return console.log(message)
      } else {
        return undefined
      }
    }

    // Action
    action = () => {
      object.each(function() {
        $(this).wrap("<div class='center-h-parent'><div class='center-h-child'></div></div>")
        log("Altai Center Activated!")
      })
    }

    // If object found run actions
    if (object.length > 0) {
      action()
    }
  }
}))(jQuery, window, document)
