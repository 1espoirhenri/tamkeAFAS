

dbRef.on('value', snap => {
    var nhietDoValue = snap.val();
    
    if (nhietDoValue > 40 ) {
        //function_t1();
        t1.style.backgroundColor = 'red';
       // Thêm mã cảnh báo ở đây, ví dụ: hiển thị thông báo
        img1.src = '/lab1/image/call.png';
        img2.src = '/lab1/image/elecoff.png';
        img3.src = '/lab1/image/water.png';
        img4.src = '/lab1/image/alarm-unscreen.gif';

        firebase.database().set({water:1})
        firebase.database().set({mic:1})
        firebase.database().set({elec:0})
        firebase.database().set({alarm:1})
        firebase.database().set({call:1})
     }

     
   });
   dbRef2.on('value', snap => {  
     var khoiValue = snap.val();
     if (khoiValue > 40 ) {
        //function_t1();
        t1.style.backgroundColor = 'red';

       // Thêm mã cảnh báo ở đây, ví dụ: hiển thị thông báo
        img1.src = '/lab1/image/call.png';
        img2.src = '/lab1/image/elecoff.png';
        img3.src = '/lab1/image/water.png';
        img4.src = '/lab1/image/alarm-unscreen.gif';

        firebase.database().set({water:1})
        firebase.database().set({mic:1})
        firebase.database().set({elec:0})
        firebase.database().set({alarm:1})
        firebase.database().set({call:1})
     }
     
   });
   dbRef3.on('value', snap => {
    var gasValue = snap.val();
    if (gasValue > 40 ) {
        //function_t1();
        t1.style.backgroundColor = 'red';
       // Thêm mã cảnh báo ở đây, ví dụ: hiển thị thông báo
        img1.src = '/lab1/image/call.png';
        img2.src = '/lab1/image/elecoff.png';
        img3.src = '/lab1/image/water.png';
        img4.src = '/lab1/image/alarm-unscreen.gif';

        firebase.database().set({water:1})
        firebase.database().set({mic:1})
        firebase.database().set({elec:0})
        firebase.database().set({alarm:1})
        firebase.database().set({call:1})
        
     }
     
   });

