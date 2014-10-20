
function setOptions(chosen, selbox, index) {
//var selbox = ;
 
    selbox.options.length = 0;
    if (chosen == " ") {
      selbox.options[selbox.options.length] = new Option('First Select Tag type',' ');
    }
    if (chosen == "ol") {
      selbox.options[selbox.options.length] = new Option(' ',' ');
      selbox.options[selbox.options.length] = new Option('Roman','Roman');
    }
    if (chosen == "pre") {
      selbox.options[selbox.options.length] = new Option('SQL','SQL');
      selbox.options[selbox.options.length] = new Option('Bash','bash');
    }
    if (chosen == "p") {
      selbox.options[selbox.options.length] = new Option(' ',' ');
      selbox.options[selbox.options.length] = new Option('padding20','padding20');
    }
    if (chosen == "a") {
      document.getElementById("href_label_node_"+index).style.display="block";
      document.getElementById("href_input_node_"+index).style.display="block";

    }
    else
    {
      document.getElementById("href_label_node_"+index).style.display="none";
      document.getElementById("href_input_node_"+index).style.display="none";

    }

    if (chosen == "p" || chosen == "ol" || chosen == "ul" || chosen == "li") 
    {
      document.getElementById("child_button_node_"+index).style.display="block";
    }
    else
    {
      document.getElementById("child_button_node_"+index).style.display="none";
    }



}
