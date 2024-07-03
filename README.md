> **Note**
>  Clip-on A,,  revolutionize global infrastructure management with AI and improve lives: https://clip-on.ai

## Initial Configuration:
You need to have [NodeJs](https://nodejs.org/en/) (>= 10.0.0) installed on your local machine, before attempting to run a dev environment.

1. Extract contents of the package to your local machine.
2. Using the Terminal navigate to the extracted contents.
3. Run `npm install`.

Make sure you have a file called `.npmrc` in the extracted directory. Those files are typically hidden in Unix based systems.

### Development
To start the development environment type `npm start` in the console. This will start a development server with hot reloading enabled.

### Production
To create a production build type `npm run build:prod`. After the process is complete you can copy the output from the `/dist/` directory. The output files are minified and ready to be used in a production environment.

### Build Customization
You can customize the build to suit your specific needs by adjusting the [Webpack](https://webpack.js.org) configuration files. Those files can be found in the `/build` directory. For more details checkout the documentation of WebPack.


# Credits
Used plugins in this dashboard:

* [React 16.9.x](https://reactjs.org) - A JavaScript library for building user interfaces
* [Bootstrap 4.x](http://getbootstrap.com) - Bootstrap is the most popular HTML, CSS, and JS framework
* [reactstrap 5.x.x](https://github.com/reactstrap/reactstrap) - Simple React Bootstrap 4 components
* [Peity 3.3.x](http://benpickles.github.io/peity/) - progressive pie, donut, bar and line charts
* [Font Awesome 4.7.x](http://fontawesome.io/) - Font Awesome, the iconic font and CSS framework.
* [Holder 2.x.x](http://holderjs.com) -  client side image placeholders
* [Lodash 7.x.x](https://lodash.com) - A modern JavaScript utility library delivering modularity, performance & extras.
* [Moment 7.x.x](http://momentjs.com/) - Parse, validate, manipulate, and display dates in javascript.
* [react-beautiful-dnd 11.0.4](https://github.com/atlassian/react-beautiful-dnd) - Beautiful and accessible drag and drop for lists with React
* [react-big-calendar 0.22.x](https://github.com/intljusticemission/react-big-calendar) - gcal/outlook like calendar component
* [react-bootstrap-table-next 3.1.4](https://github.com/react-bootstrap-table/react-bootstrap-table2) - Next Generation of react-bootstrap-table
* [react-bootstrap-typeahead 4.x.x](https://github.com/ericgio/react-bootstrap-typeahead) - React typeahead with Bootstrap styling
* [react-datepicker 2.7.0](https://github.com/Hacker0x01/react-datepicker) - A simple and reusable datepicker component for React
* [react-dropzone 10.x.x](https://react-dropzone.js.org/) - Simple HTML5 drag-drop zone with React.js
* [react-grid-layout 0.16.x](https://reactjs.org) - A draggable and resizable grid layout with responsive breakpoints, for React.
* [react-helmet 5.x.x](https://github.com/nfl/react-helmet) - A document head manager for React
* [react-hot-loader 4.11.x](https://github.com/gaearon/react-hot-loader) - Tweak React components in real time.
* [react-quill 1.x.x](https://github.com/zenoamaro/react-quill) - A Quill component for React
* [react-image-crop 8.0.2](https://github.com/DominicTobias/react-image-crop) - A responsive image cropping tool for React
* [react-router 5.x.x](https://github.com/ReactTraining/react-router) - Declarative routing for React
* [text-mask 5.x.x](https://github.com/text-mask/text-mask) - Input mask for React
* [react-toastify 5.x.x](https://github.com/fkhadra/react-toastify) - React notification made easy
* [react-toggle 4.x.x](https://github.com/aaronshaf/react-toggle) - Elegant, accessible toggle component for React. Also a glorified checkbox.
* [reacharts 1.x.x](https://github.com/recharts/recharts) - Redefined chart library built with React and D3