dbRef4.on('value', snap => {
    var nhietDoValue_2 = snap.val();
    if (nhietDoValue_2 > 40 ) {
        //function_t2();
        t2.style.backgroundColor = 'red';
       // Thêm mã cảnh báo ở đây, ví dụ: hiển thị thông báo
        img1.src = '/lab1/image/call.png';
        img2.src = '/lab1/image/elecoff.png';
        img3.src = '/lab1/image/water.png';
        img4.src = '/lab1/image/alarm-unscreen.gif';

        firebase.database().set({water:1})
        firebase.database().set({mic:1})
        firebase.database().set({elec:0})
        firebase.database().set({alarm:1})
        firebase.database().set({call:1})
     }

 
   });
   dbRef5.on('value', snap => {  
     var khoiValue_2 = snap.val();
     if (khoiValue_2 > 40 ) {
        //function_t2();
        t2.style.backgroundColor = 'red';
       // Thêm mã cảnh báo ở đây, ví dụ: hiển thị thông báo
        img1.src = '/lab1/image/call.png';
        img2.src = '/lab1/image/elecoff.png';
        img3.src = '/lab1/image/water.png';
        img4.src = '/lab1/image/alarm-unscreen.gif';

        firebase.database().set({water:1})
        firebase.database().set({mic:1})
        firebase.database().set({elec:0})
        firebase.database().set({alarm:1})
        firebase.database().set({call:1})
     }
    
   });
   dbRef6.on('value', snap => {
    var gasValue_2 = snap.val();
    if (gasValue_2 > 40 ) {
        //function_t2();
        t2.style.backgroundColor = 'red';
       // Thêm mã cảnh báo ở đây, ví dụ: hiển thị thông báo
        img1.src = '/lab1/image/call.png';
        img2.src = '/lab1/image/elecoff.png';
        img3.src = '/lab1/image/water.png';
        img4.src = '/lab1/image/alarm-unscreen.gif';

        firebase.database().set({water:1})
        firebase.database().set({mic:1})
        firebase.database().set({elec:0})
        firebase.database().set({alarm:1})
        firebase.database().set({call:1})
     }
    

   });


  dbRef7.on('value', snap => {
    var nhietDoValue_3 = snap.val();
    if (nhietDoValue_3 > 40 ) {
      //function_t3();
      t3.style.backgroundColor = 'red';
       // Thêm mã cảnh báo ở đây, ví dụ: hiển thị thông báo
        img1.src = '/lab1/image/call.png';
        img2.src = '/lab1/image/elecoff.png';
        img3.src = '/lab1/image/water.png';
        img4.src = '/lab1/image/alarm-unscreen.gif';

        firebase.database().set({water:1})
        firebase.database().set({mic:1})
        firebase.database().set({elec:0})
        firebase.database().set({alarm:1})
        firebase.database().set({call:1})
     }

    
   });
   dbRef8.on('value', snap => {  
     var khoiValue_3 = snap.val();
     if (khoiValue_3 > 40 ) {
      //function_t3();
      t3.style.backgroundColor = 'red';
       // Thêm mã cảnh báo ở đây, ví dụ: hiển thị thông báo
        img1.src = '/lab1/image/call.png';
        img2.src = '/lab1/image/elecoff.png';
        img3.src = '/lab1/image/water.png';
        img4.src = '/lab1/image/alarm-unscreen.gif';

        firebase.database().set({water:1})
        firebase.database().set({mic:1})
        firebase.database().set({elec:0})
        firebase.database().set({alarm:1})
        firebase.database().set({call:1})
     }
    
   });
   dbRef9.on('value', snap => {
    var gasValue_3 = snap.val();
    if (gasValue_3 > 40 ) {
      //function_t3();
      t3.style.backgroundColor = 'red';
       // Thêm mã cảnh báo ở đây, ví dụ: hiển thị thông báo
        img1.src = '/lab1/image/call.png';
        img2.src = '/lab1/image/elecoff.png';
        img3.src = '/lab1/image/water.png';
        img4.src = '/lab1/image/alarm-unscreen.gif';

        firebase.database().set({water:1})
        firebase.database().set({mic:1})
        firebase.database().set({elec:0})
        firebase.database().set({alarm:1})
        firebase.database().set({call:1})
        
     }
   });



dbRef10.on('value', snap => {
    var nhietDoValue_4 = snap.val();
    if (nhietDoValue_4 > 40 ) {
      //function_t4();
      t4.style.backgroundColor = 'red';
       // Thêm mã cảnh báo ở đây, ví dụ: hiển thị thông báo
        img1.src = '/lab1/image/call.png';
        img2.src = '/lab1/image/elecoff.png';
        img3.src = '/lab1/image/water.png';
        img4.src = '/lab1/image/alarm-unscreen.gif';

        firebase.database().set({water:1})
        firebase.database().set({mic:1})
        firebase.database().set({elec:0})
        firebase.database().set({alarm:1})
        firebase.database().set({call:1})
     }

    
   });
   dbRef11.on('value', snap => {  
     var khoiValue_4 = snap.val();
     if (khoiValue_4 > 40 ) {
      //function_t4();
      t4.style.backgroundColor = 'red';
       // Thêm mã cảnh báo ở đây, ví dụ: hiển thị thông báo
        img1.src = '/lab1/image/call.png';
        img2.src = '/lab1/image/elecoff.png';
        img3.src = '/lab1/image/water.png';
        img4.src = '/lab1/image/alarm-unscreen.gif';

        firebase.database().set({water:1})
        firebase.database().set({mic:1})
        firebase.database().set({elec:0})
        firebase.database().set({alarm:1})
        firebase.database().set({call:1})
     }
    
   });
   dbRef12.on('value', snap => {
    var gasValue_4 = snap.val();
    if (gasValue_4 > 40 ) {
      //function_t4();
      t4.style.backgroundColor = 'red';
       // Thêm mã cảnh báo ở đây, ví dụ: hiển thị thông báo
        img1.src = '/lab1/image/call.png';
        img2.src = '/lab1/image/elecoff.png';
        img3.src = '/lab1/image/water.png';
        img4.src = '/lab1/image/alarm-unscreen.gif';

        firebase.database().set({water:1})
        firebase.database().set({mic:1})
        firebase.database().set({elec:0})
        firebase.database().set({alarm:1})
        firebase.database().set({call:1})
        
    }});
    

