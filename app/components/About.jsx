var React = require('react');
var {Link} = require('react-router');

var About = (props) => {
  return (
    <div>
      <h1 className="text-centre">About</h1>
      <p>
        This is a weather application built on react. I have built this for the
        complete react developer course.
      </p>
      <ol>
        <li>
          <a href="https://facebook.github.io/react">React</a> - This was the javascript framework used.
        </li>
        <li>
          <a href="http://openweathermap.org">Open weather map</a> - I used open weather map to search for data by city name.
        </li>
      </ol>
    </div>
  );
}

module.exports = About;
