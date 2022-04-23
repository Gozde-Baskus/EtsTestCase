const getHotels = async () => {
    const hotels = JSON.parse(localStorage.getItem("@hotels"));
    return {success: true, data: hotels}
}

const addHotels = async (hotel) => {
    try {
        const hotels = JSON.parse(localStorage.getItem("@hotels")) || [];
        hotels.push({
            point: 0,
            ...hotel,
            createdAt: Date.now()
        });
        localStorage.setItem("@hotels", JSON.stringify(hotels))
        return {success: true}
    } catch (e) {
        return {success: false}
    }
}

const increasePoint = async (hotel) => {

    try {
        const hotels = JSON.parse(localStorage.getItem("@hotels")) || [];

        const found = hotels.find((item=>item.id === hotel.id));
        if(found) {
            found.point = Math.min(10, Number(found.point) + 1);
            found.updatedAt = Date.now();
        }

        localStorage.setItem("@hotels", JSON.stringify(hotels))

        return {success: true}
    } catch (e) {
        return {success: false}
    }
}

const decreasePoint = async (hotel) => {
    try {
        const hotels = JSON.parse(localStorage.getItem("@hotels")) || [];
        const found = hotels.find((item=>item.id === hotel.id));
        if(found) {
            found.point = Math.max(0, Number(found.point) -1);
            found.updatedAt = Date.now();
        }
        localStorage.setItem("@hotels", JSON.stringify(hotels))
        return {success: true}
    } catch (e) {
        return {success: false}
    }
}

const deleteHotels = async (id) => {

    try {
        const hotels = JSON.parse(localStorage.getItem("@hotels")) || [];
        const found = hotels.find((item=>item.id === id));
        if(found) {
            const deleteItemIndex = hotels.indexOf(found);
            hotels.splice(deleteItemIndex, 1);
        } else  {
            return {success: false, message: "Hotel not found with id"}
        }

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
