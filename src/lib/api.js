const getHotels = async () => {
    const hotels = JSON.parse(localStorage.getItem("@hotels"));
    return {success: true, data: hotels}
}

const addHotels = async (hotel) => {
    try {
        const hotels = JSON.parse(localStorage.getItem("@hotels")) || [];
        hotels.unshift(hotel);
        localStorage.setItem("@hotels", JSON.stringify(hotels))
        return {success: true}
    } catch (e) {
        return {success: false}
    }
}

const increasePoint = async (hotel) => {
    try {
        const hotels = JSON.parse(localStorage.getItem("@hotels")) || [];
        hotels.map(itemD => {
            if (itemD.id === hotel.id && hotel.point <= 9) {
                itemD.point = Number(itemD.point) + 1
            }

        });
        localStorage.setItem("@hotels", JSON.stringify(hotels))



        return {success: true}
    } catch (e) {
        return {success: false}
    }
}

const decreasePoint = async (hotel) => {
    try {
        const hotels = JSON.parse(localStorage.getItem("@hotels")) || [];
        hotels.map(itemD => {
            if (itemD.id === hotel.id && hotel.point >= 1) {
                itemD.point = itemD.point - 1
            }

        });
        localStorage.setItem("@hotels", JSON.stringify(hotels))



        return {success: true}
    } catch (e) {
        return {success: false}
    }
}

const deleteHotels = async (hotel) => {

    try {
        const hotels = JSON.parse(localStorage.getItem("@hotels")) || [];
        hotels.splice(hotel, 1);
        localStorage.setItem("@hotels", JSON.stringify(hotels))
        return {success: true}
    } catch (e) {
        return {success: false}
    }

}

export {
    getHotels,
    addHotels,
    deleteHotels,
    increasePoint,
    decreasePoint
}
