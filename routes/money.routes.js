const router = require ('express').Router();
let Money = require('../models/money.model');

router.route('/').get((req,res)=>{
    Money.find()
    .then(earnings => res.json(earnings))
    .catch(err => res.status(400).json('Error: '+ err))
})

router.route('/add').post((req,res)=>{

    const topic = req.body.topic;
    const categories = req.body.categories;
    const division = req.body.division;
    const date = req.body.date;
    
    const newMoney = new Money({
        topic,
        categories,
        division,
        date,
    })
     
    newMoney.save()
    .then(()=> res.json("Money added!!!"))
    .catch(err => res.status(400).json('Error:  '+ err))
});


router.route('/:id').get((req,res)=>{
    Money.findById(req.params.id)
    .then(money => res.json(money))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/delete/:id').delete((req,res)=>{
    Money.findByIdAndDelete(req.params.id)
    .then((doc) => res.json(doc))
    .catch(err => res.status(400).json('Error: ' + err));
})


router.route('/update/:id').post((req,res)=>{

    Money.findById(req.params.id)
        .then(Money => {

    Money.topic = req.body.topic;
    Money.categories = req.body.categories;
    Money.division = req.body.division;
    Money.date = req.body.date;
    
    
    Money.save()
    .then(()=> res.json("Money updated!!!"))
    .catch(err => res.status(400).json('Error:  '+ err))

})

.catch(err => res.status(400).json('Error:  '+ err))
});

module.exports = router;