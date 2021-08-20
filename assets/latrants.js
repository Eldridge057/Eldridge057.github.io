//Jquery
$(function(){
  $(".pesanTiket").click(function(){
    $(".data-penumpang").html("");

    for (let i = 1; i <= $(".jmlPenumpang").val() ; i++) {
      $(".data-penumpang").append(`
        <div class="form-floating mt-2">
          <input type="text" class="form-control" id="floatingNama" name="namaPenumpang[]" placeholder="Nama Penumpang" required>
          <label for="floatingNama" >Nama Penumpang `+i+`</label>
        </div>`);
    }
  });

  $('form').submit(function(e) {
    e.preventDefault();
    var $form = $(this);

    if (!$form.valid) return false;

    $.ajax({
      url: 'post_telegram.php',
      method: 'POST',
      data: $("form").serialize(),
      success: function() {
        alert('Tiket anda telah dipesan!');
      }
    });
  });

});

