# AngularHelloWorld

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 11.2.19.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.

## Criteria 

Angular Material has already been installed and you are encouraged to use their components.

Use the styles and colour values below however you'd like, just ensure that the page is cohesive and user friendly.
Use best practices and good project structure 

Some helpful resources: 
    - Angular material : https://material.angular.io/
    - Material components : https://material.angular.io/components/categories
    - Angular docs : https://angular.io/docs
    - Stackblitz

Get all products url : https://dummyjson.com/products

1. Write a service to get all products and display the result in a table format. (hint use observables, read up and properly understand what they are and how they work)
2. The table should have the following headers:
    - Title 
    - Description
    - Price (R)
    - Discount Percentage
    - Rating
    - Brand 
    - Thumbnail
    and display the appropriate data.

3. Paginate the table to show ten rows at a time.
4. Add a filter to filter the rows by the title
5. Add a sort header to the Price and Rating columns


## Basic PSG CI

  color-primary-color: #3f4765
  swimlane-249-249-249: #f9f9f9

  // ======================= COLOUR VARIABLES =======================
  // cyan
  --psg-cyan-primary: rgba(0, 175, 239, 1);
  --psg-cyan-primary-accessible-text: rgba(0, 158, 238, 1);
  --psg-cyan-primary-light: rgba(102, 204, 255, 0.8);
  --psg-cyan-primary-light2: rgba(225, 243, 252, 1);

  // dark blue text
  --psg-dark-blue-label-text: rgba(63, 71, 101, 1);

  // psg dark blue
  --psg-dark-blue: rgba(53, 85, 131, 1);
  --psg-dark-blue-accessible: rgba(99, 136, 180, 1);
  --psg-dark-blue-light: rgba(178, 198, 215, 1);
  --psg-dark-blue-light2: rgba(229, 236, 242, 1);

  // psg info purple
  --psg-purple-info: rgba(117, 59, 134, 1);
  --psg-purple-info-accesible: rgba(188, 147, 194, 1);
  --psg-purple-info-light: rgba(216, 191, 218, 1);
  --psg-purple-info-light2: rgba(242, 233, 242, 1);
  --psg-purple-info-background: rgba(248, 245, 249, 1);

  // psg warn red
  --psg-warn: rgba(208, 52, 56, 1);
  --psg-warn-accessible: rgba(232, 145, 144, 1);
  --psg-warn-light: rgba(241, 189, 188, 1);
  --psg-warn-light2: rgba(250, 233, 233, 1);

  // psg cautious orange
  --psg-cautious: rgb(255, 165, 0, 1);
  --psg-cautious-accessible: rgba(255, 231, 131, 1);
  --psg-cautious-light: rgba(254, 240, 181, 1);
  --psg-cautious-light2: rgba(253, 249, 229, 1);
  --psg-cautious-snackbar: rgba(255, 231, 131, 1);

  // psg success green
  --psg-success: rgba(0, 170, 111, 1);
  --psg-success-accessible: rgba(141, 214, 179, 1);
  --psg-success-light: rgba(189, 231, 210, 1);
  --psg-success-light2: rgba(234, 246, 239, 1);

  // psg greys
  --psg-hint-grey: rgba(112, 112, 112, 1);
  --psg-text-grey: rgba(127, 127, 127, 1);
  --psg-background-grey: rgba(242, 242, 242, 1);

  // product badges colors
  --psg-accessible-eqt-shade: rgba(219, 236, 248, 1);
  --psg-gold-shade: rgba(230, 226, 211, 1);
  --psg-gold-text: rgba(158, 145, 111, 1);

  // ======================= STYLE VARIABLES =======================
  --psg-border-radius: 4px;
  --psg-border-radius-all: 0px 8px 8px 0px;
  --psg-border-width: 2px;
  --psg-button-height: 40px;
