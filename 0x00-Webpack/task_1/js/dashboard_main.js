import _ from 'lodash';
const $ = require( "jquery" );

let count = 0;
$('body').append('<p>Holberton Dashboard</p>');
$('body').append('<p>Dashboard data for the students</p>');
$('body').append('<button>Click here to get started</button>');
$('body').append(`<p id='count'></p>`);
$('body').append('<p>Copyright - Holberton School</p>');

function updateCounter() {
  count += 1;
  $('#count').text(`${count}`);
}

const debounceFunction = _.debounce(updateCounter, 500);

$('button').on('click', debounceFunction);
