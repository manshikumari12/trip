const express = require("express")
const {TravelData} = require("../model/tripmodel")

const TripRouter = express.Router()




TripRouter.post('/trippost', async (req, res) => {
    const { name, email, destination, travelers, budget } = req.body;

  
    const newTravelData = new TravelData({
        name,
        email,
        destination,
        travelers,
        budget
    });

    try {
     
        const savedTravelData = await newTravelData.save();
        res.json(savedTravelData);
    } catch (error) {
        console.error('Error saving data:', error);
        res.status(500).json({ error: 'An error occurred while saving data.' });
    }
});

TripRouter.get('/retrieve', async (req, res) => {
    try {
        const allTravelData = await TravelData.find();
        res.json(allTravelData);
    } catch (error) {
        console.error('Error fetching data:', error);
        res.status(500).json({ error: 'An error occurred while fetching data.' });
    }
});



TripRouter.delete('/delete/:cardId', async (req, res) => {
    const cardId = req.params.cardId;
    try {
        await TravelData.findByIdAndDelete(cardId);
        res.json({ success: true, message: 'Card deleted successfully.' });
    } catch (error) {
        console.error('Error deleting card:', error);
        res.status(500).json({ success: false, error: 'An error occurred while deleting card.' });
    }
});


TripRouter.get('/filter/:destination', async (req, res) => {
    const destination = req.params.destination;
    try {
        const filteredData = await TravelData.find({ destination });
        res.json(filteredData);
    } catch (error) {
        console.error('Error fetching filtered data:', error);
        res.status(500).json({ error: 'An error occurred while fetching filtered data.' });
    }
});


TripRouter.get('/sort/:sortBy', async (req, res) => {
    const sortBy = req.params.sortBy;
    const sortDirection = sortBy === 'asc' ? 1 : -1;

    try {
        const sortedData = await TravelData.find().sort({ budget: sortDirection });
        res.json(sortedData);
    } catch (error) {
        console.error('Error fetching sorted data:', error);
        res.status(500).json({ error: 'An error occurred while fetching sorted data.' });
    }
});


module.exports={TripRouter}