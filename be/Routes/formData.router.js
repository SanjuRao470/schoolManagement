const formDataRouter=require("express").Router();
const {findData,userdata}=require("../Controllers/formdata.controller");

(()=>{
    getRequest();
    postRequesr();
    putRequest();
})();



function getRequest(){
    // formDataRouter.get("/findData",require("../Controllers/formdata.controller"))
    formDataRouter.get("/findData",findData)

}

function postRequesr(){
    formDataRouter.post('/user',userdata)
}

function putRequest(){
    formDataRouter.put('/put',)
}





module.exports=formDataRouter;