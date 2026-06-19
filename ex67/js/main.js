function load_students_from_xml (dataset_path, student_body) 
{
    var xhr =new XMLHttpRequest();
    xhr.open("GET",dataset_path,true); 
    xhr.send();
    xhr.onreadystatechange=function()
    {
        if (xhr.readyState==4 && xhr.status==200)
        {
            //handling when loading data successfully (HTML và XML DOM xử lý- AJAX kết thúc)
            var xmlDoc = xhr.responseXML;
            renderXml2html(xmlDoc, student_body);
        }
        else
        {
            //handling when data can't be loaded
        }
    }
}

function renderXml2html(xmlDoc, student_body)
{
    var student_tags = xmlDoc.getElementsByTagName("student") 
    for (i=0;i<student_tags.length;i++)
    {
        student_tag=student_tags[i]
        id_tag=student_tag.getElementsByTagName("id")[0]
        name_tag=student_tag.getElementsByTagName("name")[0]
        birthday_tag=student_tag.getElementsByTagName("birthday")[0]
        gender_tag=student_tag.getElementsByTagName("gender")[0]

        student_id=id_tag.childNodes[0].nodeValue
        student_name=name_tag.childNodes[0].nodeValue
        student_birthday=birthday_tag.childNodes[0].nodeValue
        student_gender=gender_tag.childNodes[0].nodeValue

        //HTML DOM
        tr=document.createElement("tr")
        td_id=document.createElement("td")
        td_name=document.createElement("td")
        td_birthday=document.createElement("td")
        td_gender=document.createElement("td")

        td_id.innerHTML=student_id
        td_name.innerHTML=student_name
        td_birthday.innerHTML=student_birthday
        td_gender.innerHTML=student_gender

        tr.appendChild(td_id);
        tr.appendChild(td_name);
        tr.appendChild(td_birthday);
        tr.appendChild(td_gender);

        // Use IIFE (Immediately Invoked Function Expression) to capture student_id for each row
        (function(id){
            tr.addEventListener("click", function(){
                localStorage.setItem("studentid", id);
                window.location.href = "student_detail.html";
            });
        })(student_id);

        student_body.appendChild(tr);
    }
}

function load_student_detail_from_xml(dataset_path)
{
    var xhr = new XMLHttpRequest();
    xhr.open("GET", dataset_path, true); 
    xhr.send();
    xhr.onreadystatechange = function()
    {
        if (xhr.readyState == 4 && xhr.status == 200)
        {
            //handling when loading data successfully (HTML và XML DOM xử lý- AJAX kết thúc)
            var xmlDoc = xhr.responseXML;
            render_student_detail(xmlDoc);
        }
        else
        {
            //handling when data can't be loaded
        }
    }
}

function render_student_detail(xmlDoc)
{
    var selected_id = localStorage.getItem("studentid");
    var student_tags = xmlDoc.getElementsByTagName("student");
    
    for (var i = 0; i < student_tags.length; i++)
    {
        var student_tag = student_tags[i];
        var id_tag = student_tag.getElementsByTagName("id")[0];
        var name_tag = student_tag.getElementsByTagName("name")[0];
        var birthday_tag = student_tag.getElementsByTagName("birthday")[0];
        var gender_tag = student_tag.getElementsByTagName("gender")[0];

        var student_id = id_tag.childNodes[0].nodeValue;
        
        if (student_id == selected_id)
        {
            var student_name = name_tag.childNodes[0].nodeValue;
            var student_birthday = birthday_tag.childNodes[0].nodeValue;
            var student_gender = gender_tag.childNodes[0].nodeValue;

            document.getElementById("student_id").innerHTML = student_id;
            document.getElementById("student_name").innerHTML = student_name;
            document.getElementById("student_birthday").innerHTML = student_birthday;
            document.getElementById("student_gender").innerHTML = student_gender;
            
            break; 
        }
    }
}