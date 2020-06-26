document.addEventListener("DOMContentLoaded", function() {
  var books = document.querySelectorAll(".book-bg")
  var filters = document.querySelectorAll(".filter")
  var resets = document.querySelectorAll(".reset")
  var submitFilter = document.getElementById("submitFilter")
  var colourArray =["rgb(192, 217, 224)","rgb(192,201,224)","rgb(199,192,224)","rgb(215,192,224)","rgb(224,192,217)","rgb(224,192,201)"];
  var cards = document.querySelectorAll(".card")

  cards.forEach(function(card, index){
    var colour = colourArray[index];
    card.style.background = colour;
  })

  targetAll();

  function targetAll(){
    books.forEach(function(book, index){
      book.classList.add("targeted")
      // book.addEventListener("click", function(e){
      //   console.log(e.target)
      //   e.target.classList.add("book-focus")
      // })
    })
  }

  submitFilter.addEventListener("click", function(e){
    e.preventDefault()
    var filterKeyword = document.getElementById("filterKeyword")
    var keyword = filterKeyword.value.toLowerCase().replace(/\s+/g,'-')
    var results = document.querySelectorAll('.badge[class*=' + keyword + ']');
    filterSpecific(results)
  })

  resets.forEach(function(reset, index){
    reset.addEventListener("click", function(e){
      targetAll();
    })
  })

  filters.forEach(function(filter, index){
    filter.addEventListener("click", function(e){
      var filterString = e.target.textContent.toLowerCase().replace(/\s+/g,'-')
      var results = document.querySelectorAll("." + filterString )
      filterSpecific(results);
    })
  })

  function filterSpecific(results){
    window.location = 'file:///home/rey/Documents/Projects/EDWeb/index.html#';
    books.forEach(function(book, index){
      book.classList.remove("targeted")
    })
    results.forEach(function(result, index){
      result.parentElement.parentElement.classList.add("targeted")
    })
  }
});
