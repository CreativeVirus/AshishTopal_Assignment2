
const musiclist=function(req,res){
    res.render('index',{title:"Welcome to movie store"});
};
var musicArray=[{
    name:"bekhyali",
    type:"sad"},
    {
    name:"bala",
        type:"party"},
    {
    name:"ayat",
        type:"gazal"
}];
const musicDisplay=function(req,res){
    res.render('list-display',{music:musicArray,title:"Welcome to movie store"})
};


module.exports={
    musiclist,musicDisplay
};