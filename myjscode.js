   
   
<script src="script.js"></script>
	
	function sendMessage() {
    var today = new Date();
    var hours = today.getHours();
    
    if (hours < 10) {
        hours = '0' + hours;
    }

    var greeting;

    if (hours < 12) {
        greeting = 'Good morning';
    } else if (hours < 18) {
        greeting = 'Good afternoon';
    } else {
        greeting = 'Good evening';
    }

    var message = prompt("Enter your message for your friend: ");
    if (message != null) {
        var confirmation = confirm("Are you sure you want to send this message: '" + message + "' ?");
        if (confirmation == true) {
            document.getElementById('popup').style.display = 'block';
        }
    }
}

function closePopup() {
    document.getElementById('popup').style.display = 'none';
}
