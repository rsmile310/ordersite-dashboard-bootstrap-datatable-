$(document).ready(function() {
    $("#orderTable").DataTable({
      aaSorting: [],
      responsive: true,
      language: {
        paginate: {
        next: '<span class="iconify" data-icon="bi:chevron-right"></span>',
        previous: '<span class="iconify" data-icon="bi:chevron-left"></span>'  
       }
      },

      columnDefs: [
        {
          responsivePriority: 1,
          targets: 0
        },
        {
          responsivePriority: 2,
          targets: -1
        }
      ]
    });
  
    $(".dataTables_filter input")
      .attr("placeholder", "Search here...")
      .css({
        width: "300px",
        display: "inline-block"
      });
  
    $('[data-toggle="tooltip"]').tooltip();

    $("tbody tr").click(function(e){
      // location.href = "orderdetail.html"
      // var temp = e.target
      if(!($(e.target).hasClass('deliver-status-btn') || $(e.target).parent('.btn'))) location.href = "orderdetail.html"
      // console.log($(e.target).hasClass('deliver-status-btn'))
    })
    $("#mobileSrhBtn").click(function(){
      $(".header-srh-group").toggleClass("active")
    })
    $("#asideTogBtn").click(function(){
      $("aside").addClass("active")
      $(".mask").addClass("active")
    })
    $(".mask").click(function(){
      $("aside").removeClass("active")
      $(this).removeClass("active")
      console.log("aaa")
    })
  });
  