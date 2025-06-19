const express=require('express')
const { addTransaction, getAllTransaction,editTransaction ,deleteTransaction} = require('../controllers/transactionController')


// router object

const router=express.Router()

//router
//add transaction post method
router.post('/add-transaction',addTransaction)
// transaction post method
router.post('/edit-transaction',editTransaction)
// transaction post method
router.post('/delete-transaction',deleteTransaction)
//get transaction
router.post('/get-transaction',getAllTransaction)
module.exports=router