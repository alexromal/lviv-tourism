/**
 * @version 0.2
 * @author Svyatoslav Kovtun <barsic.plus@gmail.com>
 * @license The MIT License
 * @date 25.08.2015
 * @copyright © Svyatoslav Kovtun 2015
 */

var ParallaxModern = function () {
    /**
     * Return a HTML Collection of all parallax elements;
     * 
     * @type {Object}
     */
    var parallax = document.getElementsByClassName ("parallax-modern");


    /**
     * This function add event listener to window and smooth parallax effect
     * 
     * @param {Object} parameters for parallax effect
     * @config {number} [speed] The speed of parallax scrolling
     */
    var work = function (param) {
        // Add scroll event listener
        window.addEventListener ("scroll", function () {
            //In the loop count and apply new position to everyone element
            for (var i = 0; parallax.length > i; i++) {
                var palarax = document.getElementById('paralax');
                // Count the new background position

                // var bgScroll = -((window.scrollY -parallax [i].offsetTop) / param.speed);

                var bgScroll = ((window.scrollY -parallax [i].offsetTop) / param.speed);
                // var bgScroll = ((window.scrollY));

                // Save new background position to variable
                // var bgPosition = 'center '+ bgScroll + 'px';
                // Set new background position to element
                // console.log(bgScroll);
                paralax.style.top = bgScroll + 'px';
                
            }
        });
    };

    /**
     * Initialize all elements with 'parallax' class
     * 
     * @param  {Object}
     */
    this.init = function (param) {
        // For each parralax element add styles
        for (var i = 0; parallax.length > i; i++) {
            // Add background image from data attribute
            // parallax [i].style.backgroundImage = 'url('+parallax [i].dataset.img+')';

            // Add other styles for background
            // parallax [i].style.backgroundRepeat = 'no-repeat';
            // parallax [i].style.backgroundPosition = 'center 0';
            // parallax [i].style.backgroundAttachment = 'fixed';
            // parallax [i].style.position = 'absolute';
        };
        // When init completed, start the work function
        work (param);
    };
};
