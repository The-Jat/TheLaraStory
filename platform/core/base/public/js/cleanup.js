(()=>{"use strict";$(document).ready((function(){$(document).on("click",".btn-trigger-cleanup",(function(e){e.preventDefault(),$("#cleanup-modal").modal("show")})),$(document).on("click","#cleanup-submit-action",(function(e){e.preventDefault(),e.stopPropagation();var o=$(e.currentTarget);o.addClass("button-loading");var a=$("#form-cleanup-database");$.ajax({type:"POST",cache:!1,url:a.prop("action"),data:new FormData(a[0]),contentType:!1,processData:!1,success:function(e){e.error?Botble.showError(e.message):Botble.showSuccess(e.message),o.removeClass("button-loading"),$("#cleanup-modal").modal("hide")},error:function(e){o.removeClass("button-loading"),Botble.handleError(e)}})}))}))})();