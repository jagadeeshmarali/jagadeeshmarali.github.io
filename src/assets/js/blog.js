$(function () {
    var mediumPromise = new Promise(function (resolve) {
    var $content = $('#jsonContent');
    var data = {
        rss: 'https://medium.com/feed/@jagadeeshmarali'
    };
    $.get(' https://api.rss2json.com/v1/api.json?rss_url=https%3A%2F%2Fmedium.com%2Ffeed%2F%40jagadeeshmarali', data, function (response) {
        if (response.status == 'ok') {
            var display = '';
            $.each(response.items, function (k, item) {
                display += `<div class="card m-1 col-lg-3 col-md-3 portfolio-item filter-app" style="width: 20rem; border-radius:10px">`;
                display += `<div class="portfolio-wrap">`;
                var src = item["thumbnail"]; // use thumbnail url
                // display += `<img src="${src}" class="img-fluid" alt="Cover image" style="height:100px;>`;
                display += `<div class="card-body">`;
                display += `<h4 class="card-title resume-item">${item.title}</h4>`;
                display += `<p class="card-text">...</p>`;
                display += `<a href="${item.link}" target="_blank" class="btn btn-outline-primary btn-sm" >Read More</a>`;
                display += '</div></div></div><br><br>';
                // return k < 4;  
            });
            resolve($content.html(display));
        }
    });
    });

mediumPromise.then(function()
    {
        //Pagination
        pageSize = 3;

        var pageCount = $(".card").length / pageSize;

        for (var i = 0; i < pageCount; i++) {
            $("#pagin").append(`<li class="page-item"><a class="page-link" href="#">${(i + 1)}</a></li> `);
        }
        $("#pagin li:nth-child(1)").addClass("active");
        showPage = function (page) {
            $(".card").hide();
            $(".card").each(function (n) {
                if (n >= pageSize * (page - 1) && n < pageSize * page)
                    $(this).show();
            });
        }

        showPage(1);

        $("#pagin li").click(function () {
            $("#pagin li").removeClass("active");
            $(this).addClass("active");
            showPage(parseInt($(this).text()))
            return false;
        });
    });
});