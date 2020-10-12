var ar=[]
var bt=document.querySelector("#btn1")
bt.addEventListener("click", function(event){
        event.preventDefault()

        var a=document.querySelector(".field")
        ar.push(a.value)
        a.value=null
        
    });
    var fo=document.querySelector('.formdata');
    var d;
    var tb=document.querySelector('.tbl');
    var names=[]
    function createform(e){
        e.preventDefault()
        var tr=document.createElement('TR');
        var count=1
        var btnn=document.createElement('INPUT')
        btnn.setAttribute('type','submit');
        btnn.setAttribute('value','create');
        ar.forEach((i,index)=>{
            var th=document.createElement('TH');
            var tht=document.createTextNode(i);
            th.appendChild(tht);
            tr.appendChild(th);
            tb.appendChild(tr)
            var inp=document.createElement('INPUT')
                inp.setAttribute("id",count)
                var lab=document.createElement('LABEL')
                lab.setAttribute("for","vaidu");
                var t=document.createTextNode(i)
                lab.appendChild(t)
                d=document.createElement('div');
                d.setAttribute('class','dta')
                d.appendChild(lab)
                d.appendChild(inp)
                fo.appendChild(d)
                fo.appendChild(btnn)
                names.push(count)
                count=count+1;

        })
    }
    var content=[]
    function createtable(e){
        e.preventDefault()
        names.forEach((j)=>{
    
        content.push(document.getElementById(`${j}`).value)
        })
        console.log(content)

        var trr=document.createElement('TR')
        content.forEach((k)=>{
           var cc=document.createElement('TD')
           cc.appendChild(document.createTextNode(k))
            trr.appendChild(cc)
            tb.appendChild(trr)
            content=[]
        })


    }

