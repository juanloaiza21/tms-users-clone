const libFiles =  require('../../../libs/files');

function verifyTypeFileRoute(type){
    return libFiles.verfifyFileRoute(type)
}

module.exports = {
    verifyTypeFileRoute
}