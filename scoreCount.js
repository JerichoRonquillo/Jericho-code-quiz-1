const clearBtn = document.getElementById("clear")

clearBtn.addEventListener("click", function() {
    localStorage.clear()
})

const finalScore = {
  contactInfo: 'name',
  timeleft: "?"
}

const finalScore = []

const loadScores = function() {
  const finalScore = localStorage.getItem("contactInfo, timeLeft")
  
      if (!finalScore) {
          return false;
      }
    
       for (let i = 0; i < finalScore.length; i++) {
        let finalScore = finalScore[i]
        let listItemEl = document.createElement("li")
        listItemEl.textContent = finalScore
      }    
    finalScore.push(finalScore)   
};
