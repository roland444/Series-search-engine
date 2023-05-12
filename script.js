window.onload = function() {
    showsApp.init();
}

let showsApp = {
    data: null,
    searchInput: null,
    showsDataSection: null,
    init: function() {
        console.log("app started");

        this.searchInput = document.getElementById("search-input")
        this.searchInput.addEventListener("keyup", (e) => {
            if (e.keyCode == 13) {
                console.log("enter clicked");
                this.loadData( this.searchInput.value )
            }
        })
        this.showsDataSection = document.querySelector(".shows-data-section")
        this.loadData("friends");
    },
    loadData: function(str) {
        fetch("https://api.tvmaze.com/search/shows?q=" + str.trim())
        .then(response => response.json())
        .then( data => this.dataReady(data))
    },
    dataReady: function(showData) {
        this.data = showData;

        for (let i = 0; i < showData.length; i++) {
            let show = showData[i];
            let score = show.score;
            show = show.show;

            let genres = show.genres.join(", ")
            
            let imgSrc = null;
            let imgSrcOrigin = null;
            if (show.image) {
                imgSrc = show.image.medium;
                imgSrcOrigin = show.image.original;
            }
        }
    }
}