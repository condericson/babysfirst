const express = require('express');
const router = express.Router();
const morgan = require('morgan');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

const {Firsts} = require('./models/firstsModel');

const jsonParser = bodyParser.json();
router.use(morgan('common'));

router.get('/firsts', (req,res) => {
	Firsts.find(function(err, first) {
		if(err) {
			res.status(500).json({"message": "Error!"});
		}
		res.status(201).json(first);
	})
});


router.post('/firsts', jsonParser, (req, res) => {
    Firsts.create({
  		date: req.body.date,
  		content: req.body.content,
  		image: req.body.image,
      userId: req.body.userId
	}, function(err, first){
		if(err) {
            console.log(err);
			res.status(500).json({"message":"Error with post"})
		}
		res.status(201).json(first);
	})
})

router.put('/:id', jsonParser, function(req, res) {
	var _id = mongoose.Types.ObjectId(req.params.id);
    Firsts.findOneAndUpdate({
      _id: _id
    },
    {
      $set: {
        date: req.body.date,
    		content: req.body.content,
    		image: req.body.image,
        userId: req.body.userId
      }
    },
    {
      new: true
    },
    function(err, first) {
        if (err || !first) {
            console.error("Could not update first", req.body.name);
            mongoose.disconnect();
            if (err) {
                return res.status(500).json({
                    message: 'Internal Server Error'
                })
            }
        }
        console.log("Updated first on ", first.date);
        res.status(201).json(first);
    });
});

router.delete('/:id', (req, res) => {
	var _id = mongoose.Types.ObjectId(req.params.id);
    Firsts.remove({
        _id: _id
    }, function(err, first) {
        if (err || !first) {
            console.error("Could not delete first on ", req.body.date);
            mongoose.disconnect();
            return;
        }
        console.log("Deleted first", recipe.result);
        res.status(201).json(first);
    });
});



module.exports = router;
