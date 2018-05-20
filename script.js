// Loads on document ready
$(document).ready(() => {
  
  // Generate a wrapper on all contents
  $("body").wrapInner("<div class='wrapper' />");
  const wrapper = $(".wrapper");
  wrapper.css("position", "relative");

  // Dynamically generate the top bar...
  // Prepend to body AFTER content has been wrapped
  $("body").prepend("<div class='top-bar'><span class='browser-btn'>Chrome iOS</span></div>");
  const topBar = $(".top-bar");
  const browserBtn = $(".browser-btn");

  // Browser heights
  const chromeUp = "76px";
  const chromeDown = "20px";
  
  // To get added later...
  // const safariUp = "70px";
  // const safariDown = "39px";
  // const safariBottom = "44px";

  // Generate the top bar initial styles
  topBar.css({
    "width": "100%",
    "background": "#f2f2f2",
    "height": chromeUp,
    "position": "fixed",
    "top": "0",
    "transition": ".15s",
    "border-bottom": "1px solid #c2c2c2",
    "display": "table",
    "z-index": "5000"
  });

  browserBtn.css({
    "width": "100%",
    "height": "100%",
    "vertical-align": "middle",
    "text-align": "center",
    "font-size": "14px",
    "display": "table-cell",
    "vertical-align": "middle",
    "color": "#b1b1b1",
    "font-family": "sans",
    "position": "relative",
    "top": "2px"
  });

  // <body> tag reset (if not using a)
  $("body").css({
    "padding": "0",
    "margin": "0"
  });

  // Calculate the height of the top bar
  let topBarHeight = $(".top-bar").outerHeight(true);

  // Set the initial position of scroll
  let relativePosition = $(document).scrollTop();
  let previousPosition = $(document).scrollTop();
  relativePosition = $(document).scrollTop();
  previousPosition = $(document).scrollTop();

  // Sets how far to initially push down HTML
  wrapper.css("margin-top", topBarHeight);

  // Chrome iOS
  // Prevent the initial scroll from happening on load...
  setTimeout(() => {

    $(document).scroll(() => {

      // Updating the position of the side scroll...
      relativePosition = $(document).scrollTop();

      // If scrolling down the page...
      if (relativePosition > previousPosition) {
        topBar.css("height", chromeDown);
        wrapper.css("margin-top", $(".top-bar").outerHeight(true));
        previousPosition = $(document).scrollTop();

        // If scrolling up the page...
      } else if (relativePosition < previousPosition) {
        topBar.css("height", chromeUp);
        wrapper.css("margin-top", $(".top-bar").outerHeight(true));
        previousPosition = $(document).scrollTop();
      }

    });

  }, 10);

});