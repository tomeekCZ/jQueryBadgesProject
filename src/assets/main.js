$(function() {

  $.ajax({
    url: "https://www.codeschool.com/users/3754829.json",
    dataType: "jsonp",
    success: function(result){
      var courseItems = $.map(result.courses.completed, function(item, index){

          console.log(item);
          var courseItem = $("<div></div>");
          courseItem.addClass("course");
          $("<h3>" + item.title + "</h3>").appendTo(courseItem);

          var imageItem = $("<img></img>");
          imageItem.attr("src", item.badge);
          imageItem.appendTo(courseItem);

          var linkItem = $("<a>See Course</a>");
          linkItem.attr("href", item.url);
          linkItem.attr("target", "_blank");
          linkItem.addClass("btn btn-primary");
          linkItem.appendTo(courseItem);

          return courseItem;
      });

      $("#badges").html(courseItems);
    }
  })

});
