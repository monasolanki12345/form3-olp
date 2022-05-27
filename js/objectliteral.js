
$(document).ready(function(){

    $("#myform").validate({
        rules: {
          firstname : {
            pattern:true,
            required: true,
            minlength: 3,
            maxlength:50,
            number:false,
            
            
          },
          lastname:{
            pattern:true,
            required: true,
            minlength: 3,
            maxlength:50,
            
          },
          address:{
            adrs:true,
            required: true,
            minlength: 3,
           
           
          },
          cityname:{
            required: true,
            minlength: 3,
           
           
          },
          statename:{
            required: true,
            minlength: 3,
           
           
          },
          codename:{
            required: true,
            number:true,
            minlength: 4,
            
            maxlength:6
            
           
           
          },
          phoneno:{
            required: true,
            number:true,
            minlength:10,
            maxlength:10
            
          },
          emailid:{
            email:true,
            required: true,
            
            
          },
          dropdown:{
            
            required: true,
          },
          feedbackid:{
            required: true,
            minlength:5
          },
          suggestion:{
            required: true,
            minlength:5
          },
          check:{
            required: true,
            
          },
         r:{
            required: true,
            
          },

        
         
        },
        messages : {
          firstname: {
           
            required: "this field is required",
            minlength: "Name should be at least 3 characters",
            maxlength:" name cannot be this much longer",
            
          },
          lastname:{
            required: "this field is required",
            minlength: "Name should be at least 3 characters",
            maxlength:" name cannot be this much longer",
            
          },
          address:{
            required: "this field is required",
            minlength: "Name should be at least 3 characters",
          },
          cityname:{
            required: "this field is required",
            minlength: "Name should be at least 3 characters",
          },
          statename:{
            required: "this field is required",
            minlength: "Name should be at least 3 characters",
          },
          codename:{
            required: "this field is required",
            minlength: "your code should be of 4 or 6 digits",
            maxlength: "your code should be of 4 or 6 digits",
            
          },
          phoneno:{
            required: "this field is required",
            minlength: "your phone number should be of 10 digits",
            maxlength: "your phone number should be of 10 digits",
            
          },
          emailid:{
            required: "this field is required",
          },
          dropdown:{
            required: "this field is required",
          },
          suggestion:{
            required: "this field is required",
            minlength:"length should be greater than 5"
          },
          check:{
            required: "this field is required",
           
          },
          r:{
            required: "this field is required",
           
          }

          

       
          
        }
      });
      
      jQuery.validator.addMethod( "pattern", function( value, element ) {
        return this.optional( element ) || /^[a-zA-Z\s]+$/i.test( value );
    }, "Enter valid name" )

    jQuery.validator.addMethod( "adrs", function( value, element ) {
        return this.optional( element ) ||/^[a-z," ",0-9]+$/i.test( value );
    }, "Enter valid address" )
      

    
    var v="";
    
     $("#btn").click(function () {
      var v1=$("#t1").val();
      var v2=$("#t2").val();
      var v3=$("#t3").val();
      var v4=$("#t4").val();
      var v5=$("#t5").val();
      var v6=$("#t6").val();
      var v7=$("#t7").val();
      var v8=$("#t8").val();
      var v9=$("#t9").val();
      var v10=$("#t10").val();
      var v11=$("#t11").val();
      var v12= $('input:radio[name=r]:checked').val();

      v=v+"<tr><td>"+v1+"</td><td>"+v2+"</td><td>"+v3+"</td><td>"+v4+"</td><td>"+v5+"</td><td>"+v6+"</td><td>"+v7+"</td><td>"+v8+"</td><td>"+v9+"</td><td>"+v10+"</td><td>"+v11+"</td><td>"+v12+"</td><td><a href='javascript:void(0);' class='remCF1 btn btn-small btn-danger'>Remove</a></td><td><a href='javascript:void(0);' class='remCF1 btn btn-small btn-danger'>update</a></td>/tr>";
      $("#tb").html(v);

      
      

      });

      
      $(document).on('click','.remCF1',function(){
        $(this).parent().parent().remove();
        $('#myTable tbody tr').each(function(i){            
         $($(this).find('td')[0]).html(i+1);          
        });

    });
    $(document).on('click','.remCF1',function(){
      $(this).parent().parent().update();
      $('#myTable tbody tr').each(function(i){            
       $($(this).find('td')[0]).append(i+0);          
      });

  });
      

    
      $("#myform").submit(function(e){
        e.preventDefault();
      })


});
