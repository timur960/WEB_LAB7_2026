$(document).ready(function () {

    // Оновлення лічильника завдань
    function updateCount() {
        $("#taskCount").text($("#taskList li").length);
    }

    // Додавання завдання
    function addTask() {
        let taskText = $("#taskInput").val().trim();

        if (taskText !== "") {
            let li = $("<li class='list-group-item d-flex justify-content-between align-items-center'></li>");
            let span = $("<span class='task-text'></span>").text(taskText);
            let btn = $("<button class='btn btn-danger btn-sm removeTask'>Видалити</button>");

            li.append(span).append(btn);
            $("#taskList").append(li);

            $("#taskInput").val("");
            $("#taskInput").css("border-color", "");
            updateCount();
        } else {
            $("#taskInput").css("border-color", "red");
        }
    }

    // Клік по кнопці
    $("#addTask").click(addTask);

    // Натискання Enter у полі
    $("#taskInput").on("keyup", function (e) {
        if (e.key === "Enter") {
            addTask();
        }
    });

    // Видалення завдання
    $("#taskList").on("click", ".removeTask", function () {
        $(this).parent().remove();
        updateCount();
    });

    // Позначити як виконане / зняти позначку
    $("#taskList").on("click", ".task-text", function () {
        if ($(this).hasClass("done")) {
            $(this).removeClass("done");
        } else {
            $(this).addClass("done");
        }
    });
});