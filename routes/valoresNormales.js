const { Router } = require('express');
const {
    getValoresNormales,
    getValorNormal,
    postValorNormal,
    putValorNormal,
    deleteValorNormal
} = require('../controller/ValoresNormalescontroller'); 
const router = Router();

router.get('/', getValoresNormales);
router.get('/:ValoresID', getValorNormal);
router.post('/', postValorNormal);
router.put('/:ValoresID', putValorNormal);
router.delete('/:ValoresID', deleteValorNormal);

module.exports = router;
