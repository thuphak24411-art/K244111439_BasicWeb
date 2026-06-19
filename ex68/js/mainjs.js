function load_catalog(dataset_path, catalog_body)
{
    var xhr =new XMLHttpRequest();
    xhr.open("GET",dataset_path,true); 
    xhr.send();
    xhr.onreadystatechange=function()
    {
        if (xhr.readyState==4 && xhr.status==200)
        {
            var xmlDoc = xhr.responseXML;
            renderXml2html(xmlDoc, catalog_body);
        }
        else
        {

        }
    }
}

function renderXml2html(xmlDoc, catalog_body)
{
    var catalog_tags = xmlDoc.getElementsByTagName("CD") 
    for (i=0;i<catalog_tags.length;i++)
    {
        catalog_tag=catalog_tags[i]
        title_tag=catalog_tag.getElementsByTagName("TITLE")[0]
        artist_tag=catalog_tag.getElementsByTagName("ARTIST")[0]

        catalog_title=title_tag.childNodes[0].nodeValue
        catalog_artist=artist_tag.childNodes[0].nodeValue

        tr=document.createElement("tr")
        td_title=document.createElement("td")
        td_artist=document.createElement("td")

        td_title.innerHTML=catalog_title
        td_artist.innerHTML=catalog_artist

        tr.appendChild(td_artist)
        tr.appendChild(td_title)

        catalog_body.appendChild(tr);
    }
}