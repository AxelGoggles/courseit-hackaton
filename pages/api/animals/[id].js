import dbConnect from '../../../dbConnect';
import Animals from '../../../models/AnimalModel';

dbConnect();

export default async (req, res) => {
    const {
        query: { id },
        method  
    } = req;

    switch(method) {
        case 'GET':
            try {
                const animal = await Animals.findById(id);

                if(!animal) return res.status(400).json({ success: false });

                res.status(200).json({ success: true, data: animal });
            } catch (error) {
                res.status(400).json({ success: false });
            }
        break;
        
        case 'PUT':
            try {
                const animal = await Animals.findByIdAndUpdate(id, req.body, {
                    new:true, 
                    runValidators:true
                });

                if(!animal) return res.status(400).json({ success: false });
                res.status(200).json({ success: true, data: animal });

            } catch (error) {
                res.status(400).json({ success: false });
            }
        break;

        case 'DELETE':
            try {
                const deletedAnimal = await Animals.deleteOne({ _id: id });

                if(!deletedAnimal) return res.status(400).json({ success: false });
                res.status(200).json({ success: true, data: {}});

            } catch (error) {
                res.status(400).json({ success: false });
            }
        break;
        
        default: 
            res.status(400).json({ sucess:false });
        break;
    }
};