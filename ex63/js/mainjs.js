function load_data()
{
    info={}
    info.Name=document.getElementById("Name").value
    info.Email=document.getElementById("Email").value
    info.Gender=document.querySelector('input[name="Gender"]:checked').value

    info.birthday_day=document.getElementById("birthday_day").value
    info.birthday_month=document.getElementById("birthday_month").value
    info.birthday_year=document.getElementById("birthday_year").value
    info.Hobbies=Array.from(document.querySelectorAll('input[name="Hobbies"]:checked')).map(cb=>cb.value).join(', ')
    info.Color=document.querySelector('input[name="Color"]:checked').value
    create_tr(info)
}
function create_tr(info){
    var tr=document.createElement("tr")
    var td_name=document.createElement("td")
    td_name.innerHTML=info.Name
    tr.appendChild(td_name)

    var td_email=document.createElement("td")
    td_email.innerHTML=info.Email
    tr.appendChild(td_email)

    var td_gender=document.createElement("td")
    td_gender.innerHTML=info.Gender
    tr.appendChild(td_gender)

    var td_birthday=document.createElement("td")
    td_birthday.innerHTML=info.birthday_day+"/"+info.birthday_month+"/"+info.birthday_year
    tr.appendChild(td_birthday)

    var td_hobbies=document.createElement("td")
    td_hobbies.innerHTML=info.Hobbies
    tr.appendChild(td_hobbies)

    var td_color=document.createElement("td")
    td_color.innerHTML=info.Color
    tr.appendChild(td_color)
    
    document.getElementById("info_body").appendChild(tr)
    
    document.getElementById("info_body").appendChild(tr)
}
