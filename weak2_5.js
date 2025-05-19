const express=require("express");
function calculateSum(n){
    let sum=0;
    for(let i=0;i<n;i++) sum+=i;
    return sum;
}
const app=express();
app.get("/", (req, res) => {
    console.log("hello i am inside");
    const n = parseInt(req.query.n);
    if (isNaN(n)) {
        return res.send("Please provide a valid number using ?n=your_number");
    }
    res.send(calculateSum(n).toString());
});

app.listen(3000, '0.0.0.0');
//http://192.168.219.169:3000 ---------------run this with same connected wifi system
//so i am making changes and wwanna comiit it `
// so this is my second commit
//so i am making changes in feature branch  222222222222222
