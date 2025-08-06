document.addEventListener('DOMContentLoaded', function() {
    //Collapsible sections
    var coll = document.getElementsByClassName("collapsible-button");
    var i;

    for (i = 0; i < coll.length; i++) {
        coll[i].addEventListener("click", function() {
            this.classList.toggle("active");
            var content = this.nextElementSibling;
            if (content.style.maxHeight){
                content.style.maxHeight = null;
            } else {
                content.style.maxHeight = content.scrollHeight + "px";
            }
        });
    }

    //Subsections buttons
    var subButtons = document.getElementsByClassName("subsection-button");
    var j;

    for (j = 0; j < subButtons.length; j++) {
        subButtons[j].addEventListener("click", function(e) {
            e.stopPropagation(); // Предотвращаем всплытие события

            var content = this.nextElementSibling;
            if (content.style.display === "block") {
                content.style.display = "none";
            } else {
                content.style.display = "block";
            }
        });
    }
});
