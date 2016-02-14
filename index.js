
(function(){
    var app = angular.module('notepad',[]);

    app.controller('notesController', function(){
        this.notes = notes;
        this.newNote = {};

        this.addNote = function(){
            this.clearNewNote();
        };

        this.save = function(){
            this.notes.push(this.newNote);
            this.clearNewNote();
        }

        this.clearNewNote = function(){
            this.newNote = {};
        }
    });

    app.directive('note', function(){
       return{
           restrict : 'E',
           templateUrl: 'note.html'
       }
    });

    var notes = [
        {
            title: "Some title #1",
            content: "Some content #1"
        },
        {
            title: "Some title #2",
            content: "Some content #2"
        }
    ];
})();