function submitData(name, email) {
    console.log('here')
    const config = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json',
        },
        body: JSON.stringify({
            name,
            email,
        })
    }
   
    fetch('http://localhost:3000/users', config)
      .then(function (response) {
            if(!response.ok){
                const error = new Error('Unauthorized Access');
                error.code = response.status;
                throw error;
            }
            return response.json();
        })

        .then(function (data) {
            const createdP = document.createElement('p');
            const body = document.body;
            createdP.textContent = `${data.id}`;
            body.appendChild(createdP);
            
        }).catch((error) => {
            const createdHeader = document.createElement('p');
            const body = document.body;
            createdHeader.textContent = error.error.message;
            body.appendChild(createdHeader);
        })
}

submitData('Steve', 'steve@steve.com');