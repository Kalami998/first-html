function dispalyInof(args){
    var output="";
    if(typeof args.name=="string"){
        output+="Name:"+args.name+"\n";
    }
    if(typeof args.age=="number"){
        output+="Age:"+args.age+"\n";
    }
    alert(output);
}
dispalyInof(
    {
        name:"Nichloas",
        age:21
    }
)
dispalyInof({
    name:"Greg"
})