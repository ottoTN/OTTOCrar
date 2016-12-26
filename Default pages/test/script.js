 {"person": [
  {
    "id": "1",
    "name": "Person1"
  },
  {
    "id": "2",
    "name": "Person2"
  },
  {
    "id": "3",
    "name": "Person3"
  }
]}

 $select = $('#people');
    //request the JSON data and parse into the select element
    $.ajax({
      url: 'person.JSON',
      dataType:'JSON',
      success:function(data){
        //clear the current content of the select
        $select.html('');
        //iterate over the data and append a select option
        $.each(data.person, function(key, val){
          $select.append('<option id="' + val.id + '">' + val.name + '</option>');
        })
      },
      error:function(){</strong>
        //if there is an error append a 'none available' option
        $select.html('<option id="-1">none available</option>');
      }
    });