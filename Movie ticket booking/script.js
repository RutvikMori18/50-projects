const seats = document.querySelectorAll('.row.seat:not(occupied)');
const container = document.querySelector('.container');
const count = document.getElementById('count');
const total = document.getElementById('total');
const movieSelect = document.getElementById('movie');

let ticketPrice = +movie.value;

console.log(typeof ticketPrice);

//update total and update count


function updateSelectedCount() {
    const selectedSeats = document.querySelectorAll('.row .seat.selected');

    //    console.log(selectedSeats);
    const SeatsCount = selectedSeats.length;

    console.log(SeatsCount);

    count.innerText = SeatsCount;
    total.innerText = SeatsCount * ticketPrice;
}

//movie slect event
movieSelect.addEventListener('change', e => {

    ticketPrice = +e.target.value;
    updateSelectedCount();
})

//seat click event listener
container.addEventListener('click', function (e) {
    //console.log(e.target);
    if (e.target.classList.contains('seat') && !e.target.classList.contains('occupied')) {
        //        console.log(e.target);
        e.target.classList.toggle('selected');

        updateSelectedCount();
    }
})
