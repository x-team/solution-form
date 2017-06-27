# solution-form

A small UI component for submitting solutions to a challenge.

## Install

```
npm install
```

## Build frontend

```
npm run packs:build
npm run build -- -w &
open index.html
```

## behavior

###  heading

- after submitting an incorrect solution: "Oops, try again" message
- default: "Paste the solution" message

### submit button

- field is empty: disabled
- submit in progress: "Checking..."
- default: "Submit 1 of 3 attempts"

### textarea validation

- content matches the previously submitted (incorrect) solution: display as "invalid"

## appearance

- https://github.com/x-team/solution-form/issues/1

Maintained by the [developers at x-team](https://www.x-team.com) | [developer blog](https://www.x-team.com/blog/)

