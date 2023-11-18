const todolist=[{
    Name:'ok',
    dueDate:'2022-02-02'
},{
    Name:'set',
    dueDate:'2022-09-09'
}]
       
        function rendertodo(){
            let todohtml='';
            for(let i=0;i<todolist.length;i++){
                const todoObj=todolist[i];
                const Name=todoObj.Name;
                const dueDate=todoObj.dueDate;
                const html=`<div>${Name}</div><div>${dueDate}</div>
                <button class="dlt-btn" onclick='todolist.splice(${i},1);
                rendertodo();
                '>Delete</button>`
                ;
                todohtml+=html;
            }
            document.querySelector('.list').innerHTML=todohtml;
        }
        rendertodo();
       function addTodo(){
          const inputElement=document.querySelector('.js-input');
          const inp=inputElement.value;


          const dateinputElement=document.querySelector('.js-date');
          const dueDate=dateinputElement.value;

          todolist.push({
            Name:inp,
            dueDate:dueDate
          });
          console.log(todolist);

          inputElement.value='';
          rendertodo();
       }