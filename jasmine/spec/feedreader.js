$(function() {
    describe('RSS Feeds', function() {
        it('are defined', function() {

            expect(allFeeds).toBeDefined();
            expect(allFeeds.length).not.toBe(0);

        });

        /*  Write a test that loops through each feed
         * in the allFeeds object and ensures it has a URL defined
         * and that the URL is not empty.
         */
        it('url property is defined and not empty', function() {

            for (var i = 0; i < allFeeds.length; i++) {
                expect(allFeeds[i].url).toBeDefined();
                expect(allFeeds[i].url).toBeTruthy();
            };

        });


        /* Write a test that loops through each feed
         * in the allFeeds object and ensures it has a name defined
         * and that the name is not empty.
         */
        it('name property is defined and is not empty', function() {

            for (var i = 0; i < allFeeds.length; i++) {
                expect(allFeeds[i].name).toBeDefined();
                expect(allFeeds[i].name).toBeTruthy();
            };

        });

    });

    /* Write a new test suite named "The menu" */
    describe('The menu', function() {
        /* Write a test that ensures the menu element is
         * hidden by default. You'll have to analyze the HTML and
         * the CSS to determine how we're performing the
         * hiding/showing of the menu element.
         */
        it('menu element is hidden by default', function() {

            expect($("body").hasClass("menu-hidden")).toBe(true);

        });

        /* Write a test that ensures the menu changes
         * visibility when the menu icon is clicked. This test
         * should have two expectations: does the menu display when
         * clicked and does it hide when clicked again.
         */
        it('menu changes visibility when the menu icon is clicked', function() {

            $('.menu-icon-link').click();
            expect($("body").hasClass("menu-hidden")).toBe(false);

            $('.menu-icon-link').click();
            expect($("body").hasClass("menu-hidden")).toBe(true);

        })

    });

    /* Write a new test suite named "Initial Entries" */
    describe('Initial Entries', function() {

        //done() signals framework it can start testing.
        // loadfeed will be called, and only when it's 'done', can the it() tests occur.
        beforeEach(function(done) {
            loadFeed(0, function() {
                done();
            });
        });

        /* Write a test that ensures when the loadFeed
         * function is called and completes its work, there is at least
         * a single .entry element within the .feed container.
         * Remember, loadFeed() is asynchronous so this test will require
         * the use of Jasmine's beforeEach and asynchronous done() function.
         */

        it('when loadFeed() has completed work: there is a single .entry-link element within .feed container', function() {
            var numOfElemInFC = $('.feed').children().length;

            expect(numOfElemInFC).toBeGreaterThan(1);
        });
    });


    /*  Write a new test suite named "New Feed Selection" */
    describe('New Feed Selection', function() {
        //declare variables for global use.
        var originalFeed;
        var newFeed;

        beforeEach(function(done) {
            loadFeed(0, function() {
                done();
            });
            originalFeed = $(".header-title").html();
        });

        /* Write a test that ensures when a new feed is loaded
         * by the loadFeed function that the content actually changes.
         * Remember, loadFeed() is asynchronous.
         */

        it('when new feed is loaded, content changes', function() {
            $("a[data-id='1']").trigger("click");
            setTimeout(function() {
                newFeed = $(".header-title").html();
            }, 500);

            expect(newFeed).not.toBe(originalFeed);

        });
    });

}());
