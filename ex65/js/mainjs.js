function addNode()
{
    content=document.getElementById('content').value
    position_add=parseInt(document.getElementById('position_add').value)

    ul=document.querySelector('#my_div ul')
    li_add=document.createElement('li')
    li_add.textContent=content

    if (ul.children.length === 0) {
        ul.appendChild(li_add);
    }
    else if (position_add >= ul.children.length) {
        ul.appendChild(li_add)
    }
    else {
        ul.insertBefore(li_add, ul.children[position_add])
    }
}

function removeNode()
{
    position_remove=parseInt(document.getElementById('position_remove').value)
    ul=document.querySelector('#my_div ul')
    
    if (ul.children.length === 0) {
        alert('Danh sách rỗng, không có gì để xóa')
        return
    }
    else if (position_remove >= ul.children.length) {
        alert('Vị trí không hợp lệ')
        return
    }
    else {
        ul.removeChild(ul.children[position_remove])
    }
}

function modifyNode()
{
    new_content=document.getElementById('new_content').value
    position_modify=parseInt(document.getElementById('position_modify').value)
    
    ul=document.querySelector('#my_div ul')
    
    if (ul.children.length === 0) {
        alert('Danh sách rỗng, không có gì để sửa')
        return
    }
    
    else if (position_modify >= ul.children.length) {
        alert('Vị trí không hợp lệ')
        return
    }
    else {
        li_new=document.createElement('li')
        li_new.textContent=new_content
        ul.replaceChild(li_new, ul.children[position_modify])
    }
}


