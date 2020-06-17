const mongoose = require('mongoose');

const deptSchema = mongoose.Schema({
    // TODO Fields/Properties Here
});

const deptModel = mongoose.model("Dept", deptSchema);

module.exports =  deptModel