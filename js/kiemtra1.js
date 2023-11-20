

dbRef.on('value', snap => {
    var nhietDoValue = snap.val();
    
    if (nhietDoValue > 40 ) {
        //function_t1();
        t1.style.backgroundColor = 'red';
        
       // Thêm mã cảnh báo ở đây, ví dụ: hiển thị thông báo
     }

     
   });
   dbRef2.on('value', snap => {  
     var khoiValue = snap.val();
     if (khoiValue > 40 ) {
        //function_t1();
        t1.style.backgroundColor = 'red';
        
     }
     
   });
   dbRef3.on('value', snap => {
    var gasValue = snap.val();
    if (gasValue > 40 ) {
        //function_t1();
        t1.style.backgroundColor = 'red';
        
     }
     
   });

dbRef4.on('value', snap => {
    var nhietDoValue_2 = snap.val();
    if (nhietDoValue_2 > 40 ) {
        //function_t2();
        
        t2.style.backgroundColor = 'red';
        
     }

   });
   dbRef5.on('value', snap => {  
     var khoiValue_2 = snap.val();
     if (khoiValue_2 > 40 ) {
        //function_t2();
        
        t2.style.backgroundColor = 'red';
        
     }
    
   });
   dbRef6.on('value', snap => {
    var gasValue_2 = snap.val();
    if (gasValue_2 > 40 ) {
        //function_t2();
        
        t2.style.backgroundColor = 'red';
        
     }
    

   });

  dbRef7.on('value', snap => {
    var nhietDoValue_3 = snap.val();
    if (nhietDoValue_3 > 40 ) {
      //function_t3();
        
        t3.style.backgroundColor = 'red';
        
     }
    
   });
   dbRef8.on('value', snap => {  
     var khoiValue_3 = snap.val();
     if (khoiValue_3 > 40 ) {
      //function_t3();
        
        t3.style.backgroundColor = 'red';
        
     }
    
   });
   dbRef9.on('value', snap => {
    var gasValue_3 = snap.val();
    if (gasValue_3 > 40 ) {
      //function_t3();
        
        t3.style.backgroundColor = 'red';
        
     }
    

   });

dbRef10.on('value', snap => {
    var nhietDoValue_4 = snap.val();
    if (nhietDoValue_4 > 40 ) {
      //function_t4();
        
        t4.style.backgroundColor = 'red';
     }
   
   });
   dbRef11.on('value', snap => {  
     var khoiValue_4 = snap.val();
     if (khoiValue_4 > 40 ) {
      //function_t4();
        
        t4.style.backgroundColor = 'red';
     }
    
   });
   dbRef12.on('value', snap => {
    var gasValue_4 = snap.val();
    if (gasValue_4 > 40 ) {
      //function_t4();
        
        t4.style.backgroundColor = 'red';
        
    }});
    

