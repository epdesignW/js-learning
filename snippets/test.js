window.toCheck = function () {
    var mbtn = document.getElementById("username").value;
    //alert(mbtn.value);
    function SaferHTML(templateData) {
      var s = templateData[0];
      for (var i = 1; i < arguments.length; i++) {
        var arg = String(arguments[i]);
  
        // Escape special characters in the substitution.
        s += arg.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
  
        // Don't escape special characters in the template.
        s += templateData[i];
      }
      return s;
    }
      var message = SaferHTML(_templateObject, mbtn);
      console.log(message);
      alert(message);
    
  };