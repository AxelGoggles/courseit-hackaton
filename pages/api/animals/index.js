import dbConnect from '../../../dbConnect';
import Animals from '../../../models/AnimalModel';

dbConnect();

export default async (req, res) => {
    const { method } = req;

    switch(method) {
        case 'GET': 
            try {
                const animals = await Animals.find({});
                res.status(200).json({ sucess: true, data: animals });

            } catch (error) {
                res.status(400).json({ sucess:false });
            }
            break;
    
        case 'POST':
            try {
                const animal = await Animals.create(req.body);
                res.status(201).json({ sucess: true, data: animal });

            } catch (error) {
                res.status(400).json({ sucess:false });
            }
            break;

        default: 
        res.status(400).json({ sucess:false });
        break;

    }
};