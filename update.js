const { inputForm } = require("./view")

function tipvalueandtotal(model){
    x=inputForm(model)
    y=inputForm2(model)
    return {
        ...model,
        total:x ,
        tipperc: y,
        tipval:x*(y/100),
        totalbill:x+x*(y/100)
    }
}



function update( i,l,model){
    
    const {total} = model
    const{tipperc}=model
    
    const{tipval}=model
    
    
    const{totalbill}=model
    const tip2=i*(l/100)
    const total2=Number(i)+Number(tip2)
    const totalnew=i
    const tippercentnew=l

    return {
        ...model,
        total:totalnew ,
        tipperc:tippercentnew ,
        tipval:tip2,
        totalbill:total2
    }
}

module.exports = {
    update
}