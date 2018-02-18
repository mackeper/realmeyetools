function save() {
    var savebtn = document.getElementsByClassName("btn btn-primary trade-save");
	savebtn[0].click();
}

function activate() {
	var activatebtn = document.getElementsByClassName("btn btn-success");
	activatebtn[1].click(); 
}

function suspend() {
	var suspendbtn = document.getElementsByClassName("btn btn-warning");
	suspendbtn[0].click();
}

function refreshOffers() {
	suspend();
	save();
	setTimeout(function(){ 
		activate();
		save();
	}, 5000);
};

function addBtn() {
	var divHTML = $('#f > div:nth-child(3)').html();
	var btnHeight = $('#f > div:nth-child(3) > div.btn-group').height();
	var btnHTML = "<button style='height:" + 
	btnHeight +
	"px; width:" + 
	100
	+
	"px;' class='btn btn-primary trade-save' id='refreshbtn'>Refresh</button>";
	$('#f > div:nth-child(3)').append(btnHTML);
}

addBtn();

document.getElementById("refreshbtn").addEventListener("click", function(){
    refreshOffers();
});