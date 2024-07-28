const { getShelfItems, addToShelf } = require("../services/ShelfService");

const getShelfItemsController = async (req, res) => {
    const userId = req.user._id
    try {
        const shelfItems = await getShelfItems(userId)
        res.status(200).json(shelfItems)
    } catch(error) {
        res.status(500).json({ error: errorMessages.genericError })
    }
}

const addToShelfController = async (req, res) => {
    const userId = req.user._id;
    try {
        const result = await addToShelf(userId);
        res.status(200).json(result);
    } catch(error) {
        res.status(500).json({ error: errorMessages.genericError })
    }
}

module.exports = { getShelfItemsController, addToShelfController }