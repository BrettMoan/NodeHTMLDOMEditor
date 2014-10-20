
    var i=1;
    function foobar(index, insert_as_child) 
    {
        var doc = document.getElementById("content");
        var cln = document.getElementById("div_node_0").cloneNode(true);
          
        var divList = cln.getElementsByTagName("div");
        while(divList.length > 0)
        {
           var icky = divList.item(0);
           cln.removeChild(icky);       //removes additional children 
        }

        var after = document.getElementById("div_node_"+index);
        if (insert_as_child == true) 
        {
            after.appendChild(cln);
        } 
        else
        {
            insertAfter(cln, after);
        };
        
        resetNodes();
    }

    function makeChild(index, child_or_sibling) 
    {
        var doc = document.getElementById("content");
        var cln = document.getElementById("div_node_"+index).cloneNode(true);

            
        var divList = cln.getElementsByTagName("div");
        while(divList.length > 0)
        {
           var icky = divList.item(0);
           cln.removeChild(icky);       //removes additional children 
        }


        var after = document.getElementById("div_node_"+index);
        after.appendChild(cln);
        resetNodes();
    }

    function insertAfter(newNode, referenceNode) 
    {
            referenceNode.parentNode.insertBefore(newNode, referenceNode.nextSibling);
    }

    function deleteMe(index) 
    {
        var child = document.getElementById("div_node_"+index);
        var parent = child.parentNode;
        parent.removeChild(child);
        resetNodes();
    }

    function resetNodes()
    {
        resetNodeType("div");
        resetNodeType("p");
        resetNodeType("input");
        resetNodeType("button");
        resetNodeType("label");
        resetNodeType("textarea");
        resetNodeType("select");
    }

    function resetNodeType(type)
    {
        var offset = 0;
        var content= document.getElementById("content");
        var nodelist= content.getElementsByTagName(type);
        for (var j = 0 ; j < nodelist.length; j++)
         {
            
            switch(type)
            {
            case "button":

                switch(nodelist.item(j).id.substring(0,5))
                {    
                    case "clone":
                    nodelist.item(j).setAttribute("onclick", "foobar("+(j-offset)+", false)"); 
                    nodelist.item(j).setAttribute("title","clone_button_node_" + (j-offset));
                    nodelist.item(j).setAttribute("id"   ,"clone_button_node_" + (j-offset));
                    break;
                    case "delet":
                    offset++;
                    nodelist.item(j).setAttribute("onclick", "deleteMe("+(j-offset)+")"); 
                    nodelist.item(j).setAttribute("title","delete_button_node_" + (j-offset));
                    nodelist.item(j).setAttribute("id"   ,"delete_button_node_" + (j-offset));
                    break;
                    case "child":
                    offset++;
                    nodelist.item(j).setAttribute("onclick", "foobar("+(j-offset)+", true)"); 
                    nodelist.item(j).setAttribute("title","child_button_node_" + (j-offset));
                    nodelist.item(j).setAttribute("id"   ,"child_button_node_" + (j-offset));
                    break;                    
                }
                break;

            case "p":
                nodelist.item(j).innerHTML = (j + "."); 
                nodelist.item(j).setAttribute("id"   ,"p_node_" + (j));
                nodelist.item(j).setAttribute("title","p_node_" + (j));
                break;  

            case "textarea": 
                nodelist.item(j).setAttribute("style", ""); 
                nodelist.item(j).setAttribute("id"   ,"textarea_node_" + (j));
                nodelist.item(j).setAttribute("name" ,"textarea_node_" + (j));
                nodelist.item(j).setAttribute("title","textarea_node_" + (j));
                break;

            case "label": 
                switch (nodelist.item(j).id.substring(0,2))
                {
                    case "id": 
                    offset++;
                    nodelist.item(j).setAttribute("id"   ,"id_label_node_" + (j-offset));
                    nodelist.item(j).setAttribute("title","id_label_node_" + (j-offset));
                    // nodelist.item(j).setAttribute("name","id_label_node_" + (j-offset));
                    nodelist.item(j).setAttribute("for","id_input_node_" + (j-offset));
                    break;
                    case "hr":
                    offset++;
                    nodelist.item(j).setAttribute("id"   ,"href_label_node_" + (j-offset));
                    nodelist.item(j).setAttribute("title","href_label_node_" + (j-offset));
                    // nodelist.item(j).setAttribute("name","href_label_node_" + (j-offset));
                    nodelist.item(j).setAttribute("for","href_input_node_" + (j-offset));
                    break;
                    case "ta":
                    nodelist.item(j).setAttribute("id"   ,"tag_label_node_" + (j-offset));
                    nodelist.item(j).setAttribute("title","tag_label_node_" + (j-offset));
                    // nodelist.item(j).setAttribute("name","tag_label_node_" + (j-offset));
                    nodelist.item(j).setAttribute("for","tag_select_node_" + (j-offset));
                    break;
                    case "cl":
                    offset++;
                    nodelist.item(j).setAttribute("id"   ,"class_label_node_" + (j-offset));
                    nodelist.item(j).setAttribute("title","class_label_node_" + (j-offset));
                    // nodelist.item(j).setAttribute("name","class_label_node_" + (j-offset));
                    nodelist.item(j).setAttribute("for","class_select_node_" + (j-offset));
                    break;                    

                }
                break;
            case "input": 
                switch (nodelist.item(j).id.substring(0,2))
                {
                    case "id": 
                    nodelist.item(j).setAttribute("id"   ,"id_input_node_" + (j-offset));
                    nodelist.item(j).setAttribute("title","id_input_node_" + (j-offset));
                    break;
                    case "hr":
                    offset++;
                    nodelist.item(j).setAttribute("id"   ,"href_input_node_" + (j-offset));
                    nodelist.item(j).setAttribute("title","href_input_node_" + (j-offset));
                    break;
                }
                break;
            case "select":
                switch (nodelist.item(j).id.substring(0,2))
                {
                    case "ta": 
                    nodelist.item(j).setAttribute("id"   ,"tag_select_node_" + (j-offset));
                    nodelist.item(j).setAttribute("title","tag_select_node_" + (j-offset));
                    nodelist.item(j).setAttribute("name","tag_select_node_" + (j-offset));
                    nodelist.item(j).setAttribute("onchange","setOptions(document.blog_post_form.tag_select_node_" + (j-offset) + ".options[document.blog_post_form.tag_select_node_" + (j-offset) + ".selectedIndex].value, document.blog_post_form.class_select_node_"+ (j-offset) +", " + (j-offset) + ");");
                    nodelist.item(j).setAttribute("size" ,"1");
                    break;
                    case "cl":
                    offset++;
                    nodelist.item(j).setAttribute("id"   ,"class_select_node_" + (j-offset));
                    nodelist.item(j).setAttribute("title","class_select_node_" + (j-offset));
                    nodelist.item(j).setAttribute("name" ,"class_select_node_" + (j-offset));
                    nodelist.item(j).setAttribute("size" ,"1");
                    break;
              
                }
                break;           
            default: 
                nodelist.item(j).setAttribute("id"   ,type + "_node_" + (j));
                nodelist.item(j).setAttribute("title",type+ "_node_" + (j));
            }
            
            nodelist.item(j).setAttribute("class","node_" + (j-offset));
         }
    
    }
