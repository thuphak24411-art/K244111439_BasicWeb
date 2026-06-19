// Global variables
var xmlDoc;
var employee_body;

function load_employee(dataset_path, emp_body)
{
    employee_body = emp_body;  // Save to global variable
    var xhr = new XMLHttpRequest();
    xhr.open("GET", dataset_path, true); 
    xhr.send();
    xhr.onreadystatechange=function()
    {
        if (xhr.readyState==4 && xhr.status==200)
        {
            xmlDoc = xhr.responseXML;  // Save to global variable
            groupTitle();
        }
        else
        {

        }
    }
}

function groupTitle(){
    var select = document.getElementById("select_title");
    var employee_tags = xmlDoc.getElementsByTagName("employee");
    var titles = [];

    for (var i = 0; i < employee_tags.length; i++) {
        var emp = employee_tags[i];
        var title = emp.getAttribute("title");
        
        if (!titles.includes(title)) {
            titles.push(title)
            var option = document.createElement("option")
            option.value = title
            option.textContent = title
            select.appendChild(option)
        }
    }
    select.addEventListener("change", showEmployees);

}

function showEmployees()
{
    var select=document.getElementById("select_title").value
    var employees_tags=xmlDoc.getElementsByTagName("employee")
    employee_body.innerHTML = "";

    for (var i = 0; i < employees_tags.length; i++) {
        var emp = employees_tags[i];
        
        if (emp.getAttribute("title") === select) {
            var id=emp.getAttribute("id")
            var name=emp.getElementsByTagName("name")[0]
            var phone=emp.getElementsByTagName("phone")[0]

            var emp_name=name.childNodes[0].nodeValue
            var emp_phone=phone.childNodes[0].nodeValue

            var tr=document.createElement("tr")
            var td_id=document.createElement("td")
            var td_name=document.createElement("td")
            var td_phone=document.createElement("td")

            td_id.innerHTML=id
            td_name.innerHTML=emp_name
            td_phone.innerHTML=emp_phone

            tr.appendChild(td_id)
            tr.appendChild(td_name)
            tr.appendChild(td_phone)
            employee_body.appendChild(tr)
        }
    }
}