## comohoy.com

### Filters

- Open UBlock Origin settings.
- Under the "Filter lists" tab, scroll all the way down, check `import` and add
the following URL:

```
https://raw.githubusercontent.com/lavafroth/ublockFilters/main/comohoy.com/filters.txt
```

### userResourcesLocation Script

For the user-scripts to work, you will need to enable advanced settings in
UBlock Origin. [Go
here](https://github.com/gorhill/uBlock/wiki/Advanced-settings) if you aren't
sure or don't have it enabled.

Go to UBO's "Advanced settings" by clicking the cogwheel icons next to the "I
am an advanced user" checkbox. If the `userResourcesLocation` is unset, replace
the `unset` with the following URL:

```
https://raw.githubusercontent.com/lavafroth/ublockFilters/main/comohoy.com/comohoy.js
```

If the value is already set, add a space and then the URL.

You should now see direct links instead of redirects on respective pages.
