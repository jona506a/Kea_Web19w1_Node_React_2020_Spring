$.get("cars", ({ response }) => {
    response.map((car) => {
        const carCard = `
        <div id="car-${car.id}" class="car-card">
            <button onClick=deleteCar(${car.id})>X</button>
            <p>Brand: ${car.brand ? car.brand : "No brand"}</p>
            <p>Type: ${car.type ? car.type : "No type"}</p>
        </div>
    `;
    $('#car-wrapper').append(carCard);
    });
});

function deleteCar(carId) {
    $.ajax({
        url: 'cars/' + carId,
        type: 'DELETE'
    }).done(({response}) => {
        $('#car-' + carId).remove();
        console.log(response);
    });
}
