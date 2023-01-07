import './body.css';
import _ from 'lodash';
const $ = require( "jquery" );

$('body').append('<p>Dashboard data for the students</p>');
$('body').append('<button>Click here to get started</button>');
$('body').append(`<p id='count'></p>`);

function updateCounter() {
  count += 1;
  $('#count').text(`${count}`);
}

const debounceFunction = _.debounce(updateCounter, 500);

$('button').on('click', debounceFunction);
