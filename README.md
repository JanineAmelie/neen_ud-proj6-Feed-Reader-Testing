**Udacity FrontEnd Nanodegree Proj 6**
Feed Reader Testing
---

### Project Overview
An Existing web app that reads RSS feeds was provided for me by [Udacity.](http://udacity.com/) I was responsible of writing a  test suite to check various functionality of the Feed Reader App.

![UD project](https://www.dropbox.com/s/bwm7v0zins3gibl/2016-11-27%2001_57_15-UdaciFeeds.png?raw=1)

---

### Project Information

-  [Jasmine Testing Framework](https://jasmine.github.io/) was used.
- "Red - Green - Refactor" Test Driven Development method was used to write the tests.

---
### The Tests
1.
> Write a test that loops through each feed in the allFeeds object and
> ensures it has a URL defined and that the URL is not empty.

```javascript
it('url property is defined and not empty', function() {
    for (var i = 0; i < allFeeds.length; i++) {
        expect(allFeeds[i].url).toBeDefined();
        expect(allFeeds[i].url).toBeTruthy();
    };
});
```

2.

> Write a test that loops through each feed in the allFeeds object and
> ensures it has a name defined and that the name is not empty.
>
```javascript
it('name property is defined and is not empty', function() {
  for (var i = 0; i < allFeeds.length; i++) {
      expect(allFeeds[i].name).toBeDefined();
      expect(allFeeds[i].name).toBeTruthy();
  };

});
```
3.
> Write a test that ensures the menu element is
> hidden by default. You'll have to analyze the HTML and
> the CSS to determine how we're performing the
> hidingshowing of the menu element.

```javascript
it('menu element is hidden by default', function() {

  expect($("body").hasClass("menu-hidden")).toBe(true);

});
```

4.

> Write a test that ensures the menu changes
> visibility when the menu icon is clicked. This test
> should have two expectations: does the menu display when
> clicked and does it hide when clicked again.

```javascript

it('menu changes visibility when the menu icon is clicked', function() {

  $('.menu-icon-link').click();
  expect($("body").hasClass("menu-hidden")).toBe(false);

  $('.menu-icon-link').click();
  expect($("body").hasClass("menu-hidden")).toBe(true);
});

```

5.
> Write a new test suite named "Initial Entries"
```javascript
describe('Initial Entries', function() {

//

});
```

6.
> Write a test that ensures when the loadFeed
> function is called and completes its work, there is at least
> a single .entry element within the .feed container.
```javascript
beforeEach(function(done) {
    loadFeed(0, function() {
        done();
    });
});

it('when loadFeed() has completed work: there is a single .entry-link element within .feed container', function() {
    var numOfElemInFC = $('.feed').children().length;
    expect(numOfElemInFC).toBeGreaterThan(1);
});
```

7.
> Write a new test suite named "New Feed Selection"
```javascript
describe('New Feed Selection', function() {

//

})
```

8.
> Write a test that ensures when a new feed is loaded
> by the loadFeed function that the content actually changes.
```javascript
var originalFeed;
var newFeed;

beforeEach(function(done) {
    loadFeed(0, function() {
        done();
    });
    originalFeed = $(".header-title").html();
});

it('when new feed is loaded, content changes', function() {
    $("a[data-id='1']").trigger("click");
    setTimeout(function() {
        newFeed = $(".header-title").html();
    }, 500);

    expect(newFeed).not.toBe(originalFeed);

});

```

---
### How to Run:

1. Clone, Fork or Download the ZIP file of this project into a folder on your local machine.
2. Make sure you are connected to the net.
3. Unzip the file using Winrar / 7zip etc.
4. Double click the index.html file and open with your favorite browser.
5. Scroll down to view the Jasmine Reporter.

---

### Finished Result:

![Final Pic](https://www.dropbox.com/s/6u4jsazilynbg1f/screenshot.jpg?raw=1)

