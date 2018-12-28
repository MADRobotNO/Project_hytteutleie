var modal;
var cabinID;


function footer() {
    $("#footer-holder").load("elements/footer.html");
}

function document_ready() {
    $("#slider_pic1").css({opacity: 0.0, visibility: "visible"}).animate({opacity: 1.0}, 900);
    animate_navbar();
    footer()
}

function animate_navbar() {

        // $(".navbar").animate({left: '250px'}, 500);
        // $(".navbar").animate({left: '-250px'}, 600);
        $(".navbar").animate({left: '150px'}, 400);
        $(".navbar").animate({left: '-100px'}, 300);
        $(".navbar").animate({left: '50px'}, 200);
        $(".navbar").animate({left: '-50px'}, 200);
        $(".navbar").animate({left: '30px'}, 150);
        $(".navbar").animate({left: '-20px'}, 150);
        $(".navbar").animate({left: '0px'}, 100);


}
function close_modal() {
    modal.modal('hide');
}
function updateButton() {
    var buttons = $("#row2 .btn");

    for(var i=0; i<buttons.length; i++){
        buttons[i].addEventListener("click", function () {
            changeActive();
            this.className += " active";
            filterGrid(this.innerText);
        })
    }

    var pictures = $("#image_grid .col-sm-4");

    for(var j=0; j<pictures.length; j++){
        var tittle_element = $(pictures[j]).children("h4");
        var text_element = $(pictures[j]).children("span");
        var informations = $(pictures[j]).children(".informations");
        var tittle = informations.children(".tittle").text();
        tittle_element.text(tittle);
        text_element[0].innerText  = informations.children(".beds").text();
        text_element[1].innerText = informations.children(".bathroom").text();
        text_element[2].innerText = informations.children(".electricity").text();
        text_element[3].innerText = informations.children(".place").text();


        pictures[j].addEventListener("click", function () {
            var all_info = $(this).children(".informations");
            var cabin_pic = $(this).find("img");


            var modal_pic = modal.find("img");
            var modal_tittle = modal.find("#modal_tittle");
            var modal_beds = modal.find(".beds");
            var modal_bathroom = modal.find(".bathroom");
            var modal_electricity = modal.find(".electricity");
            var modal_place = modal.find(".place");
            var modal_price_pr_hour = modal.find(".price_pr_hour");
            var modal_price_pr_day = modal.find(".price_pr_day");
            var modal_description1 = modal.find(".description_1");
            var modal_description2 = modal.find(".description_2");


            modal_price_pr_hour.text(all_info.children(".price_pr_hour").text());
            modal_price_pr_day.text(all_info.children(".price_pr_day").text());
            modal_description2.text(all_info.children(".description_2").text());
            modal_description1.text(all_info.children(".description_1").text());
            modal_place.text(all_info.children(".place").text());
            modal_electricity.text(all_info.children(".electricity").text());
            modal_bathroom.text(all_info.children(".bathroom").text());
            modal_beds.text(all_info.children(".beds").text());
            modal_tittle.text(all_info.children(".tittle").text());
            modal_pic.attr("src", cabin_pic.attr('src'));

            cabinID = (all_info.children(".cabin_id").text());
            $("#form-holder").load("elements/form.html");

            modal.modal();

        })
    }
}

function changeActive() {
    var buttons = $(".btn");
    for (var i= 0; i<buttons.length; i++){
        if (buttons[i].className.includes("active")){
            buttons[i].classList.remove("active");
        }
    }
}

function filterGrid(buttons_name) {

    var all = $("#image_grid .column");

    for (var a =0; a<all.length; a++){
        if (all[a].className.includes("hidden")){
            all[a].classList.remove("hidden");
        }
    }

    if (buttons_name === "Fjell"){
        for (var a =0; a<all.length; a++){
            if (!(all[a].className.includes("mountain")))
                all[a].className += " hidden";
        }

    }

    else if (buttons_name === "Sjø"){
        for (var a =0; a<all.length; a++){
            if (!(all[a].className.includes("sea")))
                all[a].className += " hidden";
        }

    }
    else if (buttons_name === "Skog"){
        for (var a =0; a<all.length; a++){
            if (!(all[a].className.includes("forest")))
                all[a].className += " hidden";
        }

    }

}
function find_modal() {
    modal = $("#cabin_modal");
}

