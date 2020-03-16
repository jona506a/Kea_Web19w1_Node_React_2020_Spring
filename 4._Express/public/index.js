$.get("cars", ({ response }) => {
    response.map((car) => {
        const carCard = `
        <div class="car-card">
            <button>X</button>
            <p>Brand: ${car.brand ? car.brand : "No brand"}</p>
            <p>Type: ${car.type ? car.type : "No type"}</p>
        </div>
    `;
    $('#car-wrapper').append(carCard);
    });
});


