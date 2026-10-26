const loadConsoles = document.getElementById("loadConsoles")

loadConsoles.addEventListener("click", () => {
    const xhr = new XMLHttpRequest()

    xhr.open('GET', 'https://ozarktechwebdev.com/api/consoles.json')

    xhr.onreadystatechange = function () {
        if (xhr.readyState === 4) {
            // Confirm the status is 200 (OK)
            if (xhr.status === 200) {
                // Parse the responseText
                try {
                    const data = JSON.parse(xhr.responseText);
                    console.log('Success:', data);
                } catch (error) {
                    console.error('Error parsing JSON:', error);
                }
            } else {
                console.error('Request failed with status:', xhr.status);
            }
    }
    }
    xhr.send()

    //step 3
    for (i=0; i<data.consoles.length; i++){

    }
} )