function valid_form_and_send(){
    var letters = /^[A-Za-z]+$/;
    var numbers = /^[0-9]+$/;
    var fname = $("#navn");
    var lname = $("#etternavn");
    var email = $("#email");
    var date_from = $("#from_date");
    var date_to = $("#to_date");
    var tel = $("#tel");
    var medlem_ja = $("#medlem_ja");
    var medlem_nei = $("#medlem_nei");
    var medlem_box = $("#medlem");
    var nedvask = $("#nedvask");
    var nedvask_val = "nei";
    var medlem_val = "nei";

    reset_alert_val();


    if (fname.val().length < 2){
        fname.focus();
        fname.css("borderColor", "red");
        $("#navn_alert").text("* Obligatorisk. Minst 2 bokstav!") ;
        return false;
    }

    if (lname.val().length < 1){
        lname.focus();
        lname.css("borderColor", "red");
        $("#etternavn_alert").text("* Obligatorisk. Minst 1 bokstav!");
        return false;
    }

    if(!fname.val().match(letters)){
        fname.focus();
        fname.css("borderColor", "red");
        $("#navn_alert").text("Kun bokstaver!");
        return false;
    }

    if(!lname.val().match(letters)){
        lname.focus();
        lname.css("borderColor", "red");
        $("#etternavn_alert").text("Kun bokstaver!");
        return false;
    }

    if(email.val().length < 4){
        email.focus();
        email.css("borderColor", "red");
        $("#email_alert").text("* Obligatorisk. Minst 4 tegn!");
        return false;
    }

    if(tel.val().length < 6){
        tel.focus();
        tel.css("borderColor", "red");
        $("#tel_alert").text("* Obligatorisk. Minst 6 tall!");
        return false;
    }

    if(!tel.val().match(numbers)){
        tel.focus();
        tel.css("borderColor", "red");
        $("#tel_alert").text("Kun tall!");
        return false;
    }

    if(date_from.val().length < 10){
        date_from.focus();
        date_from.css("borderColor", "red");
        $("#date_from_alert").text("Velg dato og klokkeslett");
        return false;
    }

    if(date_to.val().length < 10){
        date_to.focus();
        date_to.css("borderColor", "red");
        $("#date_to_alert").text("Velg dato og klokkeslett");
        return false;
    }

    if(medlem_ja.is(':checked')){
        medlem_val = "ja";
    }

    if(medlem_nei.is(':checked')){
        medlem_val = "nei";
    }

    if(!(medlem_ja.is(':checked'))){
        if(!(medlem_nei.is(':checked'))){
            medlem_box.focus();
            $("#medlem_alert").text("*Du må velge noe").css("color", "red");
            return false;
        }
    }

    if(nedvask.is(':checked')){
        nedvask_val = "ja";
    }

    $.get("http://www.iie.ntnu.no/fag/webutvikling1/prosjekt/behandle.php", {navn: fname.val(), etternavn: lname.val(),
        dato_fra: date_from.val(), dato_til: date_to.val(), hytte_id: cabinID, nedvask: nedvask_val, medlemskap: medlem_val,
        telefon: tel.val(), epost: email.val()
    });
    alert("Takk!\nDin bestilling er nå sendt.\nDu får en bekreftelse på epost.");
    return true;


}

function reset_alert_val() {
    $("#navn_alert").text("");

    $("#etternavn_alert").text("");

    $("#email_alert").text("");

    $("#tel_alert").text("");

    $("#date_from_alert").text("");

    $("#date_to_alert").text("");

    $("#medlem_alert").text("");

    color_reset();
}

function color_reset() {
    var name = $("#navn");
    var sname = $("#etternavn");
    var email = $("#email");
    var tel = $("#tel");
    var from_date = $("#from_date");
    var to_date = $("#to_date");

    $("#medlem_alert").css("color", "initial");
    name.css("borderColor", "initial");
    sname.css("borderColor", "initial");
    email.css("borderColor", "initial");
    tel.css("borderColor", "initial");
    from_date.css("borderColor", "initial");
    to_date.css("borderColor", "initial");
}

function on_mouse_hover() {
    $("#row3 .column").hover(function () {
            $(this).animate({opacity: 0.6}, 200);
        },
        function () {
            $(this).animate({opacity: 1.0}, 200);
        });
}