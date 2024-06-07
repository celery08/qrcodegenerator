let imageBox = document.getElementById("imageBox");
let qrImage = document.getElementById("qrImage"); 
let qrText = document.getElementById("qrText");
        

        function generateQR(){
            if(qrText.value.length > 0){
                qrImage.src = "https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=" + qrText.value;
                imageBox.classList.add("show-img");
            }else{
                qrText.classList.add('error');
                setTimeout(()=>{
                    qrText.classList.remove('error');
                }, 1000)
            }
            
        } 

        function downloadQR(){
                            const url = window.URL.createObjectURL(new Blob([response.data]));
                            const link = document.createElement('a');
                            link.href = url;
                            link.setAttribute('download', 'qrImage');
                            document.body.appendChild(link);
                            link.click();
                            document.body.removeChild(link);
                    